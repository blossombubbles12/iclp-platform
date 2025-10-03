import type { Metadata } from 'next';
import AboutHero from '@/app/components/about/AboutHero';
import StoryTimeline from '@/app/components/about/StoryTimeline';
import MissionVisionValues from '@/app/components/about/MissionVisionValues';
import LeadershipTeam from '@/app/components/about/LeadershipTeam';
import GlobalImpact from '@/app/components/about/GlobalImpact';
import AboutCTA from '@/app/components/about/AboutCTA';

export const metadata: Metadata = {
  title: 'About Us | Institute of Corporate Law, Policy, and Governance Global',
  description: 'We offer courses and executive programs in corporate law, policy, and governance. Learn about our mission, story, leadership, and global impact.'
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

