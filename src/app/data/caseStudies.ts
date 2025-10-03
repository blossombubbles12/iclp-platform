export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  client: string;
  industry: string;
  goals: string[];
  services: string[];
  featuredMediaType: 'image' | 'video';
  featuredMedia: string;
  challenge: string;
  solution: string;
  process: { step: string; detail: string }[];
  results: { label: string; value: number; suffix?: string }[];
  testimonial?: { quote: string; name: string; role: string; avatar: string; logo?: string };
  gallery: { src: string; alt: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'governance-transformation',
    title: 'Governance Operating Model Transformation',
    tagline: 'From compliance-heavy to performance-aligned oversight across 12 jurisdictions.',
    client: 'Global FinServ Group',
    industry: 'Financial Services',
    goals: ['Harmonize multi-jurisdictional oversight','Strengthen risk signal interpretation','Accelerate compliance-to-performance translation'],
    services: ['Governance Design','Policy Prototyping','Executive Education','Regulatory Mapping'],
    featuredMediaType: 'image',
    featuredMedia: '/images/home/banner-bg.svg',
    challenge: 'Fragmented oversight, duplicated controls, and slow reactions to regulatory change created friction and suppressed strategic optionality.',
    solution: 'We redesigned the governance operating model, introduced decision windows, and deployed an executive education series to align board attention with risk narratives.',
    process: [
      { step: 'Discovery', detail: 'Stakeholder interviews, document review, materiality mapping.' },
      { step: 'Design', detail: 'Operating model blueprint, decision rights, escalation pathways.' },
      { step: 'Pilot', detail: 'Two-jurisdiction pilot with feedback loops and quick wins.' },
      { step: 'Scale', detail: 'Rollout across 12 jurisdictions with playbooks and clinics.' }
    ],
    results: [
      { label: 'Engagement', value: 45, suffix: '%+' },
      { label: 'Decision Velocity', value: 3, suffix: 'x' },
      { label: 'Control Duplication', value: 28, suffix: '% less' }
    ],
    testimonial: {
      quote: 'The transformation elevated our board focus and turned compliance friction into measurable performance lift.',
      name: 'Elena Ramirez',
      role: 'Group Chief Compliance Officer',
      avatar: '/images/home/avatar_2.jpg',
      logo: '/logo/corpratelaw.png'
    },
    gallery: [
      { src: '/images/home/avatar_1.jpg', alt: 'Workshop' },
      { src: '/images/home/avatar_2.jpg', alt: 'Board Session' },
      { src: '/images/home/avatar_3.jpg', alt: 'Design Lab' },
      { src: '/images/home/avatar_4.jpg', alt: 'Clinic' }
    ]
  }
];
