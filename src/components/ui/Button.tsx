import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-[transform,background-color,color,box-shadow,border-color] duration-200 ease-out disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-on-accent hover:-translate-y-0.5 hover:glow-accent",
  outline:
    "border border-accent/50 text-accent hover:border-accent hover:-translate-y-0.5 hover:bg-accent/5",
  ghost: "text-fg/90 hover:text-fg hover:bg-surface",
};

const sizes: Record<Size, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-sm px-5 py-2.5",
  lg: "text-base px-6 py-3",
};

const classesFor = (v: Variant, s: Size, className?: string) =>
  cn(base, variants[v], sizes[s], className);

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: { variant?: Variant; size?: Size } & ComponentProps<"button">) {
  return <button className={classesFor(variant, size, className)} {...props} />;
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  external,
  ...props
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  external?: boolean;
} & Omit<ComponentProps<"a">, "href">) {
  const isExternal = external ?? /^https?:\/\//.test(href);
  const classes = classesFor(variant, size, className);

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...props}
      />
    );
  }
  return <Link href={href} className={classes} {...props} />;
}
