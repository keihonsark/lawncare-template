import { readFileSync, writeFileSync } from 'fs'
let c = readFileSync('src/config.js', 'utf8')
c = c.replace('founded: "2020",', 'founded: "2020",\n    yearsExperience: 10,')
writeFileSync('src/config.js', c, 'utf8')
let s = readFileSync('src/components/StatsCounter.jsx', 'utf8')
s = s.replace('const { reviewCount, founded } = config.business', 'const { reviewCount, yearsExperience } = config.business')
s = s.replace('const yearsExp = new Date().getFullYear() - parseInt(founded) || 5', 'const yearsExp = yearsExperience || 10')
writeFileSync('src/components/StatsCounter.jsx', s, 'utf8')
console.log('Fixed')
