import { ExternalLink } from '../components/ExternalLink'
import { ClinicServices } from '../components/clinic/ClinicServices'
import { PageCta } from '../components/PageCta'
import { PageMeta } from '../components/PageMeta'
import { externalLinks, siteImages } from '../data/siteContent'

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

      <ClinicServices />

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
