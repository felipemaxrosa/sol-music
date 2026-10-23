import { site } from "@/config/site";

/**
 * Monta um link wa.me com mensagem pré-preenchida.
 * @param message Texto da conversa (default = mensagem padrão do site).
 * @param phone   Número no formato wa.me (DDI+DDD+número, só dígitos).
 */
export function buildWaLink(
  message: string = site.whatsapp.defaultMessage,
  phone: string = site.whatsapp.phone,
): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/** Mensagem de interesse em um produto específico dos Destaques. */
export function produtoWaMessage(nome: string): string {
  return `Olá! Tenho interesse no ${nome} que vi nos Destaques do site. Pode me passar mais detalhes? 🎸`;
}
