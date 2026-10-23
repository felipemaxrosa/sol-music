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
  // TODO: domínio definitivo no deploy
  url: "https://solmusic.com.br",
  locale: "pt-BR",
  city: "Caraguatatuba",
  region: "SP",

  whatsapp: {
    // TODO: número real (formato wa.me: DDI+DDD+número, só dígitos)
    phone: "5512990000000",
    defaultMessage:
      "Olá! Vim pelo site da SolMusic e gostaria de mais informações. 🎸",
  },
  // TODO: telefone de exibição real
  phoneDisplay: "(12) 99000-0000",

  address: {
    // TODO: endereço real
    street: "Rua Example, 000 — Centro",
    city: "Caraguatatuba",
    region: "SP",
    postalCode: "11660-000",
    country: "BR",
  },
  // TODO: coordenadas reais (aprox. centro de Caraguatatuba)
  geo: { lat: -23.6206, lng: -45.4132 },
  // TODO: link real do Google Maps
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=SolMusic+Caraguatatuba",

  instagram: {
    // TODO: @ real
    handle: "solmusic",
    url: "https://instagram.com/solmusic",
  },

  /** Horários por dia da semana (índice = Date.getDay). */
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
  { label: "Contato", href: "/#contato" },
] as const;
