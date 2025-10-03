import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Institute of Corporate Law, Policy, and Governance Global',
  description: 'Advancing knowledge and expertise in corporate law, policy, and governance through world-class education and research.',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
