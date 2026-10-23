import { cacheTag } from "next/cache";
import { client } from "@/lib/sanity/client";
import { hasSanity } from "@/lib/sanity/env";
import { EQUIPE_QUERY, DESTAQUES_QUERY } from "@/lib/sanity/queries";
import { mockEquipe, mockDestaques } from "@/lib/sanity/mock";
import type { Membro, Destaque } from "@/lib/sanity/types";

/**
 * Busca a equipe no Sanity; cai no mock se não houver projeto, se a dataset
 * estiver vazia ou se a leitura falhar. Cacheado com a tag "equipe" para
 * revalidação por webhook (revalidateTag).
 */
export async function getEquipe(): Promise<Membro[]> {
  "use cache";
  cacheTag("equipe");
  if (!hasSanity || !client) return mockEquipe;
  try {
    const data = await client.fetch<Membro[] | null>(EQUIPE_QUERY);
    if (!data || data.length === 0) return mockEquipe;
    return data.map((m) => ({
      ...m,
      fotoUrl: m.fotoUrl ?? "",
      especialidades: m.especialidades ?? [],
      instrumentos: m.instrumentos ?? [],
    }));
  } catch {
    return mockEquipe;
  }
}

export async function getDestaques(): Promise<Destaque[]> {
  "use cache";
  cacheTag("destaque");
  if (!hasSanity || !client) return mockDestaques;
  try {
    const data = await client.fetch<Destaque[] | null>(DESTAQUES_QUERY);
    if (!data || data.length === 0) return mockDestaques;
    return data.map((d) => ({ ...d, imagensUrl: d.imagensUrl ?? [] }));
  } catch {
    return mockDestaques;
  }
}
