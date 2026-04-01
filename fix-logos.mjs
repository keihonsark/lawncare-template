import { readFileSync, writeFileSync } from 'fs'
let h = readFileSync('src/components/Hero.jsx', 'utf8')
h = h.split('\n').filter(l => !l.includes('hero__logo-line2')).join('\n')
writeFileSync('src/components/Hero.jsx', h, 'utf8')
let f = readFileSync('src/components/Footer.jsx', 'utf8')
f = f.split('\n').filter(l => !l.includes('footer__logo-line2')).join('\n')
writeFileSync('src/components/Footer.jsx', f, 'utf8')
console.log('Fixed both')
