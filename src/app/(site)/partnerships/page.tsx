import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Partnerships | ICLP Institute',
  description: 'Collaborative governance, compliance, and board education partnerships with institutions, regulators, firms, and NGOs.'
}

const partnershipModels = [
  {
    title: 'Academic & Research',
    points: [
      'Joint governance or ESG applied research studies',
      'Curriculum co-development & faculty exchange',
      'Student immersion & executive practicum pathways'
    ]
  },
  {
    title: 'Corporate & Board Programs',
    points: [
      'Custom director & committee training cohorts',
      'Board evaluation tooling & benchmarking',
      'Ethics, disclosure & risk oversight calibration'
    ]
  },
  {
    title: 'Regulatory & Policy Bodies',
    points: [
      'Advisory input on governance code modernization',
      'Policy impact briefing synthesis & translation',
      'Capacity-building frameworks for oversight units'
    ]
  },
  {
    title: 'NGO / Impact Consortia',
    points: [
      'Cross-sector accountability initiatives',
      'Ethical reporting & transparency toolkits',
      'Inclusive governance literacy expansion'
    ]
  }
]

export default function PartnershipsPage(){
  return (
    <section>
      <div className="relative w-full pt-44 2xl:pb-24 pb-12 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10">
        <div className="container relative z-10 max-w-5xl flex flex-col gap-14">
          <header className="flex flex-col gap-6 text-center max-w-3xl mx-auto">
            <h1 className="md:text-6xl text-4xl font-medium">Strategic Partnerships</h1>
            <p className="text-dark_black/60 dark:text-white/60 text-base md:text-lg leading-relaxed">We collaborate with institutions, regulators, boards, and mission-driven organizations to elevate governance resilience, ethical compliance, and strategic stewardship worldwide.</p>
          </header>
          <div className="bg-white dark:bg-dark_black p-8 md:p-12 rounded-2xl border border-dark_black/10 dark:border-white/10 flex flex-col gap-14">
            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight">Why Partner with ICLP</h2>
              <ul className="grid sm:grid-cols-2 gap-4 text-sm text-dark_black/70 dark:text-white/70">
                {[
                  'Applied governance research translation',
                  'Director & executive education depth',
                  'Cross-jurisdiction regulatory insight',
                  'Ethics + ESG integration frameworks',
                  'Measurement & evaluative diagnostics',
                  'Neutral convening for multi-stakeholder dialogue'
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 p-4 rounded-xl bg-dark_black/5 dark:bg-white/5 border border-dark_black/10 dark:border-white/10">
                    <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#5bc6d0]/15 ring-1 ring-[#5bc6d0]/35"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#5bc6d0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5 10 17l10-12"/></svg></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section className="flex flex-col gap-6">
              <h2 className="text-2xl font-semibold tracking-tight">Engagement Models</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {partnershipModels.map(m => (
                  <div key={m.title} className="p-6 rounded-2xl border border-dark_black/10 dark:border-white/10 bg-dark_black/5 dark:bg-white/5 flex flex-col gap-4">
                    <h3 className="font-semibold text-lg">{m.title}</h3>
                    <ul className="flex flex-col gap-2 text-sm text-dark_black/70 dark:text-white/70">
                      {m.points.map(p => <li key={p} className="flex items-start gap-2"><span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#5bc6d0]" />{p}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight">Collaboration Process</h2>
              <ol className="list-decimal ml-5 flex flex-col gap-3 text-sm text-dark_black/70 dark:text-white/70">
                <li><span className="font-medium">Exploration Call:</span> Assess objectives, governance maturity, and opportunity scope.</li>
                <li><span className="font-medium">Diagnostic Alignment:</span> Map needs to structured pathways or co-design brief.</li>
                <li><span className="font-medium">Proposal & Framework:</span> Define deliverables, timelines, metrics, and steward roles.</li>
                <li><span className="font-medium">Activation:</span> Launch cohort, research stream, or toolkit deployment.</li>
                <li><span className="font-medium">Measurement & Iteration:</span> Evaluate engagement impact and adapt for scale.</li>
              </ol>
            </section>
            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight">Impact Dimensions</h2>
              <div className="grid sm:grid-cols-2 gap-5 text-sm text-dark_black/70 dark:text-white/70">
                {[
                  'Board effectiveness & oversight clarity',
                  'Ethics & disclosure integrity uplift',
                  'Regulatory preparedness acceleration',
                  'Scenario-based risk literacy',
                  'ESG convergence and assurance framing',
                  'Inclusive governance participation expansion'
                ].map(dim => (
                  <div key={dim} className="p-4 rounded-xl bg-dark_black/5 dark:bg-white/5 border border-dark_black/10 dark:border-white/10 flex items-start gap-3">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#5bc6d0]" />
                    <span>{dim}</span>
                  </div>
                ))}
              </div>
            </section>
            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight">Get Started</h2>
              <p className="text-sm text-dark_black/70 dark:text-white/70 leading-relaxed">We welcome aligned collaborations. Introduce your mandate, scope, jurisdiction focus, and timeline preferences. We usually respond within 3–5 business days.</p>
              <div className="flex flex-wrap gap-4 items-center">
                <Link href="/contact#partnerships" className="px-6 py-3 rounded-full bg-[#5bc6d0] text-dark_black font-semibold text-sm hover:brightness-110 transition">Initiate Partnership Inquiry</Link>
                <Link href="/about#impact" className="text-sm underline underline-offset-4 text-dark_black/60 dark:text-white/60 hover:text-dark_black dark:hover:text-white">View Impact Overview</Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}
