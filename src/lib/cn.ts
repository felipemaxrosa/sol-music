/** Junta classes condicionais (clsx minimalista, sem dependência externa). */
export function cn(
  ...parts: Array<string | false | null | undefined>
): string {
  return parts.filter(Boolean).join(" ");
}
