import Image from "next/image";

export default function Ueber() {
  return (
    <section id="who" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-semibold text-center">Who I Am</h2>
      <div className="mt-6 flex flex-col items-center gap-4">
        <div className="flex justify-center">
          <Image
            src="/janick-staub.jpg"
            alt="Portrait of Janick Staub"
            width={192}
            height={192}
            className="rounded-full object-cover border border-primary-200"
            priority
          />
        </div>
        <div className="text-primary-900 max-w-3xl mx-auto space-y-4 text-center">
          <p>
            I&apos;m Janick Staub – founder of JStaub. With 10+ years of experience in sales, business development, and key account management across multiple industries, I bring practical insight into how businesses grow – and where they get stuck.
          </p>
          <p>
            I currently support venture capital firms and early-stage founders as an independent consultant. I focus on strategic clarity, honest feedback, and execution support where it matters most.
          </p>
        </div>
      </div>
    </section>
  );
}


