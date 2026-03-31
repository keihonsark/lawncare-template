import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useFadeUp from '../../hooks/useFadeUp'
import './ServicePage.css'
import config from '../../config'

const included = [
  'Mowing & edging',
  'Trimming & blowing',
  'Debris cleanup',
  'Curb edging',
  'Lawn health check',
  'Consistent scheduling',
]

const process = [
  'Call for free estimate',
  'We assess your yard',
  'Pick your plan',
  'We show up every week',
]

const faqs = [
  {
    q: 'How often should I mow in Fresno?',
    a: 'During spring and summer, we recommend weekly mowing to keep your lawn healthy. In fall you can stretch to every 10–14 days, and winter is usually monthly.',
  },
  {
    q: 'Do you offer bi-weekly plans?',
    a: 'Yes! We offer both weekly and bi-weekly maintenance plans. Weekly is recommended during peak growth season, but bi-weekly works great for slower months or tighter budgets.',
  },
  {
    q: 'What if it rains on my scheduled day?',
    a: "We monitor the weather closely. If rain prevents us from servicing your yard, we'll reschedule within 1–2 days at no extra charge.",
  },
  {
    q: 'Do I need to be home during service?',
    a: "Not at all. As long as we have gate access, we'll take care of everything and leave your yard looking sharp — whether you're home or not.",
  },
]

const reviews = config.google.reviews.slice(0, 2)

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

export default function LawnMaintenance() {
  const [openFaq, setOpenFaq] = useState(null)
  useFadeUp()

  return (
    <>
      <Navbar />

      <section className="sp-hero">
        <img src="/08_lawn_maintenance.png" alt="" className="sp-hero__img" />
        <div className="sp-hero__overlay" />
        <div className="container sp-hero__content">
          <h1 className="sp-hero__title">{`Professional Lawn Maintenance in ${config.business.address.replace(', ' + config.business.state, '')}`}</h1>
          <p className="sp-hero__sub">Weekly and bi-weekly plans that keep your lawn sharp all season long.</p>
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

      <section className="sp-why">
        <div className="container">
          <h2 className="sp-why__title">{config.content.servicePages.whyTitle}</h2>
          <div className="sp-why__grid">
            <div className="sp-why__card sp-why__card--google">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div className="sp-why__stars">★★★★★</div>
              <div className="sp-why__label">Rated 5 Stars on Google</div>
            </div>
            <div className="sp-why__card">
              <div className="sp-why__num">10+</div>
              <div className="sp-why__label">Years of Experience</div>
            </div>
            <div className="sp-why__card">
              <div className="sp-why__num">100%</div>
              <div className="sp-why__label">Satisfaction Guaranteed</div>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-process fade-up">
        <div className="container">
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
