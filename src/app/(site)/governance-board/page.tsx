import type { Metadata } from 'next';
import GovernanceBoardClient from './components/GovernanceBoardClient';

export const metadata: Metadata = {
  title: 'Governance Board | Institute of Corporate Law, Policy, and Governance Global',
  description: 'Meet the governance board providing fiduciary oversight, strategic guidance, ethical stewardship, and accountability for the Institute.'
};

export default function GovernanceBoardPage(){
  return <GovernanceBoardClient />
}

