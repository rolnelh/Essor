import { Eye, Handshake, Play, Users, MessageCircle, Heart, FileText } from 'lucide-react';
import { heroContent } from '@/content/site';
const icons = { eye: Eye, handshake: Handshake, play: Play, users: Users };
type Card = (typeof heroContent.cards)[number];
export function HeroCard({ card }: { card: Card }) {
  const Icon = icons[card.icon];
  return <li className={`hero-card hero-card--${card.key}`}>
    <div className="flex items-start gap-3"><span className="card-icon flex size-11 shrink-0 items-center justify-center rounded-full border border-white/90 text-coral"><Icon size={23} strokeWidth={1.8} aria-hidden="true" /></span><div className="pt-1"><h2 className="text-[16px] font-semibold tracking-[-.5px]">{card.title}</h2><p className="mt-1 max-w-36 text-xs leading-relaxed text-muted">{card.description}</p></div></div>
    {card.key === 'visibility' && <div aria-hidden="true" className="bars"><i/><i/><i/><i/></div>}
    {card.key === 'community' && <div aria-hidden="true" className="mt-3 flex justify-end gap-2 text-coral"><span className="mini-bubble"><MessageCircle size={17}/></span><span className="mini-bubble"><Heart size={17} fill="currentColor"/></span></div>}
    {card.key === 'knowledge' && <FileText aria-hidden="true" className="absolute right-3 top-6 hidden text-muted/40 xl:block" size={36} strokeWidth={1}/ >}
  </li>;
}
