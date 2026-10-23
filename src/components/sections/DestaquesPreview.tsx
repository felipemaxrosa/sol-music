import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { DestaqueCard } from "@/components/destaques/DestaqueCard";
import { ArrowRightIcon } from "@/components/ui/icons";
import { getDestaques } from "@/lib/sanity/data";

export async function DestaquesPreview() {
  const items = (await getDestaques()).slice(0, 3);

  return (
    <Section
      id="destaques"
      eyebrow="Destaques"
      title="Direto da vitrine"
      description="Uma amostra do que tem na loja agora. Fale no WhatsApp para confirmar disponibilidade e condições."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={it._id} delay={(i % 3) * 80}>
            <DestaqueCard item={it} />
          </Reveal>
        ))}
      </div>

      <div className="mt-10">
        <ButtonLink href="/destaques" variant="outline" size="lg">
          Ver todos os destaques
          <ArrowRightIcon width={18} height={18} />
        </ButtonLink>
      </div>
    </Section>
  );
}
