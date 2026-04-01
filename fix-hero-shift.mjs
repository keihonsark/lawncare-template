import { readFileSync, writeFileSync } from 'fs'
let css = readFileSync('src/components/Hero.css', 'utf8')
css = css.replace('display: inline-block;', 'display: block;')
writeFileSync('src/components/Hero.css', css, 'utf8')
console.log('Fixed')
