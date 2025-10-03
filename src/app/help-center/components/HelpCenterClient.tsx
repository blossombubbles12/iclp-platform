"use client";
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion';

interface QA { id: string; q: string; a: string; category: string; tags?: string[] }

const seed: QA[] = [
  { id:'enroll-1', category:'Enrollment', q:'How do I enroll in a course?', a:'Visit the Courses page, select a program, then click Enroll to proceed to the enrollment workflow where you choose your plan and provide details.' },
  { id:'enroll-2', category:'Enrollment', q:'Can I change my selected course after enrolling?', a:'Single course enrollments can be re-assigned within 48 hours if no module has been completed. Bundles allow internal swaps until two courses are started.' },
  { id:'billing-1', category:'Billing & Plans', q:'Do you offer installment payments?', a:'Yes. The installment plan splits payment into 3 interest‑free monthly charges automatically billed.' },
  { id:'billing-2', category:'Billing & Plans', q:'Can I upgrade to the Executive Bundle later?', a:'You may upgrade within 30 days by paying the difference between your original plan and current bundle pricing.' },
  { id:'access-1', category:'Access & Platform', q:'How long does access last?', a:'Lifetime access including future governance updates and added reference modules.' },
  { id:'access-2', category:'Access & Platform', q:'Are materials downloadable?', a:'Policy templates and select reference frameworks are downloadable for internal organizational use.' },
  { id:'certificate-1', category:'Certification', q:'Is there a certificate on completion?', a:'Yes. A digitally verifiable certificate is issued after passing the capstone or final assessment.' },
  { id:'certificate-2', category:'Certification', q:'Are certificates recognized externally?', a:'The Institute issues certificates with unique IDs and is establishing external accreditation mappings; verification portal is included.' },
  { id:'support-1', category:'Support', q:'How do I get help during a course?', a:'Faculty Q&A forums, scheduled governance clinics, and priority email support (for installment & bundle plans) are available.' },
  { id:'support-2', category:'Support', q:'Can my organization arrange a cohort?', a:'Yes. Contact us for custom governance cohort structuring, pricing alignment, and private facilitation.' },
];

const categories = ['Enrollment','Billing & Plans','Access & Platform','Certification','Support'];

export default function HelpCenterClient(){
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [expanded, setExpanded] = useState<string | null>(null);
  const [all, setAll] = useState<QA[]>(seed);

  // Potential future fetch pattern
  useEffect(()=>{ /* placeholder for remote fetch */ },[]);

  const filtered = useMemo(()=>{
    return all.filter(item => {
      const matchCat = activeCategory==='All' || item.category===activeCategory;
      const ql = query.toLowerCase();
      const matchQuery = !ql || item.q.toLowerCase().includes(ql) || item.a.toLowerCase().includes(ql);
      return matchCat && matchQuery;
    });
  },[all, activeCategory, query]);

  const grouped = useMemo(()=>{
    return filtered.reduce<Record<string, QA[]>>((acc, qa)=>{
      acc[qa.category] = acc[qa.category] || [];
      acc[qa.category].push(qa);
      return acc;
    },{});
  },[filtered]);

  function toggle(id:string){ setExpanded(prev => prev===id ? null : id); }

  return (
    <main className="min-h-screen bg-white dark:bg-dark_black text-dark_black dark:text-white">
      {/* Hero / Search */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.07] dark:opacity-[0.15] bg-[radial-gradient(circle_at_60%_30%,#5bc6d0,transparent_60%)]" />
        <div className="container relative flex flex-col gap-8 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Help Center</h1>
          <p className="text-dark_black/60 dark:text-white/60 max-w-2xl">Answers to the most common governance learning, enrollment, billing, access, and certification questions. Use search or browse by category.</p>
          <div className="flex flex-col gap-4">
            <div className="relative">
              <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search help topics..." className="w-full px-5 py-4 rounded-2xl border border-dark_black/10 dark:border-white/10 bg-dark_black/5 dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-teal-500/40" />
              {query && <button onClick={()=>setQuery('')} className="absolute top-1/2 -translate-y-1/2 right-4 text-dark_black/40 dark:text-white/40 text-xs hover:text-teal-600 dark:hover:text-teal-400">Clear</button>}
            </div>
            <div className="flex flex-wrap gap-2 text-sm">
              <button onClick={()=>setActiveCategory('All')} className={`px-4 py-1.5 rounded-full border ${activeCategory==='All' ? 'bg-teal-500 text-white border-teal-500' : 'border-dark_black/10 dark:border-white/10 hover:border-teal-400/60'}`}>All</button>
              {categories.map(c => (
                <button key={c} onClick={()=>setActiveCategory(c)} className={`px-4 py-1.5 rounded-full border ${activeCategory===c ? 'bg-teal-500 text-white border-teal-500' : 'border-dark_black/10 dark:border-white/10 hover:border-teal-400/60'}`}>{c}</button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="pb-32">
        <div className="container flex flex-col gap-16 max-w-5xl">
          {Object.keys(grouped).length===0 && (
            <div className="text-center py-20 flex flex-col gap-4">
              <p className="text-dark_black/60 dark:text-white/60">No results found for “{query}”.</p>
              <Link href="/contact" className="text-sm text-teal-600 dark:text-teal-400 underline-offset-4 hover:underline">Contact support</Link>
            </div>
          )}
          {Object.entries(grouped).map(([cat, items]) => (
            <div key={cat} className="flex flex-col gap-6">
              <h2 className="text-xl font-semibold tracking-tight flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-teal-500" />{cat}
                <span className="text-xs text-dark_black/40 dark:text-white/40 font-normal">{items.length}</span>
              </h2>
              <div className="flex flex-col gap-3">
                {items.map(item => (
                  <div key={item.id} className="border border-dark_black/10 dark:border-white/20 rounded-2xl overflow-hidden bg-dark_black/5 dark:bg-white/5">
                    <button onClick={()=>toggle(item.id)} className="w-full flex justify-between items-center text-left px-5 py-4">
                      <span className="text-sm font-medium pr-4">{item.q}</span>
                      <span className={`transition transform text-dark_black/40 dark:text-white/40 ${expanded===item.id ? 'rotate-45' : ''}`}><svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg></span>
                    </button>
                    {expanded===item.id && (
                      <div className="px-5 pb-5 -mt-1 text-sm text-dark_black/60 dark:text-white/60 leading-relaxed">
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden ice-cta-bg">
        <div className="container flex flex-col items-center text-center gap-8 max-w-3xl relative">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-dark_black dark:text-white">Still Need Guidance?</h2>
          <p className="leading-relaxed text-dark_black/70 dark:text-white/70">Reach out for cohort setup, enterprise governance pathways, or accreditation mapping.</p>
          <Link href="/contact" className="px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-teal-500 via-cyan-400 to-emerald-400 text-white shadow-lg hover:scale-[1.03] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/50">
            Contact Support
          </Link>
        </div>
      </section>
    </main>
  );
}
