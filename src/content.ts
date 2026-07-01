// Single source of truth for every piece of copy and data on the site.
// Edit here to update the portfolio — components render straight from these values.

export interface Stat {
  value: string
  label: string
}

export interface Role {
  company: string
  title: string
  start: string
  end: string
  location: string
  blurb: string
}

export type LinkKind = 'web' | 'apple' | 'google' | 'external'

export interface ProjectLink {
  label: string
  href: string
  kind: LinkKind
}

export interface Project {
  name: string
  category: string
  blurb: string
  tech: string[]
  links: ProjectLink[]
  status: 'Live' | 'In testing'
  /** Shown as a muted "coming soon" pill (e.g. a store release still in review). */
  comingSoon?: string
  /** Marks a product built under the PMP Novelty Solutions studio. */
  studio?: boolean
}

export interface SkillGroup {
  label: string
  items: string[]
}

export const identity = {
  name: 'Tasos Panayi',
  title: 'Senior Software Engineer',
  location: 'Nicosia, Cyprus',
  email: 'anastasiosbusiness@hotmail.com',
  github: 'https://github.com/KiteProgramming',
  linkedin: 'https://www.linkedin.com/in/tasos-panayi-584619170',
  cvHref: '/Tasos-Panayi-CV.pdf',
  tagline:
    'I design and ship production web and mobile products end-to-end — from database schema and auth to store releases.',
  summary:
    'Senior software engineer with 5+ years across fintech, Forex trading platforms, and modern SaaS. Strong command of TypeScript, React, and Supabase, alongside Python, Node.js, ColdFusion, and AWS. I care about clean architecture, performance, and software people actually enjoy using.',
  founderNote:
    'Independently, I build and run PMP Novelty Solutions — a small studio that ships ready-made products for real businesses: online shops, booking systems, and landing and event sites.',
  studio: {
    name: 'PMP Novelty Solutions',
    url: 'https://pmpnoveltysolutions.com',
    linkedin:
      'https://www.linkedin.com/company/pm-panayi-novelty-business-solutions/',
  },
} as const

// The signature motif: the stages Tasos owns end-to-end.
export const pipeline = ['schema', 'auth', 'UI', 'release', 'deploy'] as const

export const stats: Stat[] = [
  { value: '5+', label: 'years shipping' },
  { value: '7', label: 'products shipped' },
  { value: 'iOS + Android', label: 'store releases' },
]

export const facts: { label: string; value: string }[] = [
  { label: 'based', value: 'Nicosia, Cyprus' },
  { label: 'languages', value: 'English (Professional) · Greek (Native)' },
  { label: 'education', value: 'BSc (Hons) Computer Science — Coventry (2:1)' },
  { label: 'certified', value: 'Strategic Development of AI for Business — OEB, 2024' },
]

export const roles: Role[] = [
  {
    company: 'Netmar LTD',
    title: 'Senior Software Engineer',
    start: 'May 2026',
    end: 'Present',
    location: 'Limassol, Cyprus',
    blurb:
      "Own broader architecture across the company's Forex trading platforms — driving performance, real-time data infrastructure, and end-to-end feature delivery across multiple brands.",
  },
  {
    company: 'Netmar LTD',
    title: 'Full Stack Developer',
    start: 'Apr 2025',
    end: 'May 2026',
    location: 'Limassol, Cyprus',
    blurb:
      'Built and maintained frontend and backend systems for Forex trading platforms with a focus on performance, scalability, and security. Integrated third-party APIs and implemented real-time data handling across brands.',
  },
  {
    company: 'DynamicWorks',
    title: 'Fintech Engineer',
    start: 'Aug 2023',
    end: 'Feb 2025',
    location: 'Nicosia, Cyprus',
    blurb:
      'Led integration of new technologies into fintech products for a leading brokerage CRM, improving scalability and security while optimising backend systems and automation.',
  },
  {
    company: 'DynamicWorks',
    title: 'Software Developer',
    start: 'Jun 2022',
    end: 'Aug 2023',
    location: 'Nicosia, Cyprus',
    blurb:
      'Designed and implemented third-party API integrations that streamlined financial transactions, and built web applications with ColdFusion, Bootstrap, and JavaScript.',
  },
  {
    company: 'DynamicWorks',
    title: 'Junior Software Developer',
    start: 'Jun 2021',
    end: 'Jun 2022',
    location: 'Nicosia, Cyprus',
    blurb:
      'Developed fintech features for the Syntellicore CRM using ColdFusion and jQuery, contributing to the platform’s financial functionality.',
  },
]

export const projects: Project[] = [
  {
    name: 'Padel Club League',
    category: 'Web + mobile app',
    status: 'Live',
    blurb:
      'End-to-end platform for padel clubs to run leagues: players join, play matches, and climb live rankings; clubs manage results with two-step score verification and take payments via Stripe.',
    tech: ['React', 'TypeScript', 'Supabase', 'Stripe', 'Real-time', 'React Native', 'Expo'],
    links: [
      { label: 'padelclubleague.com', href: 'https://padelclubleague.com/', kind: 'web' },
      { label: 'App Store', href: 'https://apps.apple.com/us/app/padel-club-league/id6760415427', kind: 'apple' },
    ],
    comingSoon: 'Google Play soon',
  },
  {
    name: 'Habit Challenger',
    category: 'Mobile app',
    status: 'Live',
    blurb:
      'Cross-platform habit tracker with streaks, reminders, and challenges that help people build and keep daily routines. Shipped to both app stores.',
    tech: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'Notifications'],
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/app/habitchallenger/id6758393282', kind: 'apple' },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.novelty.habitbuddy', kind: 'google' },
    ],
  },
  {
    name: 'Moiva Jewellery',
    category: 'E-commerce',
    status: 'Live',
    blurb:
      'Contemporary storefront for a modern jewellery brand — curated collections and an inquiry flow up front, with a full admin console for catalogue, imagery, and live stock behind the scenes.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Supabase', 'TanStack Query'],
    links: [{ label: 'moivajewellery.com', href: 'https://moivajewellery.com/', kind: 'web' }],
  },
  {
    name: "Maya's Flavours",
    category: 'Website',
    status: 'Live',
    blurb:
      'Bilingual (Greek / English) site for a Cyprus-based artisan dessert brand specialising in French fruit desserts, with island-wide delivery.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind', 'i18n (EL / EN)'],
    links: [{ label: 'mayasflavours.com', href: 'https://www.mayasflavours.com/', kind: 'web' }],
  },
  {
    name: 'NoveltyLanding',
    category: 'SaaS · landing & event sites',
    status: 'Live',
    studio: true,
    blurb:
      'A premium landing-page and event-site product with client-editable content, themes, and lead capture — set up and branded for conferences, launches, and businesses.',
    tech: ['Content control', 'Premium themes', 'Lead capture'],
    links: [{ label: 'pmpnoveltysolutions.com', href: 'https://pmpnoveltysolutions.com', kind: 'external' }],
  },
  {
    name: 'NoveltyShop',
    category: 'SaaS · online shops',
    status: 'Live',
    studio: true,
    blurb:
      'A complete online shop product: product admin, secure checkout, payments, shipping, and discounts — with Standard, Premium, and Elite tiers to grow into.',
    tech: ['Product admin', 'Secure checkout', 'Payments', 'Shipping'],
    links: [{ label: 'pmpnoveltysolutions.com', href: 'https://pmpnoveltysolutions.com', kind: 'external' }],
  },
  {
    name: 'NoveltyBooking',
    category: 'SaaS · booking systems',
    status: 'Live',
    studio: true,
    blurb:
      'A booking website for appointment-based businesses — staff, services, working hours, recurring bookings, and an admin calendar, with English and Greek support.',
    tech: ['Appointments', 'Staff & services', 'Admin calendar', 'EL / EN'],
    links: [{ label: 'pmpnoveltysolutions.com', href: 'https://pmpnoveltysolutions.com', kind: 'external' }],
  },
]

export const skills: SkillGroup[] = [
  { label: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'ColdFusion', 'C#', 'C++'] },
  { label: 'Frontend', items: ['React 18', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'TanStack Query', 'React Hook Form', 'Zod'] },
  { label: 'Mobile', items: ['React Native', 'Expo', 'iOS & Android releases'] },
  { label: 'Backend', items: ['Node.js', 'Django', 'Supabase (Auth, Storage, RLS)', 'REST & SOAP'] },
  { label: 'Databases', items: ['PostgreSQL', 'MS SQL', 'MySQL', 'MongoDB'] },
  { label: 'Cloud & DevOps', items: ['AWS', 'GitHub Actions', 'Docker', 'Kubernetes', 'Git'] },
  { label: 'Methods', items: ['Agile', 'Full SDLC ownership'] },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
] as const
