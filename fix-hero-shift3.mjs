import { readFileSync, writeFileSync } from 'fs'
let css = readFileSync('src/components/Hero.css', 'utf8')
css = css.replace('gap: 1rem;', 'gap: 1rem;\n  justify-content: center;')
writeFileSync('src/components/Hero.css', css, 'utf8')
console.log('Fixed')
