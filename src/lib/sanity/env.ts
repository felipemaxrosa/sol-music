export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2025-01-01";

/** Token de LEITURA (server-only). Nunca prefixar com NEXT_PUBLIC. */
export const readToken = process.env.SANITY_API_VIEWER_TOKEN ?? "";

/** Só usa o Sanity quando há projectId configurado; senão o site cai no mock. */
export const hasSanity = projectId.length > 0;
