import { Metadata } from "next";
import HeroSection from "./components/home/hero";
import Brand from "./components/home/brand";
import WebResult from "./components/home/web-result";
import Innovation from "./components/home/innovation";
import OnlinePresence from "./components/home/online-presence";
import CreativeMind from "./components/home/creative-mind";
import CustomerStories from "./components/home/customer-stories";
import Subscription from "./components/home/subscription";
import Faq from "./components/home/faq";
import Achievements from "./components/home/achievements";
import Solutions from "./components/home/solution";
import CoursesPreview from "./components/home/courses-preview";

// Temporary debug helper to safely render components and identify invalid element type
function safeRender(label: string, Comp: any) {
  const t = typeof Comp;
  if (t !== 'function') {
    if (typeof window === 'undefined') {
      // Server log
      // eslint-disable-next-line no-console
      console.error(`[component-debug] ${label} is not a function. Type:`, t, 'Value:', Comp);
    } else {
      // eslint-disable-next-line no-console
      console.error(`[component-debug] ${label} invalid on client. Type:`, t, 'Value:', Comp);
    }
    return null;
  }
  return <Comp />;
}

export const metadata: Metadata = {
    title: "Institute of Corporate Law, Policy, and Governance Global",
    description: "Advancing knowledge and expertise in corporate law, policy, and governance through world-class education and research."
};


export default function Home() {
  return (
    <main>
      {/* DEBUG: component type logging (server-side) */}
      {typeof window === 'undefined' ? (console.log('[component-types]', {
        HeroSection: typeof HeroSection,
        Brand: typeof Brand,
        WebResult: typeof WebResult,
        Innovation: typeof Innovation,
        OnlinePresence: typeof OnlinePresence,
        CreativeMind: typeof CreativeMind,
        CustomerStories: typeof CustomerStories,
        Subscription: typeof Subscription,
        Faq: typeof Faq,
        Achievements: typeof Achievements,
        Solutions: typeof Solutions,
      }), null) : null}

      {/* ---------------------Hero section Starts-----------------  */}
      {safeRender('HeroSection', HeroSection)}
  {/* ---------------------Courses Preview section (moved up for visibility) -----------------  */}
  {safeRender('CoursesPreview', CoursesPreview)}
      {/* ---------------------Brand section -----------------  */}
      {safeRender('Brand', Brand)}
      {/* ---------------------Web result section -----------------  */}
      {safeRender('WebResult', WebResult)}
      {/* ---------------------Innovation section -----------------  */}
      {safeRender('Innovation', Innovation)}
      {/* ---------------------Online presence (Research) section -----------------  */}
      {safeRender('OnlinePresence', OnlinePresence)}
      {/* ---------------------Creative mind (Faculty) section -----------------  */}
      {safeRender('CreativeMind', CreativeMind)}
      {/* ---------------------Customer Stories / Testimonials section -----------------  */}
      {safeRender('CustomerStories', CustomerStories)}
      {/* ---------------------Subscription / Programs section -----------------  */}
      {safeRender('Subscription', Subscription)}
      {/* ---------------------FAQ section -----------------  */}
      {safeRender('Faq', Faq)}
      {/* ---------------------Achievements section -----------------  */}
      {safeRender('Achievements', Achievements)}
      {/* ---------------------Solutions section -----------------  */}
      {safeRender('Solutions', Solutions)}
    </main>
  )
}
