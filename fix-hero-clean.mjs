import { readFileSync, writeFileSync } from 'fs'
let css = readFileSync('src/components/Hero.css', 'utf8')
css = css.replace('max-width: 520px;', 'max-width: 520px;\n  margin-left: auto;\n  margin-right: auto;')
writeFileSync('src/components/Hero.css', css, 'utf8')
console.log('Fixed')
