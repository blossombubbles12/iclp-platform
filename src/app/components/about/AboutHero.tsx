"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AboutHero(){
  const ref = useRef<HTMLDivElement|null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start','end start'] });
  const y1 = useTransform(scrollYProgress, [0,1],[0,-120]);
  const y2 = useTransform(scrollYProgress, [0,1],[0,-80]);
  return (
  <section ref={ref} className="relative overflow-hidden">
    <div className='relative w-full before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10'>
      <div className="absolute inset-0 pointer-events-none">
        <motion.div style={{ y: y1 }} className="absolute -top-40 -left-32 h-[32rem] w-[32rem] rounded-full bg-indigo-600/20 blur-3xl" />
        <motion.div style={{ y: y2 }} className="absolute bottom-[-10rem] right-[-10rem] h-[36rem] w-[36rem] rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="absolute inset-0 mix-blend-overlay opacity-[0.08] bg-[linear-gradient(120deg,transparent_0%,transparent_30%,rgba(255,255,255,0.25)_50%,transparent_70%,transparent_100%)]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 md:py-40 flex flex-col gap-12">
        <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:0.8,ease:'easeOut'}} className="max-w-4xl flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-dark_black dark:text-white">
              Advancing Trust & Strategic Resilience
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple_blue via-teal-500 to-emerald-500 dark:from-indigo-300 dark:via-cyan-200 dark:to-emerald-200">In Corporate Law & Governance</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-dark_black/70 dark:text-white/70">We offer courses and executive programs in corporate law, policy, and governance—combining interdisciplinary research, policy translation, and principled stewardship frameworks adopted across global markets.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#story" className="px-6 py-3 rounded-full bg-white text-dark_black font-medium shadow hover:shadow-lg transition">Our Story</a>
            <a href="#impact" className="px-6 py-3 rounded-full border text-dark_black border-dark_black/20 hover:bg-dark_black/5 transition dark:border-white/30 dark:text-white dark:hover:bg-white/10">Global Impact</a>
            <a href="/courses" className="px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 via-cyan-400 to-emerald-400 text-white font-medium shadow hover:brightness-110 transition">Explore Courses</a>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:0.3,duration:0.8}} className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl">
          {[{k:'Years of Advancement',v:'15+'},{k:'Jurisdictions',v:'30+'},{k:'Research Outputs',v:'250+'},{k:'Institutional Partners',v:'50+'}].map(item=> (
            <div key={item.k} className="relative overflow-hidden rounded-2xl p-5 backdrop-blur border border-white/10 bg-white/5 flex flex-col gap-1">
              <p className="text-2xl md:text-3xl font-semibold tracking-tight">{item.v}</p>
              <p className="text-[11px] uppercase tracking-wider text-slate-300">{item.k}</p>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
    </section>
  )
}
