'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import { useState } from 'react'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'Programs & Enrollment',
    budget: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loader, setLoader] = useState(false)
  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const reset = () => {
    formData.name = ''
    formData.email = ''
    formData.interest = 'design & branding'
    formData.budget = ''
    formData.message = ''
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoader(true)

    // TODO: Replace with your API route or provider; kept as placeholder for demo.
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        interest: formData.interest,
        budget: formData.budget,
        message: formData.message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setSubmitted(true)
        reset()
      })
      .catch((error) => {
        console.log(error.message)
      })
      .finally(() => {
        setLoader(false)
      })
  }

  return (
    <section>
      <div className='relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10 before:rounded-full before:top-24 before:blur-3xl  before:-z-10'>
        <div className='container relative z-10'>
          <div className='flex flex-col gap-10 md:gap-20'>
            <div className='relative flex flex-col text-center items-center'>
              <h2 className='font-medium w-full max-w-32'>
                Get in <span className='instrument-font italic font-normal dark:text-white/70'>touch</span>
              </h2>
              <p className='mt-3 text-dark_black/60 dark:text-white/60 max-w-xl'>We’ll route your request to the right team. For enrollment and program advice, partnerships, or research collaboration—send us a note.</p>
            </div>
            {submitted ? (
              <div className='flex flex-col items-center gap-5 text-center max-w-xl mx-auto p-6 rounded-lg bg-green/10 dark:bg-white/5 border border-green/30'>
                <div className='flex'>
                  <Icon
                    icon='ix:success-filled'
                    width='30'
                    height='30'
                    style={{ color: '#79D45E' }}
                  />
                  <h5 className='text-green dark:text-green ml-2'>Thanks—your message was sent. We’ll be in touch shortly.</h5>
                </div>

                <Link
                  href='/'
                  className='group w-fit text-black font-medium bg-transparent dark:bg-white/20 dark:hover:bg-white rounded-full flex items-center gap-4 py-2 pl-5 pr-2 hover:bg-transparent border border-dark_black'>
                  <span className='group-hover:translate-x-9 group-hover:dark:text-dark_black dark:text-white transform transition-transform duration-200 ease-in-out'>
                    Back to home
                  </span>
                  <svg
                    width='32'
                    height='32'
                    viewBox='0 0 32 32'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='group-hover:-translate-x-[125px] transition-all duration-200 ease-in-out group-hover:rotate-45'>
                    <rect
                      width='32'
                      height='32'
                      rx='16'
                      fill='white'
                      className=' transition-colors duration-200 ease-in-out fill-black'
                    />
                    <path
                      d='M11.832 11.3334H20.1654M20.1654 11.3334V19.6668M20.1654 11.3334L11.832 19.6668'
                      stroke='#1B1D1E'
                      strokeWidth='1.42857'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className=' transition-colors duration-200 ease-in-out stroke-white'
                    />
                  </svg>
                </Link>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className='flex flex-col bg-white dark:bg-dark_black rounded-2xl p-8 gap-8 border border-dark_black/10 dark:border-white/10'>
                <div className='flex flex-col md:flex md:flex-row gap-6'>
                  <div className='w-full'>
                    <label htmlFor='name' className='text-sm font-medium text-dark_black/80 dark:text-white/80'>Full Name</label>
                    <input
                      className='w-full mt-2 rounded-full border px-5 py-3 outline-hidden transition border-dark_black/20 dark:border-white/20 focus:border-purple_blue/50 dark:focus:border-purple_blue/50 dark:bg-black/40'
                      id='name'
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      placeholder='Enter your name'
                    />
                  </div>
                  <div className='w-full'>
                    <label htmlFor='email' className='text-sm font-medium text-dark_black/80 dark:text-white/80'>Email</label>
                    <input
                      className='w-full mt-2 rounded-full border px-5 py-3 outline-hidden transition border-dark_black/20 dark:border-white/20 focus:border-purple_blue/50 dark:focus:border-purple_blue/50 dark:bg-black/40'
                      id='email'
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      placeholder='Enter your email'
                    />
                  </div>
                </div>
                <div className='flex flex-col md:flex md:flex-row gap-6'>
                  <div className='w-full'>
                    <label htmlFor='interest' className='text-sm font-medium text-dark_black/80 dark:text-white/80'>Topic</label>
                    <select
                      className='w-full mt-2 text-base px-4 rounded-full py-2.5 border transition-all duration-500 border-dark_black/20 dark:border-white/20 focus:outline-0 focus:border-purple_blue/50 dark:focus:border-purple_blue/50 dark:bg-black/40'
                      name='interest'
                      id='interest'
                      value={formData.interest}
                      onChange={handleChange}>
                      <option value='Programs & Enrollment'>Programs & Enrollment</option>
                      <option value='Partnerships'>Partnerships</option>
                      <option value='Research & Collaboration'>Research & Collaboration</option>
                      <option value='Media & Speaking'>Media & Speaking</option>
                    </select>
                  </div>
                  <div className='w-full'>
                    <label htmlFor='budget' className='text-sm font-medium text-dark_black/80 dark:text-white/80'>Budget (optional)</label>
                    <select
                      className='w-full mt-2 text-base px-4 rounded-full py-2.5 border transition-all duration-500 dark:text-white border-solid border-dark_black/20 dark:border-white/20 focus:outline-0 focus:border-purple_blue/50 dark:focus:border-purple_blue/50 dark:bg-black/40'
                      name='budget'
                      id='budget'
                      value={formData.budget}
                      onChange={handleChange}>
                      <option value=''>Select your budget</option>
                      <option value='$5,000 – $15,000'>$5,000 – $15,000</option>
                      <option value='$15,000 – $50,000'>$15,000 – $50,000</option>
                      <option value='$50,000+'>$50,000+</option>
                    </select>
                  </div>
                </div>
                <div className='w-full'>
                  <label htmlFor='message' className='text-sm font-medium text-dark_black/80 dark:text-white/80'>Message</label>
                  <textarea
                    className='w-full mt-2 rounded-3xl border px-5 py-3 outline-hidden transition border-dark_black/20 dark:border-white/20 focus:border-purple_blue/50 dark:focus:border-purple_blue/50 dark:bg-black/40'
                    name='message'
                    id='message'
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='Let tell us know your project about'
                    rows={4}
                  />
                </div>
                <div>
                  {!loader ? (
                    <button
                      type='submit'
                      className='group w-fit text-white dark:text-dark_black font-medium bg-dark_black dark:bg-white rounded-full flex items-center gap-4 py-2 pl-5 pr-2 transition-all duration-200 ease-in-out hover:bg-transparent border hover:text-dark_black border-dark_black'>
                      <span className='transform transition-transform duration-200 ease-in-out group-hover:translate-x-10'>
                        Send Message
                      </span>
                      <svg
                        width='32'
                        height='32'
                        viewBox='0 0 32 32'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='transform transition-transform duration-200 ease-in-out group-hover:-translate-x-36 group-hover:rotate-45'>
                        <rect
                          width='32'
                          height='32'
                          rx='16'
                          fill='white'
                          className='fill-white dark:fill-black transition-colors duration-200 ease-in-out group-hover:fill-black '
                        />
                        <path
                          d='M11.832 11.3334H20.1654M20.1654 11.3334V19.6668M20.1654 11.3334L11.832 19.6668'
                          stroke='#1B1D1E'
                          strokeWidth='1.42857'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          className='stroke-dark_black dark:stroke-white transition-colors duration-200 ease-in-out group-hover:stroke-white'
                        />
                      </svg>
                    </button>
                  ) : (
                    <button className='bg-grey item-center flex gap-2 py-3 px-7 rounded-sm'>
                      <div
                        className='animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500'
                        role='status'
                        aria-label='loading'>
                        <span className='sr-only'>Loading...</span>
                      </div>{' '}
                      Submitting
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
