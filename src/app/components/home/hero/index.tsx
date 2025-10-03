'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import StarRating from '../../shared/star-rating'

function HeroSection() {
  if (typeof window !== 'undefined') {
    // Debug render trace
    console.debug('[HeroSection] render start')
  }
  const ref = useRef(null)
  const [avatarList, setAvatarList] = useState<any>(null)
  const [currentText, setCurrentText] = useState(0)
  const texts = [
    "Corporate Governance",
    "Board Leadership",
    "Ethical Compliance",
    "Strategic Governance"
  ]

  // Text morphing effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/page-data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setAvatarList(data)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }

    fetchData()
  }, [])

  const bottomAnimation = {
    initial: { y: '20%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.8 },
  }

  const hoverVariants = {
    hover: { scale: 1.05, y: -5, transition: { duration: 0.2 } }
  }

  return (
    <section>
      <div className='relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10'>
        <div className='container relative z-10'>
          <div ref={ref} className='flex flex-col gap-8'>
            {/* ---------------- heading text --------------- */}
            <motion.div
              {...bottomAnimation}
              className='relative flex flex-col text-center items-center gap-4'>
              <h1 className='font-medium w-full'>
                Advancing Excellence in
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='instrument-font italic font-normal dark:text-white/70'>
                  {' '}<span>{texts[currentText]}</span>
                </motion.span>
              </h1>
              <p className='max-w-38 text-dark_black/60 dark:text-white/60'>
                Empowering leaders with comprehensive knowledge in corporate law, policy, and governance for a sustainable future
              </p>
            </motion.div>

            <motion.div
              {...bottomAnimation}
              className='flex flex-col items-center justify-center gap-4'>
              <div className='flex flex-col items-center justify-center gap-8 w-full sm:flex-row'>
                {/* ----------- Explore Programs Link -------------- */}
                <motion.div 
                  whileHover={hoverVariants}
                  whileTap={{ scale: 0.95 }}
                  className='group bg-purple_blue text-white font-medium flex flex-row justify-between items-center py-2 px-5 rounded-full max-w-64 w-full md:py-3 border border-purple_blue transition-all duration-200 ease-in-out hover:bg-transparent hover:text-purple_blue transform transition-transform duration-300 ease-in-out'>
                  <span className='flex text-start transform transition-transform duration-200 ease-in-out group-hover:translate-x-28'>
                    Explore Programs
                  </span>
                  <motion.svg
                    width='40'
                    height='40'
                    viewBox='0 0 40 40'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='transform transition-transform duration-200 ease-in-out group-hover:-translate-x-44 group-hover:rotate-45'
                    whileHover={{ rotate: 45, translateX: -10 }}
                  >
                    <rect
                      width='40'
                      height='40'
                      rx='20'
                      className='fill-white transition-colors duration-200 ease-in-out group-hover:fill-purple_blue'
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.3 }}
                      d='M15.832 15.3334H24.1654V23.6667'
                      className='stroke-[#1B1D1E] transition-colors duration-200 ease-in-out group-hover:stroke-white'
                      strokeWidth='1.66667'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      d='M15.832 23.6667L24.1654 15.3334'
                      className='stroke-[#1B1D1E] transition-colors duration-500 ease-in-out group-hover:stroke-white'
                      strokeWidth='1.66667'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </motion.svg>
                </motion.div>

                {/* --------------- Faculty & Research division -------------- */}
                <div className='flex items-center gap-7'>
                  <motion.ul 
                    className='avatar flex flex-row items-center'
                    whileHover={{
                      rotate: 2,
                      transition: { repeatType: "reverse", duration: 0.5 }
                    }}
                  >
                    {avatarList?.avatarList?.map((items:any, index:any) => (
                      <motion.li 
                        key={index} 
                        className='-mr-2 z-1 avatar-hover:ml-2'
                        whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 0.2 } }}>
                        <Image
                          src={items.image}
                          alt='Faculty member'
                          width={44}
                          height={44}
                          quality={100}
                          className='rounded-full border-2 border-white'
                          unoptimized={true}
                        />
                      </motion.li>
                    ))}
                  </motion.ul>
                  
                  {/* -------------- Research rating division --------------- */}
                  <motion.div 
                    className='gap-1 flex flex-col items-center'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                  >
                    <StarRating
                      count={5}
                      color='#F59E0B'
                    />
                    <p className='text-sm font-normal text-dark_black/60 dark:text-white/60'>
                      World-class Faculty & Research
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection