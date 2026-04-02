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
  'Shrub shaping',
  'Hedge trimming',
  'Ornamental pruning',
  'Seasonal clean-up cuts',
  'Plant health assessment',
  'Debris removal',
]

const process = [
  'Call for free estimate',
  'We assess your plants',
  'Pruning plan & schedule',
  'Clean, precise results',
]

const faqs = [
  {
    q: 'How often should shrubs and hedges be pruned?',
    a: 'Most shrubs and hedges benefit from pruning 2–3 times per year. Fast-growing varieties may need monthly trimming during peak season to stay looking sharp.',
  },
  {
    q: 'Is there a best time of year to prune?',
    a: 'It depends on the plant. Spring-blooming shrubs should be pruned right after they flower. Most other shrubs and hedges do well with pruning in late winter or early spring before new growth begins.',
  },
  {
    q: 'Will pruning damage my plants?',
    a: 'Not when done properly. Professional pruning actually promotes healthier growth, better shape, and improved airflow. We use clean, sharp tools and follow best practices for each plant type.',
  },
  {
    q: 'Do you clean up all the clippings?',
    a: 'Yes. Every pruning job includes full debris cleanup. We haul away all clippings and leave your property looking clean and tidy.',
  },
]


export default function Pruning() {
  const [openFaq, setOpenFaq] = useState(null)
  useFadeUp()

  return (
    <>
      <Navbar />

      <section className="sp-hero" style={{ backgroundImage: 'url(/09_hedge_trimming.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="sp-hero__overlay" />
        <div className="container sp-hero__content">
          <h1 className="sp-hero__title">Professional Pruning Services</h1>
          <p className="sp-hero__sub">Keep your shrubs, hedges, and ornamental plants shaped, healthy, and looking their best year-round.</p>
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
