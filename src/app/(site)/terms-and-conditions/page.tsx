import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Institute of Corporate Law, Policy, and Governance Global',
  description: 'The terms governing use of our websites, programs, and related services.'
};

export default function TermsConditionsPage(){
  const sections = [
    { t: 'Acceptance of Terms', b: 'By accessing our websites or enrolling in programs, you agree to these Terms & Conditions and any referenced policies.' },
    { t: 'Use of Services', b: 'Use our services only for lawful purposes and in accordance with applicable policies and academic integrity standards.' },
    { t: 'Accounts & Security', b: 'You are responsible for maintaining the confidentiality of account credentials and for all activities under your account.' },
    { t: 'Intellectual Property', b: 'All content is protected by intellectual property laws. You may not reproduce or distribute materials without permission unless permitted by law.' },
    { t: 'Payments & Refunds', b: 'Fees, billing cycles, and refund eligibility are described at the point of purchase or in relevant program documentation.' },
    { t: 'Third-Party Services', b: 'We may integrate third-party tools subject to their own terms; we are not responsible for their content or practices.' },
    { t: 'Limitation of Liability', b: 'To the extent permitted by law, we disclaim certain warranties and limit liability as set out in detail in the full terms.' },
    { t: 'Changes to Terms', b: 'We may update terms periodically; material changes will be communicated through our site or by direct notice where appropriate.' },
    { t: 'Governing Law', b: 'These terms are governed by applicable laws of the relevant jurisdiction, without regard to conflict of law principles.' },
    { t: 'Contact', b: 'Questions about these terms? Contact us via the Help Center.' },
  ];

  return (
    <main className="bg-white dark:bg-dark_black text-dark_black dark:text-white">
      <section className="relative overflow-hidden">
        <div className='relative w-full before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10'>
          <div className="container max-w-5xl py-28 md:py-36 flex flex-col gap-6">
            <div className="max-w-3xl flex flex-col gap-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">Terms & Conditions</h1>
              <p className="text-lg text-dark_black/70 dark:text-white/70">Please read these terms carefully before using our services.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-5xl space-y-6">
          {sections.map(s => (
            <div key={s.t} id={s.t.toLowerCase().replace(/\s+/g,'-')} className="p-6 rounded-2xl border border-dark_black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur">
              <h2 className="text-xl md:text-2xl font-bold mb-2">{s.t}</h2>
              <p className="text-sm text-dark_black/70 dark:text-white/70 leading-relaxed">{s.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 relative overflow-hidden ice-cta-bg">
        <div className="container max-w-3xl text-center flex flex-col items-center gap-6 relative">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">Questions about these terms?</h2>
          <p className="text-dark_black/70 dark:text-white/70">Visit our Help Center or contact us for clarification before proceeding.</p>
        </div>
      </section>
    </main>
  );
}
