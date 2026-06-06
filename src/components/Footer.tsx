import Link from 'next/link';

export default function Footer() {
  const officialLinks = [
    { name: 'Official Website', url: 'https://www.royalchallengers.com', icon: '🌐' },
    { name: 'Instagram', url: 'https://www.instagram.com/royalchallengersbengaluru/', icon: '📸' },
    { name: 'X (Twitter)', url: 'https://twitter.com/RCBTweets', icon: '🐦' },
    { name: 'Facebook', url: 'https://www.facebook.com/RoyalChallengersBengaluru/', icon: '👥' },
    { name: 'YouTube', url: 'https://www.youtube.com/user/RCBTV', icon: '📺' },
    { name: 'IPL Profile', url: 'https://www.iplt20.com/teams/royal-challengers-bengaluru', icon: '🏏' }
  ];

  return (
    <footer className="mt-auto w-full border-t border-rcb-dark-border bg-rcb-black/90 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Logo & Description */}
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-gradient-to-br from-rcb-red to-rcb-gold p-0.5 font-display font-bold text-sm text-rcb-black">
                RCB
              </div>
              <span className="font-display font-black tracking-wider text-white">RCB CHRONICLES</span>
            </div>
            <p className="text-sm text-zinc-400 max-w-xs leading-relaxed">
              An interactive historical archive celebrating the legacy, statistics, and players of the Royal Challengers Bengaluru IPL franchise from 2008 to the present.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-display font-bold text-rcb-gold text-sm uppercase tracking-widest">Explore</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link href="/" className="text-zinc-400 hover:text-white transition">Home</Link>
              <Link href="/timeline" className="text-zinc-400 hover:text-white transition">Timeline</Link>
              <Link href="/analytics" className="text-zinc-400 hover:text-white transition">Analytics</Link>
              <Link href="/players" className="text-zinc-400 hover:text-white transition">Players Archive</Link>
              <Link href="/greatest-xi" className="text-zinc-400 hover:text-white transition">Greatest XI</Link>
              <Link href="/achievements" className="text-zinc-400 hover:text-white transition">Achievements</Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-display font-bold text-rcb-gold text-sm uppercase tracking-widest">Official Channels</h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {officialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-zinc-400 hover:text-rcb-gold transition"
                >
                  <span>{link.icon}</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-rcb-dark-border/60 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} RCB Chronicles (Unofficial Fan Site). Built for fans.</p>
          <p className="mt-2 md:mt-0">All team logos, names, and trademarks belong to their respective owners.</p>
        </div>
      </div>
    </footer>
  );
}
