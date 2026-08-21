import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { externalLinks } from '../data/siteContent'
import { ExternalLink } from './ExternalLink'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/injury-clinic', label: 'Injury Clinic' },
  { to: '/gym', label: 'Gym' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const menuPanelRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!menuOpen) return

    document.body.classList.add('menu-is-open')

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }

      if (event.key === 'Tab' && menuPanelRef.current) {
        const focusable = Array.from(
          menuPanelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
        )
        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last?.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first?.focus()
        }
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.classList.remove('menu-is-open')
    }
  }, [menuOpen])

  const toggleMenu = () => {
    const willOpen = !menuOpen
    setMenuOpen(willOpen)
    if (willOpen) {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          menuPanelRef.current?.querySelector<HTMLElement>('a[href]')?.focus()
        })
      })
    }
  }

  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link className="brand" to="/" aria-label="BodyTech Injury and Performance home">
          <img src="/assets/logo-bodytech.webp" alt="BodyTech Injury & Performance" />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <ExternalLink className="button button--red header-book" href={externalLinks.clinicBooking}>
          Book clinic
        </ExternalLink>

        <button
          ref={toggleRef}
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={toggleMenu}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`} id="mobile-menu" aria-hidden={!menuOpen}>
        <nav ref={menuPanelRef} aria-label="Mobile navigation">
          {navItems.map((item, index) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              {item.label}
            </NavLink>
          ))}
          <ExternalLink
            className="button button--red"
            href={externalLinks.clinicBooking}
            tabIndex={menuOpen ? 0 : -1}
          >
            Book a clinic appointment
          </ExternalLink>
        </nav>
      </div>
    </header>
  )
}
