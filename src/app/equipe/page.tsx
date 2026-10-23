import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { TeamGrid } from "@/components/equipe/TeamGrid";
import { mockEquipe } from "@/lib/sanity/mock";

export const metadata: Metadata = {
  title: "Equipe",
  description:
    "Conheça quem atende você na SolMusic — músicos que entendem de palco, regulagem e do som que o Litoral Norte precisa.",
  alternates: { canonical: "/equipe" },
};

export default function EquipePage() {
  return (
    <Section
      eyebrow="Gente da casa"
      title="A equipe SolMusic"
      description="Toque no card para ver o perfil de cada um e falar direto no WhatsApp."
    >
      <TeamGrid membros={mockEquipe} />
    </Section>
  );
}
