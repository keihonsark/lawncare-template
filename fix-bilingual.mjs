import { readFileSync, writeFileSync } from 'fs'
let c = readFileSync('src/config.js', 'utf8')
let lines = c.split('\n')
let idx = lines.findIndex(l => l.includes('licensed:'))
if (idx !== -1) {
  lines.splice(idx + 1, 0, '      bilingual: { title: "Bilingual Service", sub: "English & Spanish Available" },')
}
writeFileSync('src/config.js', lines.join('\n'), 'utf8')
console.log('Fixed')
