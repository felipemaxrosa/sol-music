import type { Destaque, Membro } from "@/lib/sanity/types";

/**
 * Conteúdo de exemplo usado enquanto o Sanity está vazio.
 * Mesma forma das queries GROQ — ao ligar o CMS, basta trocar a fonte.
 * TODO(cliente): substituir por produtos/equipe reais com fotos.
 */

export const mockDestaques: Destaque[] = [
  {
    _id: "d1",
    nome: "Violão Takamine GD30",
    slug: "violao-takamine-gd30",
    categoria: "Cordas",
    imagensUrl: [],
    descricao:
      "Tampo em abeto, cordas de aço e aquele brilho que atravessa o salão. Ótimo primeiro violão sério ou segundo instrumento de palco.",
    preco: 2890,
  },
  {
    _id: "d2",
    nome: "Guitarra Tagima TW-55 Woodstock",
    slug: "guitarra-tagima-tw-55",
    categoria: "Cordas",
    imagensUrl: [],
    descricao:
      "Clássica no corpo e no som. Versátil do blues ao rock, com captadores single-coil que cortam bem na banda.",
    preco: 1690,
  },
  {
    _id: "d3",
    nome: "Teclado Yamaha PSR-E383",
    slug: "teclado-yamaha-psr-e383",
    categoria: "Teclas",
    imagensUrl: [],
    descricao:
      "61 teclas sensíveis ao toque, centenas de timbres e ritmos. Do ensaio em casa ao culto e ao bar.",
    preco: 1850,
  },
  {
    _id: "d4",
    nome: "Pedal Boss DS-1 Distortion",
    slug: "pedal-boss-ds-1",
    categoria: "Efeitos",
    imagensUrl: [],
    descricao:
      "O distorção mais tocado do mundo. Simples, resistente e com aquele grão que todo mundo reconhece.",
    preco: 650,
  },
  {
    _id: "d5",
    nome: "Microfone Shure SM58",
    slug: "microfone-shure-sm58",
    categoria: "Áudio",
    imagensUrl: [],
    descricao:
      "O padrão de voz ao vivo. Aguenta o tranco do palco e entrega presença em qualquer PA.",
    preco: 980,
  },
  {
    _id: "d6",
    nome: "Bateria Acústica — kit completo",
    slug: "bateria-acustica-kit",
    categoria: "Percussão",
    imagensUrl: [],
    descricao:
      "Kit completo com pratos e ferragens, montado e regulado na loja. Peça sob encomenda na cor que você quiser.",
    preco: null,
    precoLabel: "Sob consulta",
  },
];

export const mockEquipe: Membro[] = [
  {
    _id: "m1",
    nome: "Rafael Souza",
    slug: "rafael-souza",
    cargo: "Fundador & Luthier",
    fotoUrl: "",
    bio: "Toca desde os 12 e virou luthier por teimosia. Cuida da regulagem de cada instrumento que sai da loja como se fosse pro próprio palco.",
    especialidades: ["Regulagem & setup", "Consertos", "Cordas"],
    instrumentos: ["Violão", "Guitarra", "Baixo"],
    instagram: "rafasolmusic",
  },
  {
    _id: "m2",
    nome: "Marina Alves",
    slug: "marina-alves",
    cargo: "Teclas & Sopros",
    fotoUrl: "",
    bio: "Tecladista de igreja e de baile. Ajuda a escolher o teclado certo pro seu estilo e ainda ensina os primeiros atalhos.",
    especialidades: ["Teclados", "Sopros", "Primeira compra"],
    instrumentos: ["Teclado", "Sax", "Flauta"],
    instagram: "marina.teclas",
  },
  {
    _id: "m3",
    nome: "Diego Nunes",
    slug: "diego-nunes",
    cargo: "Áudio & Palco",
    fotoUrl: "",
    bio: "Vive de PA e mesa de som pelo litoral. Monta seu set de microfones, cabos e pedais pensando no que o palco de verdade exige.",
    especialidades: ["Áudio ao vivo", "Pedais", "Cabos"],
    instrumentos: ["Mesa de som", "Microfones"],
    instagram: "diego.aovivo",
  },
  {
    _id: "m4",
    nome: "Carla Mendes",
    slug: "carla-mendes",
    cargo: "Atendimento & Encomendas",
    fotoUrl: "",
    bio: "A voz do WhatsApp da loja. Acha o que você precisa, resolve encomenda e avisa quando chega — rápido, do jeito que músico gosta.",
    especialidades: ["Atendimento", "Encomendas", "Acessórios"],
    instrumentos: ["Ukulele", "Percussão"],
    instagram: "carla.solmusic",
  },
];
