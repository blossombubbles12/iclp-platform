export const CoursesGuide = () => {
  return (
    <section id="courses" className="md:scroll-m-[130px] scroll-m-28 pb-10">
      <h2 className="text-black text-2xl font-semibold mt-8 dark:text-white">Courses & Programs</h2>
      <div className="p-6 rounded-md border mt-6 border-border dark:border-dark_border">
        <h6 className="dark:text-white text-lg font-medium">Structure</h6>
        <p className="text-base font-medium text-midnight_text dark:text-grey">Courses are listed on the homepage in the Courses Preview and in the dedicated page at <span className="dark:text-white">/courses</span>. Each course card links to a detailed page via slug routing.</p>
        <ul className="list-disc ps-6 mt-3 text-base font-medium text-midnight_text dark:text-grey">
          <li>Route: <span className="dark:text-white">src/app/courses/[slug]/</span></li>
          <li>Data: <span className="dark:text-white">src/app/data/programs.ts</span> (labels, descriptions, categories)</li>
          <li>CTAs: "Explore Courses" or "Details →" direct to <span className="dark:text-white">/courses</span>.</li>
        </ul>
      </div>
      <div className="p-6 rounded-md border mt-6 border-border dark:border-dark_border">
        <h6 className="dark:text-white text-lg font-medium">Creating a new course</h6>
        <ol className="list-decimal ps-6 mt-3 text-base font-medium text-midnight_text dark:text-grey">
          <li>Add course metadata in <span className="dark:text-white">src/app/data/programs.ts</span>.</li>
          <li>Create a new page under <span className="dark:text-white">src/app/courses/[slug]/</span> using the slug.</li>
          <li>Ensure the homepage preview reflects category and title consistency.</li>
        </ol>
      </div>
    </section>
  );
}