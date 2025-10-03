import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { programs } from '../../data/programs';
import CourseDetailsClient from './CourseDetailsClient';

interface Props { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const program = programs.find(p => p.slug === params.slug);
  if(!program) return { title: 'Course Not Found | Institute' };
  return {
    title: `${program.title} | Course Details | Institute of Corporate Law, Policy, and Governance Global`,
    description: program.description
  };
}

export default function CoursePage({ params }: Props){
  const program = programs.find(p => p.slug === params.slug);
  if(!program) return notFound();
  // Attach placeholder image if missing
  const imagePool = [
    '/images/home/creative/creative_img_1.png',
    '/images/home/creative/creative_img_2.png',
    '/images/home/creative/creative_img_3.png',
    '/images/home/creative/creative_img_4.png'
  ];
  const programWithImage = { ...program, image: program.image || imagePool[program.id % imagePool.length] };
  return <CourseDetailsClient program={programWithImage} />;
}
