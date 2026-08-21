import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout'
import { ContactPage } from './pages/ContactPage'
import { GymPage } from './pages/GymPage'
import { HomePage } from './pages/HomePage'
import { InjuryClinicPage } from './pages/InjuryClinicPage'
import { TeamPage } from './pages/TeamPage'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['HealthAndBeautyBusiness', 'SportsActivityLocation'],
  name: 'BodyTech Injury & Performance',
  description: 'Therapy-led fitness, rehabilitation and recovery facility in Dublin 12.',
  telephone: '+353879971663',
  email: 'bodytech.injury.performance@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'B19 Ballymount Corporate Park, Ballymount Avenue',
    addressLocality: 'Dublin 12',
    postalCode: 'D12 CY93',
    addressCountry: 'IE',
  },
  sameAs: ['https://www.instagram.com/bodytech_official'],
}

export default function App() {
  return (
    <>
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="injury-clinic" element={<InjuryClinicPage />} />
          <Route path="gym" element={<GymPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </>
  )
}
