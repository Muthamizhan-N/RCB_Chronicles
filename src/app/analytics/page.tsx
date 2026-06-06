'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { rcbSeasons, captainEraStats, SeasonInfo } from '@/data/rcbData';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import { ArrowRightLeft, User, Trophy, Calendar, Award } from 'lucide-react';

// Help helper for SVG jersey rendering inside the comparison tool
function SmallJerseyKit({ colors }: { colors: string[] }) {
  const primary = colors[0] || '#D92334';
  const secondary = colors[1] || '#080809';
  const accent = colors[2] || '#E5A93B';

  return (
    <svg viewBox="0 0 100 100" className="w-12 h-12 drop-shadow">
      <path d="M 25,20 L 5,35 L 15,50 L 30,42 Z" fill={secondary} />
      <path d="M 75,20 L 95,35 L 85,50 L 70,42 Z" fill={secondary} />
      <path d="M 30,20 L 70,20 L 70,85 L 30,85 Z" fill={primary} />
      <path d="M 40,20 L 60,20 L 50,32 Z" fill={accent} />
      <text x="50" y="42" fill={accent} fontSize="9" fontWeight="black" textAnchor="middle">RCB</text>
    </svg>
  );
}

export default function Analytics() {
  const [mounted, setMounted] = useState(false);
  
  // State for season comparison tool
  const [compareYear1, setCompareYear1] = useState(2016);
  const [compareYear2, setCompareYear2] = useState(2026);

  useEffect(() => {
    setMounted(true);
  }, []);

  const season1 = rcbSeasons.find(s => s.year === compareYear1) || rcbSeasons[rcbSeasons.length - 3];
  const season2 = rcbSeasons.find(s => s.year === compareYear2) || rcbSeasons[rcbSeasons.length - 1];

  // Prep chart data
  const chartData = rcbSeasons.map(s => ({
    year: s.year.toString(),
    wins: s.wins,
    losses: s.losses,
    points: s.points,
    nrr: s.nrr,
    // Extract numerical position
    position: s.position.toLowerCase().includes('champion') || s.position.toLowerCase().includes('1st')
      ? 1
      : s.position.toLowerCase().includes('runner') || s.position.toLowerCase().includes('2nd') 
      ? 2 
      : s.position.toLowerCase().includes('3rd') 
      ? 3 
      : s.position.toLowerCase().includes('4th') 
      ? 4 
      : s.position.toLowerCase().includes('5th') 
      ? 5 
      : s.position.toLowerCase().includes('6th') 
      ? 6 
      : s.position.toLowerCase().includes('7th') 
      ? 7 
      : s.position.toLowerCase().includes('8th') 
      ? 8 
      : 5 // Default middle value for safety
  }));

  if (!mounted) {
    return (
      <div className="flex h-[80vh] items-center justify-center bg-rcb-black">
        <div className="text-center space-y-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-rcb-gold border-t-transparent mx-auto"></div>
          <p className="text-zinc-400 text-sm font-semibold tracking-wider uppercase font-sans">Loading Analytics Engine...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 flex-grow">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-white">
          PERFORMANCE <span className="text-gradient-gold">ANALYTICS</span>
        </h1>
        <div className="h-1.5 w-24 bg-gradient-to-r from-rcb-red to-rcb-gold mx-auto mt-4 rounded-full"></div>
        <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-sm sm:text-base">
          Interactive charts and metrics exploring RCB&apos;s history, era records, run rate spikes, and side-by-side season comparison analytics.
        </p>
      </div>

      {/* Main Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        
        {/* Wins vs Losses Chart */}
        <div className="glass-panel p-6 rounded-2xl border border-rcb-dark-border">
          <h3 className="text-xl font-bold font-display text-white mb-6 flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            <span>Season Wins vs Losses</span>
          </h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#282830" vertical={false} />
                <XAxis dataKey="year" stroke="#9CA3AF" fontSize={11} tickLine={false} />
                <YAxis stroke="#9CA3AF" fontSize={11} tickLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#121215', borderColor: '#282830', color: '#fff', borderRadius: 8 }}
                  labelClassName="font-bold text-rcb-gold"
                />
                <Legend verticalAlign="top" height={36} iconSize={12} iconType="circle" />
                <Bar dataKey="wins" name="Wins" fill="#10B981" radius={[4, 4, 0, 0]} />
                <Bar dataKey="losses" name="Losses" fill="#D92334" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Points Trend Chart */}
        <div className="glass-panel p-6 rounded-2xl border border-rcb-dark-border">
          <h3 className="text-xl font-bold font-display text-white mb-6 flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-rcb-gold"></span>
            <span>Points Earned Trend</span>
          </h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#282830" vertical={false} />
                <XAxis dataKey="year" stroke="#9CA3AF" fontSize={11} tickLine={false} />
                <YAxis stroke="#9CA3AF" fontSize={11} tickLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#121215', borderColor: '#282830', color: '#fff', borderRadius: 8 }}
                  labelClassName="font-bold text-rcb-gold"
                />
                <Legend verticalAlign="top" height={36} iconSize={12} />
                <Line type="monotone" dataKey="points" name="Points" stroke="#E5A93B" strokeWidth={3} dot={{ fill: '#E5A93B', r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* League Position Trend (Inverted Y-axis) */}
        <div className="glass-panel p-6 rounded-2xl border border-rcb-dark-border">
          <h3 className="text-xl font-bold font-display text-white mb-6 flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-indigo-400"></span>
            <span>League Position Trend (1 is Champion)</span>
          </h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#282830" vertical={false} />
                <XAxis dataKey="year" stroke="#9CA3AF" fontSize={11} tickLine={false} />
                <YAxis reversed stroke="#9CA3AF" fontSize={11} domain={[1, 8]} allowDecimals={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#121215', borderColor: '#282830', color: '#fff', borderRadius: 8 }}
                  labelClassName="font-bold text-rcb-gold"
                  formatter={(value) => [`Rank ${value}`, 'League Position']}
                />
                <Line type="monotone" dataKey="position" name="League Position" stroke="#818CF8" strokeWidth={3} dot={{ fill: '#818CF8', r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Net Run Rate Chart */}
        <div className="glass-panel p-6 rounded-2xl border border-rcb-dark-border">
          <h3 className="text-xl font-bold font-display text-white mb-6 flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-rcb-red"></span>
            <span>Net Run Rate (NRR) Comparison</span>
          </h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#282830" vertical={false} />
                <XAxis dataKey="year" stroke="#9CA3AF" fontSize={11} tickLine={false} />
                <YAxis stroke="#9CA3AF" fontSize={11} tickLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#121215', borderColor: '#282830', color: '#fff', borderRadius: 8 }}
                  labelClassName="font-bold text-rcb-gold"
                />
                <ReferenceLine y={0} stroke="#4B5563" />
                <Bar dataKey="nrr" name="NRR" fill="#F43F5E" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Captain Era Stats Table */}
      <div className="glass-panel p-6 rounded-2xl border border-rcb-dark-border mb-16">
        <h3 className="text-2xl font-bold font-display text-white mb-6 flex items-center space-x-2">
          <span className="text-rcb-gold">⭐</span>
          <span>Captain Era Statistics</span>
        </h3>
        <p className="text-zinc-400 text-sm mb-6">
          A historical breakdown of RCB&apos;s captains, records, and overall win percentages during their leadership terms.
        </p>
        <div className="overflow-x-auto rounded-lg border border-rcb-dark-border">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-rcb-black/80 text-xs font-bold uppercase tracking-wider text-rcb-gold border-b border-rcb-dark-border">
                <th className="p-4">Captain</th>
                <th className="p-4">Era</th>
                <th className="p-4 text-center">Matches</th>
                <th className="p-4 text-center text-emerald-400">Wins</th>
                <th className="p-4 text-center text-rcb-red">Losses</th>
                <th className="p-4 text-center">Win %</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-rcb-dark-border/40">
              {captainEraStats.map((cap, idx) => (
                <tr key={cap.captain} className="hover:bg-rcb-dark-light/25 transition">
                  <td className="p-4 font-bold text-white flex items-center space-x-2">
                    <span>👤</span>
                    <span>{cap.captain}</span>
                  </td>
                  <td className="p-4 text-zinc-400">{cap.era}</td>
                  <td className="p-4 text-center font-bold text-zinc-300">{cap.matches}</td>
                  <td className="p-4 text-center font-bold text-emerald-400">{cap.wins}</td>
                  <td className="p-4 text-center font-bold text-rcb-red">{cap.losses}</td>
                  <td className="p-4 text-center">
                    <span className={`inline-block rounded px-2.5 py-0.5 font-bold ${
                      cap.winPercentage >= 50 ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-zinc-800 text-zinc-300 border border-zinc-700'
                    }`}>
                      {cap.winPercentage}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Season Comparison Tool */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-rcb-gold/20 bg-gradient-to-b from-rcb-gold/5 to-transparent">
        <h3 className="text-2xl font-bold font-display text-white mb-3 flex items-center space-x-2">
          <ArrowRightLeft className="h-6 w-6 text-rcb-gold" />
          <span>Season Side-by-Side Comparison</span>
        </h3>
        <p className="text-zinc-400 text-sm mb-8">
          Pick any two historical RCB seasons below to generate an instant head-to-head campaign stats audit.
        </p>

        {/* Dropdowns */}
        <div className="flex flex-col sm:flex-row gap-6 mb-8 justify-center items-center">
          <div className="flex flex-col space-y-2 w-full sm:w-64">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-sans">First Season</label>
            <select
              value={compareYear1}
              onChange={(e) => setCompareYear1(Number(e.target.value))}
              className="bg-rcb-black border border-rcb-dark-border text-white rounded-lg p-3 font-semibold focus:outline-none focus:border-rcb-gold"
            >
              {rcbSeasons.map(s => (
                <option key={s.year} value={s.year}>{s.year} Season</option>
              ))}
            </select>
          </div>
          
          <div className="text-rcb-gold font-display font-extrabold text-lg sm:pt-6">VS</div>

          <div className="flex flex-col space-y-2 w-full sm:w-64">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-sans">Second Season</label>
            <select
              value={compareYear2}
              onChange={(e) => setCompareYear2(Number(e.target.value))}
              className="bg-rcb-black border border-rcb-dark-border text-white rounded-lg p-3 font-semibold focus:outline-none focus:border-rcb-gold"
            >
              {rcbSeasons.map(s => (
                <option key={s.year} value={s.year}>{s.year} Season</option>
              ))}
            </select>
          </div>
        </div>

        {/* Comparison Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Season 1 Card */}
          <div className="bg-rcb-black/40 border border-rcb-dark-border/60 rounded-xl p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-rcb-dark-border/40 pb-3 mb-4">
                <span className="text-3xl font-black font-display text-rcb-gold">{season1.year}</span>
                <SmallJerseyKit colors={season1.jerseyColors} />
              </div>
              <ul className="space-y-3 text-sm text-zinc-300 font-sans">
                <li className="flex justify-between"><span className="text-zinc-500">Captain:</span> <span className="font-bold">{season1.captain}</span></li>
                <li className="flex justify-between"><span className="text-zinc-500">Coach:</span> <span className="font-bold">{season1.coach}</span></li>
                <li className="flex justify-between"><span className="text-zinc-500">Position:</span> <span className="font-bold text-rcb-gold">{season1.position}</span></li>
                <li className="flex justify-between"><span className="text-zinc-500">Playoffs:</span> <span className={`font-bold ${season1.qualified ? 'text-emerald-400' : 'text-rcb-red'}`}>{season1.qualified ? 'Qualified' : 'Missed'}</span></li>
                <li className="flex justify-between"><span className="text-zinc-500">Wins/Losses:</span> <span className="font-bold text-white">{season1.wins} W / {season1.losses} L</span></li>
                <li className="flex justify-between"><span className="text-zinc-500">NRR:</span> <span className={`font-bold ${season1.nrr >= 0 ? 'text-emerald-400' : 'text-rcb-red'}`}>{season1.nrr >= 0 ? '+' : ''}{season1.nrr.toFixed(3)}</span></li>
              </ul>
            </div>
            
            <div className="mt-6 border-t border-rcb-dark-border/40 pt-4 space-y-2.5 font-sans">
              <div className="text-xs">
                <span className="block text-zinc-500 uppercase font-bold">Top Scorer</span>
                <span className="font-semibold text-white">{season1.topScorer.name}</span> <span className="text-rcb-gold font-bold">({season1.topScorer.runs} runs)</span>
              </div>
              <div className="text-xs">
                <span className="block text-zinc-500 uppercase font-bold">Top Wicket Taker</span>
                <span className="font-semibold text-white">{season1.topWicketTaker.name}</span> <span className="text-rcb-red font-bold">({season1.topWicketTaker.wickets} wickets)</span>
              </div>
            </div>
          </div>

          {/* Metrics Center Pillar */}
          <div className="hidden md:flex flex-col justify-between py-5 text-center text-xs font-bold uppercase tracking-wider text-zinc-500 font-sans">
            <div className="border-b border-rcb-dark-border/40 pb-3 mb-4 text-zinc-400 font-display font-extrabold text-sm">COMPARATIVE METRIC</div>
            <div className="space-y-3 py-1">
              <div className="h-5 flex items-center justify-center">Captain</div>
              <div className="h-5 flex items-center justify-center">Head Coach</div>
              <div className="h-5 flex items-center justify-center">Final Position</div>
              <div className="h-5 flex items-center justify-center">Playoff Status</div>
              <div className="h-5 flex items-center justify-center">Win Record</div>
              <div className="h-5 flex items-center justify-center">Net Run Rate</div>
            </div>
            <div className="border-t border-rcb-dark-border/40 pt-4 space-y-2.5">
              <div>Top Run Scorer</div>
              <div>Top Wicket Taker</div>
            </div>
          </div>

          {/* Season 2 Card */}
          <div className="bg-rcb-black/40 border border-rcb-dark-border/60 rounded-xl p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-rcb-dark-border/40 pb-3 mb-4">
                <span className="text-3xl font-black font-display text-rcb-gold">{season2.year}</span>
                <SmallJerseyKit colors={season2.jerseyColors} />
              </div>
              <ul className="space-y-3 text-sm text-zinc-300 font-sans">
                <li className="flex justify-between"><span className="md:hidden text-zinc-500">Captain:</span> <span className="font-bold">{season2.captain}</span></li>
                <li className="flex justify-between"><span className="md:hidden text-zinc-500">Coach:</span> <span className="font-bold">{season2.coach}</span></li>
                <li className="flex justify-between"><span className="md:hidden text-zinc-500">Position:</span> <span className="font-bold text-rcb-gold">{season2.position}</span></li>
                <li className="flex justify-between"><span className="md:hidden text-zinc-500">Playoffs:</span> <span className={`font-bold ${season2.qualified ? 'text-emerald-400' : 'text-rcb-red'}`}>{season2.qualified ? 'Qualified' : 'Missed'}</span></li>
                <li className="flex justify-between"><span className="md:hidden text-zinc-500">Wins/Losses:</span> <span className="font-bold text-white">{season2.wins} W / {season2.losses} L</span></li>
                <li className="flex justify-between"><span className="md:hidden text-zinc-500">NRR:</span> <span className={`font-bold ${season2.nrr >= 0 ? 'text-emerald-400' : 'text-rcb-red'}`}>{season2.nrr >= 0 ? '+' : ''}{season2.nrr.toFixed(3)}</span></li>
              </ul>
            </div>
            
            <div className="mt-6 border-t border-rcb-dark-border/40 pt-4 space-y-2.5 font-sans">
              <div className="text-xs">
                <span className="block md:hidden text-zinc-500 uppercase font-bold">Top Scorer</span>
                <span className="font-semibold text-white">{season2.topScorer.name}</span> <span className="text-rcb-gold font-bold">({season2.topScorer.runs} runs)</span>
              </div>
              <div className="text-xs">
                <span className="block md:hidden text-zinc-500 uppercase font-bold">Top Wicket Taker</span>
                <span className="font-semibold text-white">{season2.topWicketTaker.name}</span> <span className="text-rcb-red font-bold">({season2.topWicketTaker.wickets} wickets)</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
