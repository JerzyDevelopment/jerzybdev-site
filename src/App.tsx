function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-mist/50 to-white text-ink">
      <div className="mx-auto w-full max-w-5xl px-6 py-10 sm:px-8 lg:px-10">
        <header className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur-sm sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-steel">
            JerzyBogucki
          </p>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Custom analytics dashboards for agencies that need clear marketing
            ROI.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
            I help digital marketing teams unify ad spend, lead, and CRM data
            from Meta, TikTok, Google Ads, and internal systems into a single
            reporting view that supports faster decisions.
          </p>
        </header>

        <main className="mt-10 space-y-8">
          <section
            id="services"
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10"
          >
            <h2 className="text-2xl font-semibold">Services</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <article className="rounded-2xl border border-slate-200 p-5">
                <h3 className="font-semibold">Custom Dashboard Development</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Bespoke performance dashboards designed around your agency
                  KPIs, client reporting standards, and internal workflows.
                </p>
              </article>
              <article className="rounded-2xl border border-slate-200 p-5">
                <h3 className="font-semibold">Cross-Platform Ad Analytics</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Consolidated campaign data across Meta, TikTok, and Google Ads
                  to compare spend, conversion rates, and return in one place.
                </p>
              </article>
              <article className="rounded-2xl border border-slate-200 p-5">
                <h3 className="font-semibold">
                  Lead Tracking and CRM Integration
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Connected lead and pipeline data from CRM and lead-management
                  systems to ad platform performance for full-funnel visibility.
                </p>
              </article>
              <article className="rounded-2xl border border-slate-200 p-5">
                <h3 className="font-semibold">Reporting Automation</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Automated recurring reports and client-ready performance
                  summaries that reduce manual work and improve reporting
                  consistency.
                </p>
              </article>
            </div>
          </section>

          <section
            id="about"
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10"
          >
            <h2 className="text-2xl font-semibold">About</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">
              JerzyBogucki is a web development and analytics business focused
              on helping performance-driven organizations understand advertising
              impact. I work with digital marketing agencies and financial
              services teams to build reliable data pipelines and practical
              reporting tools that connect campaign spend to qualified leads and
              revenue outcomes.
            </p>
          </section>

          <section
            id="contact"
            className="rounded-3xl border border-slate-200 bg-ink p-8 text-white shadow-sm sm:p-10"
          >
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
              For partnership inquiries, platform verification, or project
              discussions, contact JerzyBogucki directly.
            </p>
            <p className="mt-5 text-base sm:text-lg">
              Email:{" "}
              <a
                className="font-semibold text-cyan-200 underline decoration-cyan-300/60 underline-offset-4 hover:text-white"
                href="mailto:info@jerzybdev.com"
              >
                info@jerzybdev.com
              </a>
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
