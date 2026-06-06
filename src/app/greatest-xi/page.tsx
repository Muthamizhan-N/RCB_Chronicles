'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllUniquePlayers, expertGreatestXI, PlayerProfile } from '@/data/rcbData';
import { X, Trophy, AlertTriangle, CheckCircle2, RefreshCw, Star, Info } from 'lucide-react';

interface PositionSlot {
  id: string;
  role: 'Batsman' | 'Bowler' | 'All-Rounder' | 'Wicketkeeper';
  title: string;
  gridArea: string; // for placing on pitch grid
}

const positionSlots: PositionSlot[] = [
  { id: 'opener1', role: 'Batsman', title: 'Opener 1', gridArea: 'row-start-1 col-start-2' },
  { id: 'opener2', role: 'Batsman', title: 'Opener 2', gridArea: 'row-start-1 col-start-4' },
  { id: 'middle1', role: 'Batsman', title: 'Middle Order 3', gridArea: 'row-start-2 col-start-2' },
  { id: 'middle2', role: 'Batsman', title: 'Middle Order 4', gridArea: 'row-start-2 col-start-4' },
  { id: 'allrounder1', role: 'All-Rounder', title: 'All-Rounder 5', gridArea: 'row-start-3 col-start-2' },
  { id: 'wicketkeeper', role: 'Wicketkeeper', title: 'Wicketkeeper 6', gridArea: 'row-start-3 col-start-4' },
  { id: 'allrounder2', role: 'All-Rounder', title: 'All-Rounder 7', gridArea: 'row-start-4 col-start-1' },
  { id: 'bowler1', role: 'Bowler', title: 'Bowler 8', gridArea: 'row-start-4 col-start-3' },
  { id: 'bowler2', role: 'Bowler', title: 'Bowler 9', gridArea: 'row-start-4 col-start-5' },
  { id: 'bowler3', role: 'Bowler', title: 'Bowler 10', gridArea: 'row-start-5 col-start-2' },
  { id: 'bowler4', role: 'Bowler', title: 'Bowler 11', gridArea: 'row-start-5 col-start-4' },
];

export default function GreatestXI() {
  const allPlayers = getAllUniquePlayers();

  const [selectedTeam, setSelectedTeam] = useState<Record<string, PlayerProfile | null>>({
    opener1: null,
    opener2: null,
    middle1: null,
    middle2: null,
    allrounder1: null,
    wicketkeeper: null,
    allrounder2: null,
    bowler1: null,
    bowler2: null,
    bowler3: null,
    bowler4: null,
  });
  
  const [activeSlotId, setActiveSlotId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'builder' | 'expert'>('builder');
  const [modalSearchQuery, setModalSearchQuery] = useState('');
  const [showAnalysis, setShowAnalysis] = useState(false);

  // Compute stats for current selection
  const selectedPlayersList = Object.values(selectedTeam).filter((p): p is PlayerProfile => p !== null);
  const totalSelected = selectedPlayersList.length;
  const overseasCount = selectedPlayersList.filter((p) => p.nationality === 'Overseas').length;
  const wicketkeeperCount = selectedPlayersList.filter((p) => p.role === 'Wicketkeeper').length;

  // IPL Validation rules
  const isOverseasValid = overseasCount <= 4;
  const isWicketkeeperValid = wicketkeeperCount >= 1;
  const isTeamComplete = totalSelected === 11;
  const isTeamValid = isOverseasValid && isWicketkeeperValid && isTeamComplete;

  const handleSelectPlayer = (player: PlayerProfile) => {
    if (!activeSlotId) return;

    // Check if player is already selected in another slot
    const isAlreadySelected = Object.values(selectedTeam).some((p) => p?.name === player.name);
    if (isAlreadySelected) {
      alert(`${player.name} is already drafted in your XI!`);
      return;
    }

    setSelectedTeam((prev) => ({
      ...prev,
      [activeSlotId]: player,
    }));
    setActiveSlotId(null);
  };

  const handleRemovePlayer = (slotId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedTeam((prev) => ({
      ...prev,
      [slotId]: null,
    }));
  };

  const resetTeam = () => {
    setSelectedTeam({
      opener1: null,
      opener2: null,
      middle1: null,
      middle2: null,
      allrounder1: null,
      wicketkeeper: null,
      allrounder2: null,
      bowler1: null,
      bowler2: null,
      bowler3: null,
      bowler4: null,
    });
  };

  const loadExpertTeam = () => {
    const newTeam: Record<string, PlayerProfile | null> = {};
    
    // Map expert team members to slots
    newTeam.opener1 = allPlayers.find((p) => p.name === 'Chris Gayle') || null;
    newTeam.opener2 = allPlayers.find((p) => p.name === 'Virat Kohli') || null;
    newTeam.middle1 = allPlayers.find((p) => p.name === 'Rajat Patidar') || null;
    newTeam.middle2 = allPlayers.find((p) => p.name === 'AB de Villiers') || null;
    newTeam.allrounder1 = allPlayers.find((p) => p.name === 'Glenn Maxwell') || null;
    newTeam.wicketkeeper = allPlayers.find((p) => p.name === 'Dinesh Karthik') || null;
    newTeam.allrounder2 = allPlayers.find((p) => p.name === 'Jacques Kallis') || null;
    newTeam.bowler1 = allPlayers.find((p) => p.name === 'Harshal Patel') || null;
    newTeam.bowler2 = allPlayers.find((p) => p.name === 'Anil Kumble') || null;
    newTeam.bowler3 = allPlayers.find((p) => p.name === 'Yuzvendra Chahal') || null;
    newTeam.bowler4 = allPlayers.find((p) => p.name === 'Bhuvneshwar Kumar') || null;

    setSelectedTeam(newTeam);
  };

  // Get eligible players for the currently active slot (returns all unique players to give complete selection freedom)
  const getEligiblePlayers = () => {
    if (!activeSlotId) return [];
    return allPlayers;
  };

  const eligiblePlayers = getEligiblePlayers();
  const filteredEligiblePlayers = eligiblePlayers.filter((p) =>
    p.name.toLowerCase().includes(modalSearchQuery.toLowerCase())
  );
  const activeSlot = positionSlots.find((s) => s.id === activeSlotId);

  const handleOpenSlot = (slotId: string) => {
    setActiveSlotId(slotId);
    setModalSearchQuery('');
  };

  const aggregatedStats = selectedPlayersList.reduce(
    (acc, p) => {
      acc.matches += p.matches || 0;
      acc.runs += p.runs || 0;
      acc.wickets += p.wickets || 0;
      if (p.isLegend) acc.legends += 1;
      return acc;
    },
    { matches: 0, runs: 0, wickets: 0, legends: 0 }
  );

  const copyToClipboard = () => {
    const playerText = selectedPlayersList.map((p, i) => `${i + 1}. ${p.name} (${p.role}${p.nationality === 'Overseas' ? ' - OS' : ''})`).join('\n');
    const shareText = `🏏 My All-Time Greatest Royal Challengers Bengaluru XI 🏏\n\n${playerText}\n\nAggregated Stats:\n🏟️ Matches Combined: ${aggregatedStats.matches}\n🏏 Total Runs: ${aggregatedStats.runs}\n🥎 Total Wickets: ${aggregatedStats.wickets}\n👑 Franchise Legends: ${aggregatedStats.legends}\n\nBuild yours at RCB Chronicles! 🔴🔥`;
    navigator.clipboard.writeText(shareText);
    alert('Squad details copied to clipboard! Share it with other fans!');
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 flex-grow">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-white">
          GREATEST <span className="text-gradient-gold">RCB XI</span>
        </h1>
        <div className="h-1.5 w-24 bg-gradient-to-r from-rcb-red to-rcb-gold mx-auto mt-4 rounded-full"></div>
        <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-sm sm:text-base">
          Draft your ultimate Royal Challengers Bengaluru XI from our player archives. Adhere to IPL guidelines (maximum 4 overseas players) and compare your squad with the experts.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-lg border border-rcb-dark-border bg-rcb-dark p-1 font-sans">
          <button
            onClick={() => setActiveTab('builder')}
            className={`rounded-md px-5 py-2.5 text-sm font-semibold transition ${
              activeTab === 'builder'
                ? 'bg-gradient-to-r from-rcb-red to-rcb-red-dark text-white'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Team Builder
          </button>
          <button
            onClick={() => setActiveTab('expert')}
            className={`rounded-md px-5 py-2.5 text-sm font-semibold transition ${
              activeTab === 'expert'
                ? 'bg-gradient-to-r from-rcb-red to-rcb-red-dark text-white'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Expert XI Comparison
          </button>
        </div>
      </div>

      {/* Tab: Team Builder */}
      {activeTab === 'builder' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Panel: Pitch Visualizer (Takes 2 Columns on desktop) */}
          <div className="lg:col-span-2 flex flex-col items-center">
            {/* The Pitch Grid Container */}
            <div className="relative w-full max-w-[650px] aspect-[4/5] bg-[#1a4325] border-4 border-emerald-800 rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6 flex flex-col justify-between">
              
              {/* Grass Pattern stripes */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.06)_50%,transparent_50%)] bg-[size:100%_12%] pointer-events-none"></div>
              
              {/* Pitch Markings */}
              <div className="absolute inset-4 sm:inset-8 border border-white/20 rounded-2xl pointer-events-none"></div>
              <div className="absolute inset-x-8 sm:inset-x-12 top-1/2 -translate-y-1/2 h-36 sm:h-48 border border-white/10 rounded-full pointer-events-none"></div>
              
              {/* Pitch grid layout (5 rows, 5 columns) */}
              <div className="relative z-10 w-full h-full grid grid-rows-5 grid-cols-5 gap-2 sm:gap-3 items-center justify-items-center">
                {positionSlots.map((slot) => {
                  const player = selectedTeam[slot.id];
                  
                  return (
                    <div
                      key={slot.id}
                      className={`${slot.gridArea} w-20 sm:w-28 flex flex-col items-center`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        onClick={() => handleOpenSlot(slot.id)}
                        className={`w-full aspect-[4/3] rounded-xl flex flex-col justify-between p-1 sm:p-2 cursor-pointer transition-all duration-300 border relative ${
                          player
                            ? player.nationality === 'Overseas'
                              ? 'bg-sky-950/70 border-sky-400 text-sky-200'
                              : 'bg-rcb-dark/80 border-rcb-gold text-white'
                            : 'bg-black/40 border-dashed border-white/20 hover:border-white/50 text-zinc-500'
                        }`}
                      >
                        {/* Slot/Player Title */}
                        <div className="text-[7px] sm:text-[9px] font-black uppercase tracking-wider text-center opacity-70 font-sans">
                          {slot.title}
                        </div>

                        {player ? (
                          <div className="flex-grow flex flex-col justify-center text-center mt-0.5 sm:mt-1 font-sans">
                            <span className="text-[9px] sm:text-xs font-bold leading-tight line-clamp-1 sm:line-clamp-2">
                              {player.name}
                            </span>
                            <span className="text-[7px] sm:text-[8px] font-semibold opacity-70 mt-0.5">
                              {player.nationality === 'Overseas' ? '✈️ OS' : '🇮🇳 IND'}
                            </span>
                          </div>
                        ) : (
                          <div className="flex-grow flex items-center justify-center text-lg sm:text-xl font-bold font-sans">
                            +
                          </div>
                        )}

                        {/* Remove Button if player selected */}
                        {player && (
                          <button
                            onClick={(e) => handleRemovePlayer(slot.id, e)}
                            className="absolute -top-1.5 -right-1.5 h-4 w-4 rounded-full bg-rcb-red hover:bg-rcb-red-dark text-white flex items-center justify-center text-[10px] font-bold shadow"
                          >
                            ×
                          </button>
                        )}
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Panel: Controls & Validation Checker */}
          <div className="space-y-6 w-full font-sans">
            
            {/* Rules Summary Card */}
            <div className="glass-panel p-6 rounded-2xl border border-rcb-dark-border">
              <h3 className="text-xl font-bold font-display text-white mb-4 flex items-center space-x-2">
                <Info className="h-5 w-5 text-rcb-gold" />
                <span>IPL Roster Rules</span>
              </h3>
              
              <div className="space-y-4 text-sm">
                {/* 11 Players Rule */}
                <div className="flex items-start space-x-3">
                  {isTeamComplete ? (
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-zinc-500 flex-shrink-0 mt-0.5" />
                  )}
                  <div>
                    <span className="font-bold text-white block">11 Players Selected</span>
                    <span className="text-xs text-zinc-400">Current count: {totalSelected} / 11</span>
                  </div>
                </div>

                {/* Max 4 Overseas Rule */}
                <div className="flex items-start space-x-3">
                  {isOverseasValid ? (
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-rcb-red flex-shrink-0 mt-0.5" />
                  )}
                  <div>
                    <span className="font-bold text-white block">Max 4 Overseas Players</span>
                    <span className="text-xs text-zinc-400">Current count: {overseasCount} / 4</span>
                  </div>
                </div>

                {/* Min 1 Wicketkeeper Rule */}
                <div className="flex items-start space-x-3">
                  {isWicketkeeperValid ? (
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-rcb-red flex-shrink-0 mt-0.5" />
                  )}
                  <div>
                    <span className="font-bold text-white block">At Least 1 Wicketkeeper</span>
                    <span className="text-xs text-zinc-400">Current count: {wicketkeeperCount} selected</span>
                  </div>
                </div>
              </div>

              {/* Status Alert Badge */}
              <div className="mt-6 pt-5 border-t border-rcb-dark-border/40">
                {isTeamValid ? (
                  <div className="space-y-3">
                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 flex items-center space-x-3 text-emerald-400">
                      <span className="text-xl">🏆</span>
                      <div>
                        <span className="block font-bold text-sm">Squad Approved!</span>
                        <span className="block text-[11px] text-zinc-400">Your greatest RCB XI meets all IPL criteria.</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowAnalysis(true)}
                      className="w-full rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold py-3 text-sm uppercase tracking-wider transition hover:shadow-lg hover:shadow-emerald-500/20 transform hover:-translate-y-0.5"
                    >
                      📊 Analyze & Share Squad
                    </button>
                  </div>
                ) : (
                  <div className="bg-rcb-red/10 border border-rcb-red/30 rounded-xl p-4 flex items-center space-x-3 text-rcb-red">
                    <span className="text-xl">⚠️</span>
                    <div>
                      <span className="block font-bold text-sm">Squad Incomplete</span>
                      <span className="block text-[11px] text-zinc-400">Adjust players on the pitch to pass validation rules.</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Actions Panel */}
            <div className="flex gap-4">
              <button
                onClick={loadExpertTeam}
                className="flex-grow rounded-lg bg-gradient-to-r from-rcb-gold to-rcb-gold-dark text-rcb-black font-bold py-3.5 text-sm transition hover:shadow-lg hover:shadow-rcb-gold/20 flex items-center justify-center space-x-1"
              >
                <Star className="h-4 w-4 fill-current" />
                <span>Load Expert XI</span>
              </button>
              <button
                onClick={resetTeam}
                className="rounded-lg border border-rcb-dark-border hover:bg-rcb-dark-light/40 text-zinc-400 hover:text-white px-4 py-3.5 text-sm transition flex items-center justify-center space-x-1"
              >
                <RefreshCw className="h-4 w-4" />
                <span>Reset</span>
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Tab: Expert XI Comparison */}
      {activeTab === 'expert' && (
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-rcb-dark-border">
          <h3 className="text-2xl font-bold font-display text-white mb-3 flex items-center space-x-2">
            <Trophy className="h-6 w-6 text-rcb-gold animate-bounce" />
            <span>Expert-Selected Greatest RCB XI</span>
          </h3>
          <p className="text-zinc-400 text-sm mb-8 font-sans">
            The ultimate Royal Challengers Bengaluru Dream Team as voted by analysts and legends, comprising RCB&apos;s most prolific match-winners.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
            {expertGreatestXI.map((player, index) => (
              <div
                key={player.name}
                className="flex items-center justify-between p-4 rounded-xl border border-rcb-dark-border bg-rcb-black/35 hover:border-rcb-gold/30 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-lg bg-rcb-dark-light border border-rcb-dark-border flex items-center justify-center text-sm font-bold font-display text-rcb-gold">
                    {index + 1}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-rcb-red uppercase block tracking-wider">{player.role}</span>
                    <span className="font-bold text-white text-base">{player.name}</span>
                    <span className="text-xs text-zinc-500 block">{player.stats}</span>
                  </div>
                </div>

                <span className={`inline-block rounded px-2.5 py-0.5 text-[10px] font-bold uppercase ${
                  player.nationality === 'Overseas' ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20' : 'bg-zinc-800 text-zinc-400 border border-zinc-700'
                }`}>
                  {player.nationality}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Player Selection Modal Overlay */}
      <AnimatePresence>
        {activeSlotId && activeSlot && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-rcb-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg rounded-2xl border border-rcb-dark-border bg-rcb-dark p-6 max-h-[80vh] overflow-y-auto shadow-2xl font-sans"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-rcb-dark-border pb-4 mb-4">
                <div>
                  <h4 className="text-lg font-bold font-display text-white">Select player for {activeSlot.title}</h4>
                  <p className="text-xs text-zinc-400 mt-1">Search and select from all unique franchise players</p>
                </div>
                <button
                  onClick={() => setActiveSlotId(null)}
                  className="text-zinc-500 hover:text-white p-1 rounded-md transition"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Search Box inside selection modal */}
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search player name... (e.g. Kohli, Gayle, Kumble)"
                  value={modalSearchQuery}
                  onChange={(e) => setModalSearchQuery(e.target.value)}
                  className="w-full bg-rcb-black border border-rcb-dark-border rounded-lg px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-rcb-gold transition"
                />
                {modalSearchQuery && (
                  <button 
                    onClick={() => setModalSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white text-xs"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Player list */}
              <div className="space-y-2">
                {filteredEligiblePlayers.map((player) => {
                  const isOverseas = player.nationality === 'Overseas';
                  
                  return (
                    <div
                      key={player.name}
                      onClick={() => handleSelectPlayer(player)}
                      className="flex items-center justify-between p-3 rounded-lg border border-rcb-dark-border bg-rcb-black/30 hover:bg-rcb-dark-light/50 hover:border-rcb-gold/40 cursor-pointer transition"
                    >
                      <div>
                        <span className="font-bold text-white block text-sm">{player.name}</span>
                        <span className="text-[10px] text-zinc-500 block uppercase font-semibold">
                          Matches: {player.matches} | Runs: {player.runs} | Wickets: {player.wickets}
                        </span>
                      </div>
                      <span className={`text-[10px] font-bold uppercase rounded px-2 py-0.5 ${
                        isOverseas ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20' : 'bg-zinc-800 text-zinc-400 border border-zinc-700'
                      }`}>
                        {player.nationality}
                      </span>
                    </div>
                  );
                })}

                {filteredEligiblePlayers.length === 0 && (
                  <div className="text-center py-6 text-sm text-zinc-500">
                    No players found in this category in the archive.
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Squad Analysis Modal Overlay */}
      <AnimatePresence>
        {showAnalysis && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-rcb-black/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl rounded-2xl border border-rcb-gold/30 bg-rcb-dark p-6 sm:p-8 shadow-2xl font-sans"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowAnalysis(false)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-rcb-dark-light transition"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="text-center mb-6">
                <span className="text-2xl">📊</span>
                <h3 className="text-2xl font-bold font-display text-white mt-2">Squad Analysis & Audit</h3>
                <p className="text-xs text-zinc-400 uppercase tracking-widest mt-1">RCB All-Time Greatest XI</p>
              </div>

              {/* Stats Card */}
              <div className="bg-rcb-black/45 border border-rcb-dark-border/60 rounded-xl p-5 mb-6 space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-rcb-dark-border/40">
                  <span className="text-xs text-zinc-400 uppercase tracking-wider font-bold">Squad Archetype</span>
                  <span className="text-sm font-black text-rcb-gold uppercase tracking-wider bg-rcb-gold/15 px-3 py-1 rounded">
                    {aggregatedStats.runs > 15000 
                      ? "Galactic Batting Lineup 🚀" 
                      : aggregatedStats.wickets > 300 
                      ? "Impenetrable Bowling Arsenal 🛡️" 
                      : selectedPlayersList.filter(p => p.role === 'All-Rounder').length >= 3 
                      ? "Ultimate Balanced Force ⚡" 
                      : "Elite Balanced XI 🌟"}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-rcb-black/60 p-3 rounded-lg border border-rcb-dark-border/25">
                    <span className="block text-[10px] text-zinc-500 uppercase font-bold mb-1">Matches Combined</span>
                    <span className="text-xl font-bold font-display text-white">{aggregatedStats.matches}</span>
                  </div>
                  <div className="bg-rcb-black/60 p-3 rounded-lg border border-rcb-dark-border/25">
                    <span className="block text-[10px] text-zinc-500 uppercase font-bold mb-1">Total Runs</span>
                    <span className="text-xl font-bold font-display text-rcb-gold">{aggregatedStats.runs.toLocaleString()}</span>
                  </div>
                  <div className="bg-rcb-black/60 p-3 rounded-lg border border-rcb-dark-border/25">
                    <span className="block text-[10px] text-zinc-500 uppercase font-bold mb-1">Total Wickets</span>
                    <span className="text-xl font-bold font-display text-rcb-red">{aggregatedStats.wickets}</span>
                  </div>
                  <div className="bg-rcb-black/60 p-3 rounded-lg border border-rcb-dark-border/25">
                    <span className="block text-[10px] text-zinc-500 uppercase font-bold mb-1">Franchise Legends</span>
                    <span className="text-xl font-bold font-display text-emerald-400">{aggregatedStats.legends}</span>
                  </div>
                </div>
              </div>

              {/* Selected Player Names list */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Team List</h4>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-zinc-300 font-medium overflow-y-auto max-h-40">
                  {selectedPlayersList.map((p, idx) => (
                    <div key={p.name} className="flex justify-between items-center py-1 border-b border-rcb-dark-border/20">
                      <span className="truncate">{idx + 1}. {p.name}</span>
                      <span className="text-[9px] text-zinc-500 uppercase tracking-widest flex-shrink-0 font-bold">{p.role}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={copyToClipboard}
                  className="flex-grow rounded-lg bg-gradient-to-r from-rcb-gold to-rcb-gold-dark text-rcb-black font-bold py-3 text-sm uppercase tracking-wider transition hover:shadow-lg hover:shadow-rcb-gold/20"
                >
                  📋 Copy Squad List
                </button>
                <button
                  onClick={() => setShowAnalysis(false)}
                  className="rounded-lg border border-rcb-dark-border hover:bg-rcb-dark-light/40 text-zinc-400 hover:text-white px-6 py-3 text-sm transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
