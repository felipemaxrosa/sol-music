import { groq } from "next-sanity";

export const EQUIPE_QUERY = groq`*[_type == "membro" && !(_id in path("drafts.**"))] | order(ordem asc, _createdAt asc){
  _id,
  nome,
  "slug": slug.current,
  cargo,
  "fotoUrl": foto.asset->url,
  bio,
  especialidades,
  instrumentos,
  instagram
}`;

export const DESTAQUES_QUERY = groq`*[_type == "destaque" && !(_id in path("drafts.**"))] | order(ordem asc, _createdAt desc){
  _id,
  nome,
  "slug": slug.current,
  categoria,
  "imagensUrl": imagens[].asset->url,
  descricao,
  preco,
  precoLabel,
  whatsappMsg
}`;
