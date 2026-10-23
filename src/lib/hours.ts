import type { DayHours } from "@/config/site";

const SHORT = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
// Ordem de exibição: segunda → sábado → domingo
const DISPLAY_ORDER = [1, 2, 3, 4, 5, 6, 0];

/** Está aberto agora? (usa o horário do dia atual) */
export function isOpenNow(hours: DayHours[], now: Date = new Date()): boolean {
  const d = hours[now.getDay()];
  if (!d?.open || !d.close) return false;
  const [oh, om] = d.open.split(":").map(Number);
  const [ch, cm] = d.close.split(":").map(Number);
  const mins = now.getHours() * 60 + now.getMinutes();
  return mins >= oh * 60 + om && mins < ch * 60 + cm;
}

/** Agrupa dias consecutivos com o mesmo horário: "Seg–Sex 09:00–18:00". */
export function formatHoursGroups(
  hours: DayHours[],
): { label: string; value: string }[] {
  const runs: { from: number; to: number; value: string }[] = [];
  for (const idx of DISPLAY_ORDER) {
    const d = hours[idx];
    const value = d.open && d.close ? `${d.open}–${d.close}` : "Fechado";
    const last = runs[runs.length - 1];
    if (last && last.value === value) last.to = idx;
    else runs.push({ from: idx, to: idx, value });
  }
  return runs.map((r) => ({
    label:
      r.from === r.to ? SHORT[r.from] : `${SHORT[r.from]}–${SHORT[r.to]}`,
    value: r.value,
  }));
}
