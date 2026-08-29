import BeltBands from "@/components/BeltBands";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <header className="flex h-[72px] items-center justify-between border-b border-white/10 px-6 md:px-12">
        <div className="flex items-baseline gap-4">
          <h1 className="font-heading text-2xl font-bold tracking-[-0.04em]">TAEKWONDO</h1>
          <span className="hidden font-mono text-[9px] uppercase tracking-[0.3em] text-white/45 sm:block">History · Discipline · Legacy</span>
        </div>
        <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-white/55">Choose your path</p>
      </header>
      <BeltBands />
    </main>
  );
}