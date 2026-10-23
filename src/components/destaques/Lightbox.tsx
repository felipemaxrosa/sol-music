"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Destaque } from "@/lib/sanity/types";
import { MediaBox } from "@/components/ui/MediaBox";
import { PrecoTag } from "@/components/destaques/PrecoTag";
import { ButtonLink } from "@/components/ui/Button";
import { buildWaLink, produtoWaMessage } from "@/lib/whatsapp";
import { CloseIcon, WhatsAppIcon, ArrowRightIcon } from "@/components/ui/icons";

export function Lightbox({
  item,
  onClose,
}: {
  item: Destaque;
  onClose: () => void;
}) {
  const images = item.imagensUrl.length ? item.imagensUrl : [undefined];
  const [idx, setIdx] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);

  const next = useCallback(
    () => setIdx((i) => (i + 1) % images.length),
    [images.length],
  );
  const prev = useCallback(
    () => setIdx((i) => (i - 1 + images.length) % images.length),
    [images.length],
  );

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, next, prev]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.nome}
      className="fixed inset-0 z-[70] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />
      <div
        className="relative z-10 flex max-h-[90dvh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-border bg-surface"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-3 top-3 z-20 inline-flex size-9 items-center justify-center rounded-full bg-bg/70 text-fg backdrop-blur transition-colors hover:bg-bg"
        >
          <CloseIcon />
        </button>

        <div className="relative shrink-0">
          <MediaBox
            src={images[idx]}
            alt={`${item.nome} — foto ${idx + 1}`}
            aspect="16 / 10"
            glyph="♪"
          />
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Foto anterior"
                className="absolute left-3 top-1/2 inline-flex size-10 -translate-y-1/2 rotate-180 items-center justify-center rounded-full bg-bg/70 text-fg backdrop-blur hover:bg-bg"
              >
                <ArrowRightIcon />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Próxima foto"
                className="absolute right-3 top-1/2 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-bg/70 text-fg backdrop-blur hover:bg-bg"
              >
                <ArrowRightIcon />
              </button>
              <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-bg/70 px-2.5 py-0.5 text-xs text-fg backdrop-blur">
                {idx + 1} / {images.length}
              </span>
            </>
          )}
        </div>

        <div className="flex flex-col gap-3 overflow-y-auto p-6">
          {item.categoria && (
            <span className="text-xs uppercase tracking-wider text-accent-2">
              {item.categoria}
            </span>
          )}
          <h2 className="font-display text-2xl font-bold">{item.nome}</h2>
          <p className="text-muted">{item.descricao}</p>
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <PrecoTag
              preco={item.preco}
              precoLabel={item.precoLabel}
              className="text-2xl"
            />
            <ButtonLink
              href={buildWaLink(item.whatsappMsg ?? produtoWaMessage(item.nome))}
              size="lg"
            >
              <WhatsAppIcon width={18} height={18} />
              Tenho interesse
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
