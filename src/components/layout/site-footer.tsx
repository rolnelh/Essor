import { ArrowUp } from 'lucide-react';
import Link from 'next/link';
import { Brand } from '@/components/ui/brand';
import { AnchorLink } from '@/components/ui/anchor-link';
import { navigation } from '@/content/site';
export function SiteFooter() {
  return <footer className="border-t border-ink/5 bg-ivory px-5"><div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 py-7"><Brand/><nav aria-label="Navigation de pied de page" className="hidden items-center gap-7 md:flex">{navigation.map(item => <AnchorLink key={item.href} {...item} className="text-xs text-muted">{item.label}</AnchorLink>)}</nav><div className="flex items-center gap-4"><small className="whitespace-nowrap text-[11px] text-muted sm:text-xs">© 2026 Essor</small><Link href="#accueil" aria-label="Retour en haut" className="flex size-11 items-center justify-center rounded-full border border-ink/10 text-muted transition-colors hover:bg-white"><ArrowUp size={17}/></Link></div></div></footer>;
}
