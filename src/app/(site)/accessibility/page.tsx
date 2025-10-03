import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Accessibility | ICLP Institute',
  description: 'Accessibility commitment and conformance statement for the Institute of Corporate Law, Policy, and Governance Global.'
}

export default function AccessibilityPage() {
  const lastUpdated = '2025-10-03'
  return (
    <section>
      <div className="relative w-full pt-44 2xl:pb-24 pb-12 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10">
        <div className="container relative z-10 max-w-4xl">
          <div className="flex flex-col gap-8">
            <header className="flex flex-col gap-4 text-center">
              <h1 className="md:text-6xl text-4xl font-medium">Accessibility</h1>
              <p className="text-dark_black/60 dark:text-white/60 text-base md:text-lg">Our commitment to an inclusive, perceivable, operable, understandable, and robust learning & research experience for all users.</p>
              <p className="text-xs uppercase tracking-wide text-dark_black/40 dark:text-white/40">Last updated: {lastUpdated}</p>
            </header>
            <div className="bg-white dark:bg-dark_black p-8 md:p-10 rounded-2xl shadow-sm border border-dark_black/10 dark:border-white/10 flex flex-col gap-10">
              <section className="flex flex-col gap-3">
                <h2 className="text-2xl font-semibold tracking-tight">1. Statement of Commitment</h2>
                <p className="text-sm leading-relaxed text-dark_black/70 dark:text-white/70">ICLP Institute strives to ensure that our public website, learning interfaces, and governance resources are accessible to the widest possible audience, regardless of technology, ability, or assistive approach. We align our roadmap to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA and monitor emerging WCAG 2.2 success criteria.</p>
              </section>
              <section className="flex flex-col gap-3">
                <h2 className="text-2xl font-semibold tracking-tight">2. Standards & Methods</h2>
                <ul className="list-disc ml-5 flex flex-col gap-2 text-sm text-dark_black/70 dark:text-white/70">
                  <li>Primary conformance target: WCAG 2.1 Level AA</li>
                  <li>Design tokens ensure color contrast ≥ 4.5:1 for text (with exceptions for large type)</li>
                  <li>Semantic HTML structure (landmarks, heading hierarchy, list semantics, form labeling)</li>
                  <li>Keyboard navigability and logical tab sequencing</li>
                  <li>Reduced motion preference honored for major animated sequences (where feasible)</li>
                  <li>ARIA applied minimally, only when native semantics are insufficient</li>
                </ul>
              </section>
              <section className="flex flex-col gap-3">
                <h2 className="text-2xl font-semibold tracking-tight">3. Current Accessibility Features</h2>
                <ul className="list-disc ml-5 flex flex-col gap-2 text-sm text-dark_black/70 dark:text-white/70">
                  <li>Logical heading ordering and descriptive section labels</li>
                  <li>Form fields with programmatic labels and focus styles</li>
                  <li>Consistent interactive component states (hover, focus, active) with visible outline</li>
                  <li>High-contrast dark mode and light mode palettes</li>
                  <li>SVG icons provided with decorative roles or titles when meaningful</li>
                  <li>Responsive typography and layout honoring user zoom up to 200%</li>
                </ul>
              </section>
              <section className="flex flex-col gap-3">
                <h2 className="text-2xl font-semibold tracking-tight">4. Known Limitations & Remediation Pipeline</h2>
                <p className="text-sm text-dark_black/70 dark:text-white/70">We are actively improving. The following items are scheduled for iterative remediation:</p>
                <ul className="list-disc ml-5 flex flex-col gap-2 text-sm text-dark_black/70 dark:text-white/70">
                  <li>Skip-to-content link (planned implementation in global layout)</li>
                  <li>Reduced-motion fallbacks for certain animated gradients</li>
                  <li>Extended alt text audit for legacy image assets</li>
                  <li>Focusable outline contrast refinement for teal accent on dark backgrounds</li>
                  <li>Continuous keyboard trap regression testing across enrollment form states</li>
                </ul>
              </section>
              <section className="flex flex-col gap-3">
                <h2 className="text-2xl font-semibold tracking-tight">5. Assistive Technology Compatibility</h2>
                <p className="text-sm text-dark_black/70 dark:text-white/70">The site is tested against recent versions of Safari, Chrome, and Firefox on macOS; iOS Safari; and screen reader spot checks with VoiceOver. Broader screen reader & platform matrix (JAWS, NVDA, TalkBack) is scheduled.</p>
              </section>
              <section className="flex flex-col gap-3">
                <h2 className="text-2xl font-semibold tracking-tight">6. Feedback & Contact</h2>
                <p className="text-sm text-dark_black/70 dark:text-white/70">Accessibility is an ongoing process. If you encounter barriers or require materials in an alternative format, please reach out. We aim to respond within 5 business days.</p>
                <ul className="text-sm flex flex-col gap-1 text-teal-700 dark:text-teal-300">
                  <li>Email: <a href="mailto:accessibility@iclpinstitute.org" className="underline underline-offset-2 hover:text-teal-500 dark:hover:text-teal-400">accessibility@iclpinstitute.org</a></li>
                  <li>Contact Form: <Link href="/contact" className="underline underline-offset-2 hover:text-teal-500 dark:hover:text-teal-400">/contact</Link></li>
                  <li>Subject Line Suggestion: “Accessibility Feedback”</li>
                </ul>
              </section>
              <section className="flex flex-col gap-3">
                <h2 className="text-2xl font-semibold tracking-tight">7. Continuous Improvement</h2>
                <p className="text-sm text-dark_black/70 dark:text-white/70">We maintain an internal accessibility backlog and integrate checks into design reviews and component QA. Future roadmap includes automated a11y test integration (axe), semantic linting expansion, and periodic third-party audits.</p>
              </section>
              <div className="pt-2 text-xs text-dark_black/40 dark:text-white/40">If any portion of this statement is unclear, please contact us so we can clarify and improve phrasing for broader readability.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
