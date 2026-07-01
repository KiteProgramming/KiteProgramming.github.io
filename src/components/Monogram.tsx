interface MonogramProps {
  size?: number
  className?: string
}

/** "TP" monogram in the brand gradient — used in the nav, footer, and as the favicon seed. */
export default function Monogram({ size = 40, className = '' }: MonogramProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Tasos Panayi monogram"
    >
      <defs>
        <linearGradient id="tp-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3B82F6" />
          <stop offset="0.55" stopColor="#0EA5E9" />
          <stop offset="1" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="15" fill="#0F172A" />
      <rect
        x="1.75"
        y="1.75"
        width="60.5"
        height="60.5"
        rx="13.5"
        fill="none"
        stroke="url(#tp-grad)"
        strokeOpacity="0.55"
        strokeWidth="1.5"
      />
      <text
        x="32"
        y="44"
        textAnchor="middle"
        fontFamily="'Space Grotesk', system-ui, sans-serif"
        fontSize="30"
        fontWeight="700"
        fill="url(#tp-grad)"
      >
        TP
      </text>
    </svg>
  )
}
