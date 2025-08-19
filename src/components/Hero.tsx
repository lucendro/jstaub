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
          <p className="mt-5 max-w-2xl mx-auto text-primary-100/90">
            Strategic support for startups, investors, and growing ventures.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href="#contact" className="rounded-2xl bg-accent-500 text-primary-950 px-4 py-2 hover:bg-accent-400">→ Let&apos;s Connect</a>
          </div>
        </div>
      </div>
    </section>
  );
}


