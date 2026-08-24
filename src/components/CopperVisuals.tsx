import React from 'react';

export const CuneiformLogoEmblem: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="16" fill="url(#clay-grad)" stroke="#8c5a2b" strokeWidth="3"/>
    {/* Terracotta / clay texture lines */}
    <path d="M15 25 H85 M15 50 H85 M15 75 H85" stroke="#66411e" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.6"/>
    {/* Cuneiform wedges */}
    <path d="M25 35 L40 25 L35 45 Z M45 25 L60 25 L50 45 Z M65 25 L80 35 L70 45 Z" fill="#3a220e"/>
    <path d="M30 50 L45 50 L35 70 Z M55 50 L70 50 L60 70 Z" fill="#3a220e"/>
    <path d="M35 75 L75 75 L55 88 Z" fill="#3a220e"/>
    <defs>
      <linearGradient id="clay-grad" x1="0" y1="0" x2="100" y2="100">
        <stop offset="0%" stopColor="#d4a373"/>
        <stop offset="50%" stopColor="#b07d4f"/>
        <stop offset="100%" stopColor="#7e532b"/>
      </linearGradient>
    </defs>
  </svg>
);

export const CopperIngotGraphic: React.FC<{ className?: string }> = ({ className = "w-full h-48" }) => (
  <svg className={className} viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ingot-top" x1="50" y1="40" x2="350" y2="120">
        <stop offset="0%" stopColor="#f4b282"/>
        <stop offset="30%" stopColor="#d97742"/>
        <stop offset="70%" stopColor="#b87333"/>
        <stop offset="100%" stopColor="#7a4216"/>
      </linearGradient>
      <linearGradient id="ingot-front" x1="50" y1="120" x2="350" y2="200">
        <stop offset="0%" stopColor="#b87333"/>
        <stop offset="50%" stopColor="#8c5a2b"/>
        <stop offset="100%" stopColor="#4a2e1b"/>
      </linearGradient>
      <linearGradient id="ingot-side" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#8c5a2b"/>
        <stop offset="100%" stopColor="#3d2211"/>
      </linearGradient>
      <filter id="copper-shadow" x="-10%" y="-10%" width="120%" height="130%">
        <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#000" floodOpacity="0.75"/>
      </filter>
    </defs>
    
    <g filter="url(#copper-shadow)">
      {/* Ingot shadow base */}
      <ellipse cx="200" cy="205" rx="160" ry="25" fill="#0b0704" opacity="0.6"/>

      {/* Main 3D Copper Ingot trapezoid shape (classic ancient Oxhide / loaf ingot style) */}
      {/* Top face */}
      <polygon points="90,60 310,60 350,110 50,110" fill="url(#ingot-top)" stroke="#e89865" strokeWidth="1.5"/>
      {/* Front face */}
      <polygon points="50,110 350,110 320,180 80,180" fill="url(#ingot-front)" stroke="#9c5f2b" strokeWidth="1.5"/>
      {/* Left side face */}
      <polygon points="90,60 50,110 80,180 110,120" fill="url(#ingot-side)" opacity="0.9"/>
      
      {/* Specular sheen line on top edge */}
      <path d="M92 62 L308 62" stroke="#ffeedd" strokeWidth="2.5" strokeLinecap="round" opacity="0.6"/>
      
      {/* Authentic stamped merchant seal in center of ingot */}
      <circle cx="200" cy="85" r="18" fill="#7a4216" stroke="#4a2e1b" strokeWidth="2"/>
      <path d="M192 80 L208 80 M195 85 L205 85 M190 90 L210 90" stroke="#f4b282" strokeWidth="2" strokeLinecap="round"/>
      <text x="200" y="100" fill="#663c1a" fontSize="8" fontFamily="Cinzel" textAnchor="middle" fontWeight="bold">EA-NASIR UR</text>
      
      {/* Subtle verdigris / patina accent on edge (adds realism) */}
      <path d="M315 112 Q330 140 310 170" stroke="#4e8073" strokeWidth="3" opacity="0.4" strokeLinecap="round"/>
    </g>
  </svg>
);

export const RawCopperGraphic: React.FC<{ className?: string }> = ({ className = "w-full h-48" }) => (
  <svg className={className} viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="raw-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#d97742" stopOpacity="0.4"/>
        <stop offset="100%" stopColor="#d97742" stopOpacity="0"/>
      </radialGradient>
      <linearGradient id="ore-1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#e2874a"/>
        <stop offset="40%" stopColor="#b87333"/>
        <stop offset="80%" stopColor="#5c3818"/>
      </linearGradient>
      <linearGradient id="ore-2" x1="1" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f4b282"/>
        <stop offset="60%" stopColor="#8c5a2b"/>
        <stop offset="100%" stopColor="#3d2211"/>
      </linearGradient>
    </defs>
    
    <ellipse cx="200" cy="190" rx="140" ry="20" fill="#000" opacity="0.7"/>
    <circle cx="200" cy="120" r="100" fill="url(#raw-glow)"/>

    {/* Raw copper ore cluster */}
    {/* Main central ore lump */}
    <path d="M120 140 L160 80 L230 70 L280 110 L260 170 L190 185 L130 170 Z" fill="url(#ore-1)" stroke="#8c5a2b" strokeWidth="2"/>
    <path d="M160 80 L200 125 L190 185" stroke="#4a2e1b" strokeWidth="2"/>
    <path d="M200 125 L280 110" stroke="#4a2e1b" strokeWidth="2"/>
    <path d="M200 125 L230 70" stroke="#f4b282" strokeWidth="1.5" opacity="0.6"/>

    {/* Secondary smaller lump */}
    <path d="M70 160 L100 115 L140 125 L150 165 L110 180 Z" fill="url(#ore-2)" stroke="#7a4216" strokeWidth="2"/>
    <path d="M100 115 L120 145 L150 165" stroke="#3d2211" strokeWidth="2"/>

    {/* Third lump on right */}
    <path d="M250 150 L280 120 L330 135 L320 175 L270 180 Z" fill="url(#ore-1)" stroke="#5c3818" strokeWidth="2"/>

    {/* Ore metallic highlights */}
    <polygon points="170,90 190,85 180,105" fill="#ffd4b3" opacity="0.7"/>
    <polygon points="240,85 260,100 245,115" fill="#ffcaa0" opacity="0.6"/>
  </svg>
);

export const PremiumIngotGraphic: React.FC<{ className?: string }> = ({ className = "w-full h-48" }) => (
  <svg className={className} viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gold-copper-top" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fff0d0"/>
        <stop offset="25%" stopColor="#f4b875"/>
        <stop offset="60%" stopColor="#d97742"/>
        <stop offset="90%" stopColor="#a85d26"/>
      </linearGradient>
      <linearGradient id="gold-side" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#e59850"/>
        <stop offset="100%" stopColor="#683410"/>
      </linearGradient>
      <filter id="gold-glow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#d97742" floodOpacity="0.4"/>
      </filter>
    </defs>

    <g filter="url(#gold-glow)">
      <ellipse cx="200" cy="200" rx="150" ry="22" fill="#000" opacity="0.8"/>
      
      {/* High-purity double-stamped premium ingot */}
      <polygon points="70,50 330,50 365,115 35,115" fill="url(#gold-copper-top)" stroke="#ffe2b8" strokeWidth="2"/>
      <polygon points="35,115 365,115 335,185 65,185" fill="url(#gold-side)" stroke="#b87333" strokeWidth="2"/>
      
      {/* Mirror shine highlight */}
      <path d="M75 53 L325 53" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" opacity="0.9"/>
      <path d="M120 70 L280 70" stroke="#fff5e6" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      
      {/* Twin Royal Merchant Seals */}
      <g transform="translate(130, 82)">
        <circle cx="0" cy="0" r="16" fill="#8c4e1d" stroke="#f4b875" strokeWidth="2"/>
        <path d="M-8 -5 H8 M-5 0 H5 M-8 5 H8" stroke="#ffe2b8" strokeWidth="2"/>
      </g>
      <g transform="translate(270, 82)">
        <circle cx="0" cy="0" r="16" fill="#8c4e1d" stroke="#f4b875" strokeWidth="2"/>
        <path d="M-8 -5 H8 M-5 0 H5 M-8 5 H8" stroke="#ffe2b8" strokeWidth="2"/>
      </g>
      
      <text x="200" y="98" fill="#4a250a" fontSize="11" fontFamily="Cinzel" textAnchor="middle" fontWeight="900" letterSpacing="2">ROYAL MAGAN PURITY</text>
    </g>
  </svg>
);

export const CopperScrapGraphic: React.FC<{ className?: string }> = ({ className = "w-full h-48" }) => (
  <svg className={className} viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="basket-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#a37648"/>
        <stop offset="100%" stopColor="#4e351d"/>
      </linearGradient>
    </defs>
    
    <ellipse cx="200" cy="195" rx="130" ry="20" fill="#000" opacity="0.7"/>

    {/* Woven Basket body */}
    <path d="M100 120 C100 180 120 200 200 200 C280 200 300 180 300 120 Z" fill="url(#basket-grad)" stroke="#6e4d2e" strokeWidth="3"/>
    
    {/* Basket weave lines */}
    <path d="M120 130 C150 190 250 190 280 130 M110 150 C150 195 250 195 290 150 M115 170 C160 200 240 200 285 170" stroke="#3d2714" strokeWidth="2" strokeDasharray="6 3"/>
    <path d="M140 125 V195 M180 125 V198 M220 125 V198 M260 125 V195" stroke="#3d2714" strokeWidth="2" strokeDasharray="5 3"/>

    {/* Copper scrap metal pieces pouring out of basket top */}
    <path d="M110 115 L140 85 L180 110 L150 130 Z" fill="#d97742" stroke="#8c5a2b" strokeWidth="1.5"/>
    <path d="M160 90 L210 70 L240 100 L190 120 Z" fill="#b87333" stroke="#7a4216" strokeWidth="1.5"/>
    <path d="M220 80 L270 95 L290 120 L250 130 Z" fill="#e2874a" stroke="#8c5a2b" strokeWidth="1.5"/>
    <path d="M170 65 L200 50 L220 70 L190 85 Z" fill="#f4b282" stroke="#8c5a2b" strokeWidth="1.5"/>

    {/* Curved copper wires/shavings */}
    <path d="M130 95 Q170 50 210 90" stroke="#f4b282" strokeWidth="4" fill="none" strokeLinecap="round"/>
    <path d="M190 80 Q230 45 260 85" stroke="#d97742" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <path d="M150 110 Q180 75 240 105" stroke="#ffe2b8" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
  </svg>
);

export const ClayTabletGraphic: React.FC<{ className?: string }> = ({ className = "w-64 h-80" }) => (
  <svg className={className} viewBox="0 0 300 380" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="tablet-clay" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d2a679"/>
        <stop offset="40%" stopColor="#b38253"/>
        <stop offset="80%" stopColor="#8c5d33"/>
        <stop offset="100%" stopColor="#633d1c"/>
      </linearGradient>
      <filter id="clay-bevel" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="4" dy="10" stdDeviation="8" floodColor="#000" floodOpacity="0.75"/>
      </filter>
    </defs>

    <g filter="url(#clay-bevel)">
      {/* Rounded pillow-shaped clay tablet contour */}
      <path d="M35 25 C35 15, 60 10, 150 10 C240 10, 265 15, 265 25 C275 100, 275 280, 265 355 C265 365, 240 370, 150 370 C60 370, 35 365, 35 355 C25 280, 25 100, 35 25 Z" 
            fill="url(#tablet-clay)" stroke="#543315" strokeWidth="4"/>
      
      {/* Tablet surface cracks & texture */}
      <path d="M45 50 Q110 45 250 52 M42 90 Q150 85 255 92 M45 130 Q130 128 250 133 M42 170 Q160 165 258 172 M45 210 Q140 205 250 215 M42 250 Q150 245 255 252 M45 290 Q130 288 250 293 M42 330 Q160 325 255 332" 
            stroke="#45270d" strokeWidth="1" opacity="0.6"/>
            
      <path d="M210 10 Q225 60 215 110 M60 220 Q45 270 70 320" stroke="#361e09" strokeWidth="1.5" opacity="0.5"/>

      {/* Rows of cuneiform wedge impressions */}
      {/* Row 1 */}
      <path d="M60 35 L72 28 L68 42 Z M80 28 L95 28 L88 42 Z M105 28 L120 35 L112 42 Z M130 35 L150 35 L140 45 Z M160 28 L175 28 L168 42 Z M185 35 L205 35 L195 45 Z M215 28 L230 35 L222 42 Z" fill="#361d07"/>
      {/* Row 2 */}
      <path d="M55 75 L70 75 L62 85 Z M80 68 L95 75 L88 85 Z M105 75 L125 75 L115 88 Z M135 68 L150 68 L142 82 Z M165 75 L180 75 L172 85 Z M190 68 L210 78 L200 88 Z M220 75 L240 75 L230 88 Z" fill="#361d07"/>
      {/* Row 3 */}
      <path d="M60 115 L80 115 L70 128 Z M90 108 L105 118 L98 128 Z M115 115 L135 115 L125 128 Z M145 108 L160 108 L152 122 Z M170 115 L190 115 L180 128 Z M200 108 L220 118 L210 128 Z" fill="#361d07"/>
      {/* Row 4 */}
      <path d="M55 155 L70 155 L62 165 Z M80 148 L100 158 L90 168 Z M110 155 L130 155 L120 168 Z M140 148 L155 148 L147 162 Z M165 155 L185 155 L175 168 Z M195 148 L215 158 L205 168 Z" fill="#361d07"/>
      {/* Row 5 */}
      <path d="M60 195 L80 195 L70 208 Z M90 188 L105 198 L98 208 Z M115 195 L135 195 L125 208 Z M145 188 L165 188 L155 202 Z M175 195 L195 195 L185 208 Z M205 188 L225 198 L215 208 Z" fill="#361d07"/>
      {/* Row 6 */}
      <path d="M55 235 L75 235 L65 248 Z M85 228 L100 238 L92 248 Z M110 235 L130 235 L120 248 Z M140 228 L160 228 L150 242 Z M170 235 L190 235 L180 248 Z M200 228 L220 238 L210 248 Z" fill="#361d07"/>
      {/* Row 7 */}
      <path d="M60 275 L80 275 L70 288 Z M90 268 L110 278 L100 288 Z M120 275 L140 275 L130 288 Z M150 268 L170 268 L160 282 Z M180 275 L200 275 L190 288 Z M210 268 L230 278 L220 288 Z" fill="#361d07"/>
      {/* Row 8 */}
      <path d="M55 315 L75 315 L65 328 Z M85 308 L105 318 L95 328 Z M115 315 L135 315 L125 328 Z M145 308 L165 308 L155 322 Z M175 315 L195 315 L185 328 Z M205 308 L225 318 L215 328 Z" fill="#361d07"/>
      
      {/* Red archive wax seal mark */}
      <circle cx="230" cy="330" r="22" fill="#8c2318" opacity="0.85" stroke="#521009" strokeWidth="2"/>
      <path d="M220 325 H240 M222 330 H238 M220 335 H240" stroke="#f4b282" strokeWidth="1.5"/>
    </g>
  </svg>
);
