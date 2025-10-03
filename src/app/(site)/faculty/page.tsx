import type { Metadata } from 'next';
import FacultyClient from './components/FacultyClient';

export const metadata: Metadata = {
  title: 'Faculty & Research | Institute of Corporate Law, Policy, and Governance Global',
  description: 'Explore our multidisciplinary faculty advancing scholarship and applied governance innovation.'
};

export default function FacultyPage(){
  return <FacultyClient />;
}
