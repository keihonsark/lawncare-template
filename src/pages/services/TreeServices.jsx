import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useFadeUp from '../../hooks/useFadeUp'
import StatsCounter from '../../components/StatsCounter'
import './ServicePage.css'
import config from '../../config'

const included = [
  'Tree trimming & thinning',
  'Dead branch removal',
  'Tree removal',
  'Stump grinding',
  'Debris hauling',
  'Safety assessment',
]

const process = [
  'Free safety assessment',
  'We quote the job',
  'Crew arrives on schedule',
  'Full cleanup included',
]

const faqs = [
  {
    q: 'How often should trees be trimmed?',
    a: "Most trees benefit from trimming every 1–3 years depending on the species and growth rate. Fruit trees and fast-growing varieties may need annual trimming. We'll assess your trees and recommend the right schedule.",
  },
  {
    q: 'Is stump grinding included with removal?',
    a: 'Stump grinding is a separate service and is quoted individually based on the stump size. Many clients bundle it with removal for a better price — just ask when we come out for the estimate.',
  },
  {
    q: 'Do you haul away all the debris?',
    a: 'Yes. Every tree job includes full debris cleanup and hauling. We leave your property clean — no branches, no sawdust, no mess.',
  },
  {
    q: 'Are you insured for tree work?',
    a: `Absolutely. ${config.business.name} is fully licensed, insured, and bonded. Tree work involves real risk, and we carry full liability coverage to protect your property and our crew.`,
  },
]

const reviews = config.google.reviews.slice(2, 4)

function Stars() {
  return (
    <div className="sp-reviews__stars">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="#f5a623">
          <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.62l5.34-.78L10 1z" />
        </svg>
      ))}
    </div>
  )
}

export default function TreeServices() {
  const [openFaq, setOpenFaq] = useState(null)
  useFadeUp()

  return (
    <>
      <Navbar />

      <section className="sp-hero" style={{ backgroundImage: 'url(/hero-image.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="sp-hero__overlay" />
        <div className="container sp-hero__content">
          <h1 className="sp-hero__title">{`Tree Trimming & Stump Removal in ${config.business.address.replace(', ' + config.business.state, '')}`}</h1>
          <p className="sp-hero__sub">Keep your trees healthy and your property safe with professional tree care.</p>
          <Link to="/estimate" className="sp-hero__btn">Get a Free Estimate</Link>
        </div>
      </section>

      <section className="sp-included">
        <div className="container">
          <h2 className="sp-included__title">What's Included</h2>
          <div className="sp-included__grid">
            {included.map((item) => (
              <div key={item} className="sp-included__item">
                <span className="sp-included__check">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 8l3 3 5-5.5" stroke="#1a7a3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsCounter />

      <section className="sp-process fade-up">
        <div className="container">
          <p className="sp-process__eyebrow">Our Process</p>
          <h2 className="sp-process__title">How It Works</h2>
          <div className="sp-process__grid">
            {process.map((step, i) => (
              <div key={i} className="sp-process__step stagger-child">
                <div className="sp-process__num">{i + 1}</div>
                <div className="sp-process__label">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="sp-reviews">
        <div className="container">
          <h2 className="sp-reviews__title">What Our Clients Say</h2>
          <div className="sp-reviews__grid">
            {reviews.map((r) => (
              <div key={r.name} className="sp-reviews__card">
                <Stars />
                <p className="sp-reviews__text">&ldquo;{r.text}&rdquo;</p>
                <p className="sp-reviews__author">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-cta">
        <div className="container">
          <h2 className="sp-cta__title">{config.content.servicePages.ctaTitle}</h2>
          <p className="sp-cta__sub">{config.content.servicePages.ctaSub}</p>
          <a href={`tel:${config.business.phoneTel}`} className="sp-cta__btn">Call {config.business.phone}</a>
        </div>
      </section>

      <Footer />
    </>
  )
}
