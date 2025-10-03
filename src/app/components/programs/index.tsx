'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useAnimation, motion } from 'framer-motion'
import { categories, programs } from '../../data/programs'

function ProgramsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [filteredPrograms, setFilteredPrograms] = useState(programs)
  const [isFiltered, setIsFiltered] = useState(false)
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')

  const container = useAnimation()
  const card = useAnimation()

  useEffect(() => {
    setLoading(true)
    container.start({ opacity: 1, y: 0 })
    card.start({ opacity: 1, y: 0 })
    setTimeout(() => setLoading(false), 500)
  }, [container, card])

  // Category color helpers (deterministic by name)
  const chipBgs = [
    'bg-teal-600',
    'bg-indigo-600',
    'bg-rose-600',
    'bg-sky-600',
    'bg-amber-600',
    'bg-fuchsia-600',
  ] as const
  const btnGrad = [
    'from-teal-600 to-emerald-500',
    'from-indigo-600 to-purple-500',
    'from-rose-600 to-orange-500',
    'from-sky-500 to-cyan-500',
    'from-amber-500 to-yellow-500',
    'from-fuchsia-600 to-pink-500',
  ] as const
  function colorIndex(name: string){
    const sum = Array.from(name).reduce((a,c)=> a + c.charCodeAt(0), 0)
    return sum % chipBgs.length
  }
  function chipBg(name: string){ return chipBgs[colorIndex(name)] }
  function btnGradient(name: string){ return btnGrad[colorIndex(name)] }

  useEffect(() => {
    const base = activeCategory === 'all' ? programs : programs.filter(p => p.category === activeCategory)
    const text = query.trim().toLowerCase()
    const next = text
      ? base.filter(p =>
          p.title.toLowerCase().includes(text) ||
          p.description.toLowerCase().includes(text)
        )
      : base
    setFilteredPrograms(next)
    setIsFiltered(activeCategory !== 'all' || !!text)
  }, [activeCategory, query])

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="mb-8">
          <ol className="list-reset flex text-sm text-gray-600 dark:text-gray-400">
            <li><Link href="/">Home</Link></li>
            <li className="mx-2">/</li>
            <li>Programs</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Filter */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Categories</h3>
              <div className="space-y-2">
                <button 
                  onClick={() => setActiveCategory('all')}
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                    activeCategory === 'all' 
                      ? 'bg-purple-blue text-white ring-2 ring-purple-blue/30' 
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  All Programs
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.name)}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      activeCategory === category.name 
                        ? `bg-gradient-to-r ${btnGradient(category.name)} text-white ring-2 ring-white/20` 
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Programs Grid */}
          <div className="lg:col-span-3">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                {isFiltered
                  ? `Programs in ${categories.find(c => c.name === activeCategory)?.title}`
                  : 'All Programs'
                }
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {isFiltered
                  ? `Explore ${filteredPrograms.length} programs focused on ${activeCategory}`
                  : `Choose from ${programs.length} programs across various disciplines`
                }
              </p>
            </div>

            {/* Search */}
            <div className="mb-8 flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 dark:text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
                <input
                  value={query}
                  onChange={(e)=> setQuery(e.target.value)}
                  placeholder="Search programs..."
                  className="w-full pl-10 pr-16 py-2.5 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/40 shadow-sm"
                />
                {query && (
                  <button onClick={()=> setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400">Clear</button>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loading ? (
                <div className="col-span-full text-center">Loading programs...</div>
              ) : filteredPrograms.length > 0 ? (
                filteredPrograms.map((program, index) => (
                  <motion.div
                    key={program.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={card}
                    style={{ animationDelay: `${0.1 + 0.05 * index}s` }}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index < 3}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                        <span className={`${chipBg(program.category)} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                          {program.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                        {program.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {program.description}
                      </p>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                          {program.rating && (
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <span
                                  key={i}
                                  className={`w-4 h-4 ${i < program.rating 
                                    ? 'text-yellow-500' 
                                    : 'text-gray-300 dark:text-gray-600'}`}
                                >
                                  ★
                                </span>
                              ))}
                            </div>
                          )}
                          {program.rating && (
                            <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                              {program.ratingsCount} reviews
                            </span>
                          )}
                        </div>
                        <Link
                          href={`/programs/${program.slug}`}
                          className="bg-purple-blue text-white text-sm font-medium px-4 py-2 rounded-md transition-colors hover:bg-purple-blue/90"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500 dark:text-gray-400">
                    {isFiltered 
                      ? `No programs found in ${activeCategory}`
                      : 'No programs available at the moment'
                    }
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProgramsPage