import { cn } from "@/lib/cn";

/**
 * Mapa do Google embutido (iframe keyless via output=embed — sem API key).
 * `query` pode ser "lat,lng", um endereço ou o nome do local.
 */
export function GoogleMap({
  query,
  title = "Mapa",
  className,
}: {
  query: string;
  title?: string;
  className?: string;
}) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=16&hl=pt-BR&output=embed`;
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-surface-2",
        className,
      )}
    >
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="h-full w-full"
        style={{ border: 0 }}
      />
    </div>
  );
}
