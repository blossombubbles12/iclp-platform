import type { Metadata } from 'next';
import { caseStudies } from '@/app/data/caseStudies';
import CaseStudyClient from './CaseStudyClient';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Case Study | Institute of Corporate Law, Policy, and Governance Global',
  description: 'Immersive, cinematic case studies that tell a compelling story and drive action.'
};

export default async function CaseStudyPage(props: { params: Promise<{ slug: string }>}){
  const { slug } = await props.params;
  const cs = caseStudies.find(c => c.slug === slug);
  if(!cs) return notFound();
  return <CaseStudyClient cs={cs} />
}
