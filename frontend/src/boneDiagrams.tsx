const STROKE = '#3730a3'
const FILL = '#eef2ff'

function LongBone() {
  return (
    <svg viewBox="0 0 100 220" width="100" height="220">
      <path
        d="M30 10 Q20 10 20 25 Q20 40 35 45 L40 175 Q25 180 22 195 Q20 210 35 210 L65 210 Q80 210 78 195 Q75 180 60 175 L65 45 Q80 40 80 25 Q80 10 70 10 Q50 2 30 10 Z"
        fill={FILL}
        stroke={STROKE}
        strokeWidth="3"
      />
    </svg>
  )
}

function FlatCup() {
  return (
    <svg viewBox="0 0 160 140" width="160" height="140">
      <path
        d="M20 30 Q10 80 40 110 Q70 135 110 120 Q145 105 150 65 Q152 30 120 15 Q80 -2 50 8 Q25 15 20 30 Z"
        fill={FILL}
        stroke={STROKE}
        strokeWidth="3"
      />
      <circle cx="90" cy="70" r="28" fill="white" stroke={STROKE} strokeWidth="3" />
    </svg>
  )
}

export const boneDiagrams: Record<string, JSX.Element> = {
  'Greater Trochanter': (
    <svg viewBox="0 0 100 220" width="100" height="220">
      <path
        d="M40 10 Q30 10 30 25 Q30 40 45 45 L50 175 Q35 180 32 195 Q30 210 45 210 L70 210 Q82 210 80 195 Q78 180 65 175 L68 45 Q78 42 78 30 L78 25 Q95 20 92 35 Q90 50 68 48"
        fill={FILL}
        stroke={STROKE}
        strokeWidth="3"
      />
      <circle cx="88" cy="32" r="5" fill={STROKE} />
    </svg>
  ),
  'Coracoid Process': (
    <svg viewBox="0 0 160 140" width="160" height="140">
      <path
        d="M20 100 Q15 60 45 45 Q75 32 100 45 Q120 55 118 30 Q116 12 135 15 Q150 18 145 35 Q140 55 115 60"
        fill="none"
        stroke={STROKE}
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path d="M15 95 Q40 130 85 125 Q115 120 120 95 Q95 115 55 108 Q30 102 15 95 Z" fill={FILL} stroke={STROKE} strokeWidth="3" />
    </svg>
  ),
  Femur: <LongBone />,
  Tibia: <LongBone />,
  Patella: (
    <svg viewBox="0 0 120 140" width="120" height="140">
      <path
        d="M60 10 Q100 10 105 55 Q108 90 85 115 Q70 130 60 130 Q50 130 35 115 Q12 90 15 55 Q20 10 60 10 Z"
        fill={FILL}
        stroke={STROKE}
        strokeWidth="3"
      />
    </svg>
  ),
  Acetabulum: <FlatCup />,
  'Phalang 1': (
    <svg viewBox="0 0 60 140" width="60" height="140">
      <path
        d="M18 10 Q10 10 10 22 Q10 32 20 36 L22 108 Q12 112 10 122 Q8 132 18 132 L42 132 Q52 132 50 122 Q48 112 38 108 L40 36 Q50 32 50 22 Q50 10 42 10 Q30 4 18 10 Z"
        fill={FILL}
        stroke={STROKE}
        strokeWidth="3"
      />
    </svg>
  ),
  Radius: <LongBone />,
}
