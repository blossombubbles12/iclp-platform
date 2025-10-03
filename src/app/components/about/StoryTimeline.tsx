"use client";
import { motion } from 'framer-motion';

const milestones = [
  { year:'Founding', title:'Conceptual Framework', text:'Established as an interdisciplinary nexus for governance scholarship and applied reform.' },
  { year:'Phase I', title:'Curriculum Architecture', text:'Deployed modular executive learning pathways in governance, compliance, and stewardship.' },
  { year:'Phase II', title:'Research Deepening', text:'Launched applied clusters: AI oversight, ESG integrity, board analytics, regulatory convergence.' },
  { year:'Phase III', title:'Digital Expansion', text:'Scaled immersive online and hybrid governance simulations adopted across sectors.' },
  { year:'Forward', title:'Adaptive Evolution', text:'Advancing predictive governance modeling & cross-border regulatory harmonization dialogue.' }
]

export default function StoryTimeline(){
  return (
  <section id="story" className="py-24 bg-white dark:bg-dark_black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.4}} transition={{duration:0.6}} className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-dark_black dark:text-white">Our Story of Purpose & Expansion</h2>
          <p className="mt-5 leading-relaxed text-dark_black/60 dark:text-white/60">A deliberate evolution balancing scholarly rigor with actionable governance innovation.</p>
        </motion.div>
        <div className="mt-16 relative">
          <div className="absolute left-5 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-indigo-300 via-indigo-400/40 to-indigo-200 dark:from-indigo-600 dark:via-indigo-500/40 dark:to-indigo-700" />
          <ul className="flex flex-col gap-14">
            {milestones.map((m,i)=> (
              <motion.li key={m.year} initial={{opacity:0,x:i%2?70:-70}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:0.5}} transition={{duration:0.55,delay:0.05}} className="relative sm:grid sm:grid-cols-2 sm:gap-12">
                <div className={`pl-14 sm:pl-0 ${i%2? 'sm:order-2':''}`}>
                  <div className="inline-flex items-center gap-3 rounded-full bg-indigo-50 dark:bg-indigo-900/40 px-4 py-1.5">
                    <span className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">{m.year}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-dark_black dark:text-white">{m.title}</h3>
                  <p className="mt-2 leading-relaxed text-dark_black/60 dark:text-white/60 text-sm">{m.text}</p>
                </div>
                <div className={`hidden sm:block ${i%2? 'sm:order-1':''}`}>
                  <div className="relative h-full flex items-center">
                    <span className="absolute left-5 sm:left-1/2 sm:-translate-x-1/2 h-5 w-5 rounded-full ring-4 ring-white dark:ring-gray-950 bg-indigo-600 shadow" />
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
