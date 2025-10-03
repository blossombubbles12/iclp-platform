'use client'
import React, { useEffect, useState, Suspense } from 'react'
import { HeaderItem } from '../../../../types/menu'
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const OFFSET = 80 // Adjust this value based on your fixed header height

// Hook to manage the active link and apply offset
const useActiveLink = (setActiveLink: (link: string) => void) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const updateActiveLink = () => {
      const fullPath = window.location.hash
        ? `${pathname}${window.location.hash}`
        : pathname
      setActiveLink(fullPath)
    }

    const handleScrollOffset = () => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1)
        const element = document.getElementById(id)
        if (element) {
          setTimeout(() => {
            const elementPosition =
              element.getBoundingClientRect().top + window.scrollY
            window.scrollTo({
              top: elementPosition - OFFSET,
              behavior: 'smooth',
            })
          }, 0)
        }
      }
    }

    updateActiveLink()
    handleScrollOffset()

    window.addEventListener('hashchange', updateActiveLink)
    window.addEventListener('hashchange', handleScrollOffset)

    return () => {
      window.removeEventListener('hashchange', updateActiveLink)
      window.removeEventListener('hashchange', handleScrollOffset)
    }
  }, [pathname, searchParams, setActiveLink])
}

// HeaderLink component
const HeaderLinkContent: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [activeLink, setActiveLink] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  useActiveLink(setActiveLink)

  return (
    <li className="relative group">
      {item.children ? (
        <div>
          <button
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className={`inline-flex items-center gap-1 px-4 py-2 font-medium hover:text-black dark:hover:text-black hover:bg-white hover:rounded-3xl hover:shadow-header_shadow
                      ${
                        activeLink.startsWith(item.href)
                          ? 'bg-white text-black rounded-[90rem] shadow-header_shadow'
                          : 'text-dark_black/60 dark:text-white'
                      }`}>
            {item.label}
            <svg
              className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <div className="py-1">
                  {item.children.map((child, index) => (
                    <Link
                      key={index}
                      href={child.href}
                      className={`block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700
                                ${
                                  activeLink === child.href
                                    ? 'text-primary bg-gray-50 dark:bg-gray-700'
                                    : 'text-dark_black/60 dark:text-white'
                                }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <Link
          href={item.href}
          className={`inline-flex items-center gap-1 px-4 py-2 font-medium hover:text-black dark:hover:text-black hover:bg-white hover:rounded-3xl hover:shadow-header_shadow 
                    ${
                      activeLink === item.href
                        ? 'bg-white text-black rounded-[90rem] shadow-header_shadow'
                        : 'text-dark_black/60 dark:text-white'
                    }`}>
          {item.label}
        </Link>
      )}
    </li>
  )
}

// Wrap in Suspense
const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => (
  <Suspense fallback={null}>
    <HeaderLinkContent item={item} />
  </Suspense>
)

export default HeaderLink
