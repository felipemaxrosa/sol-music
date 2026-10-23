"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { buildWaLink } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";
import { MenuIcon, CloseIcon, WhatsAppIcon } from "@/components/ui/icons";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fecha o menu ao trocar de rota
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => {
    // Âncora na mesma página (ex.: "/#contato") não é "rota ativa".
    if (href.includes("#")) return false;
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-border bg-bg/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3 py-2 text-sm transition-colors",
                isActive(item.href)
                  ? "text-accent"
                  : "text-muted hover:text-fg",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href={buildWaLink()} size="sm" aria-label="Falar no WhatsApp">
            <WhatsAppIcon width={16} height={16} />
            WhatsApp
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full text-fg hover:bg-surface md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </Container>

      {/* Menu mobile */}
      <div
        className={cn(
          "md:hidden overflow-hidden border-t border-border bg-bg/95 backdrop-blur-md transition-[max-height,opacity] duration-300",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-xl px-3 py-3 text-base transition-colors",
                isActive(item.href)
                  ? "bg-surface text-accent"
                  : "text-fg hover:bg-surface",
              )}
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink
            href={buildWaLink()}
            size="lg"
            className="mt-2 w-full"
            aria-label="Falar no WhatsApp"
          >
            <WhatsAppIcon width={18} height={18} />
            Falar no WhatsApp
          </ButtonLink>
        </Container>
      </div>
    </header>
  );
}
