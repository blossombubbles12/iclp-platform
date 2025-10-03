import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { caseStudies } from '@/app/data/caseStudies';

export const metadata: Metadata = {
  title: 'Case Studies | Institute of Corporate Law, Policy, and Governance Global',
  description: 'Explore immersive case studies showcasing governance transformations and measurable impact.'
};

export default function CaseStudiesIndex(){
  return (
    <main className="bg-white dark:bg-dark_black text-dark_black dark:text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className='relative w-full before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10'>
          <div className="container max-w-5xl py-28 md:py-36 flex flex-col items-center text-center gap-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-dark_black dark:text-white">Case Studies</h1>
            <p className="text-dark_black/70 dark:text-white/70 max-w-2xl">Cinematic, evidence-led stories of governance transformation and measurable performance impact.</p>
          </div>
        </div>
      </section>

      {/* List */}
      <section className="py-16">
        <div className="container max-w-6xl grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map(cs => (
            <article key={cs.slug} className="group rounded-2xl overflow-hidden border border-dark_black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur flex flex-col">
              <div className="relative h-44 overflow-hidden">
                {cs.featuredMediaType === 'image' ? (
                  <Image src={cs.featuredMedia} alt={cs.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                ) : (
                  <video className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" autoPlay loop muted playsInline>
                    <source src={cs.featuredMedia} />
                  </video>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute left-4 bottom-3 px-2 py-1 text-[10px] uppercase tracking-wide rounded-full bg-dark_black/70 text-white">{cs.industry}</span>
              </div>
              <div className="p-5 flex flex-col gap-3 grow">
                <h2 className="text-lg font-semibold leading-tight text-dark_black dark:text-white">{cs.title}</h2>
                <p className="text-sm text-dark_black/60 dark:text-white/60 line-clamp-3">{cs.tagline}</p>
                <div className="mt-auto flex items-center justify-between pt-3">
                  <span className="text-xs text-dark_black/50 dark:text-white/50">{cs.client}</span>
                  <Link href={`/case-studies/${cs.slug}`} className="px-3 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-teal-500 via-cyan-400 to-emerald-400 text-white shadow hover:brightness-110">View Case Study</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
