"use client";
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { label:'Jurisdictions Impacted', value:32 },
  { label:'Policy Frameworks Informed', value:18 },
  { label:'Governance Workshops', value:140 },
  { label:'Research Collaborations', value:65 }
];

export default function GlobalImpact(){
  const ref = useRef<HTMLDivElement|null>(null);
  const inView = useInView(ref,{once:true,amount:0.4});
  const [progress,setProgress]=useState(0);
  useEffect(()=>{
    if(!inView) return; let frame:number; const start=performance.now();
    const animate=(t:number)=>{ const elapsed=t-start; const pct=Math.min(1,elapsed/1200); setProgress(pct); if(pct<1) frame=requestAnimationFrame(animate); };
    frame=requestAnimationFrame(animate); return ()=>cancelAnimationFrame(frame);
  },[inView]);
  return (
  <section id="impact" className="relative overflow-hidden bg-gradient-to-b from-dark_black via-dark_black to-[#0f172a] text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.5),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.18] bg-[radial-gradient(circle_at_80%_70%,rgba(34,211,238,0.35),transparent_55%)]" />
        <div className="absolute inset-0 mix-blend-overlay opacity-10 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
      </div>
      <div ref={ref} className="relative max-w-6xl mx-auto px-6 py-24">
        <motion.div initial={{opacity:0,y:26}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.5}} transition={{duration:0.6}} className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white">Measurable Global Reach & Policy Footprint</h2>
          <p className="mt-5 leading-relaxed text-white/70">Our applied research and executive programs shape modernization, transparency reforms, and corporate regulatory alignment across regions.</p>
        </motion.div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s,i)=>{
            const shown=Math.round(s.value*progress);
            return (
              <motion.div key={s.label} initial={{opacity:0,y:36}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.4}} transition={{duration:0.55,delay:i*0.08}} className="relative">
                <div className="p-[1px] rounded-2xl bg-gradient-to-br from-purple_blue/40 via-purple/30 to-purple/20">
                  <div className="rounded-[15px] h-full w-full bg-white/5 backdrop-blur px-6 py-8 flex flex-col gap-3">
                    <p className="text-4xl font-semibold tracking-tight">{shown}{s.value>30?'+':''}</p>
                    <p className="text-sm font-medium text-white/70">{s.label}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
