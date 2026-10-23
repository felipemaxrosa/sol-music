import { cn } from "@/lib/cn";

/**
 * Placeholder de imagem com cara de design (gradiente + glifo + brilho
 * dourado), usado enquanto não há foto real do Sanity. Quando houver `src`,
 * mostra a imagem.
 */
export function MediaBox({
  src,
  alt,
  label,
  glyph = "♪",
  aspect = "4 / 3",
  className,
}: {
  src?: string;
  alt?: string;
  label?: string;
  glyph?: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-surface-2",
        className,
      )}
      style={{ aspectRatio: aspect }}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt ?? ""}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <>
          <span
            aria-hidden
            className="select-none font-display text-7xl"
            style={{ color: "color-mix(in oklab, var(--fg) 6%, transparent)" }}
          >
            {glyph}
          </span>
          <span
            aria-hidden
            className="pointer-events-none absolute -right-8 -top-8 size-28 rounded-full"
            style={{
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--accent) 22%, transparent), transparent 70%)",
            }}
          />
        </>
      )}
      {label && (
        <span className="absolute bottom-2 left-3 text-[11px] uppercase tracking-wider text-muted">
          {label}
        </span>
      )}
    </div>
  );
}
