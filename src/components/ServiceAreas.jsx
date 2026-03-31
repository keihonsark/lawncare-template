import './ServiceAreas.css'

const areas = [
  'Fresno', 'Clovis', 'Sanger', 'Madera',
  'Selma', 'Reedley', 'Kerman', 'And More',
]

const cities = [
  { name: 'Clovis', x: 355, y: 145 },
  { name: 'Madera', x: 120, y: 80 },
  { name: 'Sanger', x: 390, y: 265 },
  { name: 'Selma', x: 185, y: 325 },
  { name: 'Reedley', x: 400, y: 340 },
  { name: 'Kerman', x: 75, y: 215 },
]

export default function ServiceAreas() {
  return (
    <section id="areas" className="areas fade-up">
      <div className="container areas__grid">
        <div className="areas__content">
          <p className="areas__eyebrow">Service Areas</p>
          <h2 className="areas__heading sh__heading">Serving the Central <span className="sh__outline">Valley</span></h2>
          <div className="sh__line" style={{ margin: '0 0 0.75rem 0' }} />
          <p className="areas__text">
            The Lawncare Bros LLC proudly serves homeowners and businesses throughout
            the greater Fresno area. From Clovis to Madera, Sanger to Kerman —
            if you're in the Central Valley, we've got you covered.
          </p>
          <div className="areas__tags">
            {areas.map((a) => (
              <span key={a} className="areas__tag">{a}</span>
            ))}
          </div>
        </div>

        <div className="areas__map">
          <svg viewBox="0 0 500 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="areas__svg" preserveAspectRatio="xMidYMid slice">
            <defs>
              {/* Radial glow from center */}
              <radialGradient id="centerGlow" cx="50%" cy="48%" r="50%">
                <stop offset="0%" stopColor="#4caf6e" stopOpacity="0.18" />
                <stop offset="40%" stopColor="#4caf6e" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#4caf6e" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Background fill */}
            <rect width="500" height="420" fill="#0a0a0a" />

            {/* Topo grid pattern */}
            {Array.from({ length: 20 }, (_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 22} x2="500" y2={i * 22} stroke="#4caf6e" strokeWidth="0.3" opacity="0.06" />
            ))}
            {Array.from({ length: 24 }, (_, i) => (
              <line key={`v${i}`} x1={i * 22} y1="0" x2={i * 22} y2="420" stroke="#4caf6e" strokeWidth="0.3" opacity="0.06" />
            ))}

            {/* Radial glow */}
            <rect width="500" height="420" fill="url(#centerGlow)" />

            {/* Static radius rings */}
            <circle cx="250" cy="200" r="100" stroke="#4caf6e" strokeWidth="0.8" opacity="0.12" />
            <circle cx="250" cy="200" r="170" stroke="#4caf6e" strokeWidth="0.6" opacity="0.08" />

            {/* Animated radar pulse ring */}
            <circle cx="250" cy="200" r="60" stroke="#4caf6e" strokeWidth="1.5" fill="none" className="areas__radar" />

            {/* Dashed flow lines to cities */}
            {cities.map((c, i) => (
              <line key={i} x1="250" y1="200" x2={c.x} y2={c.y} stroke="#4caf6e" strokeWidth="1" strokeDasharray="8 5" opacity="0.5" className="areas__flowline" />
            ))}

            {/* Center glow circles */}
            <circle cx="250" cy="200" r="35" fill="#4caf6e" opacity="0.08" className="areas__glow" />
            <circle cx="250" cy="200" r="20" fill="#4caf6e" opacity="0.12" className="areas__glow" />

            {/* Center pin */}
            <path d="M250 170c-10 0-18 8-18 18 0 12.6 18 31 18 31s18-18.4 18-31c0-10-8-18-18-18z" fill="#4caf6e" className="areas__pin" />
            <circle cx="250" cy="188" r="6" fill="#0a0a0a" />

            {/* FRESNO label */}
            <text x="250" y="255" textAnchor="middle" fontFamily="Outfit, sans-serif" fontSize="34" fontWeight="800" fill="#4caf6e" className="areas__fresno-text">FRESNO</text>

            {/* City badges */}
            {cities.map((c) => (
              <g key={c.name}>
                {/* Outer glow dot */}
                <circle cx={c.x} cy={c.y} r="12" fill="#4caf6e" opacity="0.08" />
                {/* Dot */}
                <circle cx={c.x} cy={c.y} r="6" fill="#4caf6e" opacity="0.9" />
                <circle cx={c.x} cy={c.y} r="3" fill="#0a0a0a" />
                {/* Label pill */}
                <rect x={c.x - 32} y={c.y - 28} width="64" height="20" rx="10" fill="#0f4d25" opacity="0.9" />
                <text x={c.x} y={c.y - 14} textAnchor="middle" fontFamily="Outfit, sans-serif" fontSize="11" fontWeight="600" fill="#fff">{c.name}</text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  )
}
