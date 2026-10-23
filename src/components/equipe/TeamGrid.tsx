"use client";

import { useEffect, useState } from "react";
import type { Membro } from "@/lib/sanity/types";
import { MemberCard } from "@/components/equipe/MemberCard";
import { MemberModal } from "@/components/equipe/MemberModal";
import { Reveal } from "@/components/ui/Reveal";

export function TeamGrid({ membros }: { membros: Membro[] }) {
  const [selected, setSelected] = useState<Membro | null>(null);

  // Deep-link: /equipe?membro=slug abre o modal direto (compartilhável).
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("membro");
    if (!slug) return;
    const m = membros.find((x) => x.slug === slug);
    if (!m) return;
    const id = window.setTimeout(() => setSelected(m), 0);
    return () => window.clearTimeout(id);
  }, [membros]);

  const open = (m: Membro) => {
    setSelected(m);
    const url = new URL(window.location.href);
    url.searchParams.set("membro", m.slug);
    window.history.replaceState(null, "", url);
  };

  const close = () => {
    setSelected(null);
    const url = new URL(window.location.href);
    url.searchParams.delete("membro");
    window.history.replaceState(null, "", url);
  };

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {membros.map((m, i) => (
          <Reveal key={m._id} delay={(i % 4) * 60}>
            <MemberCard membro={m} onOpen={() => open(m)} />
          </Reveal>
        ))}
      </div>
      {selected && <MemberModal membro={selected} onClose={close} />}
    </>
  );
}
