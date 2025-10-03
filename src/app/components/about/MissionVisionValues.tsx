"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';

const blocks = [
  { key:'mission', title:'Mission', icon:'🎯', color:'from-indigo-500 to-indigo-600', text:'Advance resilient, ethical corporate governance through interdisciplinary research, transformative education, and strategic policy engagement.'},
  { key:'vision', title:'Vision', icon:'🌍', color:'from-cyan-500 to-teal-600', text:'A globally trusted institute shaping transparent, accountable, and sustainable corporate systems across markets.'},
  { key:'values', title:'Values', icon:'⚖️', color:'from-emerald-500 to-emerald-600', text:'Integrity, scholarly rigor, inclusivity, impact orientation, collaboration, and stewardship.'}
];

export default function MissionVisionValues(){
  const [hover,setHover]=useState<string|null>(null);
  return (
  <section className="py-24 bg-dark_black/3 dark:bg-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{opacity:0,y:26}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.55}} className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-dark_black dark:text-white">Purpose Anchored in Principle</h2>
          <p className="mt-4 text-dark_black/60 dark:text-white/60">Our foundation rests on ethical stewardship and measurable public value.</p>
        </motion.div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blocks.map((b,i)=> (
            <motion.div key={b.key} onMouseEnter={()=>setHover(b.key)} onMouseLeave={()=>setHover(null)} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.5}} transition={{duration:0.5,delay:i*0.08}} className="relative group">
              <div className={`p-[1px] rounded-2xl bg-gradient-to-br ${b.color} shadow-lg shadow-gray-900/5`}>
                <div className="h-full w-full rounded-[16px] bg-white/80 dark:bg-white/5 backdrop-blur p-6 flex flex-col">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{b.icon}</span>
                    <span className="text-xs tracking-wider uppercase font-semibold text-gray-400">{b.title}</span>
                  </div>
                  <p className="mt-5 leading-relaxed text-sm text-dark_black/60 dark:text-white/60">{b.text}</p>
                  <div className="mt-6 flex-1 flex items-end">
                    <div className={`text-xs font-medium tracking-wide transition-colors ${hover===b.key? 'text-purple_blue dark:text-purple':'text-dark_black/40 dark:text-white/40'}`}>Learn more →</div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-white/10 to-white/0 dark:from-white/5" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
