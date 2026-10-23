import { cn } from "@/lib/cn";
import { formatBRL } from "@/lib/format";

export function PrecoTag({
  preco,
  precoLabel,
  className,
}: {
  preco?: number | null;
  precoLabel?: string;
  className?: string;
}) {
  const temPreco = typeof preco === "number";
  return (
    <span
      className={cn(
        "font-display font-bold",
        temPreco ? "text-accent" : "text-muted",
        className,
      )}
    >
      {temPreco ? formatBRL(preco) : (precoLabel ?? "Sob consulta")}
    </span>
  );
}
