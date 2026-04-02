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
  'Debris hauling',
  'Weed removal',
  'Overgrown area clearing',
  'Leaf removal',
  'Bed edging & cleanup',
  'Property walkthrough',
]

const process = [
  'Call for free estimate',
  'We assess the property',
  'Crew clears everything out',
  'Final walkthrough & cleanup',
]

const faqs = [
  {
    q: 'How long does a yard clean up take?',
    a: 'It depends on the size and condition of the yard. A standard clean up typically takes half a day. Heavily overgrown or neglected properties may take a full day or more.',
  },
  {
    q: 'Do you haul away all the debris?',
    a: 'Yes. We remove and haul away all debris, clippings, branches, and waste. Your property will be completely clean when we leave.',
  },
  {
    q: 'Can you handle severely overgrown yards?',
    a: 'Absolutely. We specialize in bringing neglected properties back to life. No yard is too overgrown — we have the equipment and crew to handle it.',
  },
  {
    q: 'Do you offer recurring clean up services?',
    a: 'Yes. Many clients pair a one-time deep clean with an ongoing maintenance plan to keep their yard looking great year-round. Ask us about weekly and bi-weekly options.',
  },
]


export default function YardCleanUp() {
  const [openFaq, setOpenFaq] = useState(null)
  useFadeUp()

  return (
    <>
      <Navbar />

      <section className="sp-hero" style={{ backgroundImage: 'url(/04_yard_cleanup.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="sp-hero__overlay" />
        <div className="container sp-hero__content">
          <h1 className="sp-hero__title">Professional Yard Clean Up</h1>
          <p className="sp-hero__sub">Clear out the mess — overgrown areas, seasonal debris, and neglected yards restored to clean, usable space.</p>
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
