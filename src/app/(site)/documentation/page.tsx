import { Documentation } from '@/app/components/documentation/Documentation'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Documentation | ICLP Global',
  description:
    'Technical and platform documentation for the Institute of Corporate Law, Policy & Governance Global—architecture, configuration, and onboarding.',
}

export default function Page() {
  return (
    <>
      <Documentation />
    </>
  )
}
