/**
 * fix-template-final.mjs
 * 
 * Run from: C:\Users\SS\Desktop\clientwebsites\lawncare\lawncare-template
 * Command:  node fix-template-final.mjs
 * 
 * This script:
 * 1. Overwrites src/config.js with clean generic demo data
 * 2. Fixes Hero.jsx — logo image → text spans from config
 * 3. Fixes Navbar.jsx — logo image → text spans from config
 * 4. Fixes Footer.jsx — logo image → text spans from config
 * 5. Fixes Estimate.jsx — hardcoded text → config-driven text
 */

import { readFileSync, writeFileSync } from 'fs'

// ─── 1. OVERWRITE config.js ────────────────────────────────────────────────────

const newConfig = `const config = {
  business: {
    name: "Green Valley Lawn Care",
    shortName: "Green Valley",
    tagline: "Where Every Yard Becomes a Masterpiece",
    phone: "(555) 123-4567",
    phoneSpanish: "(555) 987-6543",
    phoneTel: "5551234567",
    phoneSpanishTel: "5559876543",
    email: "hello@greenvalleylawncare.com",
    address: "123 Main Street, Anytown, ST 00000",
    city: "Anytown",
    state: "ST",
    region: "Central Valley",
    serviceAreas: ["Anytown", "Riverside", "Oakdale", "Springfield", "Brookfield", "And More"],
    hours: "Mon \\u2013 Sun: 6:00 AM \\u2013 9:00 PM",
    hoursShort: "Mon \\u2013 Sun: 6AM \\u2013 9PM",
    founded: "2020",
    ownerName: "John Smith",
    license: "Lic # 0000000",
    successMessage: "We'll be in touch within a few hours!",
    formspreeId: "",
    facebookHandle: "",
  },
  google: {
    placeId: "",
    mapsUrl: "",
    rating: 5.0,
    reviewCount: "50+",
    reviews: [
      { name: "Happy Customer", text: "Absolutely top-notch service. Professional, on time, and the yard looks amazing every single week." },
      { name: "Local Homeowner", text: "These guys are the real deal. Reliable, detail-oriented, and always go the extra mile." },
      { name: "Satisfied Client", text: "Best lawn crew we've ever had. We get compliments from our neighbors all the time now." },
    ],
  },
  content: {
    about: {
      badge: "Top-Rated on Google & Facebook",
      eyebrow: "About Green Valley Lawn Care",
      headline: "Local Crew. Real Results.",
      headlineAccent: "Results.",
      body: "Green Valley Lawn Care is a locally owned lawn care and landscaping company built on hard work, reliability, and pride in every yard we touch. We bring professional-grade results to homeowners across Anytown and surrounding areas. From routine mowing to full landscape transformations \\u2013 we treat every property like it's our own.",
      bullets: [
        "Licensed, Insured & Bonded",
        "Locally Owned & Operated",
        "Weekly & Bi-Weekly Plans",
        "Free On-Site Estimates",
        "Hablamos Espa\\u00f1ol",
      ],
    },
    hero: {
      cyclingWords: ["Our Passion.", "Our Craft.", "Our Promise.", "Done Right."],
    },
    cta: {
      headline: "Ready to Transform Your Yard?",
      subheadline: "Call or text us today for a free on-site estimate \\u2013 no pressure, no obligation.",
    },
    trustBar: [
      "Licensed, Insured & Bonded",
      "Locally Owned & Operated",
      "Free Estimates",
      "Anytown & Surrounding Areas",
      "Hablamos Espa\\u00f1ol",
    ],
    trustBadges: {
      google: { title: "5.0 \\u2605\\u2605\\u2605\\u2605\\u2605", sub: "" },
      facebook: { title: "Active on Facebook", sub: "" },
      licensed: { title: "Lic # 0000000", sub: "Licensed \\u00b7 Insured \\u00b7 Bonded" },
      bilingual: { title: "Hablamos Espa\\u00f1ol", sub: "English & Spanish Service" },
    },
    services: {
      eyebrow: "What We Do",
      headline: "Our Services",
      subheadline: "Professional lawn care and landscaping solutions for residential and commercial properties in Anytown and the Central Valley.",
    },
    footer: {
      tagline: "Professional lawn care and landscaping trusted by Anytown homeowners. Hablamos Espa\\u00f1ol.",
    },
    servicePages: {
      whyTitle: "Why Choose Us",
      ctaTitle: "Ready to Get Started?",
      ctaSub: "Call or text us today for a free on-site estimate.",
    },
    blogAuthor: "The Green Valley Team",
  },
  seo: {
    title: "Green Valley Lawn Care | Anytown, ST",
    description: "Professional lawn care, landscaping, and tree services in Anytown, ST. Licensed, insured & bonded. Hablamos Espa\\u00f1ol. Free estimates. Call (555) 123-4567.",
  },
}

export default config
`

writeFileSync('src/config.js', newConfig, 'utf8')
console.log('✅ config.js — replaced with clean generic demo data')

// ─── 2. FIX Hero.jsx ───────────────────────────────────────────────────────────

let hero = readFileSync('src/components/Hero.jsx', 'utf8')

hero = hero.replace(
  `<img src="/monteverde-logo.png" alt="MonteVerde Landscaping" className="hero__logo" />`,
  `<div className="hero__logo">
          <span className="hero__logo-line1">{config.business.shortName}</span>
          <span className="hero__logo-line2">Lawn Care</span>
        </div>`
)

writeFileSync('src/components/Hero.jsx', hero, 'utf8')
console.log('✅ Hero.jsx — logo image replaced with config-driven text spans')

// ─── 3. FIX Navbar.jsx ─────────────────────────────────────────────────────────

let navbar = readFileSync('src/components/Navbar.jsx', 'utf8')

navbar = navbar.replace(
  `<img src="/monteverde-logo.png" alt="MonteVerde Landscaping" className="nav__logo-img" />`,
  `<span className="nav__logo-line1">{config.business.shortName}</span>
          <span className="nav__logo-line2">Lawn Care</span>`
)

writeFileSync('src/components/Navbar.jsx', navbar, 'utf8')
console.log('✅ Navbar.jsx — logo image replaced with config-driven text spans')

// ─── 4. FIX Footer.jsx ─────────────────────────────────────────────────────────

let footer = readFileSync('src/components/Footer.jsx', 'utf8')

footer = footer.replace(
  `<img src="/monteverde-logo.png" alt="MonteVerde Landscaping" className="footer__logo-img" />`,
  `<span className="footer__logo-line1">{config.business.shortName}</span>
            <span className="footer__logo-line2">Lawn Care</span>`
)

writeFileSync('src/components/Footer.jsx', footer, 'utf8')
console.log('✅ Footer.jsx — logo image replaced with config-driven text spans')

// ─── 5. FIX Estimate.jsx ───────────────────────────────────────────────────────

let estimate = readFileSync('src/pages/Estimate.jsx', 'utf8')

estimate = estimate.replace(
  `<span className="est-card__logo-line1">MonteVerde</span>
            <span className="est-card__logo-line2">Landscaping</span>`,
  `<span className="est-card__logo-line1">{config.business.shortName}</span>
            <span className="est-card__logo-line2">Lawn Care</span>`
)

writeFileSync('src/pages/Estimate.jsx', estimate, 'utf8')
console.log('✅ Estimate.jsx — hardcoded MonteVerde replaced with config-driven text')

// ─── DONE ───────────────────────────────────────────────────────────────────────

console.log('')
console.log('🎉 All 5 files fixed. Template is clean.')
console.log('')
console.log('Next steps:')
console.log('  git add .')
console.log('  git commit -m "Lock template: remove all MonteVerde references, generic demo data"')
console.log('  git push origin main')
console.log('  npx vercel --prod --force')
