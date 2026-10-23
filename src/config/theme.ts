export type ThemeName = "palco" | "por-do-sol";

/**
 * Tema visual ativo do site.
 *
 * Para reskinar o site inteiro de C (Palco) para A (Pôr do Sol):
 *   1. Troque este valor para "por-do-sol".
 *   2. Troque o par de fontes em src/lib/fonts.ts (bloco comentado).
 * Nenhum componente precisa mudar — tudo lê os tokens em globals.css.
 */
export const ACTIVE_THEME: ThemeName = "palco";

/** Cor do navegador (<meta name="theme-color">) por tema. */
export const themeColor: Record<ThemeName, string> = {
  palco: "#0E0E12",
  "por-do-sol": "#15122B",
};
