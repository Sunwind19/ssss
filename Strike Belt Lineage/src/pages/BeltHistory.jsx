import { Navigate, Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Target, BookOpen, Scroll } from "lucide-react";
import { Image } from "@/components/ui/image";
import BeltProgress from "@/components/BeltProgress";
import { belts } from "@/lib/belts";

const items = [
  { key: "focus", label: "Focus", Icon: Target },
  { key: "learning", label: "Key Learning", Icon: BookOpen },
  { key: "history", label: "History", Icon: Scroll }
];

export default function BeltHistory() {
  const { color } = useParams();
  const index = belts.findIndex((item) => item.id === color);
  if (index < 0) return <Navigate to="/" replace />;
  const belt = belts[index];
  const next = belts[(index + 1) % belts.length];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0A0A0A] text-white">
      <BeltProgress active={belt.id} />
      <Image src={belt.sceneImage} alt={`${belt.name} historical scene`} className="absolute inset-0 h-full w-full opacity-25 grayscale" fittingType="fill" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/15" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pb-10 pt-10 md:px-12">
          <Link to="/" className="flex w-fit items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-white/70 transition-colors hover:text-white">
            <ArrowLeft size={14} /> All belts
          </Link>

          <div className="mt-10 grid flex-1 items-center gap-10 md:grid-cols-2 md:gap-16">
            <Image src={belt.beltImage} alt={`${belt.name}`} className="aspect-square w-full max-w-md rounded-2xl object-contain drop-shadow-2xl" fittingType="fit" />

            <section className="max-w-xl">
              <h1 className="font-heading text-5xl leading-[0.9] tracking-[0.08em] sm:text-6xl lg:text-7xl">{belt.name}</h1>
              <p className="mt-4 font-heading text-2xl tracking-[0.08em] text-white/75">{belt.era}</p>
              <div className="my-7 h-px w-20" style={{ backgroundColor: belt.accent }} />
              <p className="text-base leading-[1.8] text-white/80 md:text-lg">{belt.description}</p>

              <ul className="mt-8 space-y-5">
                {items.map(({ key, label, Icon }) => (
                  <li key={key} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border" style={{ borderColor: belt.accent }}>
                      <Icon size={16} aria-hidden />
                    </span>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/55">{label}</p>
                      <p className="mt-1 text-sm leading-[1.7] text-white/85 md:text-base">{belt[key]}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="mt-10 flex items-end justify-between border-t border-white/20 pt-6">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/45">Path of the Eternal Strike</span>
            <Link to={`/belts/${next.id}`} className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] transition-colors hover:text-white">
              Next · {next.name} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}