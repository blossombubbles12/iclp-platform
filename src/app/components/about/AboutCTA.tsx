"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutCTA(){
  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.5}} transition={{duration:0.6}} className="relative overflow-hidden rounded-3xl p-10 md:p-16 bg-gradient-to-br from-indigo-600 via-indigo-500 to-cyan-500 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_60%)]" />
          <div className="relative z-10 max-w-3xl flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">Partner With Us To Shape Sustainable Corporate Futures</h2>
            <p className="text-indigo-50 leading-relaxed">Engage in executive education, policy research collaborations, or governance innovation initiatives. Together we elevate standards fostering transparency, accountability, and resilience.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center rounded-lg bg-white text-indigo-700 font-medium px-6 py-3 shadow hover:shadow-lg transition">Contact Us</Link>
              <Link href="/courses" className="inline-flex items-center rounded-lg border border-white/60 text-white font-medium px-6 py-3 hover:bg-white/10 transition">Explore Courses</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
