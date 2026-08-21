import { Link } from 'react-router-dom'
import { contactDetails, externalLinks } from '../data/siteContent'
import { ExternalLink } from './ExternalLink'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div className="site-footer__brand">
          <Link to="/" aria-label="BodyTech home">
            <img src="/assets/logo-bodytech.webp" alt="BodyTech Injury & Performance" loading="lazy" />
          </Link>
          <p>Therapy-led fitness, rehabilitation and recovery in Ballymount, Dublin 12.</p>
        </div>

        <div>
          <h2>Explore</h2>
          <ul>
            <li><Link to="/injury-clinic">Injury Clinic</Link></li>
            <li><Link to="/gym">Gym & Memberships</Link></li>
            <li><Link to="/team">Meet the team</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h2>Take action</h2>
          <ul>
            <li><ExternalLink href={externalLinks.clinicBooking}>Book clinic</ExternalLink></li>
            <li><ExternalLink href={externalLinks.yogaBooking}>Book yoga</ExternalLink></li>
            <li><ExternalLink href={externalLinks.memberships}>Explore memberships</ExternalLink></li>
          </ul>
        </div>

        <div>
          <h2>Contact</h2>
          <address>
            <a href={externalLinks.phone}>{contactDetails.phoneDisplay}</a>
            <a href={externalLinks.email}>{contactDetails.emailDisplay}</a>
            <ExternalLink showIcon={false} href={externalLinks.instagram}>{contactDetails.instagramDisplay}</ExternalLink>
          </address>
        </div>
      </div>
      <div className="shell site-footer__bottom">
        <p>© {new Date().getFullYear()} BodyTech Injury & Performance</p>
        <p>Train. Recover. Perform.</p>
      </div>
    </footer>
  )
}
