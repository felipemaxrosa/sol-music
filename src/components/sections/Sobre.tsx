import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import {
  WrenchIcon,
  WhatsAppIcon,
  TruckIcon,
  MapPinIcon,
} from "@/components/ui/icons";

const valores = [
  {
    icon: WrenchIcon,
    titulo: "Regulagem inclusa",
    desc: "Todo instrumento sai ajustado e pronto pra tocar.",
  },
  {
    icon: WhatsAppIcon,
    titulo: "Resposta rápida",
    desc: "Tirou dúvida no WhatsApp? A gente responde na hora.",
  },
  {
    icon: TruckIcon,
    titulo: "Encomendas",
    desc: "Não tem na loja? A gente traz o que você precisa.",
  },
  {
    icon: MapPinIcon,
    titulo: "Todo o Litoral",
    desc: "Caraguá, Ilhabela, São Sebastião e Ubatuba.",
  },
];

export function Sobre() {
  return (
    <Section id="sobre" eyebrow="A loja" title="Feita por músicos, para músicos">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <Reveal>
          <div className="flex max-w-prose flex-col gap-4 text-muted">
            <p>
              A SolMusic nasceu do balcão onde músico conversa com músico. Aqui
              ninguém empurra o mais caro — a gente ajuda a achar o instrumento
              certo pro seu momento, do primeiro violão ao equipamento de palco.
            </p>
            <p>
              Somos ponto de encontro de quem faz música no Litoral Norte.
              Instrumentos, acessórios, cordas, palhetas e manutenção, com o
              atendimento de quem também sobe no palco no fim de semana.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ul className="grid grid-cols-2 gap-4">
            {valores.map(({ icon: Icon, titulo, desc }) => (
              <li
                key={titulo}
                className="flex flex-col gap-2 rounded-2xl border border-border bg-surface p-5"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon width={20} height={20} />
                </span>
                <h3 className="font-display text-base font-bold">{titulo}</h3>
                <p className="text-sm text-muted">{desc}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
