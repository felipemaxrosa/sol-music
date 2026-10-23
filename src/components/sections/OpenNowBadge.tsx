"use client";

import { useEffect, useState } from "react";
import { site } from "@/config/site";
import { isOpenNow } from "@/lib/hours";
import { cn } from "@/lib/cn";

/** Calcula "aberto agora" no cliente (usa o horário local do visitante). */
export function OpenNowBadge() {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    setOpen(isOpenNow([...site.hours]));
  }, []);

  if (open === null) return null;

  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold",
        open ? "bg-green-500/15 text-green-400" : "bg-surface-2 text-muted",
      )}
    >
      <span
        className={cn(
          "size-2 rounded-full",
          open ? "bg-green-400" : "bg-muted",
        )}
      />
      {open ? "Aberto agora" : "Fechado agora"}
    </span>
  );
}
