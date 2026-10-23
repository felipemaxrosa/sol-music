import type { Membro } from "@/lib/sanity/types";
import { Avatar } from "@/components/equipe/Avatar";

export function MemberCard({
  membro,
  onOpen,
}: {
  membro: Membro;
  onOpen?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group flex h-full flex-col items-start gap-4 rounded-2xl border border-border bg-surface p-5 text-left transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:glow-accent"
    >
      <Avatar nome={membro.nome} fotoUrl={membro.fotoUrl} size={76} />
      <div>
        <h3 className="font-display text-lg font-bold leading-tight">
          {membro.nome}
        </h3>
        <p className="text-sm text-accent-2">{membro.cargo}</p>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {membro.especialidades.slice(0, 3).map((e) => (
          <span
            key={e}
            className="rounded-full bg-surface-2 px-2.5 py-1 text-xs text-muted"
          >
            {e}
          </span>
        ))}
      </div>
      <span className="mt-auto pt-1 text-sm text-accent opacity-0 transition-opacity group-hover:opacity-100">
        Ver perfil →
      </span>
    </button>
  );
}
