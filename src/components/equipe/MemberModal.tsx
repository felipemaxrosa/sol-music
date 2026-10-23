"use client";

import { useEffect, useRef } from "react";
import type { Membro } from "@/lib/sanity/types";
import { Avatar } from "@/components/equipe/Avatar";
import { ButtonLink } from "@/components/ui/Button";
import { buildWaLink } from "@/lib/whatsapp";
import { CloseIcon, WhatsAppIcon, InstagramIcon } from "@/components/ui/icons";

export function MemberModal({
  membro,
  onClose,
}: {
  membro: Membro;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const firstName = membro.nome.split(" ")[0];

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${membro.nome} — ${membro.cargo}`}
      className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />
      <div
        className="relative z-10 max-h-[92dvh] w-full max-w-lg overflow-y-auto rounded-t-3xl border border-border bg-surface sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-3 top-3 z-10 inline-flex size-9 items-center justify-center rounded-full bg-bg/60 text-fg transition-colors hover:bg-bg"
        >
          <CloseIcon />
        </button>

        <div className="flex flex-col gap-5 p-6 sm:p-8">
          <div className="flex items-center gap-4">
            <Avatar nome={membro.nome} fotoUrl={membro.fotoUrl} size={88} />
            <div>
              <h2 className="font-display text-2xl font-bold leading-tight">
                {membro.nome}
              </h2>
              <p className="text-accent-2">{membro.cargo}</p>
            </div>
          </div>

          <p className="text-muted">{membro.bio}</p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex-1">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
                Especialidades
              </h3>
              <div className="flex flex-wrap gap-2">
                {membro.especialidades.map((e) => (
                  <span
                    key={e}
                    className="rounded-full bg-surface-2 px-2.5 py-1 text-xs text-fg/90"
                  >
                    {e}
                  </span>
                ))}
              </div>
            </div>
            {membro.instrumentos.length > 0 && (
              <div className="flex-1">
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
                  Toca
                </h3>
                <div className="flex flex-wrap gap-2">
                  {membro.instrumentos.map((e) => (
                    <span
                      key={e}
                      className="rounded-full border border-border px-2.5 py-1 text-xs text-fg/90"
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <ButtonLink
              href={buildWaLink(
                `Olá! Queria falar com ${firstName} da SolMusic. 🎸`,
              )}
            >
              <WhatsAppIcon width={18} height={18} />
              Falar com {firstName}
            </ButtonLink>
            {membro.instagram && (
              <ButtonLink
                href={`https://instagram.com/${membro.instagram}`}
                variant="outline"
              >
                <InstagramIcon width={18} height={18} />@{membro.instagram}
              </ButtonLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
