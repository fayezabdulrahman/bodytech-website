import type { ReactNode } from 'react'
import { ExternalLink } from '../components/ExternalLink'
import { PageMeta } from '../components/PageMeta'
import { contactDetails, externalLinks, openingHours } from '../data/siteContent'

type ContactIconProps = {
  children: ReactNode
}

function ContactIcon({ children }: ContactIconProps) {
  return (
    <span className="contact-method__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">{children}</svg>
    </span>
  )
}

const phoneIcon = <path d="M7.2 3.5 4.7 5.2c-.7.5-.9 1.4-.6 2.2 2.1 5.5 6.5 9.9 12 12 .8.3 1.7.1 2.2-.6l1.7-2.5-4.4-2-1.5 1.7a14 14 0 0 1-6-6L9.3 8 7.2 3.5Z" />
const emailIcon = <><rect x="3" y="5" width="18" height="14" rx="1.5" /><path d="m4 7 8 6 8-6" /></>
const instagramIcon = <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.4" cy="6.6" r="1" className="contact-method__icon-fill" /></>
const locationIcon = <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>

export function ContactPage() {
  return (
    <>
      <PageMeta
        title="Contact BodyTech Injury & Performance | Ballymount"
        description="Contact BodyTech Injury & Performance in Ballymount, Dublin 12 by phone, email or Instagram, and view clinic opening hours."
        path="/contact"
      />

      <section className="contact-hub" aria-labelledby="contact-title">
        <div className="shell contact-hub__inner">
          <header className="contact-hub__heading">
            <div>
              <p className="eyebrow">Contact BodyTech</p>
              <h1 className="max-w-6xl" id="contact-title">Let’s find your next step.</h1>
            </div>
            <p>Call, email or message BodyTech for guidance—or book directly when you already know where you want to begin.</p>
          </header>

          <div className="contact-hub__layout">
            <div className="contact-hub__connect">
              <h2 className="sr-only">Contact BodyTech directly</h2>

              <div className="contact-methods">
                <a className="contact-method" href={externalLinks.phone}>
                  <ContactIcon>{phoneIcon}</ContactIcon>
                  <span className="contact-method__copy">
                    <span>Call the clinic</span>
                    <strong>{contactDetails.phoneDisplay}</strong>
                  </span>
                  <span className="contact-method__arrow" aria-hidden="true">↗</span>
                </a>

                <a className="contact-method" href={externalLinks.email}>
                  <ContactIcon>{emailIcon}</ContactIcon>
                  <span className="contact-method__copy">
                    <span>Email BodyTech</span>
                    <strong className="contact-method__email">{contactDetails.emailDisplay}</strong>
                  </span>
                  <span className="contact-method__arrow" aria-hidden="true">↗</span>
                </a>

                <a className="contact-method" href={externalLinks.instagram} target="_blank" rel="noopener noreferrer">
                  <ContactIcon>{instagramIcon}</ContactIcon>
                  <span className="contact-method__copy">
                    <span>Instagram</span>
                    <strong>{contactDetails.instagramDisplay}</strong>
                  </span>
                  <span className="contact-method__arrow" aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>

              <div className="contact-hub__booking">
                <div>
                  <p className="eyebrow">Ready to book?</p>
                  <p>Live availability and checkout stay up to date through BodyTech’s booking platforms.</p>
                </div>
                <div className="button-row">
                  <ExternalLink className="button button--red" href={externalLinks.clinicBooking}>Book clinic</ExternalLink>
                  <ExternalLink className="button button--outline" href={externalLinks.memberships}>Gym options</ExternalLink>
                </div>
              </div>
            </div>

            <aside className="contact-hub__visit" aria-labelledby="visit-title">
              <div className="contact-hub__visit-heading">
                <ContactIcon>{locationIcon}</ContactIcon>
                <div>
                  <p className="eyebrow">Clinic and gym</p>
                  <h2 id="visit-title">Visit BodyTech.</h2>
                </div>
              </div>

              <address>{contactDetails.address}</address>
              <ExternalLink className="text-link" href={externalLinks.maps}>Open in Google Maps</ExternalLink>

              <div className="contact-hub__hours">
                <h3>Opening hours</h3>
                <dl>
                  {openingHours.map(({ day, hours }) => (
                    <div key={day}>
                      <dt>{day}</dt>
                      <dd>{hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
