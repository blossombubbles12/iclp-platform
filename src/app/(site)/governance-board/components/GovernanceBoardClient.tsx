"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface BoardMember { name:string; role:string; image:string; bio:string; committees:string[] }
const boardMembers: BoardMember[] = [
  { name:'Justice (Ret.) Amelia Grant', role:'Board Chair', image:'/images/home/avatar_1.jpg', bio:'Former appellate justice specializing in corporate accountability, disclosure jurisprudence, and fiduciary duty standards.', committees:['Nominations','Ethics'] },
  { name:'Samuel O. Ndiaye', role:'Vice Chair / Strategy', image:'/images/home/avatar_2.jpg', bio:'Strategic governance advisor with 20 years guiding multinational board transformation and risk oversight maturity.', committees:['Strategy','Risk'] },
  { name:'Prof. Elena Vargas', role:'Academic Oversight', image:'/images/home/avatar_3.jpg', bio:'International corporate law professor driving interdisciplinary research integration and curriculum quality assurance.', committees:['Academic Quality','Research'] },
  { name:'Dr. Marcus Feld', role:'Audit & Risk Lead', image:'/images/home/avatar_4.jpg', bio:'Risk analytics specialist focused on compliance integrity, internal control evolution, and emerging regulatory convergence.', committees:['Audit','Risk'] },
];

const committees = [
  { name:'Audit & Risk Committee', purpose:'Oversees financial integrity, enterprise risk mapping, internal control assurance, and compliance posture.' },
  { name:'Academic Quality Committee', purpose:'Monitors scholarly rigor, curricular relevance, accreditation alignment, and pedagogical innovation.' },
  { name:'Ethics & Stewardship Committee', purpose:'Champions institutional ethics code, conflict-of-interest review, and accountability reporting.' },
  { name:'Strategy & Innovation Committee', purpose:'Guides long‑range positioning, partnership evaluation, digital capability roadmap, and impact scaling.' },
  { name:'Nominations & Governance Committee', purpose:'Curates board composition, evaluates governance effectiveness, and succession planning.' }
];

const principles = [
  { icon:'🛡️', text:'Fiduciary Independence & Objectivity' },
  { icon:'🔍', text:'Transparent Accountability & Performance Review' },
  { icon:'🤝', text:'Stakeholder-Informed Strategic Alignment' },
  { icon:'📊', text:'Evidence‑Led Decision Architecture' },
  { icon:'🌱', text:'Ethical Stewardship & Integrity of Purpose' },
  { icon:'♾️', text:'Sustainable Long-Horizon Value Orientation' }
];

export default function GovernanceBoardClient(){
  return (
  <main className="bg-white dark:bg-dark_black text-dark_black dark:text-white">
      {/* Hero */}
  <section className="relative overflow-hidden bg-gradient-to-br from-dark_black via-dark_black to-[#0f172a] text-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.07),transparent_60%)]" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-40 flex flex-col gap-10">
          <motion.div initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:0.7}} className="max-w-3xl flex flex-col gap-6">
            <p className="uppercase tracking-widest text-[11px] font-medium text-purple_blue dark:text-purple">Governance Board</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-white">Stewarding Institutional Integrity & Strategic Resilience</h1>
            <p className="text-lg md:text-xl leading-relaxed text-white/70">Our governance board safeguards mission fidelity, fiduciary responsibility, academic quality, ethical stewardship, and long-horizon strategic positioning.</p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#members" className="px-6 py-3 rounded-full bg-white text-slate-900 font-medium hover:shadow transition">Board Members</a>
              <a href="#committees" className="px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition">Committees</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Board Members */}
  <section id="members" className="py-24">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-14">
          <div className="max-w-2xl flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-dark_black dark:text-white">Board Composition</h2>
            <p className="leading-relaxed text-dark_black/60 dark:text-white/60">A multidisciplinary, independent board integrating legal, judicial, strategic, academic, and risk oversight expertise.</p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {boardMembers.map((m,i)=>(
              <motion.div key={m.name} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.4}} transition={{duration:0.55,delay:i*0.07}} className="group relative flex flex-col">
                <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
                  <Image src={m.image} alt={m.name} width={600} height={720} className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition" />
                </div>
                <div className="mt-5 flex flex-col gap-2">
                  <h3 className="text-lg font-semibold">{m.name}</h3>
                  <p className="text-sm text-purple_blue dark:text-purple font-medium">{m.role}</p>
                  <p className="text-sm leading-relaxed text-dark_black/60 dark:text-white/60">{m.bio}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {m.committees.map(c => <span key={c} className="text-[10px] tracking-wide uppercase font-medium px-2 py-1 rounded-full bg-purple_blue/10 text-purple_blue dark:bg-purple/15 dark:text-purple border border-purple_blue/20 dark:border-purple/30">{c}</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Principles */}
  <section id="principles" className="py-24 bg-dark_black/3 dark:bg-white/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-14">
          <div className="max-w-2xl flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-dark_black dark:text-white">Core Governance Principles</h2>
            <p className="leading-relaxed text-dark_black/60 dark:text-white/60">Structured to ensure credible oversight, disciplined execution, and transparent accountability aligned with mission and public interest value.</p>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((p,i)=> (
              <motion.li
                key={p.text}
                initial={{opacity:0,y:24}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true,amount:0.5}}
                transition={{duration:0.5,delay:i*0.05}}
                className="p-6 rounded-2xl border border-dark_black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-purple_blue/10 dark:bg-purple/15 flex items-center justify-center text-xl">
                  <span aria-hidden>{p.icon}</span>
                </div>
                <p className="font-medium leading-snug text-sm md:text-base">{p.text}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Committees */}
  <section id="committees" className="py-24">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-14">
          <div className="max-w-2xl flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-dark_black dark:text-white">Board Committees</h2>
            <p className="leading-relaxed text-dark_black/60 dark:text-white/60">Specialized committees provide focus, agility, and subject-matter depth enhancing collective oversight quality.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {committees.map((c,i)=>(
              <motion.div key={c.name} initial={{opacity:0,y:34}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.5}} transition={{duration:0.5,delay:i*0.06}} className="relative p-[1px] rounded-2xl bg-gradient-to-br from-purple_blue/30 via-purple/20 to-purple/10 dark:from-purple/40 dark:via-purple/25 dark:to-purple/15">
                <div className="rounded-[15px] h-full w-full bg-white/80 dark:bg-white/5 backdrop-blur p-6 flex flex-col gap-4">
                  <h3 className="text-lg font-semibold leading-snug">{c.name}</h3>
                  <p className="text-sm leading-relaxed text-dark_black/60 dark:text-white/60">{c.purpose}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
  <section className="py-24 bg-gradient-to-br from-purple_blue via-purple to-purple/80 text-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center gap-8">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">Engage with Our Governance Network</h2>
            <p className="text-white/80 leading-relaxed max-w-2xl">We collaborate with regulators, institutional leaders, academic partners, and stewardship advocates to elevate governance integrity globally.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="px-6 py-3 rounded-full bg-white text-indigo-700 font-medium hover:shadow transition">Contact Us</Link>
              <Link href="/about#impact" className="px-6 py-3 rounded-full border border-white/60 hover:bg-white/10 transition">View Impact</Link>
            </div>
        </div>
      </section>
    </main>
  )
}
