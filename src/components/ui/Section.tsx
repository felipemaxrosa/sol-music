import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function Section({
  id,
  eyebrow,
  title,
  description,
  className,
  headerClassName,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  className?: string;
  headerClassName?: string;
  children?: ReactNode;
}) {
  const hasHeader = eyebrow || title || description;
  return (
    <section
      id={id}
      className={cn("py-16 sm:py-20 lg:py-24", className)}
      style={{ scrollMarginTop: "5rem" }}
    >
      <Container>
        {hasHeader && (
          <Reveal>
            <div className={cn("mb-10 flex max-w-2xl flex-col gap-3", headerClassName)}>
              {eyebrow && (
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {eyebrow}
                </p>
              )}
              {title && (
                <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
              )}
              {description && <p className="text-muted">{description}</p>}
            </div>
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  );
}
