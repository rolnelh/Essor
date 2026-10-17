import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import { heroContent } from '@/content/site';
import { AnchorLink } from '@/components/ui/anchor-link';
import { HeroCard } from './hero-card';
export function HeroSection() {
  return <section id="accueil" aria-labelledby="hero-title" className="hero relative isolate overflow-hidden">
    <div className="hero-visual absolute inset-0 -z-20"><Image src="/images/hero-clouds.webp" alt="" fill sizes="100vw" priority className="hero-photo object-cover" /></div>
    <div className="hero-wash absolute inset-0 -z-10" />
    <div className="hero-copy relative z-10 mx-auto max-w-[1120px] px-5 text-center">
      <h1 id="hero-title" className="text-balance font-medium tracking-[-.065em]">Créer du contenu,<br className="hidden sm:block"/> c’est <span className="font-editorial italic tracking-[-.06em]">ouvrir des <span className="underlined">portes.</span></span></h1>
      <p className="mx-auto mt-7 max-w-[650px] text-pretty text-[16px] leading-relaxed text-muted sm:text-[19px]">{heroContent.description}</p>
      <AnchorLink href="#pourquoi-creer" available={true} className="mx-auto mt-6 inline-flex min-h-13 items-center gap-5 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-white shadow-sm sm:text-base">Comprendre pourquoi <ArrowDown size={18} aria-hidden="true" /></AnchorLink>
    </div>
    <ul aria-label="Ce que le contenu peut apporter" className="hero-cards mx-auto grid max-w-[1260px] grid-cols-2 gap-3 px-4">{heroContent.cards.map(card => <HeroCard key={card.key} card={card}/>)}</ul>
  </section>;
}
