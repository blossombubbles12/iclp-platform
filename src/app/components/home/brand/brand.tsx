'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { partnerData } from '../../../data/partners'

interface PartnerLogoProps {
  name: string
  image: string
  darkImage: string
  width?: number
  height?: number
}

interface PartnerSectionProps {
  title: string
  items: Array<{ name: string; image: string; darkImage: string }>
  imageWidth?: number
  imageHeight?: number
}

function Brand() {
  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
  }

  function PartnerLogo({ name, image, darkImage, width = 140, height = 70 }: PartnerLogoProps) {
    return (
      <div className="relative group">
        <Image
          src={image}
          alt={name}
          width={width}
          height={height}
          className="dark:hidden"
        />
        <Image
          src={darkImage}
          alt={name}
          width={width}
          height={height}
          className="hidden dark:block"
        />
        <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
          {name}
        </div>
      </div>
    )
  }

  function PartnerSection({ title, items, imageWidth, imageHeight }: PartnerSectionProps) {
    return (
      <motion.div
        className="space-y-6"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center mb-8">
          {title}
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {items.map((item, index) => (
            <PartnerLogo
              key={index}
              name={item.name}
              image={item.image}
              darkImage={item.darkImage}
              width={imageWidth}
              height={imageHeight}
            />
          ))}
        </div>
      </motion.div>
    )
  }

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
              Global Recognition & Partnerships
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Internationally accredited and partnered with leading institutions to deliver world-class education in corporate law and governance
            </p>
          </motion.div>

          <div className="grid gap-12">
            <PartnerSection
              title="Accreditations & Certifications"
              items={partnerData.accreditations}
              imageWidth={120}
              imageHeight={60}
            />
            <PartnerSection
              title="Academic Partners"
              items={partnerData.partnerships}
              imageWidth={160}
              imageHeight={80}
            />
            <PartnerSection
              title="Professional Memberships"
              items={partnerData.memberships}
              imageWidth={140}
              imageHeight={70}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brand
