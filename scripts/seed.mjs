// Popula o dataset do Sanity com conteúdo de exemplo (equipe + destaques).
// Uso: node scripts/seed.mjs  (lê credenciais de .env.local)
import { readFileSync } from "node:fs";
import { createClient } from "@sanity/client";

const env = Object.fromEntries(
  readFileSync(new URL("../.env.local", import.meta.url), "utf8")
    .split("\n")
    .filter((l) => l && !l.startsWith("#") && l.includes("="))
    .map((l) => {
      const i = l.indexOf("=");
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
    }),
);

const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION,
  token: env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

const slug = (current) => ({ _type: "slug", current });

const equipe = [
  { id: "rafael-souza", nome: "Rafael Souza", cargo: "Fundador & Luthier", instagram: "rafasolmusic", especialidades: ["Regulagem & setup", "Consertos", "Cordas"], instrumentos: ["Violão", "Guitarra", "Baixo"], bio: "Toca desde os 12 e virou luthier por teimosia. Cuida da regulagem de cada instrumento que sai da loja como se fosse pro próprio palco." },
  { id: "marina-alves", nome: "Marina Alves", cargo: "Teclas & Sopros", instagram: "marina.teclas", especialidades: ["Teclados", "Sopros", "Primeira compra"], instrumentos: ["Teclado", "Sax", "Flauta"], bio: "Tecladista de igreja e de baile. Ajuda a escolher o teclado certo pro seu estilo e ainda ensina os primeiros atalhos." },
  { id: "diego-nunes", nome: "Diego Nunes", cargo: "Áudio & Palco", instagram: "diego.aovivo", especialidades: ["Áudio ao vivo", "Pedais", "Cabos"], instrumentos: ["Mesa de som", "Microfones"], bio: "Vive de PA e mesa de som pelo litoral. Monta seu set de microfones, cabos e pedais pensando no que o palco de verdade exige." },
  { id: "carla-mendes", nome: "Carla Mendes", cargo: "Atendimento & Encomendas", instagram: "carla.solmusic", especialidades: ["Atendimento", "Encomendas", "Acessórios"], instrumentos: ["Ukulele", "Percussão"], bio: "A voz do WhatsApp da loja. Acha o que você precisa, resolve encomenda e avisa quando chega — rápido, do jeito que músico gosta." },
];

const destaques = [
  { id: "violao-takamine-gd30", nome: "Violão Takamine GD30", categoria: "Cordas", preco: 2890, descricao: "Tampo em abeto, cordas de aço e aquele brilho que atravessa o salão. Ótimo primeiro violão sério ou segundo instrumento de palco." },
  { id: "guitarra-tagima-tw-55", nome: "Guitarra Tagima TW-55 Woodstock", categoria: "Cordas", preco: 1690, descricao: "Clássica no corpo e no som. Versátil do blues ao rock, com captadores single-coil que cortam bem na banda." },
  { id: "teclado-yamaha-psr-e383", nome: "Teclado Yamaha PSR-E383", categoria: "Teclas", preco: 1850, descricao: "61 teclas sensíveis ao toque, centenas de timbres e ritmos. Do ensaio em casa ao culto e ao bar." },
  { id: "pedal-boss-ds-1", nome: "Pedal Boss DS-1 Distortion", categoria: "Efeitos", preco: 650, descricao: "O distorção mais tocado do mundo. Simples, resistente e com aquele grão que todo mundo reconhece." },
  { id: "microfone-shure-sm58", nome: "Microfone Shure SM58", categoria: "Áudio", preco: 980, descricao: "O padrão de voz ao vivo. Aguenta o tranco do palco e entrega presença em qualquer PA." },
  { id: "bateria-acustica-kit", nome: "Bateria Acústica — kit completo", categoria: "Percussão", preco: null, precoLabel: "Sob consulta", descricao: "Kit completo com pratos e ferragens, montado e regulado na loja. Peça sob encomenda na cor que você quiser." },
];

const docs = [
  ...equipe.map((m, i) => ({
    _id: `membro.${m.id}`,
    _type: "membro",
    nome: m.nome,
    slug: slug(m.id),
    cargo: m.cargo,
    bio: m.bio,
    especialidades: m.especialidades,
    instrumentos: m.instrumentos,
    instagram: m.instagram,
    ordem: i + 1,
  })),
  ...destaques.map((d, i) => ({
    _id: `destaque.${d.id}`,
    _type: "destaque",
    nome: d.nome,
    slug: slug(d.id),
    categoria: d.categoria,
    descricao: d.descricao,
    ...(d.preco != null ? { preco: d.preco } : {}),
    ...(d.precoLabel ? { precoLabel: d.precoLabel } : {}),
    ordem: i + 1,
  })),
];

const tx = docs.reduce((t, d) => t.createOrReplace(d), client.transaction());
const res = await tx.commit();
console.log(`OK: ${res.results.length} documentos (${equipe.length} membros + ${destaques.length} destaques).`);
