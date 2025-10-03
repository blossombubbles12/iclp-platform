"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AboutHero(){
  const ref = useRef<HTMLDivElement|null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start','end start'] });
  const y1 = useTransform(scrollYProgress, [0,1],[0,-120]);
  const y2 = useTransform(scrollYProgress, [0,1],[0,-80]);
  return (
  <section ref={ref} className="relative overflow-hidden bg-gradient-to-br from-dark_black via-dark_black to-[#0f172a] text-white">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div style={{ y: y1 }} className="absolute -top-40 -left-32 h-[32rem] w-[32rem] rounded-full bg-indigo-600/20 blur-3xl" />
        <motion.div style={{ y: y2 }} className="absolute bottom-[-10rem] right-[-10rem] h-[36rem] w-[36rem] rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="absolute inset-0 mix-blend-overlay opacity-[0.08] bg-[linear-gradient(120deg,transparent_0%,transparent_30%,rgba(255,255,255,0.25)_50%,transparent_70%,transparent_100%)]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 md:py-40 flex flex-col gap-12">
        <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:0.8,ease:'easeOut'}} className="max-w-4xl flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Advancing Trust & Strategic Resilience
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-cyan-200 to-emerald-200">In Corporate Law & Governance</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl">We engineer credible governance capacity through interdisciplinary research, executive education, policy translation, and principled stewardship frameworks adopted across global markets.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#story" className="px-6 py-3 rounded-full bg-white text-dark_black font-medium shadow hover:shadow-lg transition">Our Story</a>
            <a href="#impact" className="px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition">Global Impact</a>
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
    </section>
  )
}
