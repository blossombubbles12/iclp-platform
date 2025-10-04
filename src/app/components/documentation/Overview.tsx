export const Overview = () => {
  return (
    <section id="overview" className="md:scroll-m-[130px] scroll-m-28 pb-10">
      <h2 className="text-black text-2xl font-semibold mt-4 mb-6 dark:text-white">Overview</h2>
      <div className="p-6 rounded-md border border-border dark:border-dark_border">
        <p className="text-base font-medium text-midnight_text dark:text-grey">
          Welcome to the ICLP Platform documentation. This guide covers how we present training and programs in Corporate Law, Policy, and Governance Global, including course structure, enrollment flow, branding and theme, navigation, and APIs.
        </p>
        <p className="text-base font-medium text-midnight_text dark:text-grey mt-3">
          The platform is built with Next.js App Router, React, Tailwind CSS, TypeScript, Framer Motion (interactions), and next-themes for light/dark modes.
        </p>
        <ul className="list-disc ps-6 mt-4 text-base font-medium text-midnight_text dark:text-grey">
          <li>Courses and Programs presented on the homepage and at <span className="dark:text-white">/courses</span>.</li>
          <li>Legal & Policy pages: Ethics, Compliance, Privacy Policy, Terms & Conditions.</li>
          <li>Case Studies with dynamic routes and cinematic narrative.
          </li>
          <li>Brand-consistent header/footer and mobile navigation.</li>
        </ul>
      </div>
    </section>
  );
}