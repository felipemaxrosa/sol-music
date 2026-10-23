import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/config/site";
import { InstagramIcon } from "@/components/ui/icons";

// TODO(cliente): substituir por depoimentos reais (com autorização).
const depoimentos = [
  {
    quote:
      "Desci de Ilhabela só pra comprar aqui e valeu cada minuto. Atendimento de quem entende de verdade.",
    autor: "João P.",
    origem: "Baterista · Ilhabela",
  },
  {
    quote:
      "Me ajudaram a escolher meu primeiro teclado sem empurrar o mais caro. Saí tocando.",
    autor: "Letícia M.",
    origem: "Tecladista · Caraguatatuba",
  },
  {
    quote:
      "Regulagem impecável no meu violão. Virou meu ponto fixo no litoral.",
    autor: "Marcos R.",
    origem: "Violonista · São Sebastião",
  },
];

export function ProvaSocial() {
  return (
    <Section eyebrow="Quem toca com a gente" title="O que dizem os músicos">
      <div className="grid gap-6 md:grid-cols-3">
        {depoimentos.map((d, i) => (
          <Reveal key={d.autor} delay={(i % 3) * 80}>
            <figure className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-surface p-6">
              <span
                aria-hidden
                className="font-display text-4xl leading-none text-accent"
              >
                &ldquo;
              </span>
              <blockquote className="flex-1 text-fg/90">{d.quote}</blockquote>
              <figcaption className="text-sm">
                <span className="font-semibold text-fg">{d.autor}</span>
                <span className="block text-muted">{d.origem}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-accent/30 bg-accent/5 p-6 sm:flex-row sm:items-center sm:p-8">
          <div className="flex items-center gap-4">
            <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-accent text-on-accent">
              <InstagramIcon width={24} height={24} />
            </span>
            <div>
              <h3 className="font-display text-lg font-bold">
                O dia a dia da loja no Instagram
              </h3>
              <p className="text-sm text-muted">
                Novidades, chegadas e bastidores — @{site.instagram.handle}
              </p>
            </div>
          </div>
          <ButtonLink href={site.instagram.url} size="lg">
            <InstagramIcon width={18} height={18} />
            Seguir
          </ButtonLink>
        </div>
      </Reveal>
    </Section>
  );
}
