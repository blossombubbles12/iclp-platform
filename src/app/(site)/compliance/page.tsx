import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Compliance | Institute of Corporate Law, Policy, and Governance Global',
  description: 'Our compliance framework, regulatory standards, and controls supporting governance, risk, and compliance (GRC).'
};

export default function CompliancePage(){
  const pillars = [
    { t: 'Governance', d: 'Board oversight, ethics committees, and role clarity ensure accountability and sound decision-making.' },
    { t: 'Risk Management', d: 'Identify, assess, and monitor risks across strategic, operational, financial, and compliance domains.' },
    { t: 'Compliance Controls', d: 'Policies, training, attestations, and audits to meet applicable laws, regulations, and standards.' },
    { t: 'Data Protection', d: 'Privacy-by-design, access control, encryption, and incident response aligned with regulatory requirements.' },
    { t: 'Reporting & Assurance', d: 'Internal reporting lines, whistleblowing, external assurance, and continuous improvement.' },
  ];

  const policies = [
    'Code of Conduct',
    'Conflicts of Interest & Disclosures',
    'Anti-Bribery & Anti-Corruption',
    'Data Protection & Privacy',
    'Information Security',
    'Academic Integrity',
    'Vendor & Third-Party Management',
  ];

  return (
    <main className="bg-white dark:bg-dark_black text-dark_black dark:text-white">
      <section className="relative overflow-hidden">
        <div className='relative w-full before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10'>
          <div className="container max-w-5xl py-28 md:py-36 flex flex-col gap-6">
            <div className="max-w-3xl flex flex-col gap-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">Compliance</h1>
              <p className="text-lg text-dark_black/70 dark:text-white/70">Our GRC approach strengthens trust through robust governance, effective risk management, and compliance excellence.</p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/ethics" className="px-6 py-3 rounded-full font-semibold border text-dark_black border-dark_black/20 hover:bg-dark_black/5 dark:border-white/30 dark:text-white dark:hover:bg-white/10">Ethics & Conduct</Link>
              <Link href="/privacy-policy" className="px-6 py-3 rounded-full font-semibold border text-dark_black border-dark_black/20 hover:bg-dark_black/5 dark:border-white/30 dark:text-white dark:hover:bg-white/10">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="px-6 py-3 rounded-full font-semibold border text-dark_black border-dark_black/20 hover:bg-dark_black/5 dark:border-white/30 dark:text-white dark:hover:bg-white/10">Terms</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-6xl grid lg:grid-cols-3 gap-6">
          {pillars.map(p => (
            <div key={p.t} className="p-6 rounded-2xl border border-dark_black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur">
              <h3 className="text-lg font-semibold">{p.t}</h3>
              <p className="text-sm text-dark_black/60 dark:text-white/60">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Key Policies</h2>
          <ul className="grid sm:grid-cols-2 gap-3 text-sm text-dark_black/70 dark:text-white/70">
            {policies.map(p => (
              <li key={p} className="p-4 rounded-xl border border-dark_black/10 dark:border-white/10 bg-white/60 dark:bg-white/5">{p}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden ice-cta-bg">
        <div className="container max-w-3xl text-center flex flex-col items-center gap-6 relative">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">Need compliance information?</h2>
          <p className="text-dark_black/70 dark:text-white/70">Visit our Help Center or reach out for attestations, certifications, or policy copies.</p>
          <div className="flex gap-3 flex-wrap justify-center">
            <Link href="/help-center" className="px-7 py-3 rounded-full font-semibold bg-gradient-to-r from-teal-500 via-cyan-400 to-emerald-400 text-white shadow hover:brightness-110">Help Center</Link>
            <Link href="/contact" className="px-7 py-3 rounded-full font-semibold border text-dark_black border-dark_black/15 hover:bg-dark_black/5 dark:text-white dark:border-white/25 dark:hover:bg-white/10">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
