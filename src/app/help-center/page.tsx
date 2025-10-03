import type { Metadata } from 'next'
import HelpCenterClient from './components'

export const metadata: Metadata = {
  title: 'Help Center | Institute of Corporate Law, Policy, and Governance Global',
  description: 'Find answers to enrollment, governance learning, billing, access, and certification questions.'
}

export default function HelpCenterPage(){
  return <HelpCenterClient />
}
