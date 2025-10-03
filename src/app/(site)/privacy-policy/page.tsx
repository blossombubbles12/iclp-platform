import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Privacy Policy | Institute of Corporate Law, Policy, and Governance Global',
    description: 'How we collect, use, and protect your information, with your rights and choices under applicable data protection laws.'
};

export default function PrivacyPolicyPage(){
    const sections = [
        { title: 'Scope', body: 'This Privacy Policy describes how the Institute of Corporate Law, Policy, and Governance Global (ICLPG) collects, uses, discloses, and safeguards personal information in connection with our websites, learning platforms, research, and advisory services.' },
        { title: 'Information We Collect', body: 'We collect information you provide (e.g., contact, enrollment, applications), information from your use (e.g., device, analytics, cookies), and information from partners where lawful and appropriate.' },
        { title: 'How We Use Information', body: 'To provide and improve services, personalize experiences, communicate updates, fulfill legal obligations, and conduct research and analytics consistent with our mission.' },
        { title: 'Sharing & Disclosure', body: 'We share with service providers under contract, with your consent, to comply with law, protect rights and safety, or as part of organizational transitions, subject to appropriate safeguards.' },
        { title: 'Data Security', body: 'We apply administrative, technical, and physical safeguards appropriate to the sensitivity of the information we process; however no method is 100% secure.' },
        { title: 'Retention', body: 'We retain information as needed to provide services, meet legal obligations, resolve disputes, and enforce agreements, consistent with our retention schedules.' },
        { title: 'Your Rights', body: 'Subject to applicable law, you may have rights to access, correct, delete, restrict, or port your data, and to object to certain processing, including direct marketing.' },
        { title: 'International Transfers', body: 'Where data are transferred across borders, we use appropriate transfer mechanisms and safeguards in accordance with applicable laws.' },
        { title: 'Children', body: 'Our services are not directed to children under 13 (or as defined by local law). We do not knowingly collect personal information from children without appropriate consent.' },
        { title: 'Contact', body: 'Questions or requests? Contact us via the Help Center or the contact options below.' },
    ];

    return (
        <main className="bg-white dark:bg-dark_black text-dark_black dark:text-white">
            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className='relative w-full before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10'>
                    <div className="container max-w-5xl py-28 md:py-36 flex flex-col gap-6">
                        <div className="max-w-3xl flex flex-col gap-4">
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight">Privacy Policy</h1>
                            <p className="text-lg text-dark_black/70 dark:text-white/70">Your privacy matters. Learn how we handle your information and the choices available to you.</p>
                        </div>
                        <div className="flex flex-wrap gap-3 pt-2">
                            <Link href="#rights" className="px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-teal-500 via-cyan-400 to-emerald-400 text-white shadow hover:brightness-110">Know Your Rights</Link>
                            <Link href="/help-center" className="px-6 py-3 rounded-full font-semibold border text-dark_black border-dark_black/20 hover:bg-dark_black/5 dark:border-white/30 dark:text-white dark:hover:bg-white/10">Help Center</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container max-w-5xl space-y-8">
                    {sections.map((s)=> (
                        <div key={s.title} id={s.title.toLowerCase().replace(/\s+/g,'-')} className="p-6 rounded-2xl border border-dark_black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur">
                            <h2 className="text-2xl font-bold mb-2">{s.title}</h2>
                            <p className="text-sm text-dark_black/70 dark:text-white/70 leading-relaxed">{s.body}</p>
                        </div>
                    ))}

                    {/* Rights */}
                    <div id="rights" className="p-6 rounded-2xl border border-dark_black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur">
                        <h2 className="text-2xl font-bold mb-2">Your Rights & Choices</h2>
                        <ul className="list-disc pl-5 space-y-2 text-sm text-dark_black/70 dark:text-white/70">
                            <li>Access, correction, deletion, restriction, and portability (where applicable).</li>
                            <li>Opt-out of marketing communications; manage cookies and analytics preferences.</li>
                            <li>Withdraw consent where processing is based on consent; lodge a complaint with a regulator where available.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 relative overflow-hidden ice-cta-bg">
                <div className="container max-w-3xl text-center flex flex-col items-center gap-6 relative">
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight">Have a privacy request?</h2>
                    <p className="text-dark_black/70 dark:text-white/70">Use our Help Center for faster routing, or contact us if you need assistance with your data rights.</p>
                    <div className="flex gap-3 flex-wrap justify-center">
                        <Link href="/help-center" className="px-7 py-3 rounded-full font-semibold bg-gradient-to-r from-teal-500 via-cyan-400 to-emerald-400 text-white shadow hover:brightness-110">Help Center</Link>
                        <Link href="/contact" className="px-7 py-3 rounded-full font-semibold border text-dark_black border-dark_black/15 hover:bg-dark_black/5 dark:text-white dark:border-white/25 dark:hover:bg-white/10">Contact Us</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
