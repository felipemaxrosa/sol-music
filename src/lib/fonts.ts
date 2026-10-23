import { ACTIVE_THEME, type ThemeName } from "@/config/theme";

/**
 * Fontes carregadas via <link> do Google Fonts (runtime, no navegador) em vez
 * de next/font (que faz fetch no build). As famílias viram CSS vars
 * (--ff-display / --ff-body) em globals.css, por tema.
 *
 * Para trocar o tema ativo, basta ACTIVE_THEME em src/config/theme.ts — o href
 * certo é escolhido aqui automaticamente.
 */
export const fontHref: Record<ThemeName, string> = {
  palco:
    "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700;12..96,800&family=Instrument+Sans:wght@400;500;600;700&display=swap",
  "por-do-sol":
    "https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&family=Unbounded:wght@400;700;900&display=swap",
};

export const activeFontHref = fontHref[ACTIVE_THEME];
