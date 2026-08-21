import type { AnchorHTMLAttributes, ReactNode } from 'react'

type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  showIcon?: boolean
}

export function ExternalLink({ children, showIcon = true, ...props }: ExternalLinkProps) {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      <span>{children}</span>
      {showIcon && (
        <svg aria-hidden="true" className="external-icon" viewBox="0 0 24 24">
          <path d="M7 17 17 7M8 7h9v9" />
        </svg>
      )}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}
