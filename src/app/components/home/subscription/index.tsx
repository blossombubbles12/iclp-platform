"use client";
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';

function Subscription() {
  const [startupPlanList, setstartupPlanList] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/page-data')
        if (!res.ok) throw new Error('Failed to fetch')

        const data = await res.json()
        setstartupPlanList(data?.startupPlanList)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }

    fetchData()
  }, [])
  return (
    <section id='pricing'>
      <div className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col gap-10 md:gap-20'>
            <div className='max-w-2xl text-center mx-auto'>
              <h2 className='text-3xl md:text-4xl font-bold tracking-tight'>
                Choose the <span className='instrument-font italic font-normal dark:text-white/70'>Course Access</span> plan for you
              </h2>
              <p className='mt-4 text-sm md:text-base text-dark_black/60 dark:text-white/60'>Flexible options for governance learning: pay once, spread payments, or bundle multiple programs.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {(() => {
                // Derive pricing/style tokens from original list if available, else fallback defaults
                const base = startupPlanList || [];
                const fallbackColors = [
                  { plan_bg_color: 'bg-dark_black/5 dark:bg-white/5', text_color: 'text-dark_black dark:text-white', descp_color: 'dark_black/60', border_color: 'border-dark_black/10 dark:border-white/10', icon_img: '/favicon.ico', plan_price: '$1190' },
                  { plan_bg_color: 'bg-dark_black/5 dark:bg-white/5', text_color: 'text-dark_black dark:text-white', descp_color: 'dark_black/60', border_color: 'border-dark_black/10 dark:border-white/10', icon_img: '/favicon.ico', plan_price: '$420' },
                  { plan_bg_color: 'bg-dark_black/5 dark:bg-white/5', text_color: 'text-dark_black dark:text-white', descp_color: 'dark_black/60', border_color: 'border-dark_black/10 dark:border-white/10', icon_img: '/favicon.ico', plan_price: '$2900' }
                ];
                const plans = [
                  {
                    name: 'Single Course',
                    desc: 'Full access to one governance program with lifetime updates.',
                    priceUnit: '/course',
                    features: [
                      'Lifetime access & future governance updates',
                      'Accredited completion certificate',
                      'Interactive governance scenarios',
                      'Downloadable policy templates',
                      'Faculty Q&A forum access'
                    ]
                  },
                  {
                    name: 'Installment Plan',
                    desc: 'Split your course fee into 3 monthly payments (no interest).',
                    priceUnit: '/mo x3',
                    features: [
                      'Everything in Single Course',
                      '3 x interest‑free monthly payments',
                      'Payment portal & reminders',
                      'One pause / deferral window',
                      'Priority support response'
                    ]
                  },
                  {
                    name: 'Executive Bundle',
                    desc: 'Access any 3 courses + added bundle value resources.',
                    priceUnit: '/bundle',
                    features: [
                      'Any 3 governance courses',
                      '2 executive coaching sessions',
                      'Board reporting toolkit',
                      'Early module & research previews',
                      'Private cohort roundtable invites'
                    ]
                  }
                ];
                return plans.map((p, i) => {
                  const colorSrc = base[i] || fallbackColors[i];
                  const priceValue = (base[i]?.plan_price) ? base[i].plan_price : colorSrc.plan_price;
                  return (
                    <div key={p.name} className={`${colorSrc.plan_bg_color} p-6 md:p-10 rounded-2xl`}>
                      <div className='flex flex-col gap-10'>
                        <div className='flex flex-col gap-4'>
                          <p className='py-2 px-4 bg-dark_black w-fit text-white rounded-full'>{p.name}</p>
                          <p className={`text-${colorSrc.descp_color}`}>{p.desc}</p>
                          <div className='flex flex-col gap-2'>
                            <h2 className={`${colorSrc.text_color}`}>
                              {priceValue}
                              <span className={`text-base text-${colorSrc.descp_color} ml-1`}>{p.priceUnit}</span>
                            </h2>
                            <Link href='/contact' className='group text-dark_black font-medium bg-white rounded-full flex items-center gap-4 py-2 pl-5 pr-2 w-fit'>
                              <span className='group-hover:translate-x-9 transform transition-transform duration-200 ease-in-out'>
                                {p.name === 'Installment Plan' ? 'Start Plan' : p.name === 'Executive Bundle' ? 'Bundle Inquiry' : 'Enroll Now'}
                              </span>
                              <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' className='group-hover:-translate-x-36 transition-all duration-200 ease-in-out'>
                                <rect width='32' height='32' rx='16' fill='#1B1D1E' />
                                <path d='M11.832 11.3335H20.1654M20.1654 11.3335V19.6668M20.1654 11.3335L11.832 19.6668' stroke='white' strokeWidth='1.42857' strokeLinecap='round' strokeLinejoin='round' />
                              </svg>
                            </Link>
                          </div>
                        </div>
                        <div className='flex flex-col gap-4 pt-2 border-t border-dark_black/10 dark:border-white/10'>
                          <p className={`${colorSrc.text_color}`}>Features</p>
                          <ul className='flex flex-col gap-3'>
                            {p.features.map(f => (
                              <li key={f} className='flex items-start gap-3'>
                                <span className='mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#5bc6d0]/15 ring-1 ring-[#5bc6d0]/40'>
                                  <svg width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='#5bc6d0' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'><path d='M5 12.5 10 17l10-12'/></svg>
                                </span>
                                <p className={`${colorSrc.text_color} text-sm`}>{f}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                });
              })()}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscription
