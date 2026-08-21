import { useEffect, useRef } from 'react'

interface ServiceMarqueeProps {
  items: readonly string[]
  label: string
  tone?: 'dark' | 'red'
}

export function ServiceMarquee({ items, label, tone = 'dark' }: ServiceMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current

    if (!track) return

    let frameId = 0
    let previousTime = 0
    let offset = 0

    const move = (time: number) => {
      const firstGroup = track.firstElementChild as HTMLElement | null

      if (firstGroup) {
        const elapsed = Math.min(time - previousTime, 64)
        const loopWidth = firstGroup.getBoundingClientRect().width

        offset = (offset + (elapsed * loopWidth) / 32_000) % loopWidth
        track.style.transform = `translate3d(${-offset}px, 0, 0)`
      }

      previousTime = time
      frameId = window.requestAnimationFrame(move)
    }

    frameId = window.requestAnimationFrame((time) => {
      previousTime = time
      frameId = window.requestAnimationFrame(move)
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const renderItems = (duplicate = false) => (
    <div className="marquee__group" aria-hidden={duplicate || undefined}>
      {items.map((item) => (
        <span key={item}>{item}<i aria-hidden="true" /></span>
      ))}
    </div>
  )

  return (
    <div
      className={`marquee${tone === 'red' ? ' marquee--red' : ''}`}
      aria-label={label}
    >
      <div className="marquee__track" ref={trackRef}>
        {renderItems()}
        {renderItems(true)}
      </div>
    </div>
  )
}
