import { readFileSync, writeFileSync } from 'fs'
let css = readFileSync('src/components/Hero.css', 'utf8')
css = css.replace('text-align: center;', 'text-align: center;\n  width: 100%;')
writeFileSync('src/components/Hero.css', css, 'utf8')
console.log('Fixed')
