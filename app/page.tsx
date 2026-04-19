import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function Home() {
  return (
    <main
      className={`${inter.variable} ${playfair.variable} min-h-screen bg-gradient-to-b from-white via-zinc-50 to-zinc-100 text-zinc-900`}
    >
      <div className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-16 sm:px-10 sm:py-24">
        <div className="w-full">
          <section className="mx-auto max-w-4xl text-center">
            <p className="mb-5 inline-flex rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-600 shadow-sm">
              Fast custom automation for small teams
            </p>

            <h1
              className="mx-auto max-w-4xl text-5xl leading-tight sm:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Custom internal tools for busy teams
              <span className="block">built in 72 hours</span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-zinc-700 sm:text-2xl">
              I build simple tools that automate repetitive internal work, turn
              messy spreadsheets into useful insights, and save teams time
              without long implementation cycles.
            </p>
          </section>

          <section className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Example one
              </p>
              <h2 className="text-2xl font-semibold leading-8 text-zinc-900">
                Excel to insight
              </h2>
              <p className="mt-4 text-lg leading-8 text-zinc-700">
                Upload Excel and get instant summaries, charts, and useful
                insights.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Example two
              </p>
              <h2 className="text-2xl font-semibold leading-8 text-zinc-900">
                Repetitive admin
              </h2>
              <p className="mt-4 text-lg leading-8 text-zinc-700">
                Turn recurring admin work into a simple internal tool your team
                can actually use.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Example three
              </p>
              <h2 className="text-2xl font-semibold leading-8 text-zinc-900">
                Reporting workflows
              </h2>
              <p className="mt-4 text-lg leading-8 text-zinc-700">
                Automate reporting workflows that waste hours every week.
              </p>
            </div>
          </section>

          <section className="mx-auto mt-8 max-w-5xl text-center">
            <p className="text-lg font-medium text-zinc-600 sm:text-xl">
              Best for small businesses, agencies, and operations heavy teams.
            </p>
          </section>

          <section className="mx-auto mt-16 max-w-5xl rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Offer
                </p>

                <h2
                  className="text-4xl leading-tight sm:text-5xl"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  A low risk first step for teams who want something practical
                  fast
                </h2>

                <p className="mt-6 text-xl leading-9 text-zinc-700">
                  I’m taking on a small number of projects this month for
                  <span className="font-semibold"> £100 each </span>
                  to build case studies and testimonials.
                </p>

                <p className="mt-4 text-lg leading-8 text-zinc-600">
                  Fast to deploy, tailored to your workflow, and focused on
                  solving one clear problem well.
                </p>
              </div>

              <div className="rounded-3xl bg-zinc-900 p-8 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-300">
                  Why teams like this
                </p>
                <div className="mt-6 space-y-4 text-lg leading-8 text-zinc-100">
                  <p>Clear scope</p>
                  <p>Fast delivery</p>
                  <p>Simple outcome</p>
                  <p>Easy to test</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto mt-16 max-w-5xl rounded-[2rem] border border-zinc-200 bg-zinc-50 p-8 sm:p-12">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              How it works
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl bg-white p-8 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-lg font-semibold text-white">
                  1
                </div>
                <p className="text-xl leading-8 text-zinc-800">
                  You show me the workflow slowing you down
                </p>
              </div>

              <div className="rounded-3xl bg-white p-8 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-lg font-semibold text-white">
                  2
                </div>
                <p className="text-xl leading-8 text-zinc-800">
                  I build a small tool around that problem
                </p>
              </div>

              <div className="rounded-3xl bg-white p-8 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-lg font-semibold text-white">
                  3
                </div>
                <p className="text-xl leading-8 text-zinc-800">
                  You get something usable in 72 hours
                </p>
              </div>
            </div>
          </section>

          <section className="mx-auto mt-16 max-w-4xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              About
            </p>

            <p className="mx-auto max-w-3xl text-xl leading-9 text-zinc-700 sm:text-2xl">
              I’m a Python developer building practical automation and AI tools,
              with experience across internal tooling, APIs, workflow
              automation, and data driven products.
            </p>
          </section>

          <section className="mx-auto mt-16 max-w-4xl rounded-[2rem] bg-zinc-900 px-8 py-10 text-center text-white shadow-xl sm:px-12 sm:py-14">
            <h2
              className="text-4xl leading-tight sm:text-5xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Tell me the process your team wants to stop doing manually
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
              Email or message me directly and I’ll tell you whether it is a
              good fit for a fast £100 build.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:thomaspercival@live.co.uk"
                className="rounded-full bg-white px-6 py-4 text-base font-semibold text-zinc-900 transition hover:scale-[1.01]"
              >
                thomaspercival@live.co.uk
              </a>

              <a
                href="https://www.linkedin.com/in/thomaspercival"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-zinc-700 px-6 py-4 text-base font-semibold text-white transition hover:bg-zinc-800"
              >
                LinkedIn profile
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}