const config = {
  business: {
    name: "[Business Name]",
    shortName: "[Business Name]",
    tagline: "Your local lawn and landscaping crew. Weekly maintenance, sod installs, irrigation, and more — done right every time.",
    phone: "[(XXX) XXX-XXXX]",
    phoneTel: "0000000000",
    email: "[hello@yourdomain.com]",
    address: "[City], [State]",
    city: "[City]",
    state: "[ST]",
    region: "[Region]",
    serviceAreas: ["[City]", "[City]", "[City]", "[City]", "[City]", "And More"],
    hours: "Mon – Sun: 6:00 AM – 9:00 PM",
    hoursShort: "Mon – Sun: 6AM – 9PM",
    founded: "[Year]",
    ownerName: "[Owner Name]",
    successMessage: "We'll be in touch within a few hours!",
    /* TODO: Replace with client Formspree endpoint */
    formspreeId: "",
    facebookHandle: "[facebook-handle]",
  },
  google: {
    placeId: "",
    mapsUrl: "",
    rating: 5.0,
    reviewCount: "[X]",
    reviews: [
      { name: "Happy Customer", text: "Absolutely top-notch service. Professional, on time, and the yard looks amazing every single week." },
      { name: "Local Homeowner", text: "These guys are the real deal. Reliable, detail-oriented, and always go the extra mile." },
      { name: "Satisfied Client", text: "Best lawn crew we've ever had. We get compliments from our neighbors all the time now." },
    ],
  },
  content: {
    about: {
      badge: "Top-Rated on Google & Facebook",
      eyebrow: "About [Business Name]",
      headline: "Local Crew. Real Results.",
      headlineAccent: "Results.",
      body: "[Business Name] is a locally owned lawn care and landscaping company built on hard work, reliability, and pride in every yard we touch. We bring professional-grade results to homeowners across [City] and surrounding areas. From routine mowing to full landscape transformations — we treat every property like it's our own.",
      bullets: [
        "Licensed, Insured & Bonded",
        "Locally Owned & Operated",
        "Weekly & Bi-Weekly Plans",
        "Free On-Site Estimates",
        "Bilingual Service Available",
      ],
    },
    hero: {
      cyclingWords: ["Our Passion.", "Our Craft.", "Our Promise.", "Done Right."],
    },
    cta: {
      headline: "Ready to Transform Your Yard?",
      subheadline: "Call or text us today for a free on-site estimate — no pressure, no obligation.",
    },
    trustBar: [
      "Licensed, Insured & Bonded",
      "Locally Owned & Operated",
      "Free Estimates",
      "[City] & Surrounding Areas",
      "Bilingual Service Available",
    ],
    trustBadges: {
      google: { title: "5.0 ★★★★★", sub: "" },
      facebook: { title: "Active on Facebook", sub: "" },
      licensed: { title: "Licensed · Insured · Bonded", sub: "Verified" },
      bilingual: { title: "Bilingual Service", sub: "English & Spanish Service" },
    },
    services: {
      eyebrow: "What We Do",
      headline: "Our Services",
      subheadline: "Comprehensive lawn care and landscaping solutions for residential and commercial properties.",
    },
    footer: {
      tagline: "Professional lawn care, landscaping, and irrigation services trusted by local homeowners.",
    },
    servicePages: {
      whyTitle: "Why Choose Us",
      ctaTitle: "Ready to Get Started?",
      ctaSub: "Call or text us today for a free on-site estimate.",
    },
    blogAuthor: "The Team",
  },
  seo: {
    title: "[Business Name] | Lawn Care & Landscaping",
    description: "Professional lawn care, landscaping, and irrigation services. Licensed, insured & bonded. Free estimates.",
  },
}

export default config
