interface FlagProps {
  className?: string;
}

export function PanamaFlag({ className = "w-12 h-9" }: FlagProps) {
  return (
    <svg className={className} viewBox="0 0 512 384" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="384" fill="#fff"/>
      <rect width="256" height="192" fill="#fff"/>
      <rect x="256" width="256" height="192" fill="#DA121A"/>
      <rect y="192" width="256" height="192" fill="#0047AB"/>
      <rect x="256" y="192" width="256" height="192" fill="#fff"/>
      <polygon points="128,48 138,78 170,78 144,98 154,128 128,108 102,128 112,98 86,78 118,78" fill="#0047AB"/>
      <polygon points="384,240 394,270 426,270 400,290 410,320 384,300 358,320 368,290 342,270 374,270" fill="#DA121A"/>
    </svg>
  );
}

export function CostaRicaFlag({ className = "w-12 h-9" }: FlagProps) {
  return (
    <svg className={className} viewBox="0 0 512 384" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="384" fill="#002B7F"/>
      <rect y="64" width="512" height="256" fill="#fff"/>
      <rect y="128" width="512" height="128" fill="#CE1126"/>
    </svg>
  );
}

export function UruguayFlag({ className = "w-12 h-9" }: FlagProps) {
  return (
    <svg className={className} viewBox="0 0 512 384" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="384" fill="#fff"/>
      <rect y="42.67" width="512" height="42.67" fill="#0038A8"/>
      <rect y="128" width="512" height="42.67" fill="#0038A8"/>
      <rect y="213.33" width="512" height="42.67" fill="#0038A8"/>
      <rect y="298.67" width="512" height="42.67" fill="#0038A8"/>
      <rect width="213.33" height="213.33" fill="#fff"/>
      <circle cx="106.67" cy="106.67" r="53.33" fill="#FCD116"/>
      <circle cx="106.67" cy="106.67" r="40" fill="#FCD116"/>
      <g fill="#FCD116">
        <polygon points="106.67,26.67 113.33,53.33 140,53.33 120,70 126.67,96.67 106.67,80 86.67,96.67 93.33,70 73.33,53.33 100,53.33"/>
      </g>
    </svg>
  );
}

export function ChileFlag({ className = "w-12 h-9" }: FlagProps) {
  return (
    <svg className={className} viewBox="0 0 512 384" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="384" fill="#D52B1E"/>
      <rect width="512" height="192" fill="#fff"/>
      <rect width="170.67" height="192" fill="#0039A6"/>
      <polygon points="85.33,48 95.33,78 127.33,78 101.33,98 111.33,128 85.33,108 59.33,128 69.33,98 43.33,78 75.33,78" fill="#fff"/>
    </svg>
  );
}
