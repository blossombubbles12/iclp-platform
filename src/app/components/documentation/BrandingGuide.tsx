export const BrandingGuide = () => {
  return (
    <section id="branding" className="md:scroll-m-[130px] scroll-m-28 pb-10">
      <h2 className="text-black text-2xl font-semibold mt-8 dark:text-white">Branding & Theme</h2>
      <div className="p-6 rounded-md border mt-6 border-border dark:border-dark_border">
        <h6 className="dark:text-white text-lg font-medium">Theme System</h6>
        <p className="text-base font-medium text-midnight_text dark:text-grey">We use next-themes with <code>attribute='class'</code> and storage key <code>iclp_theme</code>. The Theme Toggle and Onboarding overlay ensure reliable light/dark selection.</p>
        <ul className="list-disc ps-6 mt-3 text-base font-medium text-midnight_text dark:text-grey">
          <li>Provider: <span className="dark:text-white">src/app/layout.tsx</span> configured with ThemeProvider.</li>
          <li>Toggle: <span className="dark:text-white">src/app/components/layout/header/ThemeToggle.tsx</span></li>
          <li>Onboarding: <span className="dark:text-white">src/app/components/layout/ThemeOnboarding.tsx</span></li>
        </ul>
      </div>
      <div className="p-6 rounded-md border mt-6 border-border dark:border-dark_border">
        <h6 className="dark:text-white text-lg font-medium">Brand Assets & UI</h6>
        <p className="text-base font-medium text-midnight_text dark:text-grey">Logos and images live under <span className="dark:text-white">/public/logo</span> and <span className="dark:text-white">/public/images</span>. UI uses Tailwind with custom gradients and utilities (e.g., ice-cta-bg) for consistent CTAs and hero sections.</p>
      </div>
    </section>
  );
}