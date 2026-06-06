'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllUniquePlayers, PlayerProfile } from '@/data/rcbData';
import { Search, X, Globe, User } from 'lucide-react';

export default function PlayersArchive() {
  const allPlayers = getAllUniquePlayers();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState<string>('All');
  const [selectedNationality, setSelectedNationality] = useState<string>('All');
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [selectedPlayer, setSelectedPlayer] = useState<PlayerProfile | null>(null);

  // Generate list of seasons dynamically from 2008 to 2026 (19 seasons)
  const yearsList = Array.from({ length: 19 }, (_, i) => (2008 + i).toString());

  // Filter players
  const filteredPlayers = allPlayers.filter((player) => {
    const matchesSearch = player.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesRole = selectedRole === 'All' || player.role === selectedRole;
    
    const matchesNationality = selectedNationality === 'All' || player.nationality === selectedNationality;
    
    const matchesYear = selectedYear === 'All' || player.seasons.includes(Number(selectedYear));

    return matchesSearch && matchesRole && matchesNationality && matchesYear;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 flex-grow">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-white">
          PLAYERS <span className="text-gradient-red">ARCHIVE</span>
        </h1>
        <div className="h-1.5 w-24 bg-gradient-to-r from-rcb-red to-rcb-gold mx-auto mt-4 rounded-full"></div>
        <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-sm sm:text-base">
          Explore profiles and career statistics of players who have represented the Royal Challengers Bengaluru. Search, filter, and discover RCB legends and squads.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="glass-panel p-6 rounded-2xl border border-rcb-dark-border mb-10 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Box */}
          <div className="relative flex-grow">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500">
              <Search className="h-5 w-5" />
            </span>
            <input
              type="text"
              placeholder="Search players by name... (e.g. Virat, AB, Patidar, Kumble)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-rcb-black border border-rcb-dark-border rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-rcb-gold transition"
            />
          </div>

          {/* Reset Button */}
          {(searchQuery || selectedRole !== 'All' || selectedNationality !== 'All' || selectedYear !== 'All') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedRole('All');
                setSelectedNationality('All');
                setSelectedYear('All');
              }}
              className="bg-rcb-dark-border/40 hover:bg-rcb-dark-border text-zinc-300 px-4 py-3 rounded-lg text-sm font-semibold transition"
            >
              Clear Filters
            </button>
          )}
        </div>

        {/* Category Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Filter Role */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Player Role</label>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="bg-rcb-black border border-rcb-dark-border text-zinc-300 rounded-lg p-2.5 text-sm focus:outline-none focus:border-rcb-gold"
            >
              <option value="All">All Roles</option>
              <option value="Batsman">Batsmen</option>
              <option value="Bowler">Bowlers</option>
              <option value="All-Rounder">All-Rounders</option>
              <option value="Wicketkeeper">Wicketkeepers</option>
            </select>
          </div>

          {/* Filter Nationality */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Nationality</label>
            <select
              value={selectedNationality}
              onChange={(e) => setSelectedNationality(e.target.value)}
              className="bg-rcb-black border border-rcb-dark-border text-zinc-300 rounded-lg p-2.5 text-sm focus:outline-none focus:border-rcb-gold"
            >
              <option value="All">Indian & Overseas</option>
              <option value="Indian">Indian Players</option>
              <option value="Overseas">Overseas Players</option>
            </select>
          </div>

          {/* Filter Season */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Active Season</label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="bg-rcb-black border border-rcb-dark-border text-zinc-300 rounded-lg p-2.5 text-sm focus:outline-none focus:border-rcb-gold"
            >
              <option value="All">All Seasons</option>
              {yearsList.map((year) => (
                <option key={year} value={year}>IPL {year}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Players Counter */}
      <div className="mb-6 text-sm text-zinc-400 font-semibold uppercase tracking-wider">
        Showing {filteredPlayers.length} of {allPlayers.length} players
      </div>

      {/* Players Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredPlayers.map((player, idx) => (
          <motion.div
            key={player.name}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: Math.min(idx * 0.02, 0.3) }}
            onClick={() => setSelectedPlayer(player)}
            className={`group rounded-xl border p-5 cursor-pointer bg-rcb-dark/40 transition-all duration-300 flex flex-col justify-between ${
              player.isLegend
                ? 'border-rcb-gold/30 hover:border-rcb-gold hover:animate-gold-glow'
                : 'border-rcb-dark-border hover:border-rcb-red/40 hover:animate-red-glow'
            }`}
          >
            <div>
              {/* Card Header badges */}
              <div className="flex justify-between items-center mb-4">
                <span className={`inline-block rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                  player.isLegend
                    ? 'bg-rcb-gold/10 text-rcb-gold border border-rcb-gold/30'
                    : 'bg-rcb-red/10 text-rcb-red border border-rcb-red/30'
                }`}>
                  {player.role}
                </span>
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                  {player.country}
                </span>
              </div>

              {/* Player Name */}
              <h3 className="text-xl font-bold font-display text-white group-hover:text-rcb-gold transition-colors duration-300">
                {player.name}
              </h3>
              
              {/* Active years active summary */}
              <p className="text-[10px] text-zinc-500 mt-1 uppercase tracking-wider">
                Seasons: {player.seasons.join(', ')}
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="mt-6 pt-4 border-t border-rcb-dark-border/40 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="bg-rcb-black/30 p-2 rounded border border-rcb-dark-border/20">
                <span className="block text-[9px] font-semibold text-zinc-500 uppercase">Matches</span>
                <span className="font-bold text-white text-sm">{player.matches}</span>
              </div>
              <div className="bg-rcb-black/30 p-2 rounded border border-rcb-dark-border/20">
                <span className="block text-[9px] font-semibold text-zinc-500 uppercase">Runs</span>
                <span className="font-bold text-rcb-gold text-sm">{player.runs}</span>
              </div>
              <div className="bg-rcb-black/30 p-2 rounded border border-rcb-dark-border/20">
                <span className="block text-[9px] font-semibold text-zinc-500 uppercase">Wickets</span>
                <span className="font-bold text-rcb-red text-sm">{player.wickets}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* No Players Found message */}
      {filteredPlayers.length === 0 && (
        <div className="text-center py-20 border border-dashed border-rcb-dark-border rounded-2xl bg-rcb-dark/10">
          <p className="text-zinc-500 text-lg font-medium">No players match your search criteria.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedRole('All');
              setSelectedNationality('All');
              setSelectedYear('All');
            }}
            className="mt-4 inline-flex items-center space-x-1.5 rounded-lg bg-rcb-red hover:bg-rcb-red-dark text-white px-4 py-2 text-sm font-semibold transition"
          >
            <span>Reset Search Filters</span>
          </button>
        </div>
      )}

      {/* Detailed Player Modal */}
      <AnimatePresence>
        {selectedPlayer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-rcb-black/80 backdrop-blur-md overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-2xl rounded-2xl border border-rcb-dark-border bg-rcb-dark p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPlayer(null)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-rcb-dark-light transition"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Profile Header */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-5 border-b border-rcb-dark-border/60 pb-6 mb-6 text-center sm:text-left">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rcb-red to-rcb-gold p-0.5 shadow-lg">
                  <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-rcb-black text-2xl">
                    {selectedPlayer.isLegend ? '👑' : '🏏'}
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-2">
                    <span className="inline-block rounded bg-rcb-red/10 border border-rcb-red/30 px-2 py-0.5 text-xs font-bold text-rcb-red uppercase tracking-wider">
                      {selectedPlayer.role}
                    </span>
                    {selectedPlayer.isLegend && (
                      <span className="inline-block rounded bg-rcb-gold/10 border border-rcb-gold/30 px-2 py-0.5 text-xs font-bold text-rcb-gold uppercase tracking-wider">
                        Franchise Legend
                      </span>
                    )}
                  </div>
                  
                  <h2 className="text-3xl font-black font-display text-white">
                    {selectedPlayer.name}
                  </h2>
                  
                  <div className="mt-2 flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1 text-sm text-zinc-400">
                    <span className="flex items-center space-x-1">
                      <Globe className="h-4 w-4 text-rcb-gold" />
                      <span>Country: <strong className="text-white">{selectedPlayer.country}</strong></span>
                    </span>
                    <span className="hidden sm:inline text-zinc-700">|</span>
                    <span className="flex items-center space-x-1">
                      <User className="h-4 w-4 text-rcb-red" />
                      <span>Nationality: <strong className="text-white">{selectedPlayer.nationality}</strong></span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-rcb-gold mb-2">Biography</h4>
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed bg-rcb-black/30 p-4 rounded-xl border border-rcb-dark-border/40">
                    {selectedPlayer.bio}
                  </p>
                </div>

                {/* Performance Stats */}
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-rcb-red mb-3">RCB Career Statistics</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="bg-rcb-black/20 p-3 rounded-lg border border-rcb-dark-border/40 text-center">
                      <span className="block text-xs text-zinc-500 font-semibold uppercase">Matches</span>
                      <span className="text-xl font-bold font-display text-white">{selectedPlayer.matches}</span>
                    </div>
                    <div className="bg-rcb-black/20 p-3 rounded-lg border border-rcb-dark-border/40 text-center">
                      <span className="block text-xs text-zinc-500 font-semibold uppercase">Runs</span>
                      <span className="text-xl font-bold font-display text-rcb-gold">{selectedPlayer.runs}</span>
                    </div>
                    <div className="bg-rcb-black/20 p-3 rounded-lg border border-rcb-dark-border/40 text-center">
                      <span className="block text-xs text-zinc-500 font-semibold uppercase">Wickets</span>
                      <span className="text-xl font-bold font-display text-rcb-red">{selectedPlayer.wickets}</span>
                    </div>
                    <div className="bg-rcb-black/20 p-3 rounded-lg border border-rcb-dark-border/40 text-center">
                      <span className="block text-xs text-zinc-500 font-semibold uppercase">Strike Rate</span>
                      <span className="text-xl font-bold font-display text-zinc-300">{selectedPlayer.strikeRate || '-'}</span>
                    </div>

                    {selectedPlayer.highScore && (
                      <div className="bg-rcb-black/20 p-3 rounded-lg border border-rcb-dark-border/40 text-center">
                        <span className="block text-xs text-zinc-500 font-semibold uppercase">High Score</span>
                        <span className="text-xl font-bold font-display text-rcb-gold">{selectedPlayer.highScore}</span>
                      </div>
                    )}
                    {selectedPlayer.average && (
                      <div className="bg-rcb-black/20 p-3 rounded-lg border border-rcb-dark-border/40 text-center">
                        <span className="block text-xs text-zinc-500 font-semibold uppercase font-display">Average</span>
                        <span className="text-xl font-bold font-display text-white">{selectedPlayer.average}</span>
                      </div>
                    )}
                    {selectedPlayer.bestBowling && (
                      <div className="bg-rcb-black/20 p-3 rounded-lg border border-rcb-dark-border/40 text-center">
                        <span className="block text-xs text-zinc-500 font-semibold uppercase">Best Bowling</span>
                        <span className="text-xl font-bold font-display text-rcb-red">{selectedPlayer.bestBowling}</span>
                      </div>
                    )}
                    {selectedPlayer.economy && (
                      <div className="bg-rcb-black/20 p-3 rounded-lg border border-rcb-dark-border/40 text-center">
                        <span className="block text-xs text-zinc-500 font-semibold uppercase font-display">Economy</span>
                        <span className="text-xl font-bold font-display text-zinc-300">{selectedPlayer.economy}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Seasons Active List */}
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-2">Seasons Represented</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedPlayer.seasons.map((year) => (
                      <span
                        key={year}
                        className="bg-rcb-dark-light border border-rcb-dark-border px-3 py-1 rounded-md text-xs font-semibold text-zinc-300"
                      >
                        IPL {year}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
