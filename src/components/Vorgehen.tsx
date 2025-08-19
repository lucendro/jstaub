export default function Vorgehen() {
  const steps = [
    { step: "01", title: "Kickoff", desc: "Scope, Ziele, Datenlage, Risiken." },
    { step: "02", title: "Analyse", desc: "Kundensegmente, Angebot, Prozesse, Unit Economics." },
    { step: "03", title: "Entscheid", desc: "Optionen, Trade‑offs, Roadmap, Verantwortungen." },
    { step: "04", title: "Umsetzung", desc: "Sprints, Reviews, Metriken, Reporting." },
  ];

  return (
    <section id="vorgehen" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-semibold">Vorgehen</h2>
      <div className="mt-6 grid md:grid-cols-4 gap-4">
        {steps.map((s) => (
          <div key={s.step} className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="text-xs text-primary-700">{s.step}</div>
            <div className="mt-1 font-medium">{s.title}</div>
            <div className="mt-1 text-sm text-slate-600">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}


