import { readFileSync, writeFileSync } from 'fs'
let css = readFileSync('src/components/Hero.css', 'utf8')
css = css.replace('display: block;', 'display: inline-block;')
css = css.replace('.hero__content {', '.hero__content {\n  text-align: center;')
css = css.replace('align-items: flex-start;', 'align-items: center;')
writeFileSync('src/components/Hero.css', css, 'utf8')
console.log('Fixed')
