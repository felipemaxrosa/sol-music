import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { DestaquesGrid } from "@/components/destaques/DestaquesGrid";
import { mockDestaques } from "@/lib/sanity/mock";

export const metadata: Metadata = {
  title: "Destaques",
  description:
    "Alguns instrumentos e equipamentos em destaque na SolMusic. Toque para ver as fotos e fale no WhatsApp para confirmar disponibilidade.",
  alternates: { canonical: "/destaques" },
};

export default function DestaquesPage() {
  return (
    <Section
      eyebrow="Vitrine"
      title="Destaques da loja"
      description="Uma seleção do que tem na SolMusic agora. Toque num item para ver as fotos e a descrição — e fale no WhatsApp para preço atualizado e disponibilidade."
    >
      <DestaquesGrid items={mockDestaques} />
    </Section>
  );
}
