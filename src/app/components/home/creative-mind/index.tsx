'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const facultyMembers = [
  {
    name: "Prof. Sarah Mitchell",
    position: "Director of Corporate Law Research",
    image: "/images/home/avatar_1.jpg",
    expertise: "International Corporate Law",
    socialLinks: {
      linkedin: "https://linkedin.com/in/sarah-mitchell",
      twitter: "https://twitter.com/prof_mitchell",
      scholar: "https://scholar.google.com/citations?user=abc123"
    }
  },
  {
    name: "Dr. James Chen",
    position: "Head of Policy Studies",
    image: "/images/home/avatar_2.jpg",
    expertise: "Corporate Governance",
    socialLinks: {
      linkedin: "https://linkedin.com/in/james-chen",
      twitter: "https://twitter.com/dr_chen",
      scholar: "https://scholar.google.com/citations?user=def456"
    }
  },
  {
    name: "Prof. Emily Rodriguez",
    position: "Director of Legal Education",
    image: "/images/home/avatar_3.jpg",
    expertise: "Comparative Corporate Law",
    socialLinks: {
      linkedin: "https://linkedin.com/in/emily-rodriguez",
      twitter: "https://twitter.com/prof_rodriguez",
      scholar: "https://scholar.google.com/citations?user=ghi789"
    }
  },
  {
    name: "Dr. Michael Thompson",
    position: "Senior Research Fellow",
    image: "/images/home/avatar_4.jpg",
    expertise: "Corporate Compliance",
    socialLinks: {
      linkedin: "https://linkedin.com/in/michael-thompson",
      twitter: "https://twitter.com/dr_thompson",
      scholar: "https://scholar.google.com/citations?user=jkl012"
    }
  }
]

function FacultyMember({ member }: { member: typeof facultyMembers[0] }) {
  return (
    <div className="group relative">
      <div className="relative overflow-hidden rounded-2xl">
        <Image
          src={member.image}
          alt={member.name}
          width={300}
          height={400}
          className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
        <p className="text-white/80 mb-2">{member.position}</p>
        <p className="text-white/60 text-sm mb-4">{member.expertise}</p>
        
        <div className="flex gap-4">
          {Object.entries(member.socialLinks).map(([platform, url]) => (
            <Link 
              key={platform}
              href={url}
              className="text-white/60 hover:text-white transition-colors duration-200"
              target="_blank"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                {platform === 'linkedin' && (
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                )}
                {platform === 'twitter' && (
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                )}
                {platform === 'scholar' && (
                  <path d="M12 24a7 7 0 0 1-5.468-2.617A9.132 9.132 0 0 1 4.925 17L5 16.5a1 1 0 0 1 1.064-.939c.402.057.81.086 1.22.086 1.871 0 3.636-.744 4.899-2.035A7.291 7.291 0 0 1 12 10c1.89 0 3.725.76 5.032 2.088C18.354 13.426 19 15.192 19 17c0 1.682-.688 3.295-1.906 4.474A6.583 6.583 0 0 1 12 24z"/>
                )}
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

function CreativeMind() {
  return (
    <section id='faculty' className="bg-gray-50 dark:bg-gray-900">
      <div className='2xl:py-20 py-16'>
        <div className='container'>
          <div className='flex flex-col justify-center items-center gap-10 md:gap-16'>
            <motion.div 
              className='max-w-3xl text-center'
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark_black dark:text-white mb-4">
                Meet Our Distinguished
                <span className='instrument-font italic font-normal text-purple_blue dark:text-purple ml-2'>
                  Faculty
                </span>
              </h2>
              <p className="text-lg text-dark_black/60 dark:text-white/60">
                Leading experts in corporate law, policy, and governance shaping the future of legal education and research
              </p>
            </motion.div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {facultyMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                >
                  <FacultyMember member={member} />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Link
                href="/faculty"
                className="inline-flex items-center gap-2 text-purple_blue dark:text-purple hover:gap-4 transition-all duration-300"
              >
                <span className="text-lg font-medium">View All Faculty Members</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreativeMind
