"use client";
import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Program {
  id: number;
  slug: string;
  category: string;
  title: string;
  description: string;
  image: string;
  rating: number;
  ratingsCount: number;
}

interface CourseDetailsClientProps {
  program: Program;
}

// Mock extended data (would normally come from CMS / API)
const outcomes = [
  'Design governance frameworks that scale ethically',
  'Evaluate board performance & audit committee effectiveness',
  'Apply risk diagnostics to strategic decision windows',
  'Embed compliance, ethics & sustainability alignment',
  'Translate regulatory change into adaptive policy responses'
];

const featureIcons = [
  { label: '100% Online', icon: ()=> (<svg width="26" height="26" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.6" className="" ><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 20h8"/><path d="M12 16v4"/></svg>)},
  { label: 'Lifetime Access', icon: ()=> (<svg width="26" height="26" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.6"><circle cx="12" cy="12" r="8"/><path d="M12 8v5l3 2"/></svg>)},
  { label: 'Expert Instructor', icon: ()=> (<svg width="26" height="26" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.6"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a6.5 6.5 0 0 1 13 0"/></svg>)},
  { label: 'Certificate', icon: ()=> (<svg width="26" height="26" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.6"><path d="M4 4h16v14H4z"/><path d="M8 4v14"/><path d="M16 4v14"/><path d="M12 10h.01"/><path d="M12 14h.01"/></svg>)},
];

const instructor = {
  name: 'Dr. Alexandra Pierce',
  role: 'Executive Director / Governance Strategist',
  image: '/images/home/avatar_1.jpg',
  short: 'Architect of multi-jurisdictional governance oversight systems.',
  bio: 'Dr. Pierce advises multinational boards on disclosure integrity, fiduciary calibration, and evolving ESG accountability regimes. Her applied research focuses on adaptive oversight models and cross-border listing harmonization.'
};

const curriculum = [
  {
    module: 'Module 1 — Governance Foundations',
    lessons: ['Principles & Stewardship Evolution','Board Structures & Committees','Fiduciary Duties in Practice','Case Study: Board Effectiveness Audit']
  },
  {
    module: 'Module 2 — Strategic Risk & Oversight',
    lessons: ['Risk Appetite & Escalation Maps','Scenario Diagnostics','Enterprise Risk Dashboarding','Workshop: Risk Narrative']
  },
  {
    module: 'Module 3 — Ethical Compliance Systems',
    lessons: ['Code Architecture & Culture','Investigation Protocols','Regulatory Change Mapping','Applied Exercise: Compliance Heatmap']
  },
  {
    module: 'Module 4 — Performance & Impact',
    lessons: ['KPI & Board Evaluation','Reporting Integrity & Assurance','Sustainability Convergence','Capstone Simulation']
  }
];

const testimonials = [
  {
    name: 'Elena Ramirez',
    role: 'Group Compliance Officer',
    image: '/images/home/avatar_2.jpg',
    quote: 'This program reframed how our board interprets risk signals and strategic readiness.'
  },
  {
    name: 'David Chen',
    role: 'Non-Executive Director',
    image: '/images/home/avatar_3.jpg',
    quote: 'The curriculum translated complex regulatory change into decisive governance action.'
  },
  {
    name: 'Sophia Ibrahim',
    role: 'ESG Program Lead',
    image: '/images/home/avatar_4.jpg',
    quote: 'Actionable, evidence-based, and instantly applicable to stakeholder oversight.'
  }
];

const faqs = [
  { q: 'How long do I retain access?', a: 'You receive lifetime access including all future updates and additional reference modules.' },
  { q: 'Is there a certificate?', a: 'Yes. A digitally verifiable completion certificate is issued upon passing the capstone review.' },
  { q: 'What is the weekly commitment?', a: 'Typical participants invest 3–4 focused hours weekly including applied exercises.' },
  { q: 'Are there live sessions?', a: 'Live optional governance clinics are scheduled twice monthly with the lead faculty.' }
];

const basePrice = 1190; // USD
const discountPct = 20; // simulated limited discount

export default function CourseDetailsClient({ program }: CourseDetailsClientProps) {
  const [expandedModules, setExpandedModules] = useState<number[]>([0]);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState<number>(() => 1000 * 60 * 60 * 26); // 26h ms
  const [mounted, setMounted] = useState(false);

  const finalPrice = useMemo(()=> (basePrice * (1 - discountPct/100)), []);

  useEffect(()=>{
    setMounted(true);
  },[]);

  // Start carousel rotation only after mount (prevents hydration mismatch)
  useEffect(()=>{
    if(!mounted) return;
    const t = setInterval(()=> setCarouselIndex(i => (i + 1) % testimonials.length), 5000);
    return ()=> clearInterval(t);
  },[mounted]);

  // Countdown ticking only after mount (server & first client paint match)
  useEffect(()=>{
    if(!mounted) return;
    const t = setInterval(()=> setTimeLeft(ms => Math.max(0, ms - 1000)), 1000);
    return ()=> clearInterval(t);
  },[mounted]);

  const hours = Math.max(0, Math.floor(timeLeft / (1000*60*60)));
  const minutes = Math.max(0, Math.floor((timeLeft % (1000*60*60))/(1000*60)));
  const seconds = Math.max(0, Math.floor((timeLeft % (1000*60))/1000));

  function toggleModule(i:number){
    setExpandedModules(prev => prev.includes(i) ? prev.filter(x=>x!==i) : [...prev, i]);
  }

  return (
  <div className="bg-white dark:bg-dark_black text-dark_black dark:text-white" suppressHydrationWarning data-gramm="false" data-gramm_editor="false" data-enable-grammarly="false">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#0f172a,transparent_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#093c46] to-[#0d9488] opacity-90" />
          <div className="absolute inset-0 mix-blend-overlay bg-[linear-gradient(115deg,rgba(246,195,67,0.25),transparent)]" />
        </div>
        <div className="relative pt-40 pb-28 container flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1 flex flex-col gap-6 max-w-2xl">
            <span className="px-3 py-1 text-[11px] tracking-[0.15em] rounded-full bg-white/10 border border-white/20 text-white/80 w-fit uppercase">{program.category}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">{program.title}</h1>
            <p className="text-lg text-white/70 leading-relaxed">{program.description}</p>
            <div className="flex flex-wrap gap-4 mt-2">
              <motion.div whileHover={{scale:1.05, boxShadow:'0 0 0 4px rgba(255,255,255,0.05),0 0 30px 6px rgba(13,148,136,0.5)'}} whileTap={{scale:0.95}}>
                <Link href={`/enroll?course=${program.slug}`} className="relative group px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-teal-500 via-teal-400 to-emerald-400 text-white shadow-lg overflow-hidden block text-center">
                  <span className="relative z-10">Enroll Now</span>
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/0 via-white/10 to-teal-300/0 opacity-0 group-hover:opacity-100 transition" />
                </Link>
              </motion.div>
              <motion.button whileHover={{scale:1.05}} whileTap={{scale:0.95}} className="px-8 py-4 rounded-full font-medium border border-white/20 text-white/80 hover:text-white hover:bg-white/10 transition">Preview Lesson</motion.button>
            </div>
            <div className="flex flex-wrap gap-6 pt-4 text-white/70 text-sm">
              <div className="flex items-center gap-2"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 17.75 6.167 21l1.116-6.507L2 9.736l6.583-.957L12 3l3.417 5.779 6.583.957-5.283 4.757L17.833 21z"/></svg>{program.rating.toFixed(1)} ({program.ratingsCount} reviews)</div>
              <div className="flex items-center gap-2"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 5h18"/><path d="M8 5v14"/><path d="M16 5v14"/><path d="M3 19h18"/><path d="M12 9v6"/></svg>Intermediate</div>
              <div className="flex items-center gap-2"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>4 Weeks / Self-paced</div>
            </div>
          </div>
          <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="w-full max-w-md relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/30 to-emerald-500/10 mix-blend-overlay" />
            <Image src={program.image || '/images/home/creative/creative_img_1.png'} alt={program.title} width={800} height={600} className="object-cover h-full w-full" />
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24">
        <div className="container grid lg:grid-cols-3 gap-14">
          <div className="lg:col-span-2 flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Course Overview</h2>
              <p className="text-dark_black/60 dark:text-white/60 leading-relaxed">This intensive experience equips you to engineer resilient governance architectures that align ethical oversight, strategic risk interpretation, and adaptive compliance systems. Through applied diagnostics, scenario interrogation, and translational frameworks you will develop institutional reflexes that sustain trust and performance.</p>
              <ul className="grid sm:grid-cols-2 gap-4">
                {outcomes.map((o,i)=>(
                  <motion.li key={i} initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:0.5}} transition={{delay:i*0.05}} className="flex items-start gap-3 p-4 rounded-xl bg-dark_black/5 dark:bg-white/5 border border-dark_black/10 dark:border-white/10 text-dark_black/60 dark:text-white/60">
                    <span className="mt-1 text-teal-600 dark:text-teal-400"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12.5 10 17l10-12"/></svg></span>
                    <span className="text-sm leading-relaxed">{o}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
              {featureIcons.map((f,i)=>(
                <motion.div key={f.label} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="flex flex-col gap-2 items-start p-4 rounded-xl bg-gradient-to-br from-[#0f172a]/5 via-teal-500/5 to-emerald-500/5 dark:from-white/5 dark:via-teal-400/5 dark:to-emerald-400/5 border border-dark_black/10 dark:border-white/10">
                  <div className="text-teal-600 dark:text-teal-400">{f.icon()}</div>
                  <span className="text-xs font-medium tracking-wide uppercase text-dark_black/60 dark:text-white/60">{f.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Instructor */}
          <div className="flex flex-col gap-8">
            <div className="relative group rounded-2xl p-6 bg-gradient-to-br from-[#0f172a] via-[#093c46] to-[#0d9488] text-white overflow-hidden border border-white/10">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_30%,#f6c343,transparent_60%)]" />
              <div className="flex items-center gap-5">
                <div className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-white/10">
                  <Image src={instructor.image} alt={instructor.name} fill className="object-cover" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-lg">{instructor.name}</h3>
                  <p className="text-white/70 text-sm">{instructor.role}</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-white/80">{instructor.short}</p>
              <div className="mt-4 p-4 rounded-xl bg-white/10 backdrop-blur-md text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity">{instructor.bio}</div>
              <div className="mt-6 flex flex-wrap gap-2 text-[10px] uppercase tracking-wide font-medium">
                {['ACCREDITED','RESEARCH','BOARD ADVISOR'].map(b => <span key={b} className="px-2 py-1 rounded-full bg-white/10 border border-white/15">{b}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Accordion - unified FAQ style */}
      <section className="py-20">
        <div className="container flex flex-col gap-12">
          <div className="max-w-md text-center mx-auto flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">Curriculum & Learning Journey</h2>
            <p className="text-dark_black/60 dark:text-white/60 text-sm">Structured progression blending conceptual mastery and applied diagnostics.</p>
          </div>
          <div className="flex flex-col gap-4">
            {curriculum.map((c,i)=>{
              const open = expandedModules.includes(i);
              return (
                <div key={c.module} className="p-6 border border-dark_black/10 dark:border-white/50 group">
                  <button onClick={()=>toggleModule(i)} className="w-full flex items-center justify-between gap-6 text-left">
                    <h4 className="text-dark_black dark:text-white/80 flex items-center gap-3 text-base font-medium">
                      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-500/15 text-teal-600 dark:text-teal-300 text-[11px] font-semibold border border-teal-500/30">{i+1}</span>{c.module}
                    </h4>
                    <motion.span animate={{rotate: open?180:0}} className="text-dark_black/50 dark:text-white/50 transition-transform"><svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg></motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.ul initial={{height:0, opacity:0}} animate={{height:'auto', opacity:1}} exit={{height:0, opacity:0}} transition={{duration:0.3}} className="pt-5 flex flex-col gap-3 text-sm text-dark_black/60 dark:text-white/60">
                        {c.lessons.map(l => <li key={l} className="flex items-start gap-2"><span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-teal-500" />{l}</li>)}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-24">
        <div className="container flex flex-col gap-12">
          <div className="flex flex-col gap-3 max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold">Participant Impact</h2>
            <p className="text-dark_black/60 dark:text-white/60">Applied outcomes and perspective shifts reported by recent participants.</p>
          </div>
          <div className="relative">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">{
                testimonials.map((t,i)=>( i===carouselIndex && (
                  <motion.div key={t.name} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}} transition={{duration:0.6}} className="grid md:grid-cols-[320px_1fr] gap-10 items-center">
                    <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden border border-dark_black/10 dark:border-white/10">
                      <Image src={t.image} alt={t.name} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    </div>
                    <div className="flex flex-col gap-6">
                      <p className="text-xl md:text-2xl leading-relaxed font-medium text-dark_black dark:text-white">“{t.quote}”</p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          {[...Array(5)].map((_,s)=>(<svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-amber-400"><path d="M12 17.75 6.167 21l1.116-6.507L2 9.736l6.583-.957L12 3l3.417 5.779 6.583.957-5.283 4.757L17.833 21z"/></svg>))}
                        </div>
                        <div className="text-sm text-dark_black/60 dark:text-white/60">{t.name} — {t.role}</div>
                      </div>
                      <div className="flex gap-2">
                        {testimonials.map((_,b)=>(<button key={b} onClick={()=>setCarouselIndex(b)} className={`h-1.5 rounded-full transition-all ${b===carouselIndex?'w-8 bg-teal-500':'w-3 bg-dark_black/20 dark:bg-white/20 hover:bg-teal-400'}`} />))}
                      </div>
                    </div>
                  </motion.div>
                )))
              }</AnimatePresence>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 pt-6">
            {testimonials.map(t => (
              <div key={t.name} className="p-6 rounded-2xl bg-dark_black/5 dark:bg-white/5 border border-dark_black/10 dark:border-white/10 flex flex-col gap-4">
                <p className="text-sm leading-relaxed text-dark_black/70 dark:text-white/70">“{t.quote}”</p>
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium">{t.name}</span>
                    <span className="text-[10px] text-dark_black/50 dark:text-white/50 uppercase tracking-wide">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - unified style */}
      <section className="py-24">
        <div className="container flex flex-col gap-12">
          <div className="max-w-md text-center mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((f,i)=>{
              const open = expandedModules.includes(100 + i);
              return (
                <div key={f.q} className="p-6 border border-dark_black/10 dark:border-white/50 group">
                  <button onClick={()=> toggleModule(100 + i)} className="w-full flex items-center justify-between text-left">
                    <h4 className="text-dark_black dark:text-white/80 text-base font-medium">{f.q}</h4>
                    <motion.span animate={{rotate: open?180:0}} className="text-dark_black/50 dark:text-white/50"><svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg></motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div initial={{height:0, opacity:0}} animate={{height:'auto', opacity:1}} exit={{height:0, opacity:0}} transition={{duration:0.3}} className="pt-4 text-sm text-dark_black/60 dark:text-white/60 leading-relaxed">{f.a}</motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0f172a] via-[#093c46] to-[#0d9488]" />
        <div className="absolute inset-0 -z-10 mix-blend-overlay bg-[radial-gradient(circle_at_70%_40%,rgba(246,195,67,0.35),transparent_60%)]" />
        <div className="container flex flex-col items-center text-center gap-8 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">Transform Your Governance Impact</h2>
          <p className="text-white/70 leading-relaxed">Advance your board and executive influence with strategic oversight fluency and ethical performance assurance.</p>
          <motion.div whileHover={{scale:1.05, boxShadow:'0 0 0 4px rgba(255,255,255,0.08), 0 0 45px 12px rgba(246,195,67,0.3)'}} whileTap={{scale:0.95}}>
            <Link href={`/enroll?course=${program.slug}`} className="px-10 py-5 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300 font-semibold text-dark_black shadow-lg hover:brightness-110 transition block">Enroll & Elevate</Link>
          </motion.div>
        </div>
      </section>

      {/* Sticky Pricing Bar */}
      <div className="fixed bottom-4 inset-x-0 z-40 px-4 md:px-0">
        <div className="mx-auto max-w-3xl rounded-2xl bg-white/90 dark:bg-[#0f172a]/90 backdrop-blur-lg border border-dark_black/10 dark:border-white/10 shadow-lg flex flex-col md:flex-row md:items-center gap-4 px-6 py-5">
            <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-6 flex-1">
            <div className="flex flex-col">
              <span className="text-xs tracking-wide font-medium text-dark_black/60 dark:text-white/50 uppercase">Limited Offer Ends In</span>
              <div className="font-mono text-sm text-teal-600 dark:text-teal-300 flex gap-2" suppressHydrationWarning>
                {mounted ? (
                  <>
                    <span>{hours.toString().padStart(2,'0')}h</span>
                    <span>{minutes.toString().padStart(2,'0')}m</span>
                    <span>{seconds.toString().padStart(2,'0')}s</span>
                  </>
                ) : (
                  <>
                    <span>--h</span>
                    <span>--m</span>
                    <span>--s</span>
                  </>
                )}
              </div>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-semibold text-dark_black dark:text-white">${finalPrice.toFixed(0)}</span>
              <span className="line-through text-sm text-dark_black/40 dark:text-white/40">${basePrice}</span>
              <span className="px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-[11px] font-medium">{discountPct}% Off</span>
            </div>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link href="#curriculum" className="px-5 py-3 rounded-full text-sm font-medium bg-dark_black/5 dark:bg-white/10 text-dark_black/60 dark:text-white/60 hover:text-dark_black dark:hover:text-white transition">Syllabus</Link>
            <Link href={`/enroll?course=${program.slug}`} className="relative group px-7 py-3 rounded-full font-semibold text-sm bg-gradient-to-r from-teal-500 via-teal-400 to-emerald-400 text-white shadow hover:scale-[1.02] transition block text-center">Enroll Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
