import { Link } from "react-router-dom";
import { belts } from "@/lib/belts";

export default function BeltProgress({ active }) {
  return (
    <nav aria-label="Belt history progress" className="fixed inset-x-0 top-0 z-30 flex h-[5px] bg-black/20">
      {belts.map((belt) => (
        <Link key={belt.id} to={`/belts/${belt.id}`} className={`h-full flex-1 transition-opacity ${belt.id === active ? "opacity-100" : "opacity-35 hover:opacity-70"}`} style={{ backgroundColor: belt.color }} aria-label={`${belt.name}`} />
      ))}
    </nav>
  );
}