"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const leaders = [
  { name:'Dr. Alexandra Pierce', role:'Executive Director', image:'/images/home/avatar_1.jpg', bio:'Strategic governance scholar advising cross‑border regulatory modernization initiatives.' },
  { name:'Prof. Liam Okafor', role:'Head of Global Research', image:'/images/home/avatar_2.jpg', bio:'Leads comparative corporate law studies shaping emerging market frameworks.' },
  { name:'Dr. Helena Fischer', role:'Director of Policy Lab', image:'/images/home/avatar_3.jpg', bio:'Bridges empirical evidence with policy prototypes for sustainable governance.' },
  { name:'Michael Tan, Esq.', role:'Programs & Executive Education', image:'/images/home/avatar_4.jpg', bio:'Designs advanced executive and regulatory training architectures.' },
];

export default function LeadershipTeam(){
  return (
  <section className="py-24 bg-white dark:bg-dark_black" id="leadership">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.55}} className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-dark_black dark:text-white">Leadership & Scholarly Stewardship</h2>
          <p className="mt-4 text-dark_black/60 dark:text-white/60">A multidisciplinary team committed to integrity, methodological rigor, and systemic transparency.</p>
        </motion.div>
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((l,i)=> (
            <motion.div key={l.name} initial={{opacity:0,y:38}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.4}} transition={{duration:0.55,delay:i*0.08}} className="group relative">
              <div className="overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
                <Image src={l.image} alt={l.name} width={500} height={600} className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-5 flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-dark_black dark:text-white">{l.name}</h3>
                <p className="text-sm text-purple_blue dark:text-purple font-medium">{l.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-dark_black/60 dark:text-white/60">{l.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
