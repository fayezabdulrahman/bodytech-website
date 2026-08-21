import { useState } from 'react'
import { team } from '../data/siteContent'
import { ExternalLink } from './ExternalLink'
import { externalLinks } from '../data/siteContent'

export function TeamCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const member = team[activeIndex]

  const move = (direction: number) => {
    setActiveIndex((current) => (current + direction + team.length) % team.length)
  }

  return (
    <div className="team-carousel" aria-roledescription="carousel" aria-label="BodyTech team">
      <div className="team-carousel__portrait" aria-hidden="true">
        <span>{member.name.split(' ').map((part) => part[0]).join('')}</span>
        <div className="team-carousel__rings" />
      </div>
      <div className="team-carousel__content" aria-live="polite">
        <p className="eyebrow">Meet the team</p>
        <h3>{member.name}</h3>
        <p className="team-carousel__role">{member.role}</p>
        <p>{member.biography}</p>
        {member.focus && (
          <ul className="tag-list" aria-label={`${member.name}'s areas of focus`}>
            {member.focus.map((item) => <li key={item}>{item}</li>)}
          </ul>
        )}
        <ExternalLink className="text-link" href={externalLinks.clinicBooking}>
          View availability
        </ExternalLink>
      </div>
      <div className="team-carousel__controls">
        <button type="button" onClick={() => move(-1)} aria-label="Previous team member">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <span>{String(activeIndex + 1).padStart(2, '0')} / {String(team.length).padStart(2, '0')}</span>
        <button type="button" onClick={() => move(1)} aria-label="Next team member">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
        </button>
      </div>
    </div>
  )
}
