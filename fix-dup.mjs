import { readFileSync, writeFileSync } from 'fs'
let c = readFileSync('src/config.js', 'utf8')
let lines = c.split('\n')
let found = false
lines = lines.filter(l => {
  if (l.includes('Professional lawn care')) {
    if (found) return false
    found = true
  }
  return true
})
writeFileSync('src/config.js', lines.join('\n'), 'utf8')
console.log('Fixed')
