import "server-only";
import { createClient } from "next-sanity";
import {
  projectId,
  dataset,
  apiVersion,
  hasSanity,
  readToken,
} from "@/lib/sanity/env";

/**
 * Client de leitura — SERVER-ONLY (o `import "server-only"` impede bundle no
 * navegador, já que carrega um token). Dataset privado: lê com o token Viewer,
 * perspectiva "published" (nunca mostra rascunhos no site).
 */
export const client = hasSanity
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      perspective: "published",
      token: readToken || undefined,
    })
  : null;
