import type { Destaque } from "@/lib/sanity/types";
import { MediaBox } from "@/components/ui/MediaBox";
import { PrecoTag } from "@/components/destaques/PrecoTag";
import { ButtonLink } from "@/components/ui/Button";
import { buildWaLink, produtoWaMessage } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

export function DestaqueCard({
  item,
  onOpenGallery,
}: {
  item: Destaque;
  onOpenGallery?: () => void;
}) {
  const wa = buildWaLink(item.whatsappMsg ?? produtoWaMessage(item.nome));
  const firstImage = item.imagensUrl[0];

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/40">
      <button
        type="button"
        onClick={onOpenGallery}
        disabled={!onOpenGallery}
        aria-label={onOpenGallery ? `Ver fotos de ${item.nome}` : undefined}
        className={cn(
          "relative block w-full",
          onOpenGallery ? "cursor-pointer" : "cursor-default",
        )}
      >
        <MediaBox src={firstImage} alt={item.nome} aspect="4 / 3" />
        {onOpenGallery && item.imagensUrl.length > 1 && (
          <span className="absolute bottom-2 right-2 rounded-full bg-bg/70 px-2 py-0.5 text-xs text-fg backdrop-blur">
            {item.imagensUrl.length} fotos
          </span>
        )}
      </button>

      <div className="flex flex-1 flex-col gap-3 p-5">
        {item.categoria && (
          <span className="text-xs uppercase tracking-wider text-accent-2">
            {item.categoria}
          </span>
        )}
        <h3 className="font-display text-lg font-bold leading-tight">
          {item.nome}
        </h3>
        <p className="line-clamp-3 text-sm text-muted">{item.descricao}</p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-2">
          <PrecoTag
            preco={item.preco}
            precoLabel={item.precoLabel}
            className="text-lg"
          />
          <ButtonLink
            href={wa}
            size="sm"
            aria-label={`Falar sobre ${item.nome} no WhatsApp`}
          >
            <WhatsAppIcon width={16} height={16} />
            Tenho interesse
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
