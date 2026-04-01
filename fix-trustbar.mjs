import { readFileSync, writeFileSync } from 'fs'
let c = readFileSync('src/config.js', 'utf8')
c = c.replace(/,\s*"Hablamos Espa.*?ol"\s*\]/, ']')
writeFileSync('src/config.js', c, 'utf8')
console.log('Fixed')
