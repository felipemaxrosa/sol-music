/**
 * Conteúdo-fallback do site (usado enquanto o Sanity está vazio e para dados
 * estruturais como SEO/JSON-LD). Valores marcados com TODO são placeholders
 * que o cliente ainda vai confirmar.
 */

export type DayHours = {
  /** 0 = Domingo ... 6 = Sábado (índice de Date.getDay) */
  label: string;
  /** "HH:MM" ou null quando fechado */
  open: string | null;
  close: string | null;
};

export const site = {
  name: "SolMusic",
  legalName: "Solmusic Instrumentos Musicais",
  description:
    "Loja de instrumentos musicais em Caraguatatuba, no Litoral Norte de SP. Instrumentos, acessórios e o atendimento de quem toca — para músicos de Caraguatatuba, Ilhabela, São Sebastião e Ubatuba.",
  // Em produção vem de NEXT_PUBLIC_SITE_URL (setar na Vercel com o domínio final).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://solmusic.com.br",
  locale: "pt-BR",
  city: "Caraguatatuba",
  region: "SP",

  whatsapp: {
    // Número da loja (formato wa.me: DDI+DDD+número, só dígitos).
    // ⚠️ É um fixo — confirmar se tem WhatsApp Business ativo (ver TODO abaixo).
    phone: "551238836049",
    defaultMessage:
      "Olá! Vim pelo site da SolMusic e gostaria de mais informações. 🎸",
  },
  phoneDisplay: "(12) 3883-6049",

  address: {
    street: "R. Altino Arantes, 753 — Centro",
    city: "Caraguatatuba",
    region: "SP",
    postalCode: "11660-020",
    country: "BR",
  },
  geo: { lat: -23.6203866, lng: -45.4071395 },
  mapsUrl: "https://maps.app.goo.gl/MqwwhRNhwTcBhMJX9",

  instagram: {
    handle: "lojasolmusic",
    url: "https://www.instagram.com/lojasolmusic/",
  },

  /** Horários por dia da semana (índice = Date.getDay). TODO: confirmar com a loja. */
  hours: [
    { label: "Domingo", open: null, close: null },
    { label: "Segunda", open: "09:00", close: "18:00" },
    { label: "Terça", open: "09:00", close: "18:00" },
    { label: "Quarta", open: "09:00", close: "18:00" },
    { label: "Quinta", open: "09:00", close: "18:00" },
    { label: "Sexta", open: "09:00", close: "18:00" },
    { label: "Sábado", open: "09:00", close: "13:00" },
  ] satisfies DayHours[],
} as const;

export const nav = [
  { label: "Início", href: "/" },
  { label: "Destaques", href: "/destaques" },
  { label: "Equipe", href: "/equipe" },
  { label: "Contato", href: "/contato" },
] as const;
