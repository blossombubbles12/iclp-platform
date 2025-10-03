'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const innovationAreas = [
  {
    title: "Corporate Law\nResearch & Analysis",
    description: "Pioneering research in corporate law and regulatory frameworks",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 stroke-[#5bc6d0]">
        <rect x="4" y="3" width="16" height="18" rx="2" className="fill-[#5bc6d0]/5" />
        <path d="M8 7h8M8 11h8M8 15h5" />
      </svg>
    ),
    bg_color: "bg-blue_gradient dark:bg-dark_blue_gradient",
    txt_color: "text-purple_blue dark:text-white"
  },
  {
    title: "Policy\nDevelopment",
    description: "Shaping effective corporate governance policies",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 stroke-[#5bc6d0]">
        <path d="M6 3h9l3 3v15H6z" className="fill-[#5bc6d0]/5" />
        <path d="M9 9h6M9 13h6M9 17h4" />
      </svg>
    ),
    bg_color: "bg-yellow_gradient dark:bg-dark_yellow_gradient",
    txt_color: "text-dark_black dark:text-pale-yellow"
  },
  {
    title: "Governance\nBest Practices",
    description: "Establishing standards for corporate governance excellence",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 stroke-[#5bc6d0]">
        <path d="M12 3 4.5 7v5c0 5 3.5 8.5 7.5 9 4-0.5 7.5-4 7.5-9V7L12 3Z" className="fill-[#5bc6d0]/5" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    bg_color: "bg-blue_gradient dark:bg-dark_blue_gradient",
    txt_color: "text-purple_blue dark:text-white"
  },
  {
    title: "Legal Education\n& Training",
    description: "Advanced programs for legal professionals",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 stroke-[#5bc6d0]">
        <path d="M4 10 12 6l8 4-8 4-8-4Z" className="fill-[#5bc6d0]/5" />
        <path d="M6 12v4c2 1 4 2 6 2s4-1 6-2v-4" />
      </svg>
    ),
    bg_color: "bg-yellow_gradient dark:bg-dark_yellow_gradient",
    txt_color: "text-dark_black dark:text-pale-yellow"
  },
  {
    title: "Global\nCollaboration",
    description: "International partnerships and knowledge exchange",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 stroke-[#5bc6d0]">
        <circle cx="12" cy="12" r="9" className="fill-[#5bc6d0]/5" />
        <path d="M3 12h18M12 3a17 17 0 0 1 4 9 17 17 0 0 1-4 9 17 17 0 0 1-4-9 17 17 0 0 1 4-9Z" />
      </svg>
    ),
    bg_color: "bg-blue_gradient dark:bg-dark_blue_gradient",
    txt_color: "text-purple_blue dark:text-white"
  }
]

function Innovation() {
  const ref = useRef(null)
  const inView = useInView(ref)

  const bottomAnimation = (index: number) => ({
    initial: { y: '25%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '25%', opacity: 0 },
    transition: { duration: 0.3, delay: 0.3 + index * 0.3 },
  })

  return (
    <section id='expertise' className="bg-gray-50 dark:bg-gray-900">
      <div ref={ref} className='2xl:py-20 py-16'>
        <div className='container'>
          <div className='flex flex-col gap-12'>
            <div className='flex flex-col justify-center items-center gap-10 lg:gap-16'>
              <motion.div
                {...bottomAnimation(1)}
                className='max-w-2xl text-center'>
                <h2 className="text-3xl md:text-4xl font-bold text-dark_black dark:text-white mb-6 flex flex-col gap-3">
                  <span className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
                    <span>Where</span>
                    <motion.span
                      initial={{opacity:0,y:8}}
                      whileInView={{opacity:1,y:0}}
                      viewport={{once:true, amount:0.6}}
                      transition={{delay:0.05}}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark_black/5 dark:bg-white/10 text-sm md:text-base font-semibold">
                      <span className="text-[#0f172a] dark:text-white flex items-center">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5bc6d0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 4h14"/><path d="M7 4v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4"/><path d="M9 10h6"/><path d="M9 7h6"/><path d="M9 13h6"/></svg>
                      </span>
                      <span>Legal</span>
                    </motion.span>
                    <motion.span
                      initial={{opacity:0,y:8}}
                      whileInView={{opacity:1,y:0}}
                      viewport={{once:true, amount:0.6}}
                      transition={{delay:0.12}}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark_black/5 dark:bg-white/10 text-sm md:text-base font-semibold">
                      <span className="text-[#0f172a] dark:text-white flex items-center">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5bc6d0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 17.75 6.167 21l1.116-6.507L2 9.736l6.583-.957L12 3l3.417 5.779 6.583.957-5.283 4.757L17.833 21z"/></svg>
                      </span>
                      <span>Excellence</span>
                    </motion.span>
                    <span>Makes</span>
                  </span>
                  <span className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
                    <span>Impact With</span>
                    <motion.span
                      initial={{opacity:0,y:8}}
                      whileInView={{opacity:1,y:0}}
                      viewport={{once:true, amount:0.6}}
                      transition={{delay:0.2}}
                      className='instrument-font italic font-normal text-purple_blue dark:text-purple inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple_blue/10 dark:bg-purple/15 backdrop-blur'>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5bc6d0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow">
                        <path d="M12 3c-3.5 0-6 2.6-6 5.8 0 1.9.9 3.6 2.3 4.7.3.2.5.6.4 1l-.5 2a1 1 0 0 0 1.4 1.1l2.4-1.1c.2-.1.5-.1.7 0l2.4 1.1a1 1 0 0 0 1.4-1.1l-.5-2a1 1 0 0 1 .4-1c1.4-1.1 2.3-2.8 2.3-4.7C18 5.6 15.5 3 12 3Z"/>
                        <path d="M10 19h4"/><path d="M9 22h6"/>
                      </svg>
                      Innovation
                    </motion.span>
                  </span>
                </h2>
                <p className="text-lg text-dark_black/60 dark:text-white/60">
                  Advancing the frontiers of corporate law, policy, and governance through research and education
                </p>
              </motion.div>
              
              <motion.div
                {...bottomAnimation(2)}
                className='grid auto-rows-max grid-cols-1 md:grid-cols-2 2xl:grid-cols-5 gap-6 w-full'>
                {innovationAreas.map((item, index) => (
                  <div
                    key={index}
                    className={`${item.bg_color} flex flex-col p-8 rounded-2xl gap-6 lg:gap-9 hover:transform hover:scale-105 transition-transform duration-300`}
                  >
                    <div className="relative inline-flex items-center justify-center">
                      <span className="h-14 w-14 rounded-2xl flex items-center justify-center bg-white/15 dark:bg-black/20 backdrop-blur border border-white/25 shadow-inner">
                        {item.icon()}
                      </span>
                    </div>
                    <div>
                      <h5 className={`${item.txt_color} text-xl font-semibold mb-2 leading-snug`}>
                        {item.title.split('\n').map((line, i) => (
                          <span key={i} className="block">{line}</span>
                        ))}
                      </h5>
                      <p className="text-dark_black/70 dark:text-white/70 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              {...bottomAnimation(3)}
              className='flex flex-col gap-4 xl:flex-row bg-dark_black items-center justify-between dark:bg-white/5 py-8 px-7 sm:px-12 rounded-3xl w-full'>
              <h4 className='text-white text-center xl:text-left text-xl md:text-2xl font-semibold'>
                Explore Our Research and Programs.
                <br /> Join Us in Shaping the Future of Corporate Governance!
              </h4>
              <div className='flex flex-col sm:flex-row gap-3 items-center'>
                <Link
                  href='/contact'
                  className='group gap-2 text-dark_black font-medium bg-white rounded-full flex items-center lg:gap-4 py-2 pl-5 pr-2 border border-white dark:border-opacity-50 hover:bg-transparent hover:text-white transition-all duration-200 ease-in-out'>
                  <span className='group-hover:translate-x-9 transform transition-transform duration-200 ease-in-out'>
                    Get Started Today
                  </span>
                  <svg
                    width='32'
                    height='32'
                    viewBox='0 0 32 32'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='group-hover:-translate-x-32 transition-all duration-200 ease-in-out'>
                    <rect
                      width='32'
                      height='32'
                      rx='16'
                      fill='#1B1D1E'
                      className='transition-colors duration-200 ease-in-out group-hover:fill-white'
                    />
                    <path
                      d='M11.832 11.3335H20.1654M20.1654 11.3335V19.6668M20.1654 11.3335L11.832 19.6668'
                      stroke='white'
                      strokeWidth='1.42857'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='group-hover:stroke-black'
                    />
                  </svg>
                </Link>
                <Link
                  href='/programs'
                  className='group border border-white dark:border-white/50 text-white font-medium bg-dark_black gap-2 rounded-full flex items-center justify-between lg:gap-4 py-2 pl-5 pr-2 hover:opacity-95 hover:bg-transparent hover:text-white transition-all duration-200 ease-in-out'>
                  <span className='group-hover:translate-x-9 transform transition-transform duration-200 ease-in-out'>
                    View Programs
                  </span>
                  <svg
                    width='32'
                    height='32'
                    viewBox='0 0 32 32'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='group-hover:-translate-x-28 transition-all duration-200 ease-in-out'>
                    <rect width='32' height='32' rx='16' fill='white' />
                    <path
                      d='M11.832 11.3334H20.1654M20.1654 11.3334V19.6668M20.1654 11.3334L11.832 19.6668'
                      stroke='#1B1D1E'
                      strokeWidth='1.42857'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Innovation
