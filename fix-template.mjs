import { readFileSync, writeFileSync } from 'fs'

// ── 1. NAVBAR — revert image logo back to text spans ──────────────────────
const navbarPath = './src/components/Navbar.jsx'
let navbar = readFileSync(navbarPath, 'utf8')
navbar = navbar.replace(
  /<Link to="\/" className="nav__logo">\s*<img[^/]*\/>\s*<\/Link>/,
  `<Link to="/" className="nav__logo">
          <span className="nav__logo-text">
            <span className="nav__logo-line1">{name.split(' ')[0]}</span>
            <span className="nav__logo-line2">{name.split(' ').slice(1).join(' ')}</span>
          </span>
        </Link>`
)
writeFileSync(navbarPath, navbar, 'utf8')
console.log('✓ Navbar logo reverted to text spans')

// ── 2. FOOTER — revert image logo back to text spans ──────────────────────
const footerPath = './src/components/Footer.jsx'
let footer = readFileSync(footerPath, 'utf8')
footer = footer.replace(
  /<div className="footer__logo">\s*<img[^/]*\/>\s*<\/div>/,
  `<div className="footer__logo">
            <span className="footer__logo-line1">{name.split(' ')[0]}</span>
            <span className="footer__logo-line2">{name.split(' ').slice(1).join(' ')}</span>
          </div>`
)
writeFileSync(footerPath, footer, 'utf8')
console.log('✓ Footer logo reverted to text spans')

// ── 3. STATSCOUNTER — pull reviewCount and founded from config ─────────────
const statsPath = './src/components/StatsCounter.jsx'
let stats = readFileSync(statsPath, 'utf8')

// Add config import if not already there
if (!stats.includes("import config from '../config'")) {
  stats = stats.replace(
    "import './StatsCounter.css'",
    "import './StatsCounter.css'\nimport config from '../config'"
  )
}

// Add destructure after imports
if (!stats.includes('reviewCount')) {
  stats = stats.replace(
    "export default function StatsCounter()",
    "const { reviewCount, founded } = config.business\nconst yearsExp = new Date().getFullYear() - parseInt(founded) || 5\n\nexport default function StatsCounter()"
  )
}

// Replace hardcoded [X] review count
stats = stats.replace(
  `<span className="stats__num stats__num--gradient">[X]</span>`,
  `<span className="stats__num stats__num--gradient">{reviewCount}</span>`
)

// Replace hardcoded [X]+ years
stats = stats.replace(
  `<span className="stats__num stats__num--gradient">[X]+</span>`,
  `<CountUp end={yearsExp} suffix="+" />`
)

writeFileSync(statsPath, stats, 'utf8')
console.log('✓ StatsCounter now pulls from config')

// ── 4. BLOGPOSTS — replace [City] and [Region] with config values ──────────
const blogPath = './src/data/blogPosts.js'
let blog = readFileSync(blogPath, 'utf8')

// Add config import at top
if (!blog.includes("import config from '../config'")) {
  blog = "import config from '../config'\n\nconst { city, region } = config.business\n\n" + blog
}

// Replace all [City] and [Region] with template literals
blog = blog.replace(/const blogPosts = \[/, 'const blogPosts = [')

// Replace string-based [City] and [Region] — convert affected strings to template literals
blog = blog.replace(
  /'\[City\]([^']*)'/g,
  (match, rest) => `\`\${city}${rest.replace(/`/g, "'")}\``
)
blog = blog.replace(
  /"\[City\]([^"]*)"/g,
  (match, rest) => `\`\${city}${rest.replace(/`/g, "'")}\``
)
blog = blog.replace(/\[City\]/g, '${city}')
blog = blog.replace(/\[Region\]/g, '${region}')

// Make sure any plain strings with ${city} are template literals
blog = blog.replace(/'([^']*\$\{city\}[^']*)'/g, '`$1`')
blog = blog.replace(/"([^"]*\$\{city\}[^"]*)"/g, '`$1`')
blog = blog.replace(/'([^']*\$\{region\}[^']*)'/g, '`$1`')
blog = blog.replace(/"([^"]*\$\{region\}[^"]*)"/g, '`$1`')

writeFileSync(blogPath, blog, 'utf8')
console.log('✓ blogPosts.js now uses config city and region')

console.log('\n✅ Master template fixed. Safe to copy for new clients.')
