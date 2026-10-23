import { buildWaLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/icons";

export function WhatsAppFloat() {
  return (
    <a
      href={buildWaLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed z-50 inline-flex size-14 items-center justify-center rounded-full bg-accent text-on-accent shadow-lg glow-accent transition-transform hover:scale-105"
      style={{
        right: "max(1rem, env(safe-area-inset-right))",
        bottom: "max(1rem, env(safe-area-inset-bottom))",
      }}
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-accent opacity-60 motion-safe:animate-ping"
      />
      <WhatsAppIcon width={28} height={28} className="relative" />
    </a>
  );
}
