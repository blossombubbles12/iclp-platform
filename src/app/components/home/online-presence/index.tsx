'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const researchHighlights = [
  {
    title: "Corporate Law Research & Publications",
    image: "/images/home/onlinePresence/research.jpg",
    description: "In-depth analysis of corporate legal frameworks and regulatory developments",
    tags: ["Research", "Publications", "Legal Analysis"]
  },
  {
    title: "Global Policy Impact & Advocacy",
    image: "/images/home/onlinePresence/policy.jpg",
    description: "Shaping international corporate governance standards and policies",
    tags: ["Policy", "Advocacy", "Global Impact"]
  },
  {
    title: "Advanced Legal Education Programs",
    image: "/images/home/onlinePresence/education.jpg",
    description: "Professional development and specialized training in corporate law",
    tags: ["Education", "Training", "Professional Development"]
  },
  {
    title: "Governance Excellence Initiative",
    image: "/images/home/onlinePresence/governance.jpg",
    description: "Promoting best practices in corporate governance and compliance",
    tags: ["Governance", "Compliance", "Best Practices"]
  }
]

function OnlinePresence() {
  return (
    <div id="research" className="bg-white dark:bg-dark_black">
      <div className="2xl:py-20 py-16">
        <div className="container">
          <div className="flex flex-col justify-center items-center gap-10 md:gap-16">
            <div className="max-w-3xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-dark_black dark:text-white mb-4">
                Advancing Knowledge in
                <span className="instrument-font italic font-normal text-purple_blue dark:text-purple ml-2">
                  Corporate Law & Governance
                </span>
              </h2>
              <p className="text-lg text-dark_black/60 dark:text-white/60">
                Our research and initiatives are shaping the future of corporate legal frameworks and governance practices globally
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
              {researchHighlights.map((item, index) => (
                <div key={index} className="group flex flex-col gap-6">
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={625}
                      height={410}
                      className="rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <Link
                      href={`/research/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6"
                    >
                      <p className="text-white text-lg font-medium">
                        {item.description}
                      </p>
                    </Link>
                  </div>

                  <div className="flex flex-col items-start gap-4">
                    <Link 
                      href={`/research/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="group-hover:text-purple_blue dark:group-hover:text-purple transition-colors duration-300"
                    >
                      <h3 className="text-2xl font-medium text-dark_black dark:text-white">
                        {item.title}
                      </h3>
                    </Link>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-dark_black/5 dark:bg-white/5 rounded-full text-sm font-medium text-dark_black/60 dark:text-white/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center">
              <Link
                href="/research"
                className="flex items-center gap-2 text-lg font-medium text-dark_black dark:text-white hover:text-purple_blue dark:hover:text-purple transition-colors duration-300"
              >
                View All Research & Publications
                <Image
                  src="/images/home/sidearrow.svg"
                  alt="arrow"
                  width={24}
                  height={24}
                  className="dark:invert"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnlinePresence
