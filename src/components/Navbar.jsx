import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import config from '../config'
import './Navbar.css'

const { phone, phoneTel, phoneSpanish, phoneSpanishTel, name } = config.business

export default function Navbar({ forceScrolled = false }) {
  const [scrolled, setScrolled] = useState(forceScrolled)
  const [open, setOpen] = useState(false)
  const [svcOpen, setSvcOpen] = useState(false)
  const svcTimeout = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    setOpen(false)
    if (location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/#' + sectionId)
    }
  }

  const handleSvcEnter = () => {
    clearTimeout(svcTimeout.current)
    setSvcOpen(true)
  }

  const handleSvcLeave = () => {
    svcTimeout.current = setTimeout(() => setSvcOpen(false), 180)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(forceScrolled || window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <Link to="/" className="nav__logo">
          <span className="nav__logo-line1">{config.business.shortName}</span>
          <span className="nav__logo-line2">Lawn Care</span>
        </Link>

        <button
          className={`nav__hamburger ${open ? 'active' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        {open && <div className="nav__overlay" onClick={() => setOpen(false)} />}

        <div className={`nav__menu ${open ? 'open' : ''}`}>
          <button className="nav__close" onClick={() => setOpen(false)} aria-label="Close menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <ul className="nav__links">
            <li
              className="nav__dropdown"
              onMouseEnter={handleSvcEnter}
              onMouseLeave={handleSvcLeave}
            >
              <button
                className="nav__dropdown-toggle"
                onClick={() => setSvcOpen(!svcOpen)}
                type="button"
              >
                Services
                <span className={`nav__chevron ${svcOpen ? 'nav__chevron--open' : ''}`}>▾</span>
              </button>
              {svcOpen && (
                <div className="nav__dropdown-menu">
                  <Link to="/services/lawn-maintenance" onClick={() => { setSvcOpen(false); setOpen(false) }}>Pruning</Link>
                  <Link to="/services/tree-services" onClick={() => { setSvcOpen(false); setOpen(false) }}>Tree Trimming</Link>
                  <Link to="/services/lawn-maintenance" onClick={() => { setSvcOpen(false); setOpen(false) }}>Lawn Maintenance</Link>
                  <Link to="/services/landscaping-hardscape" onClick={() => { setSvcOpen(false); setOpen(false) }}>Yard Clean Up</Link>
                  <Link to="/services/irrigation-systems" onClick={() => { setSvcOpen(false); setOpen(false) }}>Sprinkler Repair</Link>
                  <Link to="/estimate" onClick={() => { setSvcOpen(false); setOpen(false) }} className="nav__dropdown-highlight">Free Estimates</Link>
                  <Link to="/lawn-estimator" onClick={() => { setSvcOpen(false); setOpen(false) }} className="nav__dropdown-highlight">Lawn Estimator</Link>
                  <Link to="/lawn-health-quiz" onClick={() => { setSvcOpen(false); setOpen(false) }} className="nav__dropdown-highlight">Lawn Health Quiz</Link>
                </div>
              )}
            </li>
            <li><a href="#reviews" onClick={(e) => scrollToSection(e, 'reviews')}>Reviews</a></li>
            <li><Link to="/blog" onClick={() => setOpen(false)}>Blog</Link></li>
            <li><a href="#areas" onClick={(e) => scrollToSection(e, 'areas')}>Areas</a></li>
            <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
          </ul>
          <Link to="/estimate" className="nav__estimate" onClick={() => setOpen(false)}>
            Get Instant Estimate
          </Link>
          <span className="nav__bilingual">Hablamos Español</span>
          <a href={`tel:${phoneTel}`} className="nav__phone">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            {phone}
          </a>
        </div>
      </div>
    </nav>
  )
}
