import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useFadeUp from '../../hooks/useFadeUp'
import StatsCounter from '../../components/StatsCounter'
import Reviews from '../../components/Reviews'
import ProcessSection from '../../components/ProcessSection'
import './ServicePage.css'
import config from '../../config'

const included = [
  'Mulch delivery & spreading',
  'River rock installation',
  'Weed barrier placement',
  'Old material removal',
  'Bed edging & prep',
  'Clean & even coverage',
]

const process = [
  'Free estimate & material selection',
  'We prep the beds',
  'Material delivered & installed',
  'Final cleanup & inspection',
]

const faqs = [
  {
    q: 'What type of mulch do you recommend?',
    a: "We typically recommend bark mulch or wood chips for most local landscapes. They retain moisture well in the heat, suppress weeds, and break down slowly to feed the soil.",
  },
  {
    q: 'How often should mulch be replaced?',
    a: "In our climate, we recommend refreshing mulch once a year — usually in spring. River rock is more permanent and rarely needs replacement.",
  },
  {
    q: 'Do you install weed barrier underneath?',
    a: "Yes. We always lay landscape fabric under rock installations and offer it as an option for mulch beds. It dramatically reduces weed growth and keeps your beds looking clean longer.",
  },
  {
    q: 'Can I mix mulch and river rock in the same yard?',
    a: "Absolutely. Many of our clients use river rock in high-traffic or decorative areas and mulch around plants and trees. We can help you design the best layout for your property.",
  },
]


export default function MulchRiverRock() {
  const [openFaq, setOpenFaq] = useState(null)
  useFadeUp()

  return (
    <>
      <Navbar />

      <section className="sp-hero" style={{ backgroundImage: 'url(/mulch.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="sp-hero__overlay" />
        <div className="container sp-hero__content">
          <h1 className="sp-hero__title">Mulch &amp; River Rock Installation</h1>
          <p className="sp-hero__sub">Decorative ground cover that protects your plants and boosts curb appeal.</p>
          <Link to="/estimate" className="sp-hero__btn">Get a Free Estimate</Link>
        </div>
      </section>

      <section className="sp-included">
        <div className="container">
          <p className="sp-included__eyebrow">What You Get</p>
          <h2 className="sp-included__title">What's Included</h2>
          <div className="sp-included__grid">
            {included.map((item) => (
              <div key={item} className="sp-included__item">
                <span className="sp-included__check">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A3D2B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="M22 4 12 14.01l-3-3" />
                  </svg>
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsCounter />

      <ProcessSection steps={process} />

      <section className="sp-faq">
        <div className="container">
          <h2 className="sp-faq__title">Frequently Asked Questions</h2>
          <div className="sp-faq__list">
            {faqs.map((faq, i) => (
              <div key={i} className="sp-faq__item">
                <button className="sp-faq__q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {faq.q}
                  <span className={`sp-faq__arrow ${openFaq === i ? 'sp-faq__arrow--open' : ''}`}>▼</span>
                </button>
                {openFaq === i && <div className="sp-faq__a">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Reviews />

      <section className="sp-cta">
        <div className="container">
          <h2 className="sp-cta__title">Ready to <span className="sp-cta__accent">Get Started?</span></h2>
          <p className="sp-cta__sub">{config.content.servicePages.ctaSub}</p>
          <a href={`tel:${config.business.phoneTel}`} className="sp-cta__btn">Call {config.business.phone}</a>
        </div>
      </section>

      <Footer />
    </>
  )
}
