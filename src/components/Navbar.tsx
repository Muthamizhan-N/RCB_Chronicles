'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Timeline', path: '/timeline' },
  { label: 'Squads', path: '/squads' },
  { label: 'Analytics', path: '/analytics' },
  { label: 'Players Archive', path: '/players' },
  { label: 'Greatest XI', path: '/greatest-xi' },
  { label: 'Achievements', path: '/achievements' },
];

// Custom Gold Lion Crest SVG
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-rcb-dark-border glass-panel">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <img
                src="/rcb-logo.png"
                alt="RCB Logo"
                className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_0_6px_rgba(229,169,59,0.3)]"
              />
              <span className="font-display font-black tracking-wider text-2xl flex flex-col leading-none pt-1">
                <span className="text-white">ROYAL CHALLENGERS</span>
                <span className="text-rcb-gold text-xs font-semibold tracking-[0.25em] leading-none uppercase font-sans">BENGALURU</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`relative rounded-md px-2.5 py-2 text-xs font-bold tracking-wide uppercase transition-all duration-300 font-sans ${
                      isActive
                        ? 'text-rcb-gold bg-rcb-dark-border/40 shadow-inner border-b-2 border-rcb-gold'
                        : 'text-zinc-300 hover:text-white hover:bg-rcb-dark-light/50'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-rcb-dark-light hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden border-b border-rcb-dark-border bg-rcb-black/95 backdrop-blur-md" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-md px-3 py-2 text-base font-bold uppercase transition-all ${
                    isActive
                      ? 'text-rcb-gold bg-rcb-dark-border/50 border-l-4 border-rcb-gold'
                      : 'text-zinc-300 hover:bg-rcb-dark-light hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
