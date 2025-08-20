export default function Kontakt() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16 text-center">
      <h2 className="text-2xl font-semibold">Get in Touch</h2>
      <p className="mt-2 text-primary-900 max-w-2xl mx-auto">Always here to support you.</p>
      <div className="mt-6 space-y-2 text-primary-900">
        <div>
          {/* Updated email address */}
          Email: <a className="underline hover:text-primary-700" href="mailto:janick@jstaub.ch">janick@jstaub.ch</a>
        </div>
      </div>
    </section>
  );
}


