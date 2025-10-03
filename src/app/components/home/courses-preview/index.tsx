"use client";
import Image from 'next/image'
import Link from 'next/link'
import { programs } from '../../../data/programs'

// Using first 4 programs for preview
const preview = programs.slice(0,4).map((p,i)=>({
  ...p,
  // temporary image substitution if original path not present
  image: ['/images/home/creative/creative_img_1.png','/images/home/creative/creative_img_2.png','/images/home/creative/creative_img_3.png','/images/home/creative/creative_img_4.png'][i%4]
}))

export default function CoursesPreview(){
  return (
    <section id="courses" className="bg-white dark:bg-dark_black">
      <div className="2xl:py-20 py-16">
        <div className="container flex flex-col gap-12">
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
            <h2 className="text-3xl md:text-5xl font-bold text-dark_black dark:text-white">
              Strategic <span className='instrument-font italic font-normal text-purple_blue dark:text-purple'>Governance Courses</span>
            </h2>
            <p className="text-dark_black/60 dark:text-white/60">
              Focused executive learning pathways that accelerate board effectiveness, compliance maturity, and resilient strategy.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {preview.map(course => (
              <Link key={course.id} href={`/courses/${course.slug}`} className="group relative rounded-2xl overflow-hidden bg-dark_black/5 dark:bg-white/5 border border-dark_black/10 dark:border-white/10 flex flex-col h-full">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image src={course.image} alt={course.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute bottom-0 p-4 flex flex-col gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-white/15 backdrop-blur border border-white/20 text-white w-fit">{course.category}</span>
                    <h3 className="text-white text-lg font-semibold leading-snug">{course.title}</h3>
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-4 grow">
                  <p className="text-sm text-dark_black/60 dark:text-white/60 line-clamp-4">{course.description}</p>
                  <div className="mt-auto flex items-center justify-between text-xs text-dark_black/50 dark:text-white/50">
                    <span className="flex items-center gap-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 17.75 6.167 21l1.116-6.507L2 9.736l6.583-.957L12 3l3.417 5.779 6.583.957-5.283 4.757L17.833 21z"/></svg>
                      {course.rating.toFixed(1)} • {course.ratingsCount} reviews
                    </span>
                    <span className="opacity-70 group-hover:text-purple_blue dark:group-hover:text-purple transition-colors">Explore →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/courses" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-dark_black text-white dark:bg-white/10 dark:text-white hover:opacity-90 transition">
              View All Courses
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
