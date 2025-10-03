'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5 }
}

const brandData = {
  brandLogos: [
    {
      name: 'Adobe',
      image: '/images/home/brand/brand-icon-1.svg',
      darkImage: '/images/home/brand/brand-darkicon-1.svg'
    },
    {
      name: 'Figma',
      image: '/images/home/brand/brand-icon-2.svg',
      darkImage: '/images/home/brand/brand-darkicon-2.svg'
    },
    {
      name: 'Framer',
      image: '/images/home/brand/brand-icon-3.svg',
      darkImage: '/images/home/brand/brand-darkicon-3.svg'
    },
    {
      name: 'Webflow',
      image: '/images/home/brand/brand-icon-4.svg',
      darkImage: '/images/home/brand/brand-darkicon-4.svg'
    },
    {
      name: 'Dribble',
      image: '/images/home/brand/brand-icon-5.svg',
      darkImage: '/images/home/brand/brand-darkicon-5.svg'
    }
  ]
}

function BrandLogo({ name, image, darkImage }: { name: string; image: string; darkImage: string }) {
  return (
    <div className="relative group mx-8">
      <Image
        src={image}
        alt={name}
        width={140}
        height={70}
        className="dark:hidden"
      />
      <Image
        src={darkImage}
        alt={name}
        width={140}
        height={70}
        className="hidden dark:block"
      />
    </div>
  )
}

const Brand = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="2xl:py-20 py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Partners
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We collaborate with leading institutions and organizations worldwide
            </p>
          </motion.div>

          <motion.div
            className="overflow-hidden relative"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex animate-marquee">
              {[...brandData.brandLogos, ...brandData.brandLogos].map((logo, index) => (
                <BrandLogo
                  key={index}
                  name={logo.name}
                  image={logo.image}
                  darkImage={logo.darkImage}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Brand
