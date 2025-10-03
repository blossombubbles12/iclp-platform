import type { Metadata } from 'next';
import AboutHero from '@/app/components/about/AboutHero';
import StoryTimeline from '@/app/components/about/StoryTimeline';
import MissionVisionValues from '@/app/components/about/MissionVisionValues';
import LeadershipTeam from '@/app/components/about/LeadershipTeam';
import GlobalImpact from '@/app/components/about/GlobalImpact';
import AboutCTA from '@/app/components/about/AboutCTA';

export const metadata: Metadata = {
  title: 'About Us | Institute of Corporate Law, Policy, and Governance Global',
  description: 'Mission, vision, story, leadership, and global governance impact of the Institute of Corporate Law, Policy, and Governance Global.'
};

export default function AboutPage(){
  return (
    <main className="flex flex-col bg-white dark:bg-gray-950">
      <AboutHero />
      <StoryTimeline />
      <MissionVisionValues />
      <LeadershipTeam />
      <GlobalImpact />
      <AboutCTA />
    </main>
  )
}

