'use client';

import { useState } from 'react';
import { rcbSeasons, isOverseasPlayer } from '@/data/rcbData';
import { motion } from 'framer-motion';
import { User, UserCheck, Trophy, Target } from 'lucide-react';

export default function SquadsArchive() {
  const [selectedYear, setSelectedYear] = useState<number>(2026);

  const activeSeason = rcbSeasons.find(s => s.year === selectedYear) || rcbSeasons[rcbSeasons.length - 1];
  const squad = activeSeason.detailedSquad;

  const roles = [
    { title: 'Batsmen', players: squad.batsmen, icon: '🏏' },
    { title: 'Wicket-keepers', players: squad.wicketkeepers, icon: '🧤' },
    { title: 'All-Rounders', players: squad.allrounders, icon: '⚡' },
    { title: 'Bowlers', players: squad.bowlers, icon: '🥎' }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 flex-grow">
      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-white">
          ANNUAL <span className="text-gradient-gold">SQUADS</span>
        </h1>
        <div className="h-1.5 w-24 bg-gradient-to-r from-rcb-red to-rcb-gold mx-auto mt-4 rounded-full"></div>
        <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-sm sm:text-base">
          Browse the official roster configurations of Royal Challengers Bengaluru for any season since the inaugural 2008 edition.
        </p>
      </div>

      {/* Year Selector Control */}
      <div className="flex justify-center mb-10">
        <div className="glass-panel p-4 rounded-xl border border-rcb-dark-border w-full max-w-md flex items-center justify-between space-x-4">
          <label className="text-xs font-black uppercase tracking-wider text-zinc-400 font-sans">Select Year</label>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
            className="bg-rcb-black border border-rcb-dark-border text-white rounded-lg p-2.5 font-bold font-sans focus:outline-none focus:border-rcb-gold flex-grow max-w-xs"
          >
            {rcbSeasons.map(s => (
              <option key={s.year} value={s.year}>IPL {s.year} Season</option>
            ))}
          </select>
        </div>
      </div>

      {/* Season Summary Dashboard Card */}
      <motion.div
        key={selectedYear}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="glass-panel p-6 sm:p-8 rounded-2xl border border-rcb-dark-border mb-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left items-center font-sans">
          <div>
            <span className="text-xs font-bold text-rcb-gold uppercase tracking-widest block mb-1">Campaign Year</span>
            <span className="text-4xl sm:text-5xl font-black font-display text-white">{activeSeason.year} Team</span>
          </div>

          <div className="grid grid-cols-2 gap-4 col-span-2 text-xs sm:text-sm">
            <div className="bg-rcb-black/35 p-3.5 rounded-xl border border-rcb-dark-border/40">
              <span className="block text-zinc-500 font-bold uppercase tracking-wider mb-1 flex items-center">
                <User className="h-4 w-4 text-rcb-gold mr-1.5" />
                <span>Captain</span>
              </span>
              <strong className="text-white text-base">{activeSeason.captain}</strong>
            </div>

            <div className="bg-rcb-black/35 p-3.5 rounded-xl border border-rcb-dark-border/40">
              <span className="block text-zinc-500 font-bold uppercase tracking-wider mb-1 flex items-center">
                <UserCheck className="h-4 w-4 text-rcb-red mr-1.5" />
                <span>Coach</span>
              </span>
              <strong className="text-white text-base">{activeSeason.coach}</strong>
            </div>

            <div className="bg-rcb-black/35 p-3.5 rounded-xl border border-rcb-dark-border/40 col-span-2 flex items-center justify-between">
              <span className="text-zinc-500 font-bold uppercase tracking-wider flex items-center">
                <Trophy className="h-4 w-4 text-rcb-gold mr-1.5" />
                <span>IPL Campaign Result</span>
              </span>
              <strong className={`text-base font-black ${activeSeason.position.toLowerCase().includes('champion') ? 'text-rcb-gold animate-pulse text-lg' : 'text-white'}`}>
                {activeSeason.position}
              </strong>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Roster Grid split by Category */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {roles.map((role) => (
          <motion.div
            key={role.title + selectedYear}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="glass-panel p-6 rounded-2xl border border-rcb-dark-border bg-rcb-dark/20"
          >
            <h3 className="text-xl font-bold font-display text-white border-b border-rcb-dark-border/50 pb-3 mb-4 flex items-center justify-between">
              <span>{role.title}</span>
              <span className="text-lg">{role.icon}</span>
            </h3>

            <div className="grid grid-cols-2 gap-2 text-sm font-sans">
              {role.players.map((player) => {
                const isCaptain = activeSeason.captain.includes(player);
                const isKey = activeSeason.keyPlayers.includes(player);
                const isOverseas = isOverseasPlayer(player);

                return (
                  <div
                    key={player}
                    className="p-2.5 rounded-lg bg-rcb-black/45 border border-rcb-dark-border/25 flex items-center justify-between"
                  >
                    <span className={`font-medium ${isCaptain ? 'text-rcb-gold font-bold' : isKey ? 'text-white font-bold' : 'text-zinc-300'}`}>
                      {player}
                    </span>
                    <div className="flex space-x-1 flex-shrink-0">
                      {isCaptain && <span className="text-[8px] font-black uppercase bg-rcb-gold/20 text-rcb-gold px-1 py-0.2 rounded border border-rcb-gold/30">C</span>}
                      {isKey && <span className="text-[8px] font-black uppercase bg-rcb-red/20 text-rcb-red px-1 py-0.2 rounded border border-rcb-red/30">Key</span>}
                      {isOverseas && <span className="text-[8px] font-black uppercase bg-sky-900/30 text-sky-400 px-1 py-0.2 rounded">OS</span>}
                    </div>
                  </div>
                );
              })}

              {role.players.length === 0 && (
                <div className="col-span-2 text-center py-4 text-xs text-zinc-500 uppercase tracking-widest font-bold">
                  No Players in this Category
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
