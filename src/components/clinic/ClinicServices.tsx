import { useId, useState } from 'react'
import { ExternalLink } from '../ExternalLink'
import { Reveal } from '../Reveal'
import { externalLinks, services, type Service } from '../../data/siteContent'

const serviceCategories: Service['category'][] = [
  'Consultation',
  'Rehabilitation',
  'Treatment',
  'Recovery',
]

const groupedServices = serviceCategories.map((category) => ({
  category,
  services: services.filter((service) => service.category === category),
}))

export function ClinicServices() {
  const [openCategory, setOpenCategory] = useState<Service['category'] | null>(null)
  const accordionId = useId()

  return (
    <section className="section-pad services-section" aria-labelledby="services-title">
      <div className="shell">
        <Reveal className="section-heading section-heading--split clinic-services__heading">
          <div>
            <p className="eyebrow">Clinic services</p>
            <h2 id="services-title">Care for every stage of recovery.</h2>
          </div>
          <p>
            Explore our consultation, rehabilitation, treatment and recovery services. Open a category for more detail.
          </p>
        </Reveal>

        <Reveal className="clinic-services">
          {groupedServices.map(({ category, services: categoryServices }, categoryIndex) => {
            const isOpen = openCategory === category
            const panelId = `${accordionId}-panel-${categoryIndex}`
            const buttonId = `${accordionId}-button-${categoryIndex}`

            return (
              <div className={`clinic-services__group${isOpen ? ' is-open' : ''}`} key={category}>
                <button
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  className="clinic-services__trigger"
                  id={buttonId}
                  onClick={() => setOpenCategory(isOpen ? null : category)}
                  type="button"
                >
                  <span className="clinic-services__number" aria-hidden="true">
                    {String(categoryIndex + 1).padStart(2, '0')}
                  </span>
                  <span className="clinic-services__category">{category}</span>
                  <span className="clinic-services__preview">
                    {categoryServices.map((service) => service.shortTitle).join(' · ')}
                  </span>
                  <span className="clinic-services__action" aria-hidden="true">
                    <span>{isOpen ? 'Close' : 'Explore'}</span>
                    <span className="clinic-services__icon" />
                  </span>
                </button>

                <div
                  aria-hidden={!isOpen}
                  aria-labelledby={buttonId}
                  className="clinic-services__panel"
                  id={panelId}
                  role="region"
                >
                  <div className="clinic-services__panel-inner">
                    <div className="clinic-services__list">
                      {categoryServices.map((service, serviceIndex) => (
                        <article
                          className="clinic-service"
                          key={service.title}
                          style={{ transitionDelay: `${serviceIndex * 55}ms` }}
                        >
                          <span className="clinic-service__index" aria-hidden="true">
                            {String(serviceIndex + 1).padStart(2, '0')}
                          </span>
                          <div>
                            <h3>{service.shortTitle}</h3>
                            <p>{service.description}</p>
                          </div>
                        </article>
                      ))}
                    </div>

                    <ExternalLink
                      className="clinic-services__booking"
                      href={externalLinks.clinicBooking}
                      tabIndex={isOpen ? 0 : -1}
                    >
                      Check availability
                    </ExternalLink>
                  </div>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
