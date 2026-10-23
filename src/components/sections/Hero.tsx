import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { buildWaLink } from "@/lib/whatsapp";
import { site } from "@/config/site";
import { WhatsAppIcon, ArrowRightIcon } from "@/components/ui/icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Refletor dourado (usa o token --accent, então acompanha o tema) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px]"
        style={{
          background:
            "radial-gradient(60% 70% at 50% -8%, color-mix(in oklab, var(--accent) 26%, transparent), transparent 62%)",
        }}
      />

      {/* Logo como marca d'água, alinhada à direita do conteúdo (mesmo container do header) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden items-center lg:flex"
      >
        <Container className="flex justify-end">
          <Image
            src="/logo.png"
            alt=""
            width={560}
            height={560}
            className="h-auto w-[clamp(300px,30vw,480px)] opacity-[0.12]"
          />
        </Container>
      </div>

      <Container className="relative flex flex-col gap-6 pb-16 pt-14 sm:pt-20 lg:pb-28">
        <p className="inline-flex self-start items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-2">
          Ao vivo em {site.city}/{site.region}
        </p>

        <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">
          O palco é seu.
          <br />O{" "}
          <span
            className="text-accent"
            style={{
              textShadow:
                "0 0 32px color-mix(in oklab, var(--accent) 45%, transparent)",
            }}
          >
            som
          </span>{" "}
          é nosso.
        </h1>

        <p className="max-w-xl text-base text-muted sm:text-lg">
          Da primeira palhetada ao show lotado — instrumentos, acessórios e o
          atendimento de quem toca, pertinho de casa no Litoral Norte.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <ButtonLink href="/destaques" size="lg">
            Ver destaques
            <ArrowRightIcon width={18} height={18} />
          </ButtonLink>
          <ButtonLink href={buildWaLink()} variant="outline" size="lg">
            <WhatsAppIcon width={18} height={18} />
            Falar no WhatsApp
          </ButtonLink>
        </div>

        <p className="pt-4 text-sm text-muted">
          Caraguatatuba · Ilhabela · São Sebastião · Ubatuba
        </p>
      </Container>
    </section>
  );
}
