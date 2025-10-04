export const EnrollmentGuide = () => {
  return (
    <section id="enrollment" className="md:scroll-m-[130px] scroll-m-28 pb-10">
      <h2 className="text-black text-2xl font-semibold mt-8 dark:text-white">Enrollment Flow</h2>
      <div className="p-6 rounded-md border mt-6 border-border dark:border-dark_border">
        <p className="text-base font-medium text-midnight_text dark:text-grey">The enrollment experience is a multi-step form located at <span className="dark:text-white">/enroll</span>. It collects participant details, selects programs, and confirms submission.</p>
        <ul className="list-disc ps-6 mt-3 text-base font-medium text-midnight_text dark:text-grey">
          <li>Route: <span className="dark:text-white">src/app/enroll/page.tsx</span> and components in <span className="dark:text-white">src/app/enroll/components/</span></li>
          <li>Validation: Client-side checks and user feedback on required fields.</li>
          <li>Next step: Integrate server-side API to process enrollment and send confirmations.</li>
        </ul>
      </div>
    </section>
  );
}