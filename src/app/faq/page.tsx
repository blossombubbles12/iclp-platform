import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'FAQ | Institute of Corporate Law, Policy, and Governance Global',
  description: 'Frequently asked questions about our programs, research, accreditation, and governance initiatives.'
}

// Static fallback FAQ content (the home page already fetches dynamic FAQ for a section)
const faqs: { question: string; answer: string }[] = [
  {
    question: 'What academic programs do you offer?',
    answer: 'We provide specialized executive education, professional certificates, workshops, and research fellowships in corporate law, policy, and governance.'
  },
  {
    question: 'Are your programs internationally accredited?',
    answer: 'Yes. Our institute partners with globally recognized academic and professional bodies to ensure relevance and quality.'
  },
  {
    question: 'Can I access research publications?',
    answer: 'Selected policy briefs and research summaries are publicly available. Full access is provided to enrolled participants and partners.'
  },
  {
    question: 'Do you collaborate with government or regulatory agencies?',
    answer: 'We regularly contribute to policy consultations, advisory panels, and governance modernization initiatives internationally.'
  },
  {
    question: 'How do I apply for a program?',
    answer: 'Navigate to the Programs or Subscription section and submit an inquiry form. A program advisor will follow up with next steps.'
  }
]

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-dark_black">
      <section className="pt-40 pb-20">
        <div className="container max-w-4xl mx-auto px-4 flex flex-col gap-12">
          <header className="text-center flex flex-col gap-4">
            <h1 className="text-3xl md:text-5xl font-bold text-dark_black dark:text-white">Frequently Asked Questions</h1>
            <p className="text-dark_black/60 dark:text-white/60 max-w-2xl mx-auto">Answers to common questions about our institute, governance initiatives, research collaborations, and academic pathways.</p>
          </header>
          <div className="flex flex-col divide-y divide-dark_black/10 dark:divide-white/10 rounded-2xl bg-dark_black/5 dark:bg-white/5 backdrop-blur-sm">
            {faqs.map((faq, i) => (
              <details key={i} className="group p-6 open:bg-white open:dark:bg-white/5 transition-colors">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-6">
                  <span className="text-lg font-medium text-dark_black dark:text-white group-open:text-purple_blue dark:group-open:text-purple max-w-[85%]">
                    {faq.question}
                  </span>
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-dark_black/10 dark:bg-white/10 text-dark_black dark:text-white transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-dark_black/60 dark:text-white/60 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
          <div className="text-center">
            <p className="text-sm text-dark_black/50 dark:text-white/50">
              Still have a question? <a href="/contact" className="underline decoration-dotted hover:text-purple_blue dark:hover:text-purple">Contact our team</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
