import type { Metadata } from 'next'
import EnrollClient from './components/EnrollClient'

export const metadata: Metadata = {
  title: 'Enroll | Institute of Corporate Law, Policy, and Governance Global',
  description: 'Complete your enrollment: select plan, provide participant details, and confirm governance program access.'
}

export default function EnrollPage(){
  return <EnrollClient />
}
