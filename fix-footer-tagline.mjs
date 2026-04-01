import { readFileSync, writeFileSync } from 'fs'
let c = readFileSync('src/config.js', 'utf8')
c = c.replace('footer: {\n    },', 'footer: {\n      tagline: "Professional lawn care and landscaping trusted by local homeowners.",\n    },')
writeFileSync('src/config.js', c, 'utf8')
console.log('Fixed')
