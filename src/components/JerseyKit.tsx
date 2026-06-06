import React from 'react';

interface JerseyKitProps {
  colors: string[];
  era?: string;
  year?: number;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function JerseyKit({ colors, era, year, size = 'md' }: JerseyKitProps) {
  // Determine era if year is passed
  let activeEra = era || '';
  if (year) {
    if (year >= 2008 && year <= 2015) activeEra = '2008 - 2015';
    else if (year >= 2016 && year <= 2019) activeEra = '2016 - 2019';
    else if (year >= 2020 && year <= 2023) activeEra = '2020 - 2023';
    else if (year >= 2024 && year <= 2026) activeEra = '2024 - 2026';
  }

  // Fallback colors if none provided
  const primary = colors[0] || '#D92334';
  const secondary = colors[1] || '#080809';
  const accent = colors[2] || '#E5A93B';

  // Sizing mapping
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32',
  };

  // Define unique ID for gradients to avoid conflict
  const gradId = year ? `jersey-grad-${year}` : `jersey-grad-${activeEra.replace(/[^a-zA-Z0-9]/g, '')}`;

  return (
    <svg 
      viewBox="0 0 100 100" 
      className={`${sizeClasses[size]} drop-shadow-md mx-auto`}
    >
      <defs>
        {/* 2024-2026 Royal Blue & Red gradient */}
        <linearGradient id={`${gradId}-blue-red`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#004B87" />
          <stop offset="45%" stopColor="#004B87" />
          <stop offset="85%" stopColor="#EC1C24" />
        </linearGradient>
        {/* Go Green gradient */}
        <linearGradient id={`${gradId}-green`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#065F46" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
      </defs>

      {/* Render sleeves and body based on era */}
      {activeEra === '2008 - 2015' && (
        <>
          {/* Sleeves (Gold/Yellow) */}
          <path d="M 25,20 L 5,35 L 15,50 L 30,42 Z" fill="#F6D55C" />
          <path d="M 75,20 L 95,35 L 85,50 L 70,42 Z" fill="#F6D55C" />
          {/* Torso (Red) */}
          <path d="M 30,20 L 70,20 L 70,85 L 30,85 Z" fill="#EC1C24" />
          {/* Gold Collar */}
          <path d="M 40,20 L 60,20 L 50,30 Z" fill="#E5A93B" />
          {/* Karnataka Gold Sash details */}
          <path d="M 30,55 L 70,45 L 70,55 L 30,65 Z" fill="#E5A93B" opacity="0.3" />
        </>
      )}

      {activeEra === '2016 - 2019' && (
        <>
          {/* Sleeves (Charcoal Black) */}
          <path d="M 25,20 L 5,35 L 15,50 L 30,42 Z" fill="#0A0A0A" />
          <path d="M 75,20 L 95,35 L 85,50 L 70,42 Z" fill="#0A0A0A" />
          {/* Torso Base (Crimson Red) */}
          <path d="M 30,20 L 70,20 L 70,85 L 30,85 Z" fill="#EC1C24" />
          {/* Charcoal Black Shoulder Yoke */}
          <path d="M 30,20 L 70,20 L 70,42 L 30,42 Z" fill="#0A0A0A" />
          {/* Gold trim detail */}
          <path d="M 30,42 L 70,42" stroke="#D4AF37" strokeWidth="2" />
          <path d="M 40,20 L 60,20 L 50,30 Z" fill="#D4AF37" />
        </>
      )}

      {activeEra === '2020 - 2023' && (
        <>
          {/* Sleeves (Charcoal Black) */}
          <path d="M 25,20 L 5,35 L 15,50 L 30,42 Z" fill="#0A0A0A" />
          <path d="M 75,20 L 95,35 L 85,50 L 70,42 Z" fill="#0A0A0A" />
          {/* Torso: Black top, Red bottom */}
          <path d="M 30,20 L 70,20 L 70,85 L 30,85 Z" fill="#EC1C24" />
          <path d="M 30,20 L 70,20 L 70,48 L 30,48 Z" fill="#0A0A0A" />
          {/* Gold Collar */}
          <path d="M 40,20 L 60,20 L 50,30 Z" fill="#D4AF37" />
          {/* Gold Lion Decal on Lower Torso */}
          <path 
            d="M 58,62 C 60,60 62,60 64,61 C 66,62 67,64 67,66 C 67,68 65,70 63,72 C 62,73 60,74 58,74 Z" 
            fill="#D4AF37" 
            opacity="0.55" 
          />
          <path d="M 58,74 L 62,78 L 59,79 L 58,74" fill="#D4AF37" opacity="0.55" />
          <circle cx="62" cy="65" r="1.5" fill="#D4AF37" opacity="0.7" />
        </>
      )}

      {activeEra === '2024 - 2026' && (
        <>
          {/* Sleeves (Royal Blue) */}
          <path d="M 25,20 L 5,35 L 15,50 L 30,42 Z" fill="#004B87" />
          <path d="M 75,20 L 95,35 L 85,50 L 70,42 Z" fill="#004B87" />
          {/* Torso (Blue to Red Gradient) */}
          <path d="M 30,20 L 70,20 L 70,85 L 30,85 Z" fill={`url(#${gradId}-blue-red)`} />
          {/* Gold V-Neck Collar */}
          <path d="M 40,20 L 60,20 L 50,30 Z" fill="#D4AF37" />
          {/* Gold Lion Crest on Chest */}
          <circle cx="50" cy="40" r="3.5" fill="#D4AF37" />
          {/* Gold sleeve cuffs */}
          <path d="M 5,35 L 15,50" stroke="#D4AF37" strokeWidth="1.5" />
          <path d="M 95,35 L 85,50" stroke="#D4AF37" strokeWidth="1.5" />
        </>
      )}

      {activeEra === 'Special Go Green' && (
        <>
          {/* Sleeves (Dark Green) */}
          <path d="M 25,20 L 5,35 L 15,50 L 30,42 Z" fill="#065F46" />
          <path d="M 75,20 L 95,35 L 85,50 L 70,42 Z" fill="#065F46" />
          {/* Torso (Green Gradient) */}
          <path d="M 30,20 L 70,20 L 70,85 L 30,85 Z" fill={`url(#${gradId}-green)`} />
          {/* Gold Collar */}
          <path d="M 40,20 L 60,20 L 50,30 Z" fill="#E5A93B" />
          {/* Leaf / Sash Graphic */}
          <path d="M 35,80 C 45,70 55,60 65,40" stroke="#E5A93B" strokeWidth="2" fill="none" opacity="0.5" />
        </>
      )}

      {/* Fallback generic layout if no era matches */}
      {!['2008 - 2015', '2016 - 2019', '2020 - 2023', '2024 - 2026', 'Special Go Green'].includes(activeEra) && (
        <>
          <path d="M 25,20 L 5,35 L 15,50 L 30,42 Z" fill={secondary} />
          <path d="M 75,20 L 95,35 L 85,50 L 70,42 Z" fill={secondary} />
          <path d="M 30,20 L 70,20 L 70,85 L 30,85 Z" fill={primary} />
          <path d="M 40,20 L 60,20 L 50,30 Z" fill={accent} />
          <path d="M 30,55 L 70,45 L 70,55 L 30,65 Z" fill={accent} opacity="0.3" />
        </>
      )}

      {/* Text overlay for identity */}
      <text 
        x="50" 
        y="58" 
        fill={activeEra === '2008 - 2015' ? '#EC1C24' : activeEra === 'Special Go Green' ? '#065F46' : '#E5A93B'} 
        fontSize="7.5" 
        fontWeight="bold" 
        textAnchor="middle" 
        fontFamily="sans-serif"
        letterSpacing="0.5"
        opacity={activeEra === '2024 - 2026' || activeEra === '2020 - 2023' ? '0.8' : '1'}
      >
        RCB
      </text>
    </svg>
  );
}
