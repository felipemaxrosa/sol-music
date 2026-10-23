import { Hero } from "@/components/sections/Hero";
import { Sobre } from "@/components/sections/Sobre";
import { DestaquesPreview } from "@/components/sections/DestaquesPreview";
import { Servicos } from "@/components/sections/Servicos";
import { Localizacao } from "@/components/sections/Localizacao";
import { ProvaSocial } from "@/components/sections/ProvaSocial";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Sobre />
      <DestaquesPreview />
      <Servicos />
      <Localizacao />
      <ProvaSocial />
    </>
  );
}
