export default function Home() {
  return (
  <main className="min-h-screen bg-white text-black px-6 py-16 flex flex-col items-center">      
      <div className="max-w-xl w-full">

        {/* HEADLINE */}
        <h1 className="text-4xl font-bold mb-4">
          Small AI tools for busy teams - built in 72 hours
        </h1>

        {/* SUBTEXT */}
        <p className="text-lg mb-8">
          I build simple, custom AI tools that remove repetitive work from your day - no enterprise complexity, no long timelines.
        </p>

        {/* EXAMPLES */}
        <div className="mb-8">
          <h2 className="font-semibold mb-2">Examples:</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Upload Excel → instant insights, summaries, and charts</li>
            <li>Turn messy data into clean reports automatically</li>
            <li>Automate repetitive admin or internal workflows</li>
          </ul>
        </div>

        {/* OFFER */}
        <div className="mb-8">
          <h2 className="font-semibold mb-2">Offer:</h2>
          <p>
            I’m building a few tools this week for £100 each to collect case studies.
          </p>
          <p>
            Delivered in 72 hours. Simple, fast, and tailored to your workflow.
          </p>
        </div>

        {/* CTA */}
        <div className="mb-8">
          <h2 className="font-semibold mb-2">Get in touch:</h2>
          <p>Email: thomaspercival@live.co.uk</p>
          <p>LinkedIn: https://www.linkedin.com/in/thomaspercival</p>
        </div>

      </div>

    </main>
  );
}