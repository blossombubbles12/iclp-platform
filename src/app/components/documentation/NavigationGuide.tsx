export const NavigationGuide = () => {
  return (
    <section id="navigation" className="md:scroll-m-[130px] scroll-m-28 pb-10">
      <h2 className="text-black text-2xl font-semibold mt-8 dark:text-white">Navigation</h2>
      <div className="p-6 rounded-md border mt-6 border-border dark:border-dark_border">
        <p className="text-base font-medium text-midnight_text dark:text-grey">Header and footer menus are aligned to include Case Studies, Help Center, Accessibility, Partnerships, and legal pages. Mobile navigation supports collapsible submenus.</p>
        <ul className="list-disc ps-6 mt-3 text-base font-medium text-midnight_text dark:text-grey">
          <li>Header: <span className="dark:text-white">src/app/components/layout/header/</span></li>
          <li>Footer: <span className="dark:text-white">src/app/components/layout/footer/Footer.tsx</span></li>
          <li>Mobile: <span className="dark:text-white">Navigation/MobileHeader.tsx</span></li>
        </ul>
      </div>
    </section>
  );
}