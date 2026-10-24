import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import {
  CheckIcon,
  WhatsAppIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  SparklesIcon,
  NoteIcon,
  WrenchIcon,
  MapPinIcon,
  UsersIcon,
  SearchIcon,
  PhoneIcon,
} from "@/components/ui/icons";

const LIVE_URL = "https://sol-music-chi.vercel.app";

// WhatsApp do desenvolvedor (contato da proposta — NÃO é o da loja)
const PROPOSTA_WHATSAPP = "5512981472329";
const propostaWa = (msg: string) =>
  `https://wa.me/${PROPOSTA_WHATSAPP}?text=${encodeURIComponent(msg)}`;

export const metadata: Metadata = {
  title: "Proposta",
  description: "Proposta da landing page da SolMusic.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/proposta" },
};

const beneficios = [
  {
    icon: SparklesIcon,
    titulo: "Cara de marca de verdade",
    desc: "Visual profissional no tema do seu logo — o pôr do sol dourado. Passa o recado na hora: 'vale a viagem até aqui'.",
  },
  {
    icon: MapPinIcon,
    titulo: "Achável no Google",
    desc: "Otimizada pra busca local e marcada como loja de música pro Google/Maps. Quem procura 'instrumentos em Caraguatatuba' encontra a SolMusic.",
  },
  {
    icon: WhatsAppIcon,
    titulo: "Feita pra vender",
    desc: "Botão de WhatsApp em tudo, com mensagem já pronta. Destaques com 'tenho interesse', 'como chegar' e horário. Cada clique vira conversa.",
  },
  {
    icon: WrenchIcon,
    titulo: "Você no controle",
    desc: "Troca produtos, fotos e equipe quando quiser, sem depender de programador — por um painel simples (o CMS).",
  },
];

const paginas = [
  {
    icon: SparklesIcon,
    nome: "Início",
    vantagem:
      "A vitrine principal: em segundos o visitante entende o que a SolMusic é e por que vale a visita.",
  },
  {
    icon: NoteIcon,
    nome: "Destaques",
    vantagem:
      "Produtos com foto, preço e botão de WhatsApp — a prateleira que vende até fora do horário da loja.",
  },
  {
    icon: UsersIcon,
    nome: "Equipe",
    vantagem:
      "As pessoas por trás do balcão. Mostra que tem gente que entende atendendo — confiança que fecha venda.",
  },
  {
    icon: MapPinIcon,
    nome: "Contato",
    vantagem:
      "Endereço, horário, telefone e mapa do Google com 'como chegar'. Acaba o 'não sei onde fica'.",
  },
];

const recursos = [
  {
    icon: WhatsAppIcon,
    nome: "WhatsApp em tudo",
    vantagem:
      "Cada botão abre conversa com mensagem já pronta. Resposta rápida vira venda.",
  },
  {
    icon: WrenchIcon,
    nome: "Você edita sozinho",
    vantagem:
      "Troca produtos, fotos e equipe num painel simples, sem pagar programador a cada mudança.",
  },
  {
    icon: SearchIcon,
    nome: "Achável no Google",
    vantagem:
      "Marcada como loja de música pro Google/Maps — quem busca na região encontra você.",
  },
  {
    icon: PhoneIcon,
    nome: "Rápido no celular",
    vantagem:
      "Abre voando no celular, que é onde a maioria dos clientes vai ver o site.",
  },
];

const precisamos = [
  {
    n: "1",
    titulo: "Domínio",
    desc: "Um endereço próprio (ex.: solmusic.com.br), registrado no registro.br.",
  },
  {
    n: "2",
    titulo: "E-mail da marca",
    desc: "Um e-mail no domínio (ex.: contato@solmusic.com.br) pra passar seriedade.",
  },
  {
    n: "3",
    titulo: "Conteúdo",
    desc: "Fotos boas, textos, a lista de produtos/destaques e as pessoas da equipe.",
  },
  {
    n: "4",
    titulo: "Google Meu Negócio",
    desc: "Perfil ativo e caprichado — eu ajudo a conectar com o site.",
  },
];

export default function PropostaPage() {
  return (
    <>
      {/* Hero da proposta */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[520px]"
          style={{
            background:
              "radial-gradient(60% 70% at 50% -8%, color-mix(in oklab, var(--accent) 24%, transparent), transparent 62%)",
          }}
        />
        <Container className="relative flex flex-col items-start gap-6 pb-14 pt-14 sm:pt-20">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-2">
              Proposta · SolMusic
            </p>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.03] sm:text-6xl">
              Felipe, a SolMusic merece ser a{" "}
              <span
                className="text-accent"
                style={{
                  textShadow:
                    "0 0 32px color-mix(in oklab, var(--accent) 45%, transparent)",
                }}
              >
                primeira
              </span>{" "}
              que aparece.
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="max-w-2xl text-base text-muted sm:text-lg">
              Hoje quem procura instrumento no Litoral Norte só te acha no
              Instagram — e só se já te conhece. Uma landing page profissional
              coloca a SolMusic na frente de quem <em>ainda não</em> te conhece,
              e transforma o “só dei uma olhada” em cliente dentro da loja.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <ButtonLink href={LIVE_URL} size="lg">
                Ver o site no ar
                <ArrowUpRightIcon width={18} height={18} />
              </ButtonLink>
              <ButtonLink
                href={propostaWa(
                  "Olá! Vi a proposta do site da SolMusic e quero conversar.",
                )}
                variant="outline"
                size="lg"
              >
                <WhatsAppIcon width={18} height={18} />
                Falar no WhatsApp
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Por que vale */}
      <Section
        eyebrow="Por que isso muda o jogo"
        title="Seu cliente pesquisa antes de descer a serra"
      >
        <Reveal>
          <p className="max-w-3xl text-lg text-muted">
            Músicos de Caraguá, Ilhabela, São Sebastião e Ubatuba abrem o Google
            antes de pegar a estrada. Se a SolMusic não aparece — ou aparece sem
            jeito — a venda vai pro concorrente. O site é a sua{" "}
            <span className="text-fg">vitrine aberta 24 horas</span>: com a cara
            da marca, passando autoridade e puxando o cliente direto pro
            WhatsApp e pra loja.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {beneficios.map(({ icon: Icon, titulo, desc }, i) => (
            <Reveal key={titulo} delay={(i % 2) * 90}>
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface p-6">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon width={22} height={22} />
                </span>
                <h3 className="font-display text-lg font-bold">{titulo}</h3>
                <p className="text-sm text-muted">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Recursos / páginas — já no ar */}
      <Section
        eyebrow="Não é promessa — já está no ar"
        title="O que o site tem, e o que isso faz pela loja"
        className="bg-surface/30"
      >
        {/* As 4 páginas */}
        <div className="grid gap-5 sm:grid-cols-2">
          {paginas.map(({ icon: Icon, nome, vantagem }, i) => (
            <Reveal key={nome} delay={(i % 2) * 90}>
              <div className="flex h-full gap-4 rounded-2xl border border-border bg-surface p-6">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon width={22} height={22} />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-accent-2">
                    Página
                  </p>
                  <h3 className="font-display text-lg font-bold">{nome}</h3>
                  <p className="mt-1 text-sm text-muted">{vantagem}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Recursos por baixo */}
        <Reveal>
          <h3 className="mb-5 mt-12 font-display text-xl font-bold">
            E, por baixo, trabalhando por você:
          </h3>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {recursos.map(({ icon: Icon, nome, vantagem }, i) => (
            <Reveal key={nome} delay={(i % 4) * 70}>
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface p-5">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon width={20} height={20} />
                </span>
                <h4 className="font-display text-base font-bold">{nome}</h4>
                <p className="text-sm text-muted">{vantagem}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Não é e-commerce + explorar */}
        <Reveal delay={120}>
          <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-accent/30 bg-accent/5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <p className="max-w-2xl text-sm text-muted">
              Pra deixar claro: <span className="text-fg">não é loja virtual</span>.
              É a vitrine que leva o cliente até você — WhatsApp e visita à loja —
              sem a complicação de pagamento online e estoque.
            </p>
            <ButtonLink href={LIVE_URL} size="lg" className="shrink-0">
              Explorar ao vivo
              <ArrowUpRightIcon width={18} height={18} />
            </ButtonLink>
          </div>
        </Reveal>
      </Section>

      {/* Preços */}
      <Section
        eyebrow="Investimento"
        title="Dois jeitos de fazer acontecer"
        description="Escolhe o que combina com o momento da loja. Em ambos, o site já entregue é este que você está vendo."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Pacote recomendado */}
          <Reveal>
            <div className="relative flex h-full flex-col gap-5 rounded-2xl border border-accent/50 bg-surface p-7 glow-accent">
              <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-on-accent">
                Recomendado
              </span>
              <div>
                <h3 className="font-display text-xl font-bold">
                  Site + Manutenção
                </h3>
                <p className="mt-1 text-sm text-muted">
                  O site sempre atualizado, sem dor de cabeça.
                </p>
              </div>
              <div className="flex flex-wrap items-end gap-x-3 gap-y-1">
                <span className="text-lg text-muted line-through">R$ 2.000</span>
                <span className="font-display text-4xl font-extrabold text-accent">
                  R$ 1.750
                </span>
                <span className="text-sm text-muted">+ R$ 140/mês</span>
              </div>
              <ul className="flex flex-col gap-2 text-sm">
                {[
                  "Tudo que já está no ar",
                  "Rodadas de ajuste toda semana",
                  "Produtos, fotos e textos sempre em dia",
                  "Correções e pequenas melhorias inclusas",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckIcon width={16} height={16} className="mt-0.5 shrink-0 text-accent" />
                    <span className="text-fg/90">{f}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink
                href={propostaWa("Olá! Quero fechar a proposta do site da SolMusic (Site + Manutenção).")}
                size="lg"
                className="mt-auto w-full"
              >
                <WhatsAppIcon width={18} height={18} />
                Quero esse
              </ButtonLink>
            </div>
          </Reveal>

          {/* Pacote avulso */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col gap-5 rounded-2xl border border-border bg-surface p-7">
              <div>
                <h3 className="font-display text-xl font-bold">Site Avulso</h3>
                <p className="mt-1 text-sm text-muted">
                  Entrega única; ajustes só quando precisar.
                </p>
              </div>
              <div className="flex flex-wrap items-end gap-x-3 gap-y-1">
                <span className="font-display text-4xl font-extrabold text-fg">
                  R$ 2.250
                </span>
                <span className="text-sm text-muted">à vista</span>
              </div>
              <ul className="flex flex-col gap-2 text-sm">
                {[
                  "Tudo que já está no ar",
                  "Entrega única, pronto pra usar",
                  "Ajustes depois: R$ 250 por rodada",
                  "Você cuida do conteúdo pelo painel",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckIcon width={16} height={16} className="mt-0.5 shrink-0 text-muted" />
                    <span className="text-fg/90">{f}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink
                href={propostaWa("Olá! Quero fechar a proposta do site da SolMusic (Site Avulso).")}
                variant="outline"
                size="lg"
                className="mt-auto w-full"
              >
                <WhatsAppIcon width={18} height={18} />
                Quero esse
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* O que preciso de você */}
      <Section
        eyebrow="Pra colocar de pé"
        title="O que eu preciso de você"
        className="bg-surface/30"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {precisamos.map(({ n, titulo, desc }, i) => (
            <Reveal key={n} delay={(i % 4) * 70}>
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface p-6">
                <span className="font-display text-2xl font-extrabold text-accent/50">
                  {n}
                </span>
                <h3 className="font-display text-base font-bold">{titulo}</h3>
                <p className="text-sm text-muted">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Fechamento */}
      <Section>
        <Reveal>
          <div className="flex flex-col items-center gap-6 rounded-3xl border border-border bg-surface px-6 py-14 text-center">
            <NoteIcon width={32} height={32} className="text-accent" />
            <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">
              Bora colocar a SolMusic ainda mais no topo?
            </h2>
            <p className="max-w-xl text-muted">
              Me chama no WhatsApp que a gente acerta os detalhes e põe o site
              pra trabalhar pela loja todo dia.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <ButtonLink
                href={propostaWa("Olá! Vi a proposta do site da SolMusic e quero conversar.")}
                size="lg"
              >
                <WhatsAppIcon width={18} height={18} />
                Falar agora
              </ButtonLink>
              <ButtonLink href={LIVE_URL} variant="outline" size="lg">
                Explorar o site ao vivo
                <ArrowRightIcon width={18} height={18} />
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
