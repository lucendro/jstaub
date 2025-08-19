export default function Referenzen() {
  return (
    <section id="referenzen" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-semibold">Ausgewählte Arbeiten</h2>
      <p className="mt-2 text-slate-600">Kurz und ergebnisorientiert. Weitere Referenzen auf Anfrage.</p>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <article key={i} className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
            <div className="h-32 bg-slate-100" />
            <div className="p-5">
              <div className="font-medium">Case {i} – [Titel]</div>
              <div className="mt-1 text-sm text-slate-600">Impact in 1–2 Sätzen (z. B. Umsatz +x%, Zeit‑to‑Quote −y%).</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


