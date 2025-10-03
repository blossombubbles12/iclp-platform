import type { Metadata } from 'next'
import { Suspense } from 'react'
import EnrollClient from './components/EnrollClient'

export const metadata: Metadata = {
  title: 'Enroll | Institute of Corporate Law, Policy, and Governance Global',
  description: 'Complete your enrollment: select plan, provide participant details, and confirm governance program access.'
}

export const dynamic = 'force-dynamic';

export default function EnrollPage(){
  return (
    <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center text-sm text-dark_black/60 dark:text-white/60">Loading enrollment interface...</div>}>
      <EnrollClient />
    </Suspense>
  )
}
