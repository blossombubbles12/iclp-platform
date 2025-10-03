'use client'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const achievements = [
  {
    name: "Global Research",
    image: "/images/home/achievement/framer_award.svg",
    darkImage: "/images/home/achievement/dark_framer_award.svg",
    bg_color: "bg-blue_gradient dark:bg-dark_blue_gradient",
    txt_color: "text-purple_blue"
  },
  {
    name: "Policy Impact",
    image: "/images/home/achievement/awward_award.svg",
    darkImage: "/images/home/achievement/dark_awward_award.svg",
    bg_color: "bg-yellow_gradient dark:bg-dark_yellow_gradient",
    txt_color: "text-dark_black dark:text-pale-yellow"
  },
  {
    name: "Corporate Governance",
    image: "/images/home/achievement/dribble_award.svg",
    darkImage: "/images/home/achievement/dribble_award.svg",
    bg_color: "bg-blue_gradient dark:bg-dark_blue_gradient",
    txt_color: "text-purple_blue"
  }
]

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5 }
}

function WebResult() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  return (
    <section id='achievements' className="bg-white dark:bg-dark_black">
      <div className='2xl:py-20 py-16'>
        <div className='container'>
          <motion.div 
            className='flex flex-col lg:gap-16 gap-8'
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className='flex flex-col items-center justify-center text-center gap-6'>
              <h2 className='text-3xl md:text-4xl font-bold text-dark_black dark:text-white max-w-4xl'>
                Advancing Global Excellence in Corporate Law, Policy, and Governance
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {achievements.map((item, index) => (
                  <span
                    key={index}
                    className={`inline-flex items-center m-2 py-2 px-6 gap-3 rounded-full ${item.bg_color} ${item.txt_color}`}
                  >
                    <img
                      src={item.darkImage}
                      alt={item.name}
                      className="hidden dark:block w-6 h-6"
                    />
                    <img
                      src={item.image}
                      alt={item.name}
                      className="dark:hidden w-6 h-6"
                    />
                    <span className='instrument-font italic font-normal'>
                      {item.name}
                    </span>
                  </span>
                ))}
              </div>
            </div>

            <div className='grid md:grid-cols-3 gap-8 text-center'>
              <motion.div 
                className='relative p-6'
                variants={fadeInUp}
              >
                <h2 ref={ref} className='text-4xl md:text-6xl lg:text-7xl font-bold text-dark_black dark:text-white mb-3'>
                  <span>{inView ? <CountUp start={0} end={500} duration={3} /> : '0'}</span>
                  <sup>+</sup>
                </h2>
                <p className='text-lg text-dark_black/60 dark:text-white/60'>
                  Publications & Research Papers
                </p>
              </motion.div>

              <motion.div 
                className='relative p-6'
                variants={fadeInUp}
              >
                <h2 className='text-4xl md:text-6xl lg:text-7xl font-bold text-dark_black dark:text-white mb-3'>
                  <span>{inView ? <CountUp start={0} end={25} duration={3} /> : '0'}</span>
                  <sup>+</sup>
                </h2>
                <p className='text-lg text-dark_black/60 dark:text-white/60'>
                  Years of Academic Excellence
                </p>
              </motion.div>

              <motion.div 
                className='relative p-6'
                variants={fadeInUp}
              >
                <h2 className='text-4xl md:text-6xl lg:text-7xl font-bold text-dark_black dark:text-white mb-3'>
                  <span>{inView ? <CountUp start={0} end={50} duration={3} /> : '0'}</span>
                  <sup>+</sup>
                </h2>
                <p className='text-lg text-dark_black/60 dark:text-white/60'>
                  Global Partner Institutions
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WebResult
