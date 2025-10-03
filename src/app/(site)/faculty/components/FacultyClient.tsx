"use client";
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface FacultyMember {
  name: string;
  title: string;
  image: string;
  disciplines: string[];
  focus: string[];
  bio: string;
}

const faculty: FacultyMember[] = [
  {
    name: 'Dr. Alexandra Pierce',
    title: 'Executive Director / Corporate Governance',
    image: '/images/home/avatar_1.jpg',
    disciplines: ['Governance','Law'],
    focus: ['Board Dynamics','Disclosure'],
    bio: 'Researches board oversight architectures and disclosure integrity across multi-jurisdictional listings.'
  },
  {
    name: 'Prof. Liam Okafor',
    title: 'Head of Global Research',
    image: '/images/home/avatar_2.jpg',
    disciplines: ['Comparative Law','Policy'],
    focus: ['Cross-Border Regulation','Emerging Markets'],
    bio: 'Leads comparative governance code evolution studies in emerging and frontier markets.'
  },
  {
    name: 'Dr. Helena Fischer',
    title: 'Director, Policy Lab',
    image: '/images/home/avatar_3.jpg',
    disciplines: ['Policy','ESG'],
    focus: ['Sustainability Disclosure','Ethics'],
    bio: 'Designs evidence-led policy prototypes for sustainable transition accountability.'
  },
  {
    name: 'Michael Tan, Esq.',
    title: 'Programs & Executive Education',
    image: '/images/home/avatar_4.jpg',
    disciplines: ['Education','Risk'],
    focus: ['Compliance Training','Risk Culture'],
    bio: 'Architects executive learning sequences for risk oversight and compliance maturity.'
  }
];

const allTags = Array.from(new Set(faculty.flatMap(f => [...f.disciplines, ...f.focus]))).sort();

export default function FacultyClient(){
  const [query,setQuery] = useState('');
  const [activeTags,setActiveTags] = useState<string[]>([]);

  const filtered = useMemo(()=> {
    return faculty.filter(f => {
      const matchesQuery = !query || (f.name+f.title+f.bio).toLowerCase().includes(query.toLowerCase());
      const tagMatch = activeTags.length===0 || activeTags.every(t => f.disciplines.includes(t) || f.focus.includes(t));
      return matchesQuery && tagMatch;
    });
  },[query,activeTags]);

  function toggleTag(tag:string){
    setActiveTags(prev => prev.includes(tag)? prev.filter(t=>t!==tag): [...prev, tag]);
  }

  return (
    <main className="bg-white dark:bg-dark_black text-dark_black dark:text-white">
      {/* Hero */}
      <section className="relative overflow-hidden text-white">
        <div className='relative w-full before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10'>
        <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-36 flex flex-col gap-10 z-10">
          <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:0.7}} className="max-w-4xl flex flex-col gap-6">
            <p className="uppercase tracking-widest text-[11px] font-medium text-purple_blue dark:text-purple">Faculty & Research</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">Multidisciplinary Governance & Policy Scholars</h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl">Our faculty integrates legal analysis, governance design, risk interpretation, sustainability accountability, ethics, and executive education to advance resilient institutional stewardship.</p>
          </motion.div>
          <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{delay:0.25,duration:0.6}} className="flex flex-col md:flex-row gap-4 md:items-center">
            <input
              value={query}
              onChange={e=>setQuery(e.target.value)}
              placeholder="Search faculty..."
              className="w-full md:max-w-sm rounded-full bg-white/90 dark:bg-white/10 backdrop-blur px-5 py-3 text-sm outline-none border border-white/20 focus:ring-2 focus:ring-purple/40 text-dark_black dark:text-white placeholder:text-dark_black/40 dark:placeholder:text-white/40"
            />
            <div className="flex flex-wrap gap-2 max-h-28 overflow-y-auto pr-1">
              {allTags.map(tag => {
                const active = activeTags.includes(tag);
                return (
                  <button
                    key={tag}
                    onClick={()=>toggleTag(tag)}
                    className={`px-3 py-1 rounded-full text-xs font-medium border transition ${active? 'bg-purple_blue text-white border-purple_blue dark:bg-purple dark:border-purple':'bg-white/10 text-white/70 border-white/20 hover:text-white'} `}
                  >{tag}</button>
                )
              })}
            </div>
          </motion.div>
        </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 flex flex-col gap-12">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-dark_black dark:text-white">Featured Faculty</h2>
            <p className="text-sm text-dark_black/60 dark:text-white/60">{filtered.length} of {faculty.length} profiles</p>
          </div>
          <AnimatePresence mode="popLayout">
            <motion.div layout className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((f,i)=>(
                <motion.div
                  key={f.name}
                  layout
                  initial={{opacity:0,y:30}}
                  whileInView={{opacity:1,y:0}}
                  viewport={{once:true,amount:0.35}}
                  transition={{duration:0.55,delay:i*0.05}}
                  className="group flex flex-col rounded-2xl border border-dark_black/10 dark:border-white/10 overflow-hidden bg-white/70 dark:bg-white/5 backdrop-blur"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image src={f.image} alt={f.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute bottom-3 left-4 flex flex-wrap gap-2">
                      {f.disciplines.map(d => <span key={d} className="text-[10px] uppercase tracking-wide font-medium px-2 py-1 rounded-full bg-purple_blue/90 text-white dark:bg-purple/70">{d}</span>)}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col gap-3 grow">
                    <h3 className="text-lg font-semibold text-dark_black dark:text-white leading-tight">{f.name}</h3>
                    <p className="text-sm text-purple_blue dark:text-purple font-medium">{f.title}</p>
                    <p className="text-sm leading-relaxed text-dark_black/60 dark:text-white/60 line-clamp-4">{f.bio}</p>
                    <div className="mt-auto flex flex-wrap gap-2 pt-2">
                      {f.focus.map(fx => <span key={fx} className="text-[10px] tracking-wide uppercase font-medium px-2 py-1 rounded-full bg-dark_black/5 dark:bg-white/10 text-dark_black/60 dark:text-white/70">{fx}</span>)}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          {filtered.length===0 && (
            <div className="text-center py-20 text-dark_black/60 dark:text-white/60 text-sm">No faculty match your filters.</div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-purple_blue via-purple to-purple/80 text-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center gap-8">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">Collaborate With Our Faculty & Research Clusters</h2>
          <p className="text-white/80 leading-relaxed max-w-2xl">Partner on governance diagnostics, regulatory innovation pilots, data ethics frameworks, or board capability programs.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="px-6 py-3 rounded-full bg-white text-dark_black font-medium hover:shadow transition">Start a Conversation</a>
            <a href="/courses" className="px-6 py-3 rounded-full border border-white/60 hover:bg-white/10 transition">View Courses</a>
          </div>
        </div>
      </section>
    </main>
  )
}
