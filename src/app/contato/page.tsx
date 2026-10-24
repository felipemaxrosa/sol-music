import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { GoogleMap } from "@/components/ui/GoogleMap";
import { site } from "@/config/site";
import { formatHoursGroups } from "@/lib/hours";
import { buildWaLink } from "@/lib/whatsapp";
import {
  WhatsAppIcon,
  PhoneIcon,
  InstagramIcon,
  MapPinIcon,
  ArrowUpRightIcon,
} from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a SolMusic em Caraguatatuba — WhatsApp, telefone, endereço e horário. Atendimento de quem toca, para todo o Litoral Norte.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  const hours = formatHoursGroups([...site.hours]);
  const canais = [
    {
      icon: WhatsAppIcon,
      label: "WhatsApp",
      valor: site.phoneDisplay,
      href: buildWaLink(),
      external: true,
    },
    {
      icon: PhoneIcon,
      label: "Telefone",
      valor: site.phoneDisplay,
      href: `tel:+${site.whatsapp.phone}`,
      external: false,
    },
    {
      icon: InstagramIcon,
      label: "Instagram",
      valor: `@${site.instagram.handle}`,
      href: site.instagram.url,
      external: true,
    },
  ];

  return (
    <Section
      eyebrow="Fale com a gente"
      title="Contato"
      description="O jeito mais rápido é o WhatsApp — a gente responde na hora. Mas fica à vontade pra ligar, seguir no Instagram ou passar na loja."
    >
      {/* CTA WhatsApp em destaque */}
      <Reveal>
        <div className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-accent/30 bg-accent/5 p-6 sm:flex-row sm:items-center sm:p-8">
          <div className="flex items-center gap-4">
            <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-on-accent">
              <WhatsAppIcon width={24} height={24} />
            </span>
            <div>
              <h2 className="font-display text-xl font-bold">
                Chamar no WhatsApp
              </h2>
              <p className="text-sm text-muted">
                Dúvida de preço, disponibilidade ou encomenda? Manda ver.
              </p>
            </div>
          </div>
          <ButtonLink href={buildWaLink()} size="lg" className="w-full sm:w-auto">
            <WhatsAppIcon width={18} height={18} />
            Abrir conversa
          </ButtonLink>
        </div>
      </Reveal>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {/* Canais */}
        <Reveal>
          <div className="flex h-full flex-col gap-2 rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Canais
            </h2>
            {canais.map(({ icon: Icon, label, valor, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-xl px-2 py-3 transition-colors hover:bg-surface-2"
              >
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon width={20} height={20} />
                </span>
                <span className="flex flex-col">
                  <span className="text-sm text-muted">{label}</span>
                  <span className="font-medium text-fg transition-colors group-hover:text-accent">
                    {valor}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        {/* Endereço + horário */}
        <Reveal delay={100}>
          <div className="flex h-full flex-col gap-5 rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              A loja
            </h2>

            <div className="flex items-start gap-3">
              <MapPinIcon
                width={22}
                height={22}
                className="mt-0.5 shrink-0 text-accent"
              />
              <p className="text-fg/90">
                {site.address.street}
                <br />
                {site.address.city}/{site.address.region} ·{" "}
                {site.address.postalCode}
              </p>
            </div>

            <dl className="flex flex-col gap-1.5 text-sm">
              {hours.map((h) => (
                <div key={h.label} className="flex justify-between gap-6">
                  <dt className="text-muted">{h.label}</dt>
                  <dd className="tabular-nums text-fg/90">{h.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-auto pt-1">
              <ButtonLink href={site.mapsUrl} variant="outline">
                Como chegar
                <ArrowUpRightIcon width={18} height={18} />
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Mapa (Google Maps embutido) — sem reveal pra o iframe não "piscar" */}
      <GoogleMap
        query={`${site.geo.lat},${site.geo.lng}`}
        title={`Mapa da ${site.name} em ${site.city}/${site.region}`}
        className="mt-6 h-[380px]"
      />
    </Section>
  );
}
