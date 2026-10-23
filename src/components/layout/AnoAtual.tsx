"use client";

import { useEffect, useState } from "react";

/**
 * Ano atual renderizado no cliente. Evita `new Date()` no prerender
 * (proibido pelo cacheComponents do Next 16). O SSR usa o `fallback`.
 */
export function AnoAtual({ fallback }: { fallback: number }) {
  const [ano, setAno] = useState(fallback);
  useEffect(() => setAno(new Date().getFullYear()), []);
  return <>{ano}</>;
}
