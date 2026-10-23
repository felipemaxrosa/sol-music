import { cn } from "@/lib/cn";

// atrasos (s) pra dar o movimento irregular de equalizador
const BARS = [0, 0.18, 0.36, 0.08, 0.42, 0.22, 0.3, 0.12];

export function Equalizer({ className }: { className?: string }) {
  return (
    <div className={cn("eq", className)} aria-hidden>
      {BARS.map((d, i) => (
        <span key={i} style={{ animationDelay: `${d}s` }} />
      ))}
    </div>
  );
}
