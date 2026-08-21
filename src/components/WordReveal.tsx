import type { CSSProperties } from 'react'

type WordRevealProps = {
  text: string
  className?: string
}

export function WordReveal({ text, className = '' }: WordRevealProps) {
  return (
    <p className={`word-reveal ${className}`.trim()}>
      <span className="sr-only">{text}</span>
      {text.split(' ').map((word, index) => (
        <span
          aria-hidden="true"
          key={`${word}-${index}`}
          style={{ '--word-index': index } as CSSProperties}
        >
          {word}{' '}
        </span>
      ))}
    </p>
  )
}
