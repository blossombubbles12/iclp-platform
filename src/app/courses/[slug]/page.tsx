import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { programs } from '../../data/programs';
import CourseDetailsClient from './CourseDetailsClient';

// Support Next.js 15 PageProps where params may be delivered as a Promise
type ResolvableParams = { slug: string } | Promise<{ slug: string }>;

async function resolveParams(params: ResolvableParams){
  return await Promise.resolve(params);
}

export async function generateMetadata({ params }: { params: ResolvableParams }): Promise<Metadata> {
  const { slug } = await resolveParams(params);
  const program = programs.find(p => p.slug === slug);
  if(!program) return { title: 'Course Not Found | Institute' };
  return {
    title: `${program.title} | Course Details | Institute of Corporate Law, Policy, and Governance Global`,
    description: program.description
  };
}

export default async function CoursePage({ params }: { params: ResolvableParams }){
  const { slug } = await resolveParams(params);
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
