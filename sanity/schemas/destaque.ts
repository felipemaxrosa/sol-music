import { defineType, defineField } from "sanity";

export const destaque = defineType({
  name: "destaque",
  title: "Destaques",
  type: "document",
  fields: [
    defineField({
      name: "nome",
      title: "Nome",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "nome", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "categoria", title: "Categoria", type: "string" }),
    defineField({
      name: "imagens",
      title: "Fotos",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      options: { layout: "grid" },
    }),
    defineField({ name: "descricao", title: "Descrição", type: "text", rows: 4 }),
    defineField({
      name: "preco",
      title: "Preço (R$)",
      type: "number",
      description: "Deixe vazio para mostrar 'Sob consulta'.",
    }),
    defineField({
      name: "precoLabel",
      title: "Rótulo quando sem preço",
      type: "string",
      description: "Padrão: 'Sob consulta'.",
    }),
    defineField({
      name: "whatsappMsg",
      title: "Mensagem de WhatsApp (opcional)",
      type: "text",
      rows: 2,
      description: "Sobrescreve a mensagem padrão ao clicar em 'Tenho interesse'.",
    }),
    defineField({
      name: "ordem",
      title: "Ordem de exibição",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Ordem",
      name: "ordemAsc",
      by: [{ field: "ordem", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "nome", subtitle: "categoria", media: "imagens.0" },
  },
});
