import { defineType, defineField } from "sanity";

export const membro = defineType({
  name: "membro",
  title: "Equipe",
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
    defineField({ name: "cargo", title: "Cargo / função", type: "string" }),
    defineField({
      name: "foto",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "bio", title: "Bio", type: "text", rows: 4 }),
    defineField({
      name: "especialidades",
      title: "Especialidades",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "instrumentos",
      title: "Instrumentos",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "instagram",
      title: "Instagram (sem @)",
      type: "string",
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
  preview: { select: { title: "nome", subtitle: "cargo", media: "foto" } },
});
