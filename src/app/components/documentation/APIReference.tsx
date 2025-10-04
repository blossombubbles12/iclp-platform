export const APIReference = () => {
  return (
    <section id="api" className="md:scroll-m-[130px] scroll-m-28 pb-10">
      <h2 className="text-black text-2xl font-semibold mt-8 dark:text-white">API Reference</h2>
      <div className="p-6 rounded-md border mt-6 border-border dark:border-dark_border">
        <p className="text-base font-medium text-midnight_text dark:text-grey">Local API routes power data and submissions. Key endpoints:</p>
        <ul className="list-disc ps-6 mt-3 text-base font-medium text-midnight_text dark:text-grey">
          <li><span className="dark:text-white">/api/page-data</span>: serves structured page content.</li>
          <li><span className="dark:text-white">/api/footer-data</span>: returns footer links/config.</li>
          <li><span className="dark:text-white">/api/contact</span>: contact form submission (placeholder; integrate provider).</li>
        </ul>
        <p className="text-base font-medium text-midnight_text dark:text-grey mt-3">Implement input validation and add an email provider or CRM integration for production.</p>
      </div>
    </section>
  );
}