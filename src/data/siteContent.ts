export type Service = {
  title: string
  shortTitle: string
  description: string
  category: 'Consultation' | 'Rehabilitation' | 'Treatment' | 'Recovery'
}

export type Membership = {
  title: string
  eyebrow: string
  description: string
  features: string[]
}

export type TeamMember = {
  name: string
  role: string
  biography: string
  focus?: string[]
  image?: string
  imagePosition?: string
}

export type OpeningHours = {
  day: string
  hours: string
}

export type ExternalLinks = {
  clinicBooking: string
  yogaBooking: string
  memberships: string
  phone: string
  email: string
  instagram: string
  maps: string
}

export const externalLinks: ExternalLinks = {
  clinicBooking:
    'https://book.squareup.com/appointments/sz3527l76dnu67/location/LRSGQ4XHNAB1C/services?buttonTextColor=ffffff&color=d81111&locale=en&referrer=so',
  yogaBooking:
    'https://book.squareup.com/classes/sz3527l76dnu67/location/LRSGQ4XHNAB1C/classes?buttonTextColor=ffffff&color=d81111&locale=en&referrer=so',
  memberships: 'https://bodytech---injury-performance.square.site/memberships',
  phone: 'tel:+353879971663',
  email: 'mailto:bodytech.injury.performance@gmail.com',
  instagram: 'https://www.instagram.com/bodytech_official',
  maps:
    'https://www.google.com/maps/search/?api=1&query=BodyTech%20Injury%20%26%20Performance%20B19%20Ballymount%20Corporate%20Park%20Dublin%2012%20D12%20CY93',
}

export const siteImages = {
  clinic: '/assets/clinic-massage.jpg',
}

export const contactDetails = {
  phoneDisplay: '+353 87 997 1663',
  emailDisplay: 'bodytech.injury.performance@gmail.com',
  instagramDisplay: '@bodytech_official',
  address: 'B19 Ballymount Corporate Park, Ballymount Avenue, Dublin 12, Co. Dublin, D12 CY93',
}

export const openingHours: OpeningHours[] = [
  { day: 'Monday', hours: '09:00–20:00' },
  { day: 'Tuesday', hours: '14:00–21:00' },
  { day: 'Wednesday', hours: '17:00–21:00' },
  { day: 'Thursday', hours: '18:00–21:00' },
  { day: 'Friday', hours: '17:00–21:00' },
  { day: 'Saturday', hours: '09:00–12:00' },
  { day: 'Sunday', hours: 'Closed' },
]

export const services: Service[] = [
  {
    title: 'Initial Injury Consultation — NMT / Physical Therapy',
    shortTitle: 'Initial injury consultation',
    category: 'Consultation',
    description:
      'A focused first assessment combining neuromuscular and physical therapy expertise to understand pain, movement and the most effective route back to full function.',
  },
  {
    title: 'Lower Leg, Knee & Ankle Rehabilitation',
    shortTitle: 'Lower leg, knee & ankle',
    category: 'Rehabilitation',
    description:
      'Individual rehabilitation exercise focused on building a stronger, more mobile base while addressing lower-limb pain and performance limitations.',
  },
  {
    title: 'Shoulder, Neck & Upper-Body Rehabilitation',
    shortTitle: 'Shoulder, neck & upper body',
    category: 'Rehabilitation',
    description:
      'A targeted programme designed to restore comfortable movement, improve upper-body function and support a confident return to daily life or sport.',
  },
  {
    title: 'Lower-Back, Hip & Glute Rehabilitation',
    shortTitle: 'Lower back, hip & glute',
    category: 'Rehabilitation',
    description:
      'Assessment-led rehabilitation that develops strength and mobility through the lower back, hips and glutes to reduce pain and improve performance.',
  },
  {
    title: 'Dry & Electro Needling — NMT / Physical Therapy',
    shortTitle: 'Dry & electro needling',
    category: 'Treatment',
    description:
      'A precise treatment option used within a wider therapy plan to address muscular pain, restore movement and support recovery.',
  },
  {
    title: 'Deep-Tissue & Sports Massage',
    shortTitle: 'Deep-tissue & sports massage',
    category: 'Treatment',
    description:
      'Deeper pressure and targeted movement help release tension, stress and referred pain through the body’s connected muscle and tissue chains.',
  },
  {
    title: 'Full-Body Deep-Tissue & Sports Massage',
    shortTitle: 'Full-body sports massage',
    category: 'Treatment',
    description:
      'An extended treatment for clients who need broader attention across the body due to intense activity, underactivity or prolonged muscular pain.',
  },
  {
    title: 'NormaTec Recovery Compression Boots',
    shortTitle: 'NormaTec compression recovery',
    category: 'Recovery',
    description:
      'Dynamic compression supports circulation and helps reduce post-training soreness and stiffness, so you can recover well between sessions.',
  },
]

export const memberships: Membership[] = [
  {
    title: 'One Year Membership',
    eyebrow: 'Commit to the full year',
    description: 'A full-year route for consistent, coached group training.',
    features: ['Group-class access', 'Long-term training rhythm', 'Managed through Glofox'],
  },
  {
    title: 'Fit for Life — Over 55s',
    eyebrow: 'Strength for everyday life',
    description: 'Coached strength, balance and mobility for adults aged 55+.',
    features: ['Age-focused coaching', 'Mobility and balance', 'Supportive group setting'],
  },
  {
    title: 'BodyTech Membership — Group Classes',
    eyebrow: 'Structured group training',
    description: 'Expert-led strength and conditioning in a motivating group.',
    features: ['Coached sessions', 'Strength and conditioning', 'Recurring membership'],
  },
  {
    title: 'Founding Membership — Group Classes',
    eyebrow: 'For founding members',
    description: 'The existing founding-member route for ongoing group training.',
    features: ['Group-class access', 'Existing member pathway', 'Managed through Glofox'],
  },
]

export const team: TeamMember[] = [
  {
    name: 'Ian Nolan',
    role: 'Owner · Neuromuscular & Physical Therapist',
    biography:
      'Ian is a fully qualified Neuromuscular Therapist with extensive training in the safe and effective application of NMT and physical therapy. His focus is helping clients move beyond pain and injury, then rebuild the strength and confidence needed to perform at their best.',
    focus: ['Chronic pain', 'Sports injuries', 'Rehabilitation', 'Movement restoration'],
    image: '/assets/team-ian-nolan.jpg',
    imagePosition: '50% 28%',
  },
  {
    name: 'Thomas Maher',
    role: 'Physical Therapist',
    biography:
      'Thomas is a Physical Therapist trained across a range of treatments that support long-lasting recovery. He works with chronic pain and sports injuries, helping clients understand the source of discomfort and progress toward better movement.',
    focus: ['Physical therapy', 'Chronic pain', 'Sports injuries', 'Targeted treatment'],
    image: '/assets/team-thomas-maher.jpg',
    imagePosition: '42% 28%',
  },
  {
    name: 'Conor Walsh',
    role: 'BodyTech team',
    biography:
      'Conor is part of the BodyTech booking team. Current availability and bookable services are kept up to date through Square.',
    image: '/assets/team-conor-walsh.jpg',
    imagePosition: '34% 28%',
  },
  {
    name: 'Alex',
    role: 'Yoga Instructor',
    biography:
      'Alex leads BodyTech yoga sessions focused on strength, mobility and recovery. Current classes and live availability are kept up to date through Square.',
    focus: ['Yoga', 'Mobility', 'Recovery'],
    image: '/assets/team-alex.jpg',
    imagePosition: '57% 28%',
  },
]

export const gymProgrammes = [
  {
    title: 'Group strength & conditioning',
    description: 'Progressive coached sessions that build practical strength, fitness and confidence.',
  },
  {
    title: 'Therapy-led gym',
    description: 'Training informed by rehabilitation expertise, with movement quality at the centre.',
  },
  {
    title: 'Fit for Life — Over 55s',
    description: 'A welcoming programme for strength, balance, mobility and long-term independence.',
  },
  {
    title: 'Yoga & movement',
    description: 'A dedicated yoga class with Alex, alongside a wider movement offering that includes Pilates.',
  },
]
