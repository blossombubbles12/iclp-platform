import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ethics & Conduct | Institute of Corporate Law, Policy, and Governance Global',
  description: 'Our ethical principles, code of conduct, conflicts and whistleblowing procedures, governance, and accountability commitments.'
};

export default function EthicsPage(){
  const principles = [
    { title: 'Integrity', desc: 'We act with honesty and consistency across research, education, partnerships, and advisory.' },
    { title: 'Independence', desc: 'We maintain freedom from improper influence and disclose relevant conflicts.' },
    { title: 'Fairness', desc: 'We promote equitable access, due process, and respect for persons and institutions.' },
    { title: 'Accountability', desc: 'We welcome scrutiny, publish standards, and measure our performance against them.' },
    { title: 'Stewardship', desc: 'We safeguard data, reputation, and long-term trust as shared assets.' },
    { title: 'Transparency', desc: 'We communicate clearly about methods, limitations, funding, and outcomes.' },
  ];

  const reporting = [
    { step: '1. Raise a Concern', detail: 'Report suspected misconduct or conflicts to the Ethics Officer via the secure channel below. Anonymous reporting is available.' },
    { step: '2. Acknowledge & Triage', detail: 'We acknowledge within two business days and assess scope, risks, and urgency.' },
    { step: '3. Independent Review', detail: 'A designated panel conducts fact-finding with confidentiality and due process.' },
    { step: '4. Outcome & Remedies', detail: 'We communicate findings, apply remedies or sanctions, and capture lessons for prevention.' },
  ];

  return (
    <main className="bg-white dark:bg-dark_black text-dark_black dark:text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className='relative w-full before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10'>
          <div className="container max-w-5xl py-28 md:py-36 flex flex-col gap-6">
            <div className="max-w-3xl flex flex-col gap-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-dark_black dark:text-white">Ethics & Conduct</h1>
              <p className="text-lg text-dark_black/70 dark:text-white/70">Principles, standards, and procedures that sustain integrity, independence, and trust across our work.</p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="#reporting" className="px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-teal-500 via-cyan-400 to-emerald-400 text-white shadow hover:brightness-110">Report a Concern</Link>
              <Link href="#governance" className="px-6 py-3 rounded-full font-semibold border text-dark_black border-dark_black/20 hover:bg-dark_black/5 dark:border-white/30 dark:text-white dark:hover:bg-white/10">Governance</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16">
        <div className="container max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Ethical Principles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((p)=> (
              <div key={p.title} className="p-6 rounded-2xl border border-dark_black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-dark_black/60 dark:text-white/60 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code of Conduct */}
      <section className="py-16">
        <div className="container max-w-5xl grid lg:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">Code of Conduct</h2>
            <ul className="list-disc pl-5 space-y-2 text-dark_black/70 dark:text-white/70">
              <li>Maintain professional integrity in research, teaching, and advisory work.</li>
              <li>Disclose and manage conflicts of interest; recuse where necessary.</li>
              <li>Respect confidentiality, privacy, and lawful use of information.</li>
              <li>Uphold anti-harassment, anti-discrimination, and inclusion commitments.</li>
              <li>Comply with all applicable laws and institutional policies.</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Conflicts of Interest</h3>
            <p className="text-sm text-dark_black/70 dark:text-white/70 leading-relaxed">We require timely disclosure of potential conflicts, establish management plans, and enable independent oversight to protect objectivity and public trust.</p>
            <h3 className="text-xl font-semibold">Research & Teaching Standards</h3>
            <p className="text-sm text-dark_black/70 dark:text-white/70 leading-relaxed">We adhere to rigorous, transparent methods; acknowledge limitations; and separate academic judgment from external pressures.</p>
          </div>
        </div>
      </section>

      {/* Reporting */}
      <section id="reporting" className="py-16">
        <div className="container max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Reporting & Whistleblowing</h2>
          <div className="relative pl-6">
            <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-dark_black/10 dark:bg-white/10" />
            {reporting.map((r,i)=> (
              <div key={r.step} className="relative mb-6">
                <span className="absolute -left-[13px] top-1.5 h-3 w-3 rounded-full bg-teal-500" />
                <div className="p-4 rounded-xl border border-dark_black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur">
                  <p className="text-sm font-semibold">{r.step}</p>
                  <p className="text-sm text-dark_black/60 dark:text-white/60">{r.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex gap-3">
            <Link href="/contact" className="px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-teal-500 via-cyan-400 to-emerald-400 text-white shadow hover:brightness-110">Contact Ethics Officer</Link>
            <Link href="/help-center" className="px-6 py-3 rounded-full font-semibold border text-dark_black border-dark_black/20 hover:bg-dark_black/5 dark:border-white/30 dark:text-white dark:hover:bg-white/10">Help Center</Link>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section id="governance" className="py-16">
        <div className="container max-w-6xl grid lg:grid-cols-3 gap-6">
          {[{t:'Ethics Officer',d:'Receives reports, manages triage, and coordinates independent review.'},{t:'Review Panel',d:'Small, independent group appointed to evaluate complex cases.'},{t:'Board Oversight',d:'Governance Board receives periodic reporting and assures accountability.'}].map((g)=> (
            <div key={g.t} className="p-6 rounded-2xl border border-dark_black/10 dark:border-white/10 bg-gradient-to-br from-[#0f172a]/5 via-teal-500/5 to-emerald-500/5 dark:from-white/5 dark:via-teal-400/5 dark:to-emerald-400/5">
              <h3 className="text-lg font-semibold">{g.t}</h3>
              <p className="text-sm text-dark_black/60 dark:text-white/60">{g.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden ice-cta-bg">
        <div className="container max-w-3xl text-center flex flex-col items-center gap-6 relative">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-dark_black dark:text-white">Uphold Integrity With Us</h2>
          <p className="text-dark_black/70 dark:text-white/70">If you see something, say something. We protect reporters acting in good faith and remediate issues promptly.</p>
        <div className="flex gap-3 flex-wrap justify-center">
            <Link href="/contact" className="px-7 py-3 rounded-full font-semibold bg-gradient-to-r from-teal-500 via-cyan-400 to-emerald-400 text-white shadow hover:brightness-110">Report Now</Link>
            <Link href="/privacy-policy" className="px-7 py-3 rounded-full font-semibold border text-dark_black border-dark_black/15 hover:bg-dark_black/5 dark:text-white dark:border-white/25 dark:hover:bg-white/10">Read Policies</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
