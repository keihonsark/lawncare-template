import { Link } from 'react-router-dom'
import config from '../config'
import './Footer.css'

const { name, phone, phoneTel, phoneSpanish, phoneSpanishTel, email, address, hoursShort, license } = config.business
const { footer } = config.content

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__logo">
            <img src="/leaf-icon.svg" alt="" className="footer__logo-icon" />
            <span className="footer__logo-line1">{config.business.shortName}</span>
          </div>
          <p className="footer__desc">
            {footer.tagline}
          </p>
        </div>

        <div className="footer__col">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services/pruning">Pruning</Link></li>
            <li><Link to="/services/tree-services">Tree Trimming</Link></li>
            <li><Link to="/services/lawn-maintenance">Lawn Maintenance</Link></li>
            <li><Link to="/services/yard-clean-up">Yard Clean Up</Link></li>
            <li><Link to="/services/irrigation-systems">Irrigation Systems</Link></li>
            <li><Link to="/services/mulch-river-rock">Mulch &amp; River Rock</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <ul>
            <li><a href={`tel:${phoneTel}`}>{phoneSpanish && phoneSpanish !== phone ? 'English: ' : ''}{phone}</a></li>
            {phoneSpanish && phoneSpanish !== phone && (
              <li><a href={`tel:${phoneSpanishTel}`}>Español: {phoneSpanish}</a></li>
            )}
            <li><a href={`mailto:${email}`}>{email}</a></li>
            <li>{address}</li>
            <li>{hoursShort}</li>
          </ul>
        </div>

      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>&copy; 2025 {name} &middot; {license}</p>
          <p className="footer__sark">
            Site by{' '}
            <a href="https://sark.agency" target="_blank" rel="noopener noreferrer" className="footer__sark-link">
              <svg width="70" height="18" viewBox="0 0 70 18" fill="none" style={{ verticalAlign: 'middle' }}>
                <text x="0" y="14" fontFamily="Outfit, sans-serif" fontSize="14" fontWeight="700" fill="#2D6B47">//</text>
                <text x="20" y="14" fontFamily="Outfit, sans-serif" fontSize="14" fontWeight="700" fill="#fff">SARK</text>
              </svg>
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
