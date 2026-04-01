import { readFileSync, writeFileSync } from 'fs'
let n = readFileSync('src/components/Navbar.jsx', 'utf8')
let lines = n.split('\n')
lines = lines.filter(l => !l.includes('nav__logo-line2') && !l.includes('nav__bilingual'))
writeFileSync('src/components/Navbar.jsx', lines.join('\n'), 'utf8')
console.log('Fixed')
