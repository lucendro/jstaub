export const metadata = {
  title: "Privacy Policy | JStaub",
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-slate-800">
      <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>

      <section className="space-y-3 text-sm leading-relaxed">
        <p>
          We take the protection of your personal data very seriously. 
          This Privacy Policy explains how we collect, use and safeguard personal data 
          in accordance with the Swiss Federal Act on Data Protection (FADP) and, 
          where applicable, the EU General Data Protection Regulation (GDPR).
        </p>
      </section>

      <section className="mt-8 space-y-2">
        <h2 className="text-xl font-medium mb-2">1. Controller</h2>
        <p>
          Sole proprietorship JStaub<br />
          6490 Andermatt, Uri, Switzerland<br />
          Email: janick@jstaub.ch
        </p>
      </section>

      <section className="mt-8 space-y-2">
        <h2 className="text-xl font-medium mb-2">2. Data We Process</h2>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Contact details (name, email, phone number) when you reach out to us</li>
          <li>Information necessary for providing consulting services</li>
          <li>Technical data (IP address, browser type, access time) when visiting our website</li>
        </ul>
      </section>

      <section className="mt-8 space-y-2">
        <h2 className="text-xl font-medium mb-2">3. Purpose of Processing</h2>
        <p>
          We process personal data exclusively for the following purposes:
        </p>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Responding to inquiries and communication with clients</li>
          <li>Preparation and performance of consulting mandates</li>
          <li>Compliance with legal obligations</li>
          <li>Improving our website and services</li>
        </ul>
      </section>

      <section className="mt-8 space-y-2">
        <h2 className="text-xl font-medium mb-2">4. Data Sharing</h2>
        <p>
          We do not sell or rent personal data. Data may only be shared with third parties 
          if required by law or if necessary to perform our services (e.g. IT service providers under contract).
        </p>
      </section>

      <section className="mt-8 space-y-2">
        <h2 className="text-xl font-medium mb-2">5. Data Storage</h2>
        <p>
          Personal data is stored only as long as necessary for the purposes stated above or 
          as required by Swiss law (e.g. accounting retention obligations).
        </p>
      </section>

      <section className="mt-8 space-y-2">
        <h2 className="text-xl font-medium mb-2">6. Rights of Data Subjects</h2>
        <p>You have the right to:</p>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Access your personal data</li>
          <li>Request rectification or erasure</li>
          <li>Restrict or object to processing</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p className="text-sm">
          To exercise these rights, please contact us at janick@jstaub.ch.
        </p>
      </section>

      <section className="mt-8 space-y-2">
        <h2 className="text-xl font-medium mb-2">7. Security</h2>
        <p>
          We apply appropriate technical and organizational measures to protect personal data 
          against unauthorized access, loss or misuse.
        </p>
      </section>

      <section className="mt-8 space-y-2">
        <h2 className="text-xl font-medium mb-2">8. Changes</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices 
          or legal requirements. The current version is published on this website.
        </p>
      </section>

      <section className="mt-8 text-sm">
        <p><em>Last updated: {new Date().toLocaleDateString()}</em></p>
      </section>
    </main>
  );
}


