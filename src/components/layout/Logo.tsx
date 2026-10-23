import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="SolMusic — início"
      className={cn(
        "inline-flex items-center gap-2 font-display text-lg font-extrabold tracking-tight",
        className,
      )}
    >
      <span
        aria-hidden
        className="size-3 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 35%, var(--accent), var(--accent-2))",
          boxShadow: "0 0 12px var(--accent)",
        }}
      />
      <span>
        Sol<span className="text-accent">Music</span>
      </span>
    </Link>
  );
}
