import { readFileSync, writeFileSync } from 'fs'
let c = readFileSync('src/config.js', 'utf8')
let lines = c.split('\n')
lines = lines.filter(l => !l.includes('Hablamos'))
writeFileSync('src/config.js', lines.join('\n'), 'utf8')
console.log('Fixed')
