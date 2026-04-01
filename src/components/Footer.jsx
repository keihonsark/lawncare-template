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
            <img src="/monteverde-logo.png" alt="MonteVerde Landscaping" className="footer__logo-img" />
          </div>
          <p className="footer__desc">
            {footer.tagline}
          </p>
        </div>

        <div className="footer__col">
          <h4>Services</h4>
          <ul>
            <li><a href="#services">Pruning</a></li>
            <li><a href="#services">Tree Trimming</a></li>
            <li><a href="#services">Lawn Maintenance</a></li>
            <li><a href="#services">Yard Clean Up</a></li>
            <li><a href="#services">Sprinkler Repair</a></li>
            <li><a href="#services">Free Estimates</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <ul>
            <li><a href={`tel:${phoneTel}`}>English: {phone}</a></li>
            <li><a href={`tel:${phoneSpanishTel}`}>Español: {phoneSpanish}</a></li>
            <li><a href={`mailto:${email}`}>{email}</a></li>
            <li>{address}</li>
            <li>{hoursShort}</li>
          </ul>
        </div>

      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>&copy; 2025 {name} &middot; {license} &middot; Hablamos Español</p>
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
