import React from 'react';

export const CuneiformLogoEmblem: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="90" height="90" rx="8" fill="#2b1b11" stroke="#6e4624" strokeWidth="2"/>
    {/* Terracotta / clay texture lines */}
    <path d="M15 30 H85 M15 50 H85 M15 70 H85" stroke="#4a2e16" strokeWidth="1" strokeDasharray="3 3"/>
    {/* Authentic Cuneiform wedge symbols */}
    <path d="M25 38 L42 26 L36 44 Z M48 26 L65 26 L54 44 Z M70 28 L85 36 L75 44 Z" fill="#d97742"/>
    <path d="M30 54 L48 54 L38 72 Z M58 54 L75 54 L65 72 Z" fill="#d97742"/>
    <path d="M35 78 L75 78 L55 90 Z" fill="#b87333"/>
  </svg>
);

export const CopperIngotGraphic: React.FC<{ className?: string }> = ({ className = "w-full h-56" }) => (
  <svg className={className} viewBox="0 0 500 280" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      {/* Heavy metallic copper ingot gradient with oxidation patina */}
      <linearGradient id="ingot-top-texture" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e89865"/>
        <stop offset="35%" stopColor="#c27743"/>
        <stop offset="70%" stopColor="#965225"/>
        <stop offset="100%" stopColor="#5e3113"/>
      </linearGradient>
      <linearGradient id="ingot-face" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#a35d2d"/>
        <stop offset="50%" stopColor="#6e3c1b"/>
        <stop offset="100%" stopColor="#3d1f0c"/>
      </linearGradient>
      <filter id="archaeo-shadow" x="-10%" y="-10%" width="120%" height="130%">
        <feDropShadow dx="0" dy="16" stdDeviation="12" floodColor="#000" floodOpacity="0.85"/>
      </filter>
    </defs>
    
    <g filter="url(#archaeo-shadow)">
      {/* Physical Ground Contact Shadow */}
      <ellipse cx="250" cy="245" rx="200" ry="20" fill="#070402" opacity="0.9"/>

      {/* Ancient Oxhide-Style Copper Ingot (Hammered, uneven, physical contours) */}
      {/* Base main trapezoidal body with organic hammered edges */}
      <path d="M 85,75 Q 250,68 415,75 L 450,145 Q 250,152 50,145 Z" fill="url(#ingot-top-texture)" stroke="#733d17" strokeWidth="2.5"/>
      <path d="M 50,145 Q 250,152 450,145 L 420,225 Q 250,232 80,225 Z" fill="url(#ingot-face)" stroke="#4a250d" strokeWidth="2.5"/>

      {/* Surface hammering indentations & metallurgic pour lines */}
      <path d="M 95,85 Q 250,78 405,85" stroke="#fce0c2" strokeWidth="1.5" opacity="0.4"/>
      <path d="M 70,120 Q 250,130 430,120" stroke="#4a250d" strokeWidth="2" opacity="0.6"/>
      <path d="M 90,165 Q 250,175 410,165" stroke="#261205" strokeWidth="1.5" opacity="0.7"/>

      {/* Verdigris / Malachite Oxidation Patina Spots (Archaeological realism) */}
      <path d="M 370,90 C 390,95 410,130 380,140 C 360,145 350,100 370,90 Z" fill="#3a6659" opacity="0.45"/>
      <path d="M 110,170 C 130,175 140,210 120,215 C 100,220 90,180 110,170 Z" fill="#4d7c6e" opacity="0.35"/>
      
      {/* Deep Inscribed Merchant Stamp of Ea-Nasir (No random star symbol!) */}
      <g transform="translate(230, 95)">
        <rect x="-35" y="-12" width="70" height="24" rx="4" fill="#3d1f0c" stroke="#8c5027" strokeWidth="1.5"/>
        <path d="M -25,-4 H 25 M -20,0 H 20 M -25,4 H 25" stroke="#d97742" strokeWidth="1.5"/>
        <text x="0" y="16" fill="#8c5027" fontSize="9" fontFamily="Cinzel" textAnchor="middle" fontWeight="bold" letterSpacing="1">EA-NASIR • UR</text>
      </g>
    </g>
  </svg>
);

export const RawCopperGraphic: React.FC<{ className?: string }> = ({ className = "w-full h-56" }) => (
  <svg className={className} viewBox="0 0 500 280" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="raw-ore-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d97742"/>
        <stop offset="50%" stopColor="#9e5728"/>
        <stop offset="100%" stopColor="#47230c"/>
      </linearGradient>
    </defs>
    
    <ellipse cx="250" cy="245" rx="190" ry="18" fill="#070402" opacity="0.85"/>

    {/* Crystalline Rough Copper Ore Lump Cluster */}
    <g transform="translate(30, 20)">
      {/* Main Lump */}
      <path d="M 140,170 L 190,80 L 300,65 L 370,120 L 340,210 L 230,230 L 150,200 Z" fill="url(#raw-ore-grad)" stroke="#5e3113" strokeWidth="3"/>
      <path d="M 190,80 L 260,140 L 230,230" stroke="#361a08" strokeWidth="2.5"/>
      <path d="M 260,140 L 370,120" stroke="#361a08" strokeWidth="2.5"/>

      {/* Smaller Ore Fragment */}
      <path d="M 80,200 L 120,135 L 170,150 L 180,210 L 120,230 Z" fill="#b87333" stroke="#47230c" strokeWidth="2"/>
      <path d="M 330,190 L 370,145 L 430,165 L 420,225 L 360,235 Z" fill="#8c5027" stroke="#361a08" strokeWidth="2"/>

      {/* Metallic specular ore facets */}
      <polygon points="210,95 240,90 225,115" fill="#ffd5b3" opacity="0.6"/>
      <polygon points="310,90 340,110 320,130" fill="#fca87c" opacity="0.5"/>

      {/* Mineral Vein Accent */}
      <path d="M 200,100 Q 250,160 320,180" stroke="#3d6b5e" strokeWidth="4" opacity="0.5" strokeLinecap="round"/>
    </g>
  </svg>
);

export const PremiumIngotGraphic: React.FC<{ className?: string }> = ({ className = "w-full h-56" }) => (
  <svg className={className} viewBox="0 0 500 280" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="prem-copper-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fce0c2"/>
        <stop offset="30%" stopColor="#e29158"/>
        <stop offset="70%" stopColor="#b87333"/>
        <stop offset="100%" stopColor="#693714"/>
      </linearGradient>
    </defs>

    <ellipse cx="250" cy="245" rx="195" ry="18" fill="#070402" opacity="0.85"/>

    {/* Refined Royal Magan Copper Ingot */}
    <g transform="translate(25, 20)">
      <polygon points="75,65 375,65 425,135 25,135" fill="url(#prem-copper-grad)" stroke="#8c5027" strokeWidth="2"/>
      <polygon points="25,135 425,135 385,215 65,215" fill="#7d431b" stroke="#4a250d" strokeWidth="2"/>

      {/* Clean chamfered reflection line */}
      <path d="M 80,68 L 370,68" stroke="#ffffff" strokeWidth="3" opacity="0.75" strokeLinecap="round"/>
      <path d="M 40,138 L 410,138" stroke="#fce0c2" strokeWidth="2" opacity="0.4"/>

      {/* Twin Royal Merchant Seals */}
      <circle cx="140" cy="100" r="18" fill="#522a10" stroke="#e29158" strokeWidth="2"/>
      <path d="M 130,95 H 150 M 132,100 H 148 M 130,105 H 150" stroke="#fce0c2" strokeWidth="1.5"/>

      <circle cx="310" cy="100" r="18" fill="#522a10" stroke="#e29158" strokeWidth="2"/>
      <path d="M 300,95 H 320 M 302,100 H 318 M 300,105 H 320" stroke="#fce0c2" strokeWidth="1.5"/>

      <text x="225" y="104" fill="#3d1f0c" fontSize="10" fontFamily="Cinzel" textAnchor="middle" fontWeight="900" letterSpacing="2">ROYAL PURITY</text>
    </g>
  </svg>
);

export const CopperScrapGraphic: React.FC<{ className?: string }> = ({ className = "w-full h-56" }) => (
  <svg className={className} viewBox="0 0 500 280" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="250" cy="245" rx="180" ry="18" fill="#070402" opacity="0.85"/>

    {/* Palm Fiber Woven Basket with Copper Wire & Trimmings */}
    <g transform="translate(30, 15)">
      {/* Basket Base */}
      <path d="M 120,130 C 120,210 150,230 250,230 C 350,230 380,210 380,130 Z" fill="#634327" stroke="#3d2716" strokeWidth="3"/>
      
      {/* Woven Strands */}
      <path d="M 140,140 C 180,215 320,215 360,140 M 130,165 C 180,225 320,225 370,165 M 135,190 C 190,230 310,230 365,190" stroke="#2b1a0d" strokeWidth="2" strokeDasharray="6 4"/>
      <path d="M 170,135 V 225 M 220,135 V 228 M 280,135 V 228 M 330,135 V 225" stroke="#2b1a0d" strokeWidth="2" strokeDasharray="5 3"/>

      {/* Secondary Copper Fragments & Wire Shavings */}
      <path d="M 130,125 L 170,85 L 220,120 L 170,140 Z" fill="#d97742" stroke="#8c5027" strokeWidth="1.5"/>
      <path d="M 200,100 L 260,75 L 300,110 L 240,130 Z" fill="#b87333" stroke="#693714" strokeWidth="1.5"/>
      <path d="M 270,90 L 330,105 L 350,130 L 300,140 Z" fill="#e2874a" stroke="#8c5027" strokeWidth="1.5"/>

      {/* Curved Copper Scrap Wires */}
      <path d="M 150,105 Q 200,55 250,100" stroke="#fca87c" strokeWidth="4" fill="none" strokeLinecap="round"/>
      <path d="M 220,90 Q 270,50 310,95" stroke="#d97742" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M 180,120 Q 230,70 300,115" stroke="#ffd5b3" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    </g>
  </svg>
);

export const ClayTabletGraphic: React.FC<{ className?: string }> = ({ className = "w-64 h-80" }) => (
  <svg className={className} viewBox="0 0 320 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="baked-clay" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#cba279"/>
        <stop offset="40%" stopColor="#a87d54"/>
        <stop offset="80%" stopColor="#7d5835"/>
        <stop offset="100%" stopColor="#54371e"/>
      </linearGradient>
      <filter id="tablet-shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#000" floodOpacity="0.8"/>
      </filter>
    </defs>

    <g filter="url(#tablet-shadow)">
      {/* Baked Terracotta Pillow Tablet Contour */}
      <path d="M 35,30 C 35,18, 65,12, 160,12 C 255,12, 285,18, 285,30 C 295,110, 295,290, 285,370 C 285,382, 255,388, 160,388 C 65,388, 35,382, 35,370 C 25,290, 25,110, 35,30 Z" 
            fill="url(#baked-clay)" stroke="#452c16" strokeWidth="3.5"/>
      
      {/* Organic Cracks & Weathered Surface Grooves */}
      <path d="M 45,55 Q 160,50 275,58 M 42,98 Q 160,92 278,100 M 45,140 Q 160,135 275,142 M 42,182 Q 160,175 278,185 M 45,225 Q 160,220 275,228 M 42,268 Q 160,262 278,270 M 45,310 Q 160,305 275,312 M 42,350 Q 160,345 278,352" 
            stroke="#38220f" strokeWidth="1" opacity="0.5"/>

      {/* Precise Cuneiform Inscription Rows */}
      <path d="M 65,40 L 78,32 L 73,48 Z M 88,32 L 105,32 L 96,48 Z M 118,32 L 135,40 L 126,48 Z M 145,40 L 168,40 L 156,50 Z M 180,32 L 198,32 L 190,48 Z M 210,40 L 232,40 L 220,50 Z M 245,32 L 262,40 L 253,48 Z" fill="#361f0d"/>
      <path d="M 60,82 L 78,82 L 68,94 Z M 90,74 L 108,82 L 98,94 Z M 120,82 L 142,82 L 130,96 Z M 155,74 L 172,74 L 163,90 Z M 188,82 L 205,82 L 196,94 Z M 215,74 L 238,85 L 226,96 Z M 250,82 L 272,82 L 260,96 Z" fill="#361f0d"/>
      <path d="M 65,124 L 88,124 L 76,138 Z M 100,116 L 118,128 L 108,138 Z M 130,124 L 152,124 L 140,138 Z M 165,116 L 182,116 L 173,132 Z M 195,124 L 218,124 L 206,138 Z M 230,116 L 252,128 L 240,138 Z" fill="#361f0d"/>
      <path d="M 60,168 L 80,168 L 70,180 Z M 92,158 L 112,170 L 100,182 Z M 125,168 L 148,168 L 136,182 Z M 160,158 L 178,158 L 168,174 Z M 190,168 L 212,168 L 200,182 Z M 225,158 L 248,170 L 236,182 Z" fill="#361f0d"/>
      <path d="M 65,210 L 88,210 L 76,224 Z M 100,200 L 118,212 L 108,224 Z M 130,210 L 152,210 L 140,224 Z M 165,200 L 188,200 L 176,216 Z M 200,210 L 222,210 L 210,224 Z M 235,200 L 258,212 L 246,224 Z" fill="#361f0d"/>
      <path d="M 60,252 L 82,252 L 70,266 Z M 95,244 L 112,256 L 102,266 Z M 125,252 L 148,252 L 136,266 Z M 160,244 L 182,244 L 170,260 Z M 195,252 L 218,252 L 206,266 Z M 230,244 L 252,256 L 240,266 Z" fill="#361f0d"/>
      <path d="M 65,294 L 88,294 L 76,308 Z M 100,284 L 122,296 L 110,308 Z M 135,294 L 158,294 L 146,308 Z M 170,284 L 192,284 L 180,300 Z M 205,294 L 228,294 L 216,308 Z M 240,284 L 262,296 L 250,308 Z" fill="#361f0d"/>

      {/* Merchant Administrative Red Wax Stamp Mark */}
      <circle cx="250" cy="350" r="22" fill="#7a1f18" stroke="#450d08" strokeWidth="2" opacity="0.9"/>
      <path d="M 238,345 H 262 M 240,350 H 260 M 238,355 H 262" stroke="#fca87c" strokeWidth="1.5"/>
    </g>
  </svg>
);
