'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import SingleAchievement from './SingleAchievement'

function Achievements() {
  const ref = useRef(null)
  const inView = useInView(ref)
  const [achievementsList, setAchievementsList] = useState<any>(null);

  useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch('/api/page-data')
          if (!res.ok) throw new Error('Failed to fetch')
  
          const data = await res.json()
          setAchievementsList(data?.achievementsList)
        } catch (error) {
          console.error('Error fetching services:', error)
        }
      }
  
      fetchData()
    }, [])

  const bottomAnimation = (index: any) => ({
    initial: { y: '5%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '10%', opacity: 0 },
    transition: { duration: 0.4, delay: 0.4 + index * 0.3 },
  })

  return (
    <section id='awards'>
      <div ref={ref} className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col gap-10 md:gap-20'>
            <div className='max-w-3xl text-center mx-auto'>
              <h2 className='text-3xl md:text-4xl font-bold tracking-tight'>
                Recognitions & Impact Showcasing Our{' '}
                <span className='instrument-font italic font-normal dark:text-white/70'>
                  Governance Excellence
                </span>
              </h2>
              <p className='mt-4 text-dark_black/60 dark:text-white/60 text-sm md:text-base'>Independent awards, peer recognition, and research citations reflecting our contribution to responsible corporate stewardship.</p>
            </div>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-6'>
              {achievementsList?.map((item:any, index:any) => {
                return (
                  <motion.div {...bottomAnimation(index)} key={index}>
                    <SingleAchievement key={index} achievements={item} />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
