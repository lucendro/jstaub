export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <div className="font-medium">JStaub</div>
          <div className="mt-2 text-primary-900">Strategic support for startups, investors, and growing ventures.</div>
        </div>
        <div>
          <div className="font-medium">Legal</div>
          <ul className="mt-2 space-y-1 text-primary-900">
            <li><a href="/impressum" className="hover:text-slate-900">Imprint</a></li>
            <li><a href="/datenschutz" className="hover:text-slate-900">Privacy Policy</a></li>
            <li><a href="/agb" className="hover:text-slate-900">Terms & Conditions</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium">Contact</div>
          {/* Updated email address */}
          <ul className="mt-2 space-y-1 text-primary-900">
            <li>Email: janick@jstaub.ch</li>
            <li>Address: Schlössliweg 4, 6490 Andermatt</li>
          </ul>
        </div>
      </div>
      <div className="text-xs text-slate-500 text-center pb-8">© {new Date().getFullYear()} JStaub. All rights reserved.</div>
    </footer>
  );
}


