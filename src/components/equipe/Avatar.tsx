import { cn } from "@/lib/cn";

export function Avatar({
  nome,
  fotoUrl,
  size = 80,
  className,
}: {
  nome: string;
  fotoUrl?: string;
  size?: number;
  className?: string;
}) {
  const initials = nome
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase())
    .join("");

  if (fotoUrl) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={fotoUrl}
        alt={nome}
        width={size}
        height={size}
        className={cn("rounded-full object-cover", className)}
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex items-center justify-center rounded-full font-display font-bold text-on-accent",
        className,
      )}
      style={{
        width: size,
        height: size,
        fontSize: size * 0.34,
        background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
      }}
    >
      {initials}
    </span>
  );
}
