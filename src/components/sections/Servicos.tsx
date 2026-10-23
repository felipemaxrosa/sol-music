import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import {
  WrenchIcon,
  NoteIcon,
  SparklesIcon,
  TruckIcon,
} from "@/components/ui/icons";

// TODO(cliente): confirmar quais serviços a loja oferece de fato.
const servicos = [
  {
    icon: WrenchIcon,
    titulo: "Regulagem & setup",
    desc: "Ação, oitavas e tensão no ponto. Seu instrumento tocando macio.",
  },
  {
    icon: NoteIcon,
    titulo: "Troca de cordas",
    desc: "Cordas novas na hora, com limpeza do braço e ajuste fino.",
  },
  {
    icon: SparklesIcon,
    titulo: "Conserto & manutenção",
    desc: "Eletrônica, trastes e pequenos reparos que devolvem a vida ao som.",
  },
  {
    icon: TruckIcon,
    titulo: "Encomendas",
    desc: "Não tem na vitrine? A gente traz o modelo e a cor que você quer.",
  },
];

export function Servicos() {
  return (
    <Section
      eyebrow="Serviços"
      title="Além da venda"
      description="A loja também cuida do seu instrumento depois que ele vai pra casa."
      className="bg-surface/30"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {servicos.map(({ icon: Icon, titulo, desc }, i) => (
          <Reveal key={titulo} delay={(i % 4) * 70}>
            <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface p-6">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Icon width={22} height={22} />
              </span>
              <h3 className="font-display text-base font-bold">{titulo}</h3>
              <p className="text-sm text-muted">{desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
