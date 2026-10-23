"use client";

import { useState } from "react";
import type { Destaque } from "@/lib/sanity/types";
import { DestaqueCard } from "@/components/destaques/DestaqueCard";
import { Lightbox } from "@/components/destaques/Lightbox";
import { Reveal } from "@/components/ui/Reveal";

export function DestaquesGrid({ items }: { items: Destaque[] }) {
  const [open, setOpen] = useState<Destaque | null>(null);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={it._id} delay={(i % 3) * 80}>
            <DestaqueCard item={it} onOpenGallery={() => setOpen(it)} />
          </Reveal>
        ))}
      </div>
      {open && <Lightbox item={open} onClose={() => setOpen(null)} />}
    </>
  );
}
