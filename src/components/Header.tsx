"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="JStaub Logo"
            width={36}
            height={36}
            className="h-9 w-auto"
          />
          <span className="font-semibold">JStaub</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#offer" className="hover:text-primary-700">What I Offer</a>
          <a href="#who" className="hover:text-primary-700">Who I Am</a>
          <a href="#contact" className="hover:text-primary-700">Contact</a>
        </nav>
        <button
          className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-xl border border-slate-300 text-primary-900"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/90 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3 text-sm">
            <a href="#offer" className="hover:text-primary-700" onClick={() => setOpen(false)}>What I Offer</a>
            <a href="#who" className="hover:text-primary-700" onClick={() => setOpen(false)}>Who I Am</a>
            <a href="#contact" className="hover:text-primary-700" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}


