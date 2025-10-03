import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../header/Logo'

const Footer = () => {
  const [footerData, setfooterData] = useState<any>(null);
  useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch('/api/footer-data')
          if (!res.ok) throw new Error('Failed to fetch')
          const data = await res.json()        
          setfooterData(data?.footerData)
        } catch (error) {
          console.error('Error fetching services:', error)
        }
      }
  
      fetchData()
    }, [])

  return (
    <footer className='xl:pt-20 pb-6'>
      <div className='container'>
        <div className='flex flex-col xl:flex-row py-16 gap-14 justify-between border-b border-dark_black/10 dark:border-white/10'>
          {/* Brand + Social */}
          <div className='flex flex-col gap-6 max-w-md'>
            <Logo />
            <p className='opacity-60'>{footerData?.brand?.tagline}</p>
            <div className='flex gap-4 flex-wrap'>
              {footerData?.brand?.socialLinks?.map((item:any, index:number) => (
                <Link key={index} href={item.link} target='_blank' className='hover:opacity-60'>
                  <Image src={item.icon} className='dark:hidden' alt='social-icon' height={20} width={20} />
                  <Image src={item.dark_icon} className='dark:block hidden' alt='social-icon' height={20} width={20} />
                </Link>
              ))}
            </div>
          </div>
          {/* Curated Link Columns */}
          <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-4 flex-1 min-w-[50%]'>
            {/* Explore */}
            <div className='flex flex-col gap-4'>
              <p className='font-medium'>Explore</p>
              <ul className='flex flex-col gap-3 text-sm'>
                {[
                  { name:'About', url:'/about' },
                  { name:'Faculty', url:'/faculty' },
                  { name:'Governance Board', url:'/governance-board' },
                  { name:'Courses', url:'/courses' },
                  { name:'Leadership', url:'/about#leadership' },
                  { name:'Impact', url:'/about#impact' }
                ].map(link => (
                  <li key={link.name} className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>
                    <Link href={link.url}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Resources */}
            <div className='flex flex-col gap-4'>
              <p className='font-medium'>Resources</p>
              <ul className='flex flex-col gap-3 text-sm'>
                {[
                  { name:'Case Studies', url:'/case-studies' },
                  { name:'Documentation', url:'/documentation' },
                  { name:'FAQ', url:'/faq' }
                ].map(link => (
                  <li key={link.name} className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>
                    <Link href={link.url}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Support */}
            <div className='flex flex-col gap-4'>
              <p className='font-medium'>Support</p>
              <ul className='flex flex-col gap-3 text-sm'>
                {[
                  { name:'Contact', url:'/contact' },
                  { name:'Help Center', url:'/help-center' },
                  { name:'Accessibility', url:'/accessibility' },
                  { name:'Partnerships', url:'/partnerships' }
                ].map(link => (
                  <li key={link.name} className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>
                    <Link href={link.url}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Legal */}
            <div className='flex flex-col gap-4'>
              <p className='font-medium'>Legal</p>
              <ul className='flex flex-col gap-3 text-sm'>
                {[
                  { name:'Privacy Policy', url:'/privacy-policy' },
                  { name:'Terms & Conditions', url:'/terms-and-conditions' },
                  { name:'Compliance', url:'/about#values' },
                  { name:'Ethics', url:'/about#values' }
                ].map(link => (
                  <li key={link.name} className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>
                    <Link href={link.url}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-8'>
          <p className='text-dark_black/60 dark:text-white/60'>
            {footerData?.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
