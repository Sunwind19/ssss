import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { belts } from "@/lib/belts";

export default function BeltBands() {
  return (
    <div className="flex h-[calc(100svh-72px)] min-h-[560px] flex-col md:flex-row">
      {belts.map((belt, index) => (
        <motion.div key={belt.id} className="group relative flex-1 overflow-hidden transition-all duration-500 ease-out md:hover:flex-[3]" transition={{ type: "spring", stiffness: 240, damping: 28 }}>
          <Link to={`/belts/${belt.id}`} className="flex h-full w-full items-center justify-between px-7 py-5 outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-white/70 md:flex-col md:justify-end md:px-5 md:py-10" style={{ backgroundColor: belt.color, color: belt.text }} aria-label={`${belt.name} history`}>
            <span className="font-mono text-[10px] tracking-[0.35em] opacity-60 md:absolute md:left-5 md:top-6">0{index + 1}</span>
            <div className="md:[writing-mode:vertical-rl] md:rotate-180">
              <p className="mb-1 text-[10px] tracking-[0.28em] opacity-60 md:mb-4">{belt.era}</p>
              <h2 className="font-heading text-2xl tracking-[0.14em] sm:text-3xl md:text-4xl">{belt.name}</h2>
            </div>
            <span className="font-mono text-[9px] uppercase tracking-[0.28em] opacity-0 transition-opacity duration-300 group-hover:opacity-80 md:mt-7">Enter era</span>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}