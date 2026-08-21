import { Link } from 'react-router-dom'
import { ExternalLink } from './ExternalLink'

type PageCtaProps = {
  title: string
  text: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel?: string
  secondaryHref?: string
}

export function PageCta({
  title,
  text,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: PageCtaProps) {
  return (
    <section className="page-cta section-pad" aria-labelledby="page-cta-title">
      <div className="shell page-cta__inner">
        <div>
          <h2 id="page-cta-title">{title}</h2>
          <p>{text}</p>
        </div>
        <div className="button-row">
          <ExternalLink className="button button--light" href={primaryHref}>
            {primaryLabel}
          </ExternalLink>
          {secondaryLabel && secondaryHref && (
            <Link className="button button--outline-light" to={secondaryHref}>
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
