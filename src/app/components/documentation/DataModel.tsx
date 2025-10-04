export const DataModel = () => {
  return (
    <section id="data-model" className="md:scroll-m-[130px] scroll-m-28 pb-10">
      <h2 className="text-black text-2xl font-semibold mt-8 dark:text-white">Data Model</h2>
      <div className="p-6 rounded-md border mt-6 border-border dark:border-dark_border">
        <p className="text-base font-medium text-midnight_text dark:text-grey">Static data for partners, programs, and case studies is available under <span className="dark:text-white">src/app/data</span>.</p>
        <ul className="list-disc ps-6 mt-3 text-base font-medium text-midnight_text dark:text-grey">
          <li><span className="dark:text-white">programs.ts</span>: course listings and metadata.</li>
          <li><span className="dark:text-white">partners.ts</span>: institutional partners for brand presence.</li>
          <li><span className="dark:text-white">caseStudies.ts</span>: case studies index data.</li>
        </ul>
        <p className="text-base font-medium text-midnight_text dark:text-grey mt-3">For dynamic content, consider a headless CMS or database layer and align types in <span className="dark:text-white">src/app/types/</span>.</p>
      </div>
    </section>
  );
}