import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { OpenNowBadge } from "@/components/sections/OpenNowBadge";
import { site } from "@/config/site";
import { formatHoursGroups } from "@/lib/hours";
import { buildWaLink } from "@/lib/whatsapp";
import {
  MapPinIcon,
  ArrowUpRightIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";

export function Localizacao() {
  const hours = formatHoursGroups([...site.hours]);

  return (
    <Section id="localizacao" eyebrow="Onde estamos" title="Venha tocar na loja">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
        <Reveal>
          <div className="flex h-full flex-col gap-5 rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <OpenNowBadge />

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

            <div>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
                Horário
              </h3>
              <dl className="flex flex-col gap-1.5 text-sm">
                {hours.map((h) => (
                  <div key={h.label} className="flex justify-between gap-6">
                    <dt className="text-muted">{h.label}</dt>
                    <dd className="tabular-nums text-fg/90">{h.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-auto flex flex-wrap gap-3 pt-2">
              <ButtonLink href={site.mapsUrl}>
                Como chegar
                <ArrowUpRightIcon width={18} height={18} />
              </ButtonLink>
              <ButtonLink href={buildWaLink()} variant="outline">
                <WhatsAppIcon width={18} height={18} />
                WhatsApp
              </ButtonLink>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir a localização no Google Maps"
            className="group relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-2xl border border-border"
          >
            {/* "mapa" estilizado (placeholder enquanto não há embed real) */}
            <span
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(90% 90% at 50% 0%, color-mix(in oklab, var(--accent) 14%, transparent), transparent 60%), var(--surface-2)",
              }}
            />
            <span
              aria-hidden
              className="absolute inset-0 opacity-40"
              style={{
                background:
                  "repeating-linear-gradient(0deg, transparent 0 38px, color-mix(in oklab, var(--border) 70%, transparent) 38px 39px), repeating-linear-gradient(90deg, transparent 0 38px, color-mix(in oklab, var(--border) 70%, transparent) 38px 39px)",
              }}
            />
            <span className="relative flex flex-col items-center gap-3 text-center">
              <span className="inline-flex size-14 items-center justify-center rounded-full bg-accent text-on-accent glow-accent">
                <MapPinIcon width={26} height={26} />
              </span>
              <span className="font-display text-lg font-bold text-fg">
                {site.city}/{site.region}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-bg/70 px-3 py-1 text-xs text-fg backdrop-blur transition-colors group-hover:text-accent">
                Abrir no Google Maps
                <ArrowUpRightIcon width={14} height={14} />
              </span>
            </span>
          </a>
        </Reveal>
      </div>
    </Section>
  );
}
