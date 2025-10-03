import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { programs as rawPrograms, categories } from '../data/programs'

export const metadata: Metadata = {
  title: 'Courses | Institute of Corporate Law, Policy, and Governance Global',
  description: 'Explore specialized corporate governance and policy courses designed for executives, board members, and governance professionals.'
}

// Map to temporary placeholder images from existing assets
const imagePool = [
  '/images/home/creative/creative_img_1.png',
  '/images/home/creative/creative_img_2.png',
  '/images/home/creative/creative_img_3.png',
  '/images/home/creative/creative_img_4.png'
]
const featured = rawPrograms.slice(0,4).map((p,i)=>({
  ...p,
  image: imagePool[i % imagePool.length]
}))

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-dark_black">
      {/* Hero */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.07] dark:opacity-[0.15] bg-[radial-gradient(circle_at_30%_30%,#5b5bd6,transparent_60%)]" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-dark_black dark:text-white">
              Curated <span className='instrument-font italic font-normal text-purple_blue dark:text-purple'>Executive Courses</span>
            </h1>
            <p className="text-lg text-dark_black/60 dark:text-white/60">
              Practical, research-informed governance learning experiences for modern corporate leaders and policy influencers.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {categories.map(c => (
                <span key={c.id} className="px-4 py-1.5 text-sm rounded-full bg-dark_black/5 dark:bg-white/10 text-dark_black/70 dark:text-white/70">
                  {c.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Masonry-like grid */}
      <section className="pb-28">
        <div className="container">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 [column-fill:_balance]
                          before:contents before:block after:contents after:block">
            {featured.map((course, i) => (
              <Link
                key={course.id}
                href={`/courses/${course.slug}`}
                className="group mb-6 break-inside-avoid block rounded-2xl overflow-hidden relative bg-dark_black/5 dark:bg-white/5 backdrop-blur-sm border border-dark_black/10 dark:border-white/10 hover:shadow-xl transition-all">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute bottom-0 p-5 flex flex-col gap-3">
                    <span className="px-3 py-1 text-xs rounded-full bg-white/15 backdrop-blur text-white tracking-wide w-fit border border-white/20">
                      {course.category}
                    </span>
                    <h3 className="text-white text-lg font-semibold leading-snug">
                      {course.title}
                    </h3>
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-4">
                  <p className="text-sm text-dark_black/60 dark:text-white/60 leading-relaxed">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-dark_black/50 dark:text-white/50">
                    <span className="flex items-center gap-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 17.75 6.167 21l1.116-6.507L2 9.736l6.583-.957L12 3l3.417 5.779 6.583.957-5.283 4.757L17.833 21z"/></svg>
                      {course.rating.toFixed(1)} • {course.ratingsCount} reviews
                    </span>
                    <span className="opacity-70 group-hover:text-purple_blue dark:group-hover:text-purple transition-colors">View ►</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-dark_black text-white dark:bg-white/10 dark:text-white hover:opacity-90 transition">
              Request Full Catalogue
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
