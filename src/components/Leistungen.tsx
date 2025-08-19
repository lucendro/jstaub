export default function Leistungen() {
  const pakete = [
    { name: "Strategie-Sprint", price: "CHF [x’xxx] pauschal", points: ["Ist‑Analyse & Zielbild", "Roadmap 90 Tage", "Risikobild & KPIs"] },
    { name: "Go‑to‑Market", price: "CHF [x’xxx] pauschal", points: ["ICP & Messaging", "Sales Funnel & Playbook", "Pilot & Review"] },
    { name: "Advisory", price: "nach Aufwand", points: ["C‑Level Sparring", "Deal-/Fundraising‑Vorbereitung", "Review & Coaching"] },
  ];

  return (
    <section id="leistungen" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-semibold">Leistungen</h2>
      <p className="mt-2 text-slate-600">Kompakte Pakete – modular kombinierbar.</p>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {pakete.map((p, i) => (
          <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col">
            <div className="text-lg font-medium">{p.name}</div>
            <div className="mt-1 text-sm text-slate-500">{p.price}</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc list-inside">
              {p.points.map((pt, idx) => (
                <li key={idx}>{pt}</li>
              ))}
            </ul>
            <a href="#kontakt" className="mt-6 inline-flex justify-center rounded-xl border border-slate-300 px-3 py-2 text-sm hover:bg-slate-100">Anfragen</a>
          </div>
        ))}
      </div>
    </section>
  );
}


