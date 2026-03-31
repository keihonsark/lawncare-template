#!/usr/bin/env node

const readline = require('readline')
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

function run(cmd, cwd) {
  console.log(`  > ${cmd}`)
  return execSync(cmd, { cwd, stdio: 'pipe', encoding: 'utf-8' })
}

function ask(rl, question, defaultVal) {
  return new Promise((resolve) => {
    const suffix = defaultVal ? ` (${defaultVal})` : ''
    rl.question(`${question}${suffix}: `, (answer) => {
      resolve(answer.trim() || defaultVal || '')
    })
  })
}

async function collectInteractive() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

  const slug = await ask(rl, 'Client slug (e.g. tru-g-lawn)')
  if (!slug) { console.error('Error: slug is required.'); process.exit(1) }

  const name = await ask(rl, 'Business name (e.g. TRU G Lawn Care Services)')
  const tagline = await ask(rl, 'Tagline (e.g. "Modesto\'s Trusted Lawn Care Pros")')
  const phone = await ask(rl, 'Phone number (e.g. (209) 380-5205)')
  const email = await ask(rl, 'Email (e.g. joe@email.com)', '')
  const city = await ask(rl, 'City (e.g. Modesto)')
  const state = await ask(rl, 'State (e.g. CA)', 'CA')
  const owner = await ask(rl, 'Owner name (e.g. Joe)')
  const serviceAreas = await ask(rl, 'Service areas (comma separated)', city)
  const rating = await ask(rl, 'Google rating', '5.0')
  const reviewCount = await ask(rl, 'Google review count', '0')
  const mapsUrl = await ask(rl, 'Google Maps URL', '')

  console.log('')
  console.log('Select tier:')
  console.log('  1) starter')
  console.log('  2) growth')
  console.log('  3) pro')
  const tierChoice = await ask(rl, 'Tier (1/2/3)', '1')
  const tier = tierChoice === '2' ? 'growth' : tierChoice === '3' ? 'pro' : 'starter'

  rl.close()

  return { slug, name, tagline, phone, email, city, state, owner, serviceAreas, rating, reviewCount, mapsUrl, tier }
}

function collectFromFile(filePath) {
  const resolved = path.resolve(filePath)
  if (!fs.existsSync(resolved)) {
    console.error(`Error: file not found: ${resolved}`)
    process.exit(1)
  }
  const raw = fs.readFileSync(resolved, 'utf-8')
  const data = JSON.parse(raw)

  const required = ['slug', 'name', 'phone', 'city']
  for (const key of required) {
    if (!data[key]) {
      console.error(`Error: "${key}" is required in ${filePath}`)
      process.exit(1)
    }
  }

  return {
    slug: data.slug,
    name: data.name,
    tagline: data.tagline || '',
    phone: data.phone,
    email: data.email || '',
    city: data.city,
    state: data.state || 'CA',
    owner: data.owner || '',
    serviceAreas: data.serviceAreas || data.city,
    rating: data.rating || '5.0',
    reviewCount: data.reviewCount || '0',
    mapsUrl: data.mapsUrl || '',
    tier: data.tier || 'starter',
  }
}

async function main() {
  console.log('')
  console.log('===========================================')
  console.log('  SARK Agency — New Client Site Launcher')
  console.log('===========================================')
  console.log('')

  // Determine input mode
  const jsonArg = process.argv[2]
  let data

  if (jsonArg && jsonArg.endsWith('.json')) {
    console.log(`Reading config from: ${jsonArg}`)
    console.log('')
    data = collectFromFile(jsonArg)
  } else {
    data = await collectInteractive()
  }

  const { slug, name: businessName, tagline, phone, email, city, state, owner: ownerName, rating: googleRating, reviewCount: googleReviewCount, mapsUrl: googleMapsUrl, tier } = data

  const phoneTel = phone.replace(/\D/g, '')
  const serviceAreas = data.serviceAreas.split(',').map((s) => s.trim()).filter(Boolean)
  const region = `Greater ${city}`

  const sourceDir = __dirname
  const clientsBaseDir = path.resolve(sourceDir, '..', 'clients')
  const targetDir = path.join(clientsBaseDir, slug)

  console.log(`Launching: ${businessName}`)
  console.log(`Tier:      ${tier}`)
  console.log(`Target:    ${targetDir}`)
  console.log('')

  try {
    // STEP 1 — Clone
    console.log('[1/6] Cloning template...')
    if (!fs.existsSync(clientsBaseDir)) {
      fs.mkdirSync(clientsBaseDir, { recursive: true })
    }
    if (fs.existsSync(targetDir)) {
      console.error(`Error: ${targetDir} already exists. Delete it first or choose a different slug.`)
      process.exit(1)
    }
    run(`git clone "${sourceDir}" "${targetDir}"`)
    console.log('  Cloned successfully.')
    console.log('')

    // STEP 2 — Fresh git
    console.log('[2/6] Initializing fresh git repo...')
    fs.rmSync(path.join(targetDir, '.git'), { recursive: true, force: true })
    run('git init', targetDir)
    run('git add .', targetDir)
    run(`git commit -m "Initial commit — ${businessName}"`, targetDir)
    console.log('  Git initialized.')
    console.log('')

    // STEP 3 — Write config.js
    console.log('[3/6] Writing config.js...')
    const configContent = `const config = {
  business: {
    name: ${JSON.stringify(businessName)},
    shortName: ${JSON.stringify(businessName.replace(/ LLC| Inc| Services| Co/gi, '').trim())},
    tagline: ${JSON.stringify(tagline)},
    phone: ${JSON.stringify(phone)},
    phoneTel: ${JSON.stringify(phoneTel)},
    email: ${JSON.stringify(email)},
    address: ${JSON.stringify(`${city}, ${state}`)},
    city: ${JSON.stringify(city)},
    state: ${JSON.stringify(state)},
    region: ${JSON.stringify(region)},
    serviceAreas: ${JSON.stringify([...serviceAreas, 'And More'])},
    hours: "Mon\\u2013Fri: 7:00 AM \\u2013 6:00 PM, Sat: 8:00 AM \\u2013 4:00 PM",
    hoursShort: "Mon\\u2013Fri: 7am\\u20136pm, Sat: 8am\\u20134pm",
    founded: "${new Date().getFullYear()}",
    ownerName: ${JSON.stringify(ownerName)},
    successMessage: ${JSON.stringify(`${ownerName || 'We'} will call you within a few hours!`)},
    clientPortalUrl: "",
    adminUrl: "",
    formspreeId: "xpqodbdv",
    tier: ${JSON.stringify(tier)},
  },
  google: {
    placeId: "",
    mapsUrl: ${JSON.stringify(googleMapsUrl)},
    rating: ${googleRating},
    reviewCount: ${googleReviewCount},
    reviews: [
      { name: "Happy Customer", text: "Great service! Professional, on time, and my yard looks amazing. Highly recommend to anyone in ${city}." },
      { name: "Satisfied Client", text: "Best lawn care service in ${city}. Fair prices and excellent work every single time." },
      { name: "Local Homeowner", text: "Very professional crew. They show up on time, do quality work, and leave everything clean. Will use again!" },
    ],
  },
  seo: {
    title: ${JSON.stringify(`${businessName} | ${city} Lawn Care`)},
    description: ${JSON.stringify(`Professional lawn care services in ${city}, ${state}. Mowing, landscaping, irrigation and more. Free estimates.`)},
  },
}

export default config
`
    fs.writeFileSync(path.join(targetDir, 'src', 'config.js'), configContent, 'utf-8')
    run('git add src/config.js', targetDir)
    run(`git commit -m "Configure for ${businessName}"`, targetDir)
    console.log('  Config written and committed.')
    console.log('')

    // STEP 4 — GitHub repo
    console.log('[4/6] Creating GitHub repo...')
    try {
      run(`gh repo create keihonsark/${slug} --private --source=. --remote=origin --push`, targetDir)
      console.log('  GitHub repo created and pushed.')
    } catch (e) {
      console.error('  Warning: GitHub repo creation failed. You may need to run gh auth login first.')
      console.error(`  Error: ${e.message}`)
      console.log('  Continuing without GitHub...')
    }
    console.log('')

    // STEP 5 — Vercel deploy
    console.log('[5/6] Deploying to Vercel...')
    let vercelUrl = ''
    try {
      const vercelArgs = `--yes --name=${slug}`
      const token = process.env.VERCEL_TOKEN
      const tokenFlag = token ? ` --token=${token}` : ''
      const output = run(`npx vercel ${vercelArgs}${tokenFlag}`, targetDir)
      const urlMatch = output.match(/https:\/\/[^\s]+\.vercel\.app/)
      vercelUrl = urlMatch ? urlMatch[0] : '(check Vercel dashboard)'
      console.log(`  Deployed: ${vercelUrl}`)
    } catch (e) {
      console.error('  Warning: Vercel deploy failed.')
      console.error(`  Error: ${e.message}`)
      vercelUrl = '(deploy manually with: cd ' + targetDir + ' && npx vercel --yes)'
    }
    console.log('')

    // STEP 6 — Summary
    console.log('===========================================')
    console.log('  LAUNCH COMPLETE')
    console.log('===========================================')
    console.log('')
    console.log(`  Client:      ${businessName}`)
    console.log(`  Tier:        ${tier}`)
    console.log(`  Slug:        ${slug}`)
    console.log(`  Directory:   ${targetDir}`)
    console.log(`  GitHub:      https://github.com/keihonsark/${slug}`)
    console.log(`  Vercel:      ${vercelUrl}`)
    console.log(`  Config:      ${path.join(targetDir, 'src', 'config.js')}`)
    console.log('')
    console.log('  Next steps:')
    console.log('  1. Replace logo and hero image in public/')
    console.log('  2. Update reviews in src/config.js with real ones')
    console.log('  3. Update ChatWidget responses for this client')
    console.log('  4. Run: npx vercel --prod  (to promote to production)')
    console.log('  5. See launch-checklist.md for full checklist')
    console.log('')

  } catch (err) {
    console.error('')
    console.error('Launch failed:')
    console.error(err.message)
    process.exit(1)
  }
}

main()
