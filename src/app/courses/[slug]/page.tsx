import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { programs } from '../../data/programs';
import CourseDetailsClient from './CourseDetailsClient';

// Align with Next.js 15 constraint where PageProps.params is a Promise
type ParamsPromise = Promise<{ slug: string }>; 

export async function generateMetadata({ params }: { params: ParamsPromise }): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find(p => p.slug === slug);
  if(!program) return { title: 'Course Not Found | Institute' };
  return {
    title: `${program.title} | Course Details | Institute of Corporate Law, Policy, and Governance Global`,
    description: program.description
  };
}

export default async function CoursePage({ params }: { params: ParamsPromise }) {
  const { slug } = await params;
  const program = programs.find(p => p.slug === slug);
  if(!program) return notFound();
  const imagePool = [
    '/images/home/creative/creative_img_1.png',
    '/images/home/creative/creative_img_2.png',
    '/images/home/creative/creative_img_3.png',
    '/images/home/creative/creative_img_4.png'
  ];
  const programWithImage = { ...program, image: program.image || imagePool[program.id % imagePool.length] };
  return <CourseDetailsClient program={programWithImage} />;
}
