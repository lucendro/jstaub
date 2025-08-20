export default function Hero() {
  return (
    <section
      className="relative"
      style={{
        backgroundImage: "url('/hero-panorama.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-gradient-to-b from-primary-900/80 to-primary-700/30">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Clear insights. Honest feedback. Real impact.
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-primary-100/90 mb-8">
            Strategic support for startups and investors – from market analysis to hands-on sales execution.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href="#contact" className="rounded-2xl bg-accent-500 text-primary-950 px-4 py-2 hover:bg-accent-400">Get in Touch →</a>
          </div>
        </div>
      </div>
    </section>
  );
}


