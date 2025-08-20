export const metadata = {
  title: "Impressum | JStaub",
};

export default function Impressum() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-slate-800">
      <h1 className="text-3xl font-semibold mb-6">Imprint</h1>

      <section className="space-y-2 text-sm leading-relaxed">
        <p><strong>Company:</strong> Sole proprietorship JStaub</p>
        <p><strong>Registered Office:</strong> 6490 Andermatt, Canton Uri, Switzerland</p>
        <p><strong>Email:</strong> janick@jstaub.ch</p>
        <p><strong>Responsible for the content of this website:</strong> JStaub</p>
        <p><strong>Jurisdiction:</strong> Andermatt, Uri, Switzerland</p>
      </section>

      <section className="mt-8 space-y-2 text-sm leading-relaxed">
        <h2 className="text-xl font-medium mb-2">Disclaimer</h2>
        <p>
          The content of this website has been prepared with the greatest possible care. 
          Nevertheless, no guarantee can be given for the correctness, completeness and 
          up-to-dateness of the information provided. We reserve the right to change or 
          supplement the content at any time without prior notice.
        </p>
        <p>
          Liability claims against JStaub for material or immaterial damages arising from the 
          access, use or non-use of published information, misuse of the connection or technical 
          malfunctions are excluded to the extent permitted by law.
        </p>
      </section>

      <section className="mt-8 space-y-2 text-sm leading-relaxed">
        <h2 className="text-xl font-medium mb-2">Copyright</h2>
        <p>
          All content and works on this website are subject to Swiss copyright law. 
          Reproduction, editing, distribution and any kind of use outside the limits of copyright 
          require the written consent of JStaub. Downloads and copies are only permitted for 
          private, non-commercial use.
        </p>
      </section>

      <section className="mt-8 space-y-2 text-sm leading-relaxed">
        <h2 className="text-xl font-medium mb-2">Data Protection</h2>
        <p>
          Personal data will be treated confidentially and in accordance with the applicable 
          data protection regulations of Switzerland (Federal Act on Data Protection, FADP). 
          For further details please see our <a href="/datenschutz" className="underline">Privacy Policy</a>.
        </p>
      </section>
    </main>
  );
}


