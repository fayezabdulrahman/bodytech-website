import { Link } from 'react-router-dom'
import { ExternalLink } from '../components/ExternalLink'
import { PageCta } from '../components/PageCta'
import { PageMeta } from '../components/PageMeta'
import { Reveal } from '../components/Reveal'
import { externalLinks, siteImages } from '../data/siteContent'

const marqueeItems = [
  'Physical therapy',
  'Strength & conditioning',
  'Injury rehabilitation',
  'Recovery',
  'Yoga',
  'Fit for Life 55+',
]

export function HomePage() {
  return (
    <>
      <PageMeta
        title="BodyTech Injury & Performance | Clinic & Gym Dublin 12"
        description="Move better, recover from injury and build lasting strength with BodyTech's therapy-led injury clinic and gym in Ballymount, Dublin 12."
        path="/"
      />

      <section className="hero hero--home">
        <div className="hero__brand-backdrop" aria-hidden="true">
          <img src="/assets/og-bodytech.jpg" alt="" fetchPriority="high" />
        </div>
        <div className="shell hero__grid">
          <div className="hero__content">
            <p className="eyebrow">Injury clinic · Rehabilitation · Performance gym</p>
            <h1 className="max-w-6xl">Move better. Recover stronger. Perform longer.</h1>
            <p className="hero__lead">
              Therapy-led fitness, rehabilitation and recovery for people who want to get out of pain, return to sport and build strength that lasts.
            </p>
            <div className="button-row">
              <ExternalLink className="button button--red" href={externalLinks.clinicBooking}>
                Book the clinic
              </ExternalLink>
              <Link className="button button--outline" to="/gym">Explore the gym</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee" aria-label="BodyTech services">
        <div className="marquee__track">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={`${item}-${index}`}>{item}<i aria-hidden="true" /></span>
          ))}
        </div>
      </div>

      <section className="section-pad path-section" aria-labelledby="choose-path-title">
        <div className="shell">
          <Reveal className="section-heading section-heading--wide">
            <p className="eyebrow">One connected approach</p>
            <h2 id="choose-path-title">Start where you are. Build toward where you want to be.</h2>
          </Reveal>

          <div className="path-grid">
            <Reveal className="path-card path-card--clinic" delay={80}>
              <Link to="/injury-clinic" aria-label="Explore the Injury Clinic">
                <div className="path-card__image image-hover">
                  <img src={siteImages.clinic} alt="Sports massage treatment in a modern rehabilitation clinic" loading="lazy" />
                </div>
                <div className="path-card__content">
                  <p className="eyebrow">Injury Clinic</p>
                  <h3>Move beyond pain.</h3>
                  <p>Assessment, targeted therapy and individual rehabilitation designed around your body and goals.</p>
                  <span className="text-link">Explore clinic services <span aria-hidden="true">↗</span></span>
                </div>
              </Link>
            </Reveal>

            <Reveal className="path-card path-card--gym" delay={160}>
              <Link to="/gym" aria-label="Explore the BodyTech Gym">
                <div className="path-card__image image-hover">
                  <img src="/assets/gym-coaching.webp" alt="Coach supporting strength training in the gym" loading="lazy" />
                </div>
                <div className="path-card__content">
                  <p className="eyebrow">Performance Gym</p>
                  <h3>Build strength that stays.</h3>
                  <p>Expert-led training, group classes and programmes for every stage of life.</p>
                  <span className="text-link">Explore gym training <span aria-hidden="true">↗</span></span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad yoga-preview" aria-labelledby="yoga-preview-title">
        <div className="shell yoga-preview__grid">
          <Reveal className="yoga-preview__content">
            <p className="eyebrow">Yoga with Alex</p>
            <h2 id="yoga-preview-title">Yoga for strength, mobility and recovery.</h2>
            <p>
              Alex leads BodyTech yoga in the studio, creating a focused counterpoint to busy weeks and hard training. Live class availability stays up to date on Square.
            </p>
            <ExternalLink className="button button--red" href={externalLinks.yogaBooking}>
              View yoga classes
            </ExternalLink>
          </Reveal>
          <Reveal className="yoga-preview__image image-hover" delay={120}>
            <img src="/assets/yoga-studio.jpg" alt="Adults practising yoga together in a modern indoor studio" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <PageCta
        title="Your next move starts here."
        text="Book the clinic for an injury or explore a training environment built around long-term progress."
        primaryLabel="Book a clinic appointment"
        primaryHref={externalLinks.clinicBooking}
        secondaryLabel="View gym options"
        secondaryHref="/gym"
      />
    </>
  )
}
