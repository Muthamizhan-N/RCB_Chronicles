'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { rcbAchievements, rcbPlayerAwards, rcbTeamRecords } from '@/data/rcbData';
import { Trophy, Award, Sparkles, Zap } from 'lucide-react';

export default function Achievements() {
  const [activeTab, setActiveTab] = useState<'records' | 'awards' | 'milestones'>('records');

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 flex-grow">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-white">
          TROPHIES & <span className="text-gradient-gold">RECORDS</span>
        </h1>
        <div className="h-1.5 w-24 bg-gradient-to-r from-rcb-red to-rcb-gold mx-auto mt-4 rounded-full"></div>
        <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-sm sm:text-base">
          Browse through the Royal Challengers Bengaluru record book, franchise history, team milestones, and individual award honors won by RCB stars.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex rounded-lg border border-rcb-dark-border bg-rcb-dark p-1 font-sans">
          {[
            { id: 'records', label: 'Franchise Records', icon: <Zap className="h-4 w-4" /> },
            { id: 'awards', label: 'Player Awards', icon: <Award className="h-4 w-4" /> },
            { id: 'milestones', label: 'Milestones', icon: <Trophy className="h-4 w-4" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`rounded-md px-4 py-2.5 text-xs sm:text-sm font-semibold transition flex items-center space-x-1.5 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-rcb-red to-rcb-red-dark text-white'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab: Records */}
      {activeTab === 'records' && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {rcbTeamRecords.map((record, index) => (
            <div
              key={record.title}
              className="glass-panel p-6 rounded-2xl border border-rcb-dark-border hover:border-rcb-gold/30 hover:animate-gold-glow transition flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold text-rcb-red uppercase block tracking-widest mb-2 font-sans">Record Category</span>
                <h3 className="text-xl font-bold font-display text-white">{record.title}</h3>
                <p className="text-3xl font-black font-display text-rcb-gold mt-4 mb-2">{record.value}</p>
                <div className="text-xs text-zinc-300 font-bold font-sans">Held by: <span className="text-white font-sans font-medium">{record.holder}</span></div>
              </div>
              <p className="text-xs text-zinc-500 mt-4 leading-relaxed border-t border-rcb-dark-border/40 pt-3 font-sans">
                {record.description}
              </p>
            </div>
          ))}
        </motion.div>
      )}

      {/* Tab: Awards */}
      {activeTab === 'awards' && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-panel p-6 rounded-2xl border border-rcb-dark-border"
        >
          <h3 className="text-xl font-bold font-display text-white mb-6 flex items-center space-x-2">
            <Sparkles className="h-5 w-5 text-rcb-gold" />
            <span>Individual IPL Cap Winners</span>
          </h3>
          <div className="overflow-x-auto rounded-lg border border-rcb-dark-border font-sans">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-rcb-black/80 text-xs font-bold uppercase tracking-wider text-rcb-gold border-b border-rcb-dark-border">
                  <th className="p-4">Award</th>
                  <th className="p-4">Winner</th>
                  <th className="p-4 text-center">Season</th>
                  <th className="p-4">Performance Highlight</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-rcb-dark-border/40">
                {rcbPlayerAwards.map((award, idx) => (
                  <tr key={idx} className="hover:bg-rcb-dark-light/25 transition">
                    <td className="p-4 font-bold text-white flex items-center space-x-2">
                      <span className={award.award.includes('Orange') ? 'text-amber-500' : award.award.includes('Purple') ? 'text-purple-400' : 'text-rcb-gold'}>
                        {award.award.includes('Orange') ? '🟠' : award.award.includes('Purple') ? '🟣' : '🏆'}
                      </span>
                      <span>{award.award}</span>
                    </td>
                    <td className="p-4 text-zinc-300 font-bold">{award.player}</td>
                    <td className="p-4 text-center text-rcb-gold font-bold">{award.year}</td>
                    <td className="p-4 text-zinc-400 font-medium">{award.stats}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      )}

      {/* Tab: Milestones */}
      {activeTab === 'milestones' && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          {rcbAchievements.map((ach, idx) => (
            <div
              key={ach.category}
              className="glass-panel p-6 rounded-2xl border border-rcb-dark-border flex flex-col md:flex-row items-center md:items-start gap-6"
            >
              <div className="h-16 w-16 rounded-xl bg-rcb-gold/10 border border-rcb-gold/30 flex items-center justify-center flex-shrink-0">
                <Trophy className="h-8 w-8 text-rcb-gold" />
              </div>
              
              <div className="flex-grow text-center md:text-left font-sans">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <h3 className="text-xl font-bold font-display text-white">{ach.category}</h3>
                  <div className="flex flex-wrap justify-center md:justify-end gap-1.5">
                    {ach.years.map((year) => (
                      <span
                        key={year}
                        className="bg-rcb-black/80 border border-rcb-dark-border rounded px-2 py-0.5 text-xs font-bold text-rcb-gold"
                      >
                        {year}
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="text-xs font-bold text-rcb-red uppercase mt-2">Occurrences: {ach.count} times</p>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mt-3">{ach.details}</p>
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {/* Historic Memorable Matches Section */}
      <div className="mt-16 font-sans">
        <h3 className="text-2xl font-bold font-display text-white mb-6 text-center md:text-left">
          🏆 Iconic Franchise Matches
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-panel p-6 rounded-2xl border border-rcb-dark-border bg-gradient-to-br from-rcb-red/5 to-transparent">
            <span className="text-xs font-bold text-rcb-red uppercase tracking-widest block mb-2">April 23, 2013</span>
            <h4 className="text-lg font-bold font-display text-white">The Gayle 175* Storm</h4>
            <p className="text-xs text-zinc-400 font-semibold mt-1">RCB vs Pune Warriors India (Chinnaswamy)</p>
            <p className="text-sm text-zinc-300 mt-4 leading-relaxed">
              Chris Gayle smashed a historic 175* off 66 balls, recording the highest-ever individual score in T20 cricket. RCB posted a record total of 263/5, winning the match by 130 runs. Gayle struck 17 monstrous sixes.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-rcb-dark-border bg-gradient-to-br from-rcb-gold/5 to-transparent">
            <span className="text-xs font-bold text-rcb-gold uppercase tracking-widest block mb-2">May 18, 2024</span>
            <h4 className="text-lg font-bold font-display text-white">The 27-Run Miracle Playoff Defier</h4>
            <p className="text-xs text-zinc-400 font-semibold mt-1">RCB vs Chennai Super Kings (Chinnaswamy)</p>
            <p className="text-sm text-zinc-300 mt-4 leading-relaxed">
              Needing to win by 18+ runs to qualify for playoffs on NRR after a historic 5-game winning streak, RCB posted 218/5. Yash Dayal defended 17 runs in the final over, dismissing MS Dhoni, to send RCB into the playoffs in front of a roaring home crowd.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
