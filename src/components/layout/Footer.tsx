import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { AnoAtual } from "@/components/layout/AnoAtual";
import { nav, site } from "@/config/site";
import { buildWaLink } from "@/lib/whatsapp";
import { formatHoursGroups } from "@/lib/hours";
import {
  InstagramIcon,
  MapPinIcon,
  ClockIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";

export function Footer() {
  const hours = formatHoursGroups([...site.hours]);

  return (
    <footer
      id="contato"
      className="mt-24 border-t border-border bg-surface/40"
      style={{ scrollMarginTop: "5rem" }}
    >
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Marca */}
        <div className="flex flex-col gap-4">
          <Logo width={84} height={84} />
          <p className="max-w-xs text-sm text-muted">
            Instrumentos, acessórios e o atendimento de quem toca — para os
            músicos de todo o Litoral Norte.
          </p>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
          >
            <InstagramIcon width={18} height={18} />@{site.instagram.handle}
          </a>
        </div>

        {/* Navegação */}
        <nav aria-label="Rodapé" className="flex flex-col gap-3">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Navegar
          </h2>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="w-fit text-sm text-fg/90 transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Contato */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Contato
          </h2>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 text-sm text-fg/90 transition-colors hover:text-accent"
          >
            <MapPinIcon width={18} height={18} className="mt-0.5 shrink-0" />
            <span>
              {site.address.street}
              <br />
              {site.address.city}/{site.address.region}
            </span>
          </a>
          <a
            href={`tel:+${site.whatsapp.phone}`}
            className="flex items-center gap-2 text-sm text-fg/90 transition-colors hover:text-accent"
          >
            <PhoneIcon width={18} height={18} className="shrink-0" />
            {site.phoneDisplay}
          </a>
          <a
            href={buildWaLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-fg/90 transition-colors hover:text-accent"
          >
            <WhatsAppIcon width={18} height={18} className="shrink-0" />
            WhatsApp
          </a>
        </div>

        {/* Horário */}
        <div className="flex flex-col gap-3">
          <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            <ClockIcon width={16} height={16} /> Horário
          </h2>
          <dl className="flex flex-col gap-1.5 text-sm">
            {hours.map((h) => (
              <div key={h.label} className="flex justify-between gap-4">
                <dt className="text-muted">{h.label}</dt>
                <dd className="tabular-nums text-fg/90">{h.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted sm:flex-row">
          <p>
            © <AnoAtual fallback={2026} /> {site.legalName}. Todos os direitos
            reservados.
          </p>
          <p>{site.city}/{site.region} · Litoral Norte</p>
        </Container>
      </div>
    </footer>
  );
}
