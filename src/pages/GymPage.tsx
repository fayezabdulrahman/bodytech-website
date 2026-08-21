import { ExternalLink } from '../components/ExternalLink'
import { PageCta } from '../components/PageCta'
import { PageMeta } from '../components/PageMeta'
import { Reveal } from '../components/Reveal'
import { externalLinks, gymProgrammes, memberships } from '../data/siteContent'

export function GymPage() {
  return (
    <>
      <PageMeta
        title="BodyTech Gym, Group Training & Yoga | Dublin 12"
        description="Therapy-led gym training, coached strength and conditioning, Fit for Life over-55s, memberships and yoga at BodyTech in Ballymount."
        path="/gym"
      />

      <section className="hero hero--gym">
        <div className="hero__backdrop" aria-hidden="true" />
        <div className="shell hero__grid">
          <div className="hero__content">
            <p className="eyebrow">BodyTech Performance Gym</p>
            <h1 className="max-w-6xl">Training that meets you where you are.</h1>
            <p className="hero__lead">
              Coached strength, conditioning and movement in a gym where therapy expertise shapes how you train—not just how you recover.
            </p>
            <div className="button-row">
              <ExternalLink className="button button--red" href={externalLinks.memberships}>
                Explore memberships
              </ExternalLink>
              <ExternalLink className="button button--outline" href={externalLinks.yogaBooking}>
                View yoga classes
              </ExternalLink>
            </div>
          </div>
          <figure className="hero__visual image-hover">
            <img src="/assets/gym-coaching.webp" alt="Strength coaching in a performance gym" fetchPriority="high" />
          </figure>
        </div>
      </section>

      <div className="marquee marquee--red" aria-label="Gym programme highlights">
        <div className="marquee__track">
          {[...gymProgrammes, ...gymProgrammes].map((programme, index) => (
            <span key={`${programme.title}-${index}`}>{programme.title}<i aria-hidden="true" /></span>
          ))}
        </div>
      </div>

      <section className="section-pad gym-programmes" aria-labelledby="programmes-title">
        <div className="shell">
          <Reveal className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">More than access to equipment</p>
              <h2 id="programmes-title">A gym built around better movement.</h2>
            </div>
            <p>Programmes balance expert coaching with an environment that supports consistency, confidence and long-term progress.</p>
          </Reveal>

          <div className="programme-grid">
            {gymProgrammes.map((programme, index) => (
              <Reveal
                as="article"
                className="programme-card"
                delay={index * 60}
                key={programme.title}
              >
                <h3>{programme.title}</h3>
                <p>{programme.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="memberships section-pad" aria-labelledby="memberships-title">
        <div className="shell memberships__grid">
          <div className="memberships__intro">
            <div className="memberships__heading">
              <p className="eyebrow">Choose your training rhythm</p>
              <h2 id="memberships-title">Memberships for different stages of life.</h2>
            </div>
            <div className="memberships__summary">
              <p>Membership details, current availability and checkout are managed on the existing Glofox-powered page.</p>
              <ExternalLink className="text-link" href={externalLinks.memberships}>View all membership options</ExternalLink>
            </div>
          </div>

          <div className="membership-stack">
            {memberships.map((membership) => (
              <article
                className="membership-card"
                key={membership.title}
              >
                <div className="membership-card__heading">
                  <p>{membership.eyebrow}</p>
                </div>
                <h3>{membership.title}</h3>
                <p>{membership.description}</p>
                <ExternalLink
                  aria-label={`View ${membership.title}`}
                  className="membership-card__link"
                  href={externalLinks.memberships}
                >
                  View option
                </ExternalLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad yoga-feature" aria-labelledby="yoga-title">
        <div className="shell yoga-feature__grid">
          <Reveal className="yoga-feature__image image-hover">
            <img src="/assets/yoga-studio.jpg" alt="Adults practising yoga together in a modern indoor studio" loading="lazy" />
          </Reveal>
          <Reveal className="yoga-feature__content" delay={100}>
            <p className="eyebrow">Yoga with Alex</p>
            <h2 id="yoga-title">Strength is more than lifting.</h2>
            <p>
              Build mobility, body awareness and space to recover in a focused studio class. BodyTech also references Pilates within its wider movement offering; live Yoga availability is published through Square.
            </p>
            <ExternalLink className="button button--red" href={externalLinks.yogaBooking}>
              View all yoga classes
            </ExternalLink>
          </Reveal>
        </div>
      </section>

      <PageCta
        title="Build a stronger baseline."
        text="Explore the current membership routes or speak to BodyTech about the best place to begin."
        primaryLabel="View memberships"
        primaryHref={externalLinks.memberships}
        secondaryLabel="Contact BodyTech"
        secondaryHref="/contact"
      />
    </>
  )
}
