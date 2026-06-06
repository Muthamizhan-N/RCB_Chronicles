'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { rcbSeasons, SeasonInfo, getSeasonSquad, getSeasonOverseas, isOverseasPlayer } from '@/data/rcbData';
import { X, Calendar, User, UserCheck, Trophy, Award, PlayCircle, Star, Shield, Info } from 'lucide-react';
import JerseyKit from '@/components/JerseyKit';

export default function Timeline() {
  const [selectedSeason, setSelectedSeason] = useState<SeasonInfo | null>(null);
  const [filter, setFilter] = useState<'all' | 'playoffs' | 'champions'>('all');
  const [activeModalTab, setActiveModalTab] = useState<'moments' | 'squad'>('moments');

  const filteredSeasons = rcbSeasons.filter((season) => {
    if (filter === 'playoffs') return season.qualified;
    if (filter === 'champions') return season.position.toLowerCase().includes('champion');
    return true;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 flex-grow">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-white">
          CAMPAIGN <span className="text-gradient-gold">TIMELINE</span>
        </h1>
        <div className="h-1.5 w-24 bg-gradient-to-r from-rcb-red to-rcb-gold mx-auto mt-4 rounded-full"></div>
        <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-sm sm:text-base">
          Follow the 19-year journey of RCB from the inaugural 2008 IPL tournament to the present day. Click on any season card to view chronological match moments, full roster squads, coaches, and highlights.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex rounded-lg border border-rcb-dark-border bg-rcb-dark p-1">
          {[
            { id: 'all', label: 'All Seasons' },
            { id: 'playoffs', label: 'Playoffs qualified' },
            { id: 'champions', label: 'Champions 🏆' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`rounded-md px-4 py-2 text-xs sm:text-sm font-semibold transition ${
                filter === tab.id
                  ? 'bg-gradient-to-r from-rcb-red to-rcb-red-dark text-white shadow'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Layout of Timeline */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredSeasons.map((season, idx) => {
          const isChampion = season.position.toLowerCase().includes('champion');
          const isFinalist = season.position.toLowerCase().includes('runner');
          const isPlayoff = season.qualified && !isChampion && !isFinalist;

          return (
            <motion.div
              key={season.year}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => {
                setSelectedSeason(season);
                setActiveModalTab('moments');
              }}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border bg-rcb-dark/40 p-5 cursor-pointer transition-all duration-300 ${
                isChampion
                  ? 'border-rcb-gold/50 bg-gradient-to-b from-rcb-gold/10 to-transparent hover:border-rcb-gold hover:shadow-[0_0_20px_rgba(229,169,59,0.4)]'
                  : isFinalist
                  ? 'border-rcb-gold/30 hover:border-rcb-gold/60 hover:shadow-lg'
                  : isPlayoff
                  ? 'border-rcb-red/30 hover:border-rcb-red hover:shadow-[0_0_15px_rgba(217,35,52,0.3)]'
                  : 'border-rcb-dark-border hover:border-zinc-500 hover:shadow-md'
              }`}
            >
              {/* Season status badge */}
              <div className="absolute top-4 right-4">
                {isChampion ? (
                  <span className="inline-flex items-center rounded-full bg-rcb-gold/25 border border-rcb-gold px-2.5 py-0.5 text-[10px] font-black text-rcb-gold uppercase tracking-wider animate-pulse">
                    🏆 Champions
                  </span>
                ) : isFinalist ? (
                  <span className="inline-flex items-center rounded-full bg-rcb-gold/10 border border-rcb-gold/40 px-2 py-0.5 text-[10px] font-bold text-rcb-gold uppercase tracking-wider">
                    Runner-up
                  </span>
                ) : isPlayoff ? (
                  <span className="inline-flex items-center rounded-full bg-rcb-red/10 border border-rcb-red/40 px-2 py-0.5 text-[10px] font-bold text-rcb-red uppercase tracking-wider">
                    Playoffs
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded-full bg-zinc-800 border border-zinc-700 px-2 py-0.5 text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">
                    League Stage
                  </span>
                )}
              </div>

              <div>
                {/* Year */}
                <h3 className="text-3xl font-black font-display text-white group-hover:text-rcb-gold transition-colors duration-300">
                  {season.year} Campaign
                </h3>
                
                {/* Position */}
                <p className="text-sm font-bold text-zinc-400 mt-1">
                  Result: <span className={season.qualified ? 'text-rcb-gold font-extrabold' : 'text-zinc-300'}>{season.position}</span>
                </p>

                {/* Details snapshot */}
                <div className="mt-4 space-y-2 text-xs text-zinc-400">
                  <div className="flex items-center space-x-1.5">
                    <User className="h-3.5 w-3.5 text-rcb-gold" />
                    <span>Captain: <strong>{season.captain}</strong></span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Award className="h-3.5 w-3.5 text-rcb-red" />
                    <span>Scorer: <strong>{season.topScorer.name} ({season.topScorer.runs})</strong></span>
                  </div>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="mt-6 pt-3 border-t border-rcb-dark-border/40 flex items-center justify-between">
                <span className="text-xs font-semibold text-rcb-gold group-hover:text-white transition-colors">
                  View Moments & Squad
                </span>
                <div className="h-6 w-6 rounded-full bg-rcb-black flex items-center justify-center border border-rcb-dark-border group-hover:border-rcb-gold transition-colors">
                  <span className="text-rcb-gold font-bold text-xs">→</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Detailed Season Modal */}
      <AnimatePresence>
        {selectedSeason && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-rcb-black/85 backdrop-blur-md overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="relative w-full max-w-4xl rounded-2xl border border-rcb-dark-border bg-rcb-dark p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSeason(null)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1.5 rounded-lg hover:bg-rcb-dark-light transition"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Modal Header */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 border-b border-rcb-dark-border/60 pb-6 mb-6">
                <div className="relative group flex items-center justify-center p-2 rounded-xl bg-rcb-black/40 border border-rcb-dark-border/60 w-24 h-24">
                  <JerseyKit colors={selectedSeason.jerseyColors} year={selectedSeason.year} size="md" />
                </div>
                <div className="text-center sm:text-left flex-grow">
                  <span className="inline-block text-xs font-bold text-rcb-gold bg-rcb-gold/10 border border-rcb-gold/30 px-3 py-1 rounded mb-2 uppercase tracking-widest">
                    Campaign Details
                  </span>
                  
                  <h2 className="text-4xl font-black font-display text-white">
                    RCB {selectedSeason.year} Season
                  </h2>
                  
                  <div className="mt-2 flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-2 text-sm text-zinc-400">
                    <span className="flex items-center space-x-1">
                      <User className="h-4 w-4 text-rcb-gold" />
                      <span>Captain: <strong className="text-white">{selectedSeason.captain}</strong></span>
                    </span>
                    <span className="hidden sm:inline text-zinc-600">|</span>
                    <span className="flex items-center space-x-1">
                      <UserCheck className="h-4 w-4 text-rcb-red" />
                      <span>Coach: <strong className="text-white">{selectedSeason.coach}</strong></span>
                    </span>
                    <span className="hidden sm:inline text-zinc-600">|</span>
                    <span className="flex items-center space-x-1">
                      <Trophy className="h-4 w-4 text-rcb-gold" />
                      <span>Position: <strong className="text-rcb-gold">{selectedSeason.position}</strong></span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Toggle tabs within Modal */}
              <div className="flex justify-center sm:justify-start border-b border-rcb-dark-border/40 mb-6">
                <button
                  onClick={() => setActiveModalTab('moments')}
                  className={`px-4 py-2.5 text-sm font-bold uppercase tracking-wider border-b-2 transition ${
                    activeModalTab === 'moments'
                      ? 'border-rcb-gold text-rcb-gold'
                      : 'border-transparent text-zinc-400 hover:text-white'
                  }`}
                >
                  Season Timeline Moments
                </button>
                <button
                  onClick={() => setActiveModalTab('squad')}
                  className={`px-4 py-2.5 text-sm font-bold uppercase tracking-wider border-b-2 transition ${
                    activeModalTab === 'squad'
                      ? 'border-rcb-gold text-rcb-gold'
                      : 'border-transparent text-zinc-400 hover:text-white'
                  }`}
                >
                  Roster & Player Stats
                </button>
              </div>

              {/* Tab Content: Moments Timeline */}
              {activeModalTab === 'moments' && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column: Summary and Match Records */}
                  <div className="lg:col-span-1 space-y-6">
                    <div>
                      <h4 className="text-lg font-bold font-display text-white border-l-4 border-rcb-red pl-2 mb-3">
                        Season Summary
                      </h4>
                      <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed bg-rcb-black/35 p-4 rounded-xl border border-rcb-dark-border/40">
                        {selectedSeason.summary}
                      </p>
                    </div>

                    {/* Stats table */}
                    <div className="bg-rcb-black/20 p-4 rounded-xl border border-rcb-dark-border/40">
                      <h5 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">Campaign Record</h5>
                      <div className="grid grid-cols-2 gap-3 text-center text-xs">
                        <div className="bg-rcb-black/40 p-2 rounded">
                          <span className="block text-[10px] text-zinc-500 font-bold uppercase">Wins</span>
                          <span className="text-base font-bold text-emerald-400 font-display">{selectedSeason.wins}</span>
                        </div>
                        <div className="bg-rcb-black/40 p-2 rounded">
                          <span className="block text-[10px] text-zinc-500 font-bold uppercase">Losses</span>
                          <span className="text-base font-bold text-rcb-red font-display">{selectedSeason.losses}</span>
                        </div>
                        <div className="bg-rcb-black/40 p-2 rounded">
                          <span className="block text-[10px] text-zinc-500 font-bold uppercase">Points</span>
                          <span className="text-base font-bold text-rcb-gold font-display">{selectedSeason.points}</span>
                        </div>
                        <div className="bg-rcb-black/40 p-2 rounded">
                          <span className="block text-[10px] text-zinc-500 font-bold uppercase">NRR</span>
                          <span className={`text-base font-bold font-display ${selectedSeason.nrr >= 0 ? 'text-emerald-400' : 'text-rcb-red'}`}>
                            {selectedSeason.nrr >= 0 ? '+' : ''}{selectedSeason.nrr.toFixed(3)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Memorable Match */}
                    <div className="bg-gradient-to-br from-rcb-red/5 to-rcb-gold/5 p-4 rounded-xl border border-rcb-gold/20 text-xs">
                      <div className="flex items-center space-x-1 text-rcb-gold font-bold uppercase mb-2">
                        <PlayCircle className="h-4 w-4" />
                        <span>Iconic Match Highlight</span>
                      </div>
                      <div>Opponent: <strong className="text-white">{selectedSeason.memorableMatch.opponent}</strong></div>
                      <div className="mt-0.5">Result: <strong className="text-emerald-400">{selectedSeason.memorableMatch.result}</strong></div>
                      <p className="text-zinc-300 mt-2 leading-relaxed">{selectedSeason.memorableMatch.details}</p>
                    </div>
                  </div>

                  {/* Right Column: Moments Timeline (takes 2 columns) */}
                  <div className="lg:col-span-2 space-y-4">
                    <h4 className="text-lg font-bold font-display text-white border-l-4 border-rcb-gold pl-2 mb-4">
                      Chronological Match Moments
                    </h4>
                    
                    <div className="relative border-l-2 border-rcb-dark-border pl-6 ml-3 space-y-6 py-1">
                      {selectedSeason.moments.map((moment, idx) => (
                        <div key={idx} className="relative">
                          {/* Timeline dot */}
                          <span className={`absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                            moment.type === 'victory'
                              ? 'bg-emerald-500 border-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.6)]'
                              : moment.type === 'defeat'
                              ? 'bg-rcb-red border-rcb-red-dark'
                              : moment.type === 'milestone'
                              ? 'bg-rcb-gold border-rcb-gold-light shadow-[0_0_8px_rgba(229,169,59,0.6)]'
                              : 'bg-zinc-600 border-zinc-500'
                          }`}>
                            <span className="h-1.5 w-1.5 rounded-full bg-rcb-black"></span>
                          </span>

                          <div className="bg-rcb-black/35 border border-rcb-dark-border/40 p-3.5 rounded-xl">
                            <span className={`text-[9px] font-black uppercase tracking-wider rounded px-1.5 py-0.5 border ${
                              moment.type === 'victory'
                                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                                : moment.type === 'defeat'
                                ? 'bg-rcb-red/10 text-rcb-red border-rcb-red/20'
                                : moment.type === 'milestone'
                                ? 'bg-rcb-gold/10 text-rcb-gold border-rcb-gold/20'
                                : 'bg-zinc-800 text-zinc-400 border-zinc-700'
                            }`}>
                              {moment.type}
                            </span>
                            <h5 className="font-bold text-white text-sm mt-2">{moment.title}</h5>
                            <p className="text-zinc-400 text-xs mt-1 leading-relaxed">{moment.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab Content: Roster & Roster Stats */}
              {activeModalTab === 'squad' && (
                <div className="space-y-6">
                  {/* Top Performers */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-rcb-black/30 p-4 rounded-xl border border-rcb-dark-border/50 flex items-center space-x-3">
                      <div className="text-2xl bg-rcb-gold/10 p-2.5 rounded-lg text-rcb-gold">🏏</div>
                      <div>
                        <span className="block text-[10px] font-bold text-zinc-500 uppercase">Top Run Scorer</span>
                        <span className="font-bold text-white block text-sm">{selectedSeason.topScorer.name}</span>
                        <span className="text-xs text-rcb-gold font-bold">{selectedSeason.topScorer.runs} runs</span>
                      </div>
                    </div>
                    
                    <div className="bg-rcb-black/30 p-4 rounded-xl border border-rcb-dark-border/50 flex items-center space-x-3">
                      <div className="text-2xl bg-rcb-red/10 p-2.5 rounded-lg text-rcb-red">🥎</div>
                      <div>
                        <span className="block text-[10px] font-bold text-zinc-500 uppercase">Top Wicket Taker</span>
                        <span className="font-bold text-white block text-sm">{selectedSeason.topWicketTaker.name}</span>
                        <span className="text-xs text-rcb-red font-bold">{selectedSeason.topWicketTaker.wickets} wickets</span>
                      </div>
                    </div>
                  </div>

                  {/* Player lists by category */}
                  <div>
                    <h4 className="text-lg font-bold font-display text-white border-l-4 border-rcb-gold pl-2 mb-4">
                      Squad Members ({getSeasonSquad(selectedSeason).length} Players)
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      
                      {/* Key Stars */}
                      <div className="bg-rcb-black/35 rounded-xl border border-rcb-gold/20 p-4">
                        <h5 className="text-xs font-black text-rcb-gold uppercase tracking-wider border-b border-rcb-gold/20 pb-2 mb-3 flex items-center justify-between">
                          <span>Key Match-Winners</span>
                          <span>👑</span>
                        </h5>
                        <ul className="space-y-1.5 text-xs">
                          {selectedSeason.keyPlayers.map((player) => (
                            <li key={player} className="text-zinc-300 font-bold flex items-center justify-between">
                              <span>{player}</span>
                              {isOverseasPlayer(player) && (
                                <span className="text-[9px] bg-sky-900/35 border border-sky-400/30 text-sky-400 px-1 py-0.2 rounded font-black">OS</span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Overseas Players */}
                      <div className="bg-rcb-black/35 rounded-xl border border-rcb-red/20 p-4">
                        <h5 className="text-xs font-black text-rcb-red uppercase tracking-wider border-b border-rcb-red/20 pb-2 mb-3 flex items-center justify-between">
                          <span>Overseas Contingent</span>
                          <span>✈️</span>
                        </h5>
                        <ul className="space-y-1.5 text-xs">
                          {getSeasonOverseas(selectedSeason).map((player: string) => (
                            <li key={player} className="text-zinc-300 flex items-center justify-between">
                              <span className={selectedSeason.keyPlayers.includes(player) ? 'font-bold text-rcb-gold' : ''}>
                                {player}
                              </span>
                              {selectedSeason.keyPlayers.includes(player) && (
                                <span className="text-[9px] bg-rcb-gold/15 text-rcb-gold px-1 py-0.2 rounded font-black">Key</span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Other Domestic Players */}
                      <div className="bg-rcb-black/35 rounded-xl border border-rcb-dark-border p-4">
                        <h5 className="text-xs font-black text-zinc-400 uppercase tracking-wider border-b border-rcb-dark-border pb-2 mb-3">
                          Domestic Squad
                        </h5>
                        <ul className="space-y-1.5 text-xs overflow-y-auto max-h-48">
                          {getSeasonSquad(selectedSeason)
                            .filter((p: string) => !isOverseasPlayer(p) && !selectedSeason.keyPlayers.includes(p))
                            .map((player: string) => (
                              <li key={player} className="text-zinc-400">
                                {player}
                              </li>
                            ))}
                        </ul>
                      </div>

                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
