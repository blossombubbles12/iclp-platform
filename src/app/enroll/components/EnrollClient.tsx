"use client";
import { useEffect, useMemo, useState } from 'react';
import { programs } from '../../data/programs';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';

interface SelectedCourse {
  slug: string;
  title: string;
}

type Plan = 'single' | 'installment' | 'bundle';

const PLAN_COPY: Record<Plan, { label: string; desc: string; price: number; unit: string; note?: string }> = {
  single: { label: 'Single Course', desc: 'Full lifetime access to one selected governance program.', price: 1190, unit: 'one-time' },
  installment: { label: 'Installment (3 x)', desc: 'Split into 3 interest‑free monthly payments.', price: 420, unit: 'per month', note: 'Billed monthly – total $1260' },
  bundle: { label: 'Executive Bundle (3)', desc: 'Access any 3 governance courses plus bundle resources.', price: 2900, unit: 'bundle' }
};

export default function EnrollClient(){
  const params = useSearchParams();
  const router = useRouter();
  const initialSlug = params.get('course');
  const initialProgram = programs.find(p=>p.slug===initialSlug);

  const [plan, setPlan] = useState<Plan>('single');
  const [selectedCourses, setSelectedCourses] = useState<SelectedCourse[]>(() => initialProgram ? [{ slug: initialProgram.slug, title: initialProgram.title }] : []);
  const [form, setForm] = useState({ name:'', email:'', organization:'', role:'', jurisdiction:'' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Derived totals
  const total = useMemo(()=>{
    if(plan==='single') return PLAN_COPY.single.price;
    if(plan==='installment') return PLAN_COPY.installment.price * 3; // total cost
    return PLAN_COPY.bundle.price;
  },[plan]);

  const perCharge = useMemo(()=> plan==='installment'? PLAN_COPY.installment.price : total, [plan, total]);

  // Bundle course selection logic
  function toggleCourse(slug:string){
    const course = programs.find(p=>p.slug===slug);
    if(!course) return;
    setSelectedCourses(prev=>{
      const exists = prev.some(c=>c.slug===slug);
      if(exists) return prev.filter(c=>c.slug!==slug);
      if(plan==='bundle'){
        if(prev.length>=3) return prev; // limit 3
        return [...prev, { slug: course.slug, title: course.title }];
      }
      // single / installment => single selection only
      return [{ slug: course.slug, title: course.title }];
    });
  }

  // Ensure selection compatible with plan
  useEffect(()=>{
    if(plan!=='bundle' && selectedCourses.length>1){
      setSelectedCourses(prev=> prev.slice(0,1));
    }
    if(plan==='bundle' && selectedCourses.length>3){
      setSelectedCourses(prev=> prev.slice(0,3));
    }
  },[plan, selectedCourses.length]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
    const { name, value } = e.target;
    setForm(f=>({...f,[name]:value}));
  }

  function canSubmit(){
    if(selectedCourses.length===0) return false;
    if(plan==='bundle' && selectedCourses.length<3) return false; // require all 3 chosen
    return form.name && form.email && form.role; // minimal
  }

  async function handleSubmit(e: React.FormEvent){
    e.preventDefault();
    if(!canSubmit()) return;
    setSubmitting(true);
    // Simulate API call
    await new Promise(r=> setTimeout(r, 1200));
    setSubmitting(false);
    setSuccess(true);
    // In a real impl: POST to /api/enroll
  }

  return (
    <div className="min-h-screen bg-white dark:bg-dark_black text-dark_black dark:text-white">
      <section className="pt-36 pb-16 border-b border-dark_black/10 dark:border-white/10 bg-gradient-to-br from-[#f0fbff] via-white to-[#fff9ed] dark:from-[#0f172a] dark:via-[#093c46] dark:to-[#0d9488] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none mix-blend-overlay bg-[radial-gradient(circle_at_75%_35%,rgba(91,198,208,0.35),transparent_60%)]" />
        <div className="container flex flex-col gap-6 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Finalize Your Enrollment</h1>
          <p className="text-dark_black/60 dark:text-white/60 max-w-2xl">Select your governance learning plan, confirm course(s), and submit your participant details. Secure processing & lifetime access on confirmation.</p>
          <div className="flex gap-3 text-xs font-medium tracking-wide text-dark_black/50 dark:text-white/40 uppercase">
            <span className="px-2 py-1 rounded bg-dark_black/5 dark:bg-white/10">Select</span>
            <span className="px-2 py-1 rounded bg-dark_black/5 dark:bg-white/10">Details</span>
            <span className="px-2 py-1 rounded bg-dark_black/5 dark:bg-white/10">Confirm</span>
          </div>
        </div>
      </section>

      <form onSubmit={handleSubmit} className="container py-20 flex flex-col gap-16 max-w-5xl">
        {/* Plan Selection */}
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-semibold">1. Choose Plan</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {(['single','installment','bundle'] as Plan[]).map(p => {
              const active = plan===p;
              const pc = PLAN_COPY[p];
              return (
                <button key={p} type="button" onClick={()=>setPlan(p)} className={`relative p-5 rounded-2xl text-left border transition group ${active? 'border-teal-500 bg-teal-500/5 dark:border-teal-400' : 'border-dark_black/10 dark:border-white/10 hover:border-teal-500/60'}`}>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-semibold flex items-center gap-2">{pc.label}{active && <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />}</span>
                    <p className="text-xs text-dark_black/60 dark:text-white/50 leading-relaxed">{pc.desc}</p>
                    <div className="mt-2 flex items-end gap-2">
                      <span className="text-xl font-bold">${pc.price}</span>
                      <span className="text-[11px] uppercase tracking-wide text-dark_black/50 dark:text-white/40">{pc.unit}</span>
                    </div>
                    {pc.note && <p className="text-[10px] text-amber-600 dark:text-amber-400 font-medium">{pc.note}</p>}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Course Selection */}
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-semibold">2. Select Course{plan==='bundle' && 's (3 required)'}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {programs.map(c => {
              const checked = selectedCourses.some(sc=>sc.slug===c.slug);
              const disabled = plan==='bundle' ? ( !checked && selectedCourses.length>=3 ) : ( !checked && selectedCourses.length>=1 );
              return (
                <label key={c.slug} className={`relative flex flex-col gap-3 p-5 rounded-2xl border cursor-pointer transition ${checked? 'border-teal-500 bg-teal-500/5 dark:border-teal-400' : disabled? 'opacity-40 border-dark_black/10 dark:border-white/10 cursor-not-allowed' : 'border-dark_black/10 dark:border-white/10 hover:border-teal-400/60'}`}> 
                  <input type="checkbox" className="hidden" checked={checked} disabled={disabled && !checked} onChange={()=>toggleCourse(c.slug)} />
                  <span className="text-sm font-medium">{c.title}</span>
                  <p className="text-xs text-dark_black/60 dark:text-white/50 leading-relaxed">{c.description}</p>
                  <div className="flex gap-2 text-[10px] uppercase tracking-wide text-dark_black/40 dark:text-white/40">
                    <span>{c.category}</span>
                    <span>Rating {c.rating.toFixed(1)}</span>
                  </div>
                  {checked && <span className="absolute top-3 right-3 h-5 w-5 rounded-full bg-teal-500 text-white flex items-center justify-center text-[10px]">✓</span>}
                </label>
              );
            })}
          </div>
        </div>

        {/* Participant Details */}
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-semibold">3. Participant Details</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {['name','email','organization','role','jurisdiction'].map(field => (
              <div key={field} className="flex flex-col gap-2">
                <label className="text-xs font-medium uppercase tracking-wide text-dark_black/60 dark:text-white/50">{field}</label>
                <input name={field} value={(form as any)[field]} onChange={handleChange} required={['name','email','role'].includes(field)} placeholder={field==='jurisdiction'? 'e.g., US / EU / GCC' : undefined} className="px-4 py-3 rounded-xl bg-dark_black/5 dark:bg-white/5 border border-dark_black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-500/40" />
              </div>
            ))}
          </div>
        </div>

        {/* Summary & Payment */}
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-semibold">4. Review & Confirm</h2>
          <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">
            <div className="flex flex-col gap-6">
              <div className="p-5 rounded-2xl border border-dark_black/10 dark:border-white/10 bg-dark_black/5 dark:bg-white/5 flex flex-col gap-4">
                <h3 className="font-medium">Selected {plan==='bundle' ? 'Courses' : 'Course'}</h3>
                <ul className="text-sm flex flex-col gap-2 text-dark_black/60 dark:text-white/60">
                  {selectedCourses.map(c => <li key={c.slug}>{c.title}</li>)}
                </ul>
                {plan==='bundle' && selectedCourses.length<3 && <p className="text-[11px] text-amber-600 dark:text-amber-400">Select {3-selectedCourses.length} more course(s) to proceed.</p>}
              </div>
              <div className="p-5 rounded-2xl border border-dark_black/10 dark:border-white/10 flex flex-col gap-4">
                <h3 className="font-medium">Secure Payment Placeholder</h3>
                <p className="text-xs text-dark_black/60 dark:text-white/50 leading-relaxed">Payment gateway integration (Stripe) will appear here. For now this simulates enrollment confirmation. Installment plan will schedule automatic monthly charges.</p>
                {plan==='installment' && <p className="text-[11px] text-teal-600 dark:text-teal-300 font-medium">3 monthly charges of ${perCharge} (total ${total}).</p>}
              </div>
            </div>
            <div className="flex flex-col gap-5 p-6 rounded-2xl border border-dark_black/10 dark:border-white/10 bg-gradient-to-br from-white to-[#f0fbff] dark:from-[#0f172a] dark:to-[#093c46]">
              <h3 className="font-semibold text-lg flex items-center gap-2">Order Summary</h3>
              <div className="flex flex-col gap-3 text-sm">
                <div className="flex justify-between"><span className="opacity-70">Plan</span><span>{PLAN_COPY[plan].label}</span></div>
                <div className="flex justify-between"><span className="opacity-70">Courses</span><span>{selectedCourses.length}</span></div>
                <div className="flex justify-between"><span className="opacity-70">Billing</span><span>{plan==='installment'? `3 x $${perCharge}` : 'One-time'}</span></div>
              </div>
              <div className="border-t border-dark_black/10 dark:border-white/10 pt-4 flex flex-col gap-3">
                <div className="flex justify-between text-sm font-medium"><span>Total</span><span>${total}</span></div>
                {plan==='installment' && <span className="text-[10px] text-dark_black/50 dark:text-white/40">Total after all installments.</span>}
              </div>
              <button disabled={!canSubmit() || submitting || success} className={`mt-2 relative group px-6 py-4 rounded-xl font-semibold text-sm transition ${success? 'bg-emerald-500 text-white' : canSubmit()? 'bg-teal-600 hover:bg-teal-500 text-white shadow' : 'bg-dark_black/10 dark:bg-white/10 text-dark_black/40 dark:text-white/30 cursor-not-allowed'}`}>{success? 'Enrolled ✓' : submitting? 'Processing…' : 'Complete Enrollment'}</button>
              {!canSubmit() && !success && <p className="text-[11px] text-amber-600 dark:text-amber-400">Select course(s) and fill required fields.</p>}
              {success && <div className="text-xs text-emerald-600 dark:text-emerald-400">Enrollment recorded. A confirmation email will follow.</div>}
              <div className="pt-2 flex justify-between text-[10px] uppercase tracking-wide text-dark_black/40 dark:text-white/40">
                <Link href="/courses" className="hover:text-teal-600 dark:hover:text-teal-400">Back to Courses</Link>
                <Link href="/faq" className="hover:text-teal-600 dark:hover:text-teal-400">Need Help?</Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
