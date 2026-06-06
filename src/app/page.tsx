'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { rcbPlayers, stadiumInfo, jerseyHistory } from '@/data/rcbData';
import { Trophy, Calendar, Users, MapPin, Compass, Shield, ChevronRight } from 'lucide-react';
import JerseyKit from '@/components/JerseyKit';

// Home Ground SVG representation
function GroundSVG() {
  return (
    <svg viewBox="0 0 100 60" className="w-full h-32 rounded-xl bg-emerald-950/40 border border-emerald-500/25 p-1">
      {/* Grass Outer Ring */}
      <ellipse cx="50" cy="30" rx="46" ry="26" fill="#1b4332" opacity="0.6" />
      {/* Outer boundary ring */}
      <ellipse cx="50" cy="30" rx="42" ry="22" fill="none" stroke="#fff" strokeWidth="0.8" opacity="0.3" />
      {/* Pitch in center */}
      <rect x="46" y="22" width="8" height="16" fill="#d4af37" opacity="0.8" rx="0.5" />
      {/* 30-yard circle */}
      <ellipse cx="50" cy="30" rx="22" ry="12" fill="none" stroke="#fff" strokeWidth="0.5" strokeDasharray="2" opacity="0.4" />
      {/* Solar Panel Icon representation in corner */}
      <circle cx="85" cy="15" r="5" fill="#3b82f6" />
      <line x1="85" y1="10" x2="85" y2="20" stroke="#fff" strokeWidth="0.5" />
      <line x1="80" y1="15" x2="90" y2="15" stroke="#fff" strokeWidth="0.5" />
      <text x="85" y="25" fill="#9ca3af" fontSize="3" fontWeight="bold" textAnchor="middle">SOLAR</text>
    </svg>
  );
}



export default function Home() {
  const legends = rcbPlayers.filter((p) => p.isLegend);

  // Mockup-style "RCB in Numbers" stats
  const numbersStats = [
    { label: 'IPL TROPHIES', value: '2', sub: '2025, 2026', icon: <Trophy className="h-6 w-6 text-rcb-gold" /> },
    { label: 'ESTABLISHED', value: '2008', sub: 'Inaugural Season', icon: <Calendar className="h-6 w-6 text-rcb-gold" /> },
    { label: 'BIGGEST FAN ARMY', value: '12M+', sub: 'Global Community', icon: <Users className="h-6 w-6 text-rcb-gold" /> },
    { label: 'M. CHINNASWAMY', value: 'OUR HOME', sub: '40,000 Capacity', icon: <MapPin className="h-6 w-6 text-rcb-gold" /> },
  ];

  return (
    <div className="flex flex-col min-h-screen fiery-smoke-bg">
      <div className="fiery-smoke-overlay flex flex-col flex-grow">
        
        {/* Hero Banner Section */}
        <section className="relative overflow-hidden pt-20 pb-20 lg:pt-28 lg:pb-24 border-b border-rcb-dark-border">
          {/* Mockup styled Glowing Backdrops */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-rcb-red/25 blur-[120px] pointer-events-none"></div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            {/* Title from Mockup */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-rcb-gold text-lg sm:text-xl font-bold tracking-[0.3em] uppercase mb-4"
            >
              ROYAL CHALLENGERS
            </motion.div>

            {/* Brush Font highlight */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-6xl sm:text-8xl lg:text-9xl font-permanent text-gradient-gold tracking-tight leading-none mb-6 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]"
            >
              BENGALURU
            </motion.h1>

            {/* Motto */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white font-display text-2xl sm:text-3xl tracking-[0.4em] uppercase font-bold text-center mt-2 mb-6"
            >
              BOLD. FEARLESS. UNSTOPPABLE.
            </motion.p>

            {/* Subtle Divider */}
            <div className="h-0.5 w-16 bg-rcb-gold mx-auto my-6"></div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mx-auto max-w-2xl text-zinc-300 text-sm sm:text-base leading-relaxed mb-10"
            >
              More than a team. It&apos;s a legacy. It&apos;s passion. It&apos;s #RCB. Relive the back-to-back championship glories of 2025 and 2026, inspect historical stats, and select your Greatest RCB XI.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                href="/timeline"
                className="rounded-lg bg-gradient-to-r from-rcb-red to-rcb-red-dark hover:from-rcb-red hover:to-rcb-gold px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition duration-300 transform hover:-translate-y-0.5"
              >
                Explore Campaign Timeline
              </Link>
              <Link
                href="/greatest-xi"
                className="rounded-lg border border-rcb-gold hover:bg-rcb-gold/10 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-rcb-gold shadow-lg transition duration-300 transform hover:-translate-y-0.5"
              >
                Draft Greatest XI
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Mockup styled "RCB IN NUMBERS" Section */}
        <section className="bg-rcb-black/85 py-10 border-b border-rcb-dark-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h3 className="text-center font-display text-zinc-400 text-sm tracking-[0.35em] uppercase mb-8">
              RCB IN NUMBERS
            </h3>
            
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 justify-items-center">
              {numbersStats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * idx }}
                  className="flex flex-col items-center text-center p-4 w-full max-w-[200px]"
                >
                  <div className="text-3xl sm:text-4xl font-display font-black text-rcb-gold mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-black tracking-widest text-zinc-500 uppercase">
                    {stat.label}
                  </div>
                  <div className="text-[10px] font-bold text-rcb-red mt-0.5 uppercase tracking-wide">
                    {stat.sub}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* M. Chinnaswamy Stadium (Home Ground) Profile Section */}
        <section className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-rcb-dark-border">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            {/* Ground details */}
            <div className="lg:col-span-2 space-y-4">
              <span className="text-xs font-bold text-rcb-red uppercase tracking-widest block">Home Fortress</span>
              <h2 className="text-4xl font-display font-black text-white">{stadiumInfo.name}</h2>
              <p className="text-sm font-bold text-rcb-gold uppercase tracking-wider mt-1 flex items-center">
                <Compass className="h-4 w-4 mr-1.5" />
                <span>{stadiumInfo.nickname} | {stadiumInfo.city}</span>
              </p>
              <p className="text-zinc-300 text-sm leading-relaxed max-w-3xl">
                {stadiumInfo.bio}
              </p>
              
              {/* Stadium stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {stadiumInfo.stats.map(s => (
                  <div key={s.label} className="bg-rcb-black/30 border border-rcb-dark-border/40 p-3 rounded-lg text-center">
                    <span className="block text-[10px] font-bold text-zinc-500 uppercase">{s.label}</span>
                    <span className="text-base font-bold text-white mt-1 block">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stadium Visual Component */}
            <div className="flex flex-col items-center justify-center p-6 bg-rcb-dark/40 border border-rcb-dark-border rounded-2xl shadow-xl">
              <GroundSVG />
              <div className="mt-4 text-center">
                <span className="block text-[11px] font-bold text-zinc-500 uppercase">Stadium capacity</span>
                <span className="text-2xl font-display font-black text-rcb-gold">{stadiumInfo.capacity.toLocaleString()} Fans</span>
                <span className="block text-[10px] text-emerald-400 font-bold uppercase mt-1">🌿 100% Solar Powered Venue</span>
              </div>
            </div>

          </div>
        </section>

        {/* Jersey History Section */}
        <section className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-rcb-dark-border">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white">
              JERSEY <span className="text-gradient-gold">EVOLUTION</span>
            </h2>
            <div className="h-1.5 w-16 bg-gradient-to-r from-rcb-red to-rcb-gold mx-auto mt-2 rounded-full"></div>
            <p className="text-xs text-zinc-400 mt-3">The transition of RCB kits from the classic Kannada pride red and gold to the modern royal blue gradient armor.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {jerseyHistory.map((jersey, idx) => (
              <motion.div
                key={jersey.era}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-rcb-dark/30 border border-rcb-dark-border rounded-xl p-5 text-center flex flex-col justify-between hover:border-rcb-gold/30 transition-all duration-300"
              >
                <div>
                  <span className="inline-block text-xs font-bold text-rcb-gold bg-rcb-gold/15 px-3 py-1 rounded-full mb-4">
                    {jersey.era}
                  </span>
                  <JerseyKit colors={jersey.colors} era={jersey.era} size="md" />
                </div>
                <p className="text-xs text-zinc-400 mt-4 leading-relaxed">
                  {jersey.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Featured Legends Section */}
        <section className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white">
              RCB <span className="text-gradient-red">LEGENDS</span>
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-rcb-red to-rcb-gold mx-auto mt-2 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {legends.map((legend, idx) => (
              <motion.div
                key={legend.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-rcb-dark-border bg-rcb-dark/40 p-6 hover:border-rcb-gold/30 hover:animate-gold-glow transition duration-300"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold text-rcb-gold bg-rcb-gold/15 px-2 py-0.5 rounded border border-rcb-gold/20">LEGEND</span>
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{legend.country}</span>
                  </div>

                  <h3 className="text-2xl font-black font-display text-white group-hover:text-rcb-gold transition-colors">
                    {legend.name}
                  </h3>
                  <span className="text-xs text-rcb-red font-bold uppercase block tracking-wider mt-0.5">{legend.role}</span>
                  
                  <p className="text-xs text-zinc-400 mt-4 leading-relaxed line-clamp-4">
                    {legend.bio}
                  </p>
                </div>

                <div className="mt-6">
                  <div className="border-t border-rcb-dark-border/40 pt-4 mb-4 grid grid-cols-3 gap-2 text-center text-xs">
                    <div>
                      <span className="block text-[9px] text-zinc-500 font-bold uppercase">Matches</span>
                      <span className="font-bold text-white text-sm">{legend.matches}</span>
                    </div>
                    <div>
                      <span className="block text-[9px] text-zinc-500 font-bold uppercase">Runs</span>
                      <span className="font-bold text-rcb-gold text-sm">{legend.runs}</span>
                    </div>
                    <div>
                      <span className="block text-[9px] text-zinc-500 font-bold uppercase">S/R</span>
                      <span className="font-bold text-rcb-red text-sm">{legend.strikeRate || legend.economy}</span>
                    </div>
                  </div>

                  <Link
                    href={`/players?search=${encodeURIComponent(legend.name)}`}
                    className="inline-flex items-center space-x-1 text-xs font-bold text-rcb-gold group-hover:text-white transition-colors"
                  >
                    <span>View Profile</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
