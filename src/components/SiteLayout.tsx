import { Outlet } from 'react-router-dom'
import { ScrollToTop } from './ScrollToTop'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

export function SiteLayout() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <ScrollToTop />
      <main id="main-content" className="page-shell">
        <Outlet />
      </main>
      <SiteFooter />
    </>
  )
}
