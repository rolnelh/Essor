"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, Menu, X } from "lucide-react";
import { Brand } from "@/components/ui/brand";
import { AnchorLink } from "@/components/ui/anchor-link";
import { navigation } from "@/content/site";
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointer = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);
  return (
    <header
      ref={headerRef}
      className="site-header absolute inset-x-0 top-5 z-30 mx-auto w-[calc(100%-2rem)] max-w-[1040px] rounded-[20px] border border-white/80 bg-white/95 px-5 py-3 shadow-[0_8px_24px_#18324618] md:top-8 md:px-6 lg:py-2.5"
    >
      <nav
        aria-label="Navigation principale"
        className="flex min-h-11 items-center justify-between gap-6"
      >
        <Brand />
        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <AnchorLink
              key={item.href}
              {...item}
              className="nav-link py-3 text-[14px] font-medium"
            >
              {item.label}
            </AnchorLink>
          ))}
        </div>
        <AnchorLink
          href="#idees"
          available={true}
          className="hidden items-center gap-3 rounded-xl bg-ink px-5 py-3 text-[14px] font-medium text-white lg:inline-flex"
        >
          Explorer les idées <ArrowDown size={17} aria-hidden="true" />
        </AnchorLink>
        <button
          ref={toggleRef}
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen(!open)}
          className="flex size-11 items-center justify-center rounded-xl border border-black/10 lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Navigation mobile"
          className="mt-3 flex flex-col gap-1 border-t border-black/10 pt-3 lg:hidden"
        >
          {navigation.map((item) => (
            <AnchorLink
              key={item.href}
              {...item}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-sm"
            >
              {item.label}
            </AnchorLink>
          ))}
          <AnchorLink
            href="#idees"
            available={true}
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-between rounded-xl bg-ink px-4 py-3 text-sm text-white"
          >
            Explorer les idées <ArrowDown size={16} />
          </AnchorLink>
        </nav>
      )}
    </header>
  );
}
