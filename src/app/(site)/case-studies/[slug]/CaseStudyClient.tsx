"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import type { CaseStudy } from '@/app/data/caseStudies';

export default function CaseStudyClient({ cs }: { cs: CaseStudy }){
  const ref = useRef<HTMLDivElement|null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start','end start'] });
  const y1 = useTransform(scrollYProgress, [0,1],[0,-120]);
  const y2 = useTransform(scrollYProgress, [0,1],[0,-60]);

  return (
    <main className="bg-white dark:bg-dark_black text-dark_black dark:text-white">
      {/* Hero */}
      <section ref={ref} className="relative overflow-hidden">
        <div className='relative w-full before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10'>
          <div className="absolute inset-0 -z-10">
            {/* Featured media */}
            {cs.featuredMediaType === 'image' ? (
              <Image src={cs.featuredMedia} alt={cs.title} fill className="object-cover opacity-20" />
            ) : (
              <video className="w-full h-full object-cover opacity-30" autoPlay loop muted playsInline>
                <source src={cs.featuredMedia} />
              </video>
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent" />
            <div className="absolute inset-0 pointer-events-none">
              <motion.div style={{ y: y1 }} className="absolute -top-40 -left-32 h-[32rem] w-[32rem] rounded-full bg-indigo-600/25 blur-3xl" />
              <motion.div style={{ y: y2 }} className="absolute bottom-[-10rem] right-[-10rem] h-[36rem] w-[36rem] rounded-full bg-cyan-400/25 blur-3xl" />
            </div>
          </div>
          <div className="relative z-10 container max-w-5xl py-36 md:py-44 flex flex-col gap-8 text-center items-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-dark_black dark:text-white">{cs.title}</h1>
            <p className="text-lg md:text-xl text-dark_black/70 dark:text-white/70 max-w-3xl">{cs.tagline}</p>
            <div className="flex gap-3">
              <Link href="#overview" className="px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-teal-500 via-cyan-400 to-emerald-400 text-white shadow hover:brightness-110">View Project</Link>
              <Link href="/contact" className="px-6 py-3 rounded-full font-semibold border text-dark_black border-dark_black/20 hover:bg-dark_black/5 dark:border-white/30 dark:text-white dark:hover:bg-white/10">Get Started</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="py-20">
        <div className="container max-w-5xl grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[{k:'Client',v:cs.client},{k:'Industry',v:cs.industry},{k:'Goals',v:cs.goals.join(' • ')},{k:'Services',v:cs.services.join(' • ')}].map((item,i)=> (
            <motion.div key={item.k} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:0.4}} transition={{delay:i*0.05}} className="p-5 rounded-2xl border border-dark_black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur">
              <p className="text-xs uppercase tracking-wide text-dark_black/50 dark:text-white/50">{item.k}</p>
              <p className="mt-2 text-sm leading-relaxed text-dark_black/80 dark:text-white/80">{item.v}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16">
        <div className="container max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">Challenge</h2>
            <p className="text-dark_black/70 dark:text-white/70 leading-relaxed">{cs.challenge}</p>
          </motion.div>
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="relative h-64 rounded-2xl overflow-hidden border border-dark_black/10 dark:border-white/10">
            <Image src={cs.gallery[0]?.src || '/images/home/avatar_1.jpg'} alt="Challenge" fill className="object-cover" />
          </motion.div>
        </div>
        <div className="container max-w-6xl grid lg:grid-cols-2 gap-10 items-center mt-12">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="relative h-64 rounded-2xl overflow-hidden border border-dark_black/10 dark:border-white/10 order-last lg:order-first">
            <Image src={cs.gallery[1]?.src || '/images/home/avatar_2.jpg'} alt="Solution" fill className="object-cover" />
          </motion.div>
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">Solution</h2>
            <p className="text-dark_black/70 dark:text-white/70 leading-relaxed">{cs.solution}</p>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Process</h2>
          <div className="relative pl-6">
            <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-dark_black/10 dark:bg-white/10" />
            {cs.process.map((p,i)=> (
              <motion.div key={p.step} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:0.5}} transition={{delay:i*0.05}} className="relative mb-6">
                <span className="absolute -left-[13px] top-1.5 h-3 w-3 rounded-full bg-teal-500" />
                <div className="p-4 rounded-xl border border-dark_black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur">
                  <p className="text-sm font-semibold">{p.step}</p>
                  <p className="text-sm text-dark_black/60 dark:text-white/60">{p.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-20">
        <div className="container max-w-5xl grid sm:grid-cols-3 gap-6">
          {cs.results.map((r,i)=> (
            <motion.div key={r.label} initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.06}} className="p-6 rounded-2xl text-center border border-dark_black/10 dark:border-white/10 bg-gradient-to-br from-[#0f172a]/5 via-teal-500/5 to-emerald-500/5 dark:from-white/5 dark:via-teal-400/5 dark:to-emerald-400/5">
              <p className="text-3xl md:text-4xl font-bold">{r.value}{r.suffix || ''}</p>
              <p className="text-sm text-dark_black/60 dark:text-white/60">{r.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      {cs.testimonial && (
        <section className="py-20">
          <div className="container max-w-3xl text-center flex flex-col items-center gap-6">
            <div className="relative h-16 w-16 rounded-full overflow-hidden border border-dark_black/10 dark:border-white/10">
              <Image src={cs.testimonial.avatar} alt={cs.testimonial.name} fill className="object-cover" />
            </div>
            <blockquote className="text-xl md:text-2xl leading-relaxed text-dark_black/80 dark:text-white/80">“{cs.testimonial.quote}”</blockquote>
            <p className="text-sm text-dark_black/60 dark:text-white/60">{cs.testimonial.name} — {cs.testimonial.role}</p>
            {cs.testimonial.logo && (
              <div className="relative h-8 w-32">
                <Image src={cs.testimonial.logo} alt="Client Logo" fill className="object-contain opacity-70" />
              </div>
            )}
          </div>
        </section>
      )}

      {/* Gallery */}
      <section className="py-20">
        <div className="container max-w-6xl grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cs.gallery.map(g => (
            <div key={g.src} className="relative h-40 sm:h-48 rounded-2xl overflow-hidden group border border-dark_black/10 dark:border-white/10">
              <Image src={g.src} alt={g.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden ice-cta-bg">
        <div className="container max-w-3xl text-center flex flex-col items-center gap-6 relative">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-dark_black dark:text-white">Partner With Us</h2>
          <p className="text-dark_black/70 dark:text-white/70">Let’s architect credible governance capacity, align oversight with performance, and scale trust across your markets.</p>
          <div className="flex gap-3 flex-wrap justify-center">
            <Link href="/contact" className="px-7 py-3 rounded-full font-semibold bg-gradient-to-r from-teal-500 via-cyan-400 to-emerald-400 text-white shadow hover:brightness-110">Work With Us</Link>
            <Link href="/help-center" className="px-7 py-3 rounded-full font-semibold border text-dark_black border-dark_black/15 hover:bg-dark_black/5 dark:text-white dark:border-white/25 dark:hover:bg-white/10">Explore More Case Studies</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
