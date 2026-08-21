import { ExternalLink } from '../components/ExternalLink'
import { PageCta } from '../components/PageCta'
import { PageMeta } from '../components/PageMeta'
import { Reveal } from '../components/Reveal'
import { externalLinks, services, siteImages } from '../data/siteContent'

const recoverySteps = [
  {
    title: 'Assess what is holding you back',
    text: 'Start with the source of pain, your current movement and what you need to return to.',
  },
  {
    title: 'Treat with a clear purpose',
    text: 'Use the appropriate hands-on and targeted therapy to relieve pain and restore movement.',
  },
  {
    title: 'Rebuild beyond the treatment room',
    text: 'Develop mobility, strength and confidence through individual rehabilitation and training.',
  },
]

export function InjuryClinicPage() {
  return (
    <>
      <PageMeta
        title="Injury Clinic & Physical Therapy | BodyTech Dublin 12"
        description="Neuromuscular therapy, physical therapy, sports massage, dry needling and individual injury rehabilitation at BodyTech in Ballymount."
        path="/injury-clinic"
      />

      <section className="hero hero--clinic">
        <div className="shell hero__grid">
          <div className="hero__content">
            <p className="eyebrow">BodyTech Injury Clinic</p>
            <h1 className="max-w-6xl">Find the source. Restore movement.</h1>
            <p className="hero__lead">
              Neuromuscular therapy, physical therapy and active rehabilitation work together to take you from pain and restriction back to confident movement.
            </p>
            <ExternalLink className="button button--red" href={externalLinks.clinicBooking}>
              Book an appointment
            </ExternalLink>
          </div>
          <figure className="hero__visual hero__visual--clinic image-hover">
            <img src={siteImages.clinic} alt="Sports massage treatment in a modern rehabilitation clinic" fetchPriority="high" />
          </figure>
        </div>
      </section>

      <section className="section-pad services-section" aria-labelledby="services-title">
        <div className="shell">
          <Reveal className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">Clinic services</p>
              <h2 id="services-title">Treatment built around what you need next.</h2>
            </div>
            <p>
              Choose the area that best matches your needs, then use Square for current availability and the most appropriate appointment.
            </p>
          </Reveal>

          <div className="service-grid">
            {services.map((service, index) => (
              <Reveal as="article" className="service-card" delay={(index % 2) * 80} key={service.title}>
                <div className="service-card__top">
                  <p>{service.category}</p>
                </div>
                <h3>{service.shortTitle}</h3>
                <p>{service.description}</p>
                <ExternalLink className="service-card__link" href={externalLinks.clinicBooking}>
                  Check availability
                </ExternalLink>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="recovery section-pad" aria-labelledby="recovery-title">
        <div className="shell recovery__grid">
          <div className="recovery__intro">
            <div className="recovery__heading">
              <p className="eyebrow">The recovery path</p>
              <h2 id="recovery-title">From first assessment to stronger performance.</h2>
            </div>
            <p>Each stage has a job to do. Together, they create a clearer route through injury and back into life or sport.</p>
          </div>
          <div className="recovery-stack">
            {recoverySteps.map((step, index) => (
              <article
                className="recovery-card"
                key={step.title}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Not sure which service to choose?"
        text="Start with an initial injury consultation or contact BodyTech directly for guidance."
        primaryLabel="Book Now"
        primaryHref={externalLinks.clinicBooking}
        secondaryLabel="Meet the team"
        secondaryHref="/team"
      />
    </>
  )
}
