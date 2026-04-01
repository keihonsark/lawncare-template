import { readFileSync, writeFileSync } from 'fs'
let c = readFileSync('src/config.js', 'utf8')
let lines = c.split('\n')
let idx = lines.findIndex(l => l.includes('footer: {'))
if (idx !== -1) {
  lines.splice(idx + 1, 0, '      tagline: "Professional lawn care and landscaping trusted by local homeowners.",')
}
writeFileSync('src/config.js', lines.join('\n'), 'utf8')
console.log('Fixed - line inserted at', idx + 1)
