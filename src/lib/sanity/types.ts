/** Shapes que o front consome. As queries GROQ (Fase Sanity) devolvem isto. */

export type Membro = {
  _id: string;
  nome: string;
  slug: string;
  cargo: string;
  /** URL resolvida da foto (Sanity image url). Vazio = usa placeholder. */
  fotoUrl?: string;
  bio: string;
  especialidades: string[];
  instrumentos: string[];
  instagram?: string;
};

export type Destaque = {
  _id: string;
  nome: string;
  slug: string;
  categoria?: string;
  /** URLs resolvidas das imagens. Vazio = usa placeholder. */
  imagensUrl: string[];
  descricao: string;
  /** null/undefined => "Sob consulta" */
  preco?: number | null;
  precoLabel?: string;
  /** Override da mensagem de WhatsApp para este produto. */
  whatsappMsg?: string;
};
