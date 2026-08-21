import { ExternalLink } from '../components/ExternalLink'
import { PageMeta } from '../components/PageMeta'
import { Reveal } from '../components/Reveal'
import { externalLinks, team } from '../data/siteContent'

function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
}

export function TeamPage() {
  return (
    <>
      <PageMeta
        title="Meet the BodyTech Team | Injury, Performance & Yoga"
        description="Meet the therapists, coaches and instructors behind BodyTech Injury & Performance in Ballymount, Dublin 12."
        path="/team"
      />

      <section className="team-hero" aria-labelledby="team-page-title">
        <div className="shell team-hero__grid">
          <div>
            <p className="eyebrow">The people behind BodyTech</p>
            <h1 id="team-page-title">Expert care. Personal support.</h1>
          </div>
          <div className="team-hero__intro">
            <p>
              Meet the therapists and instructors helping clients recover, move with confidence and build lasting strength.
            </p>
          </div>
        </div>
      </section>

      <section className="team-directory section-pad" aria-label="BodyTech team members">
        <div className="shell team-list">
          {team.map((member, index) => (
            <Reveal as="article" className="team-profile" delay={(index % 2) * 80} key={member.name}>
              <div className={`team-profile__portrait${member.image ? ' team-profile__portrait--image' : ''}`}>
                {member.image ? (
                  <img
                    src={member.image}
                    alt={`${member.name} at BodyTech`}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    style={{ objectPosition: member.imagePosition }}
                  />
                ) : (
                  <span aria-hidden="true">{getInitials(member.name)}</span>
                )}
              </div>
              <div className="team-profile__content">
                <p className="team-profile__role">{member.role}</p>
                <h2>{member.name}</h2>
                <p>{member.biography}</p>
                {member.focus && (
                  <ul className="team-profile__focus" aria-label={`${member.name}'s areas of focus`}>
                    {member.focus.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
