import Link from 'next/link';
export function Brand() {
  return <Link href="#accueil" aria-label="Essor, retour à l’accueil" className="inline-flex shrink-0 items-center gap-2 text-[27px] font-semibold tracking-[-1.5px]">
    <svg aria-hidden="true" width="33" height="36" viewBox="0 0 36 40" fill="none"><path d="M3 22C1 12 9 10 21 8C28 7 32 4 34 1C35 12 24 15 14 16C8 17 4 19 3 22Z" fill="currentColor" className="text-coral"/><path d="M3 30C1 23 8 21 17 20L30 17C29 24 22 26 14 26C8 27 5 28 3 30Z" fill="currentColor" className="text-coral"/><path d="M6 35C7 30 13 30 22 29C18 36 12 39 6 35Z" fill="currentColor" className="text-coral"/></svg>
    Essor
  </Link>;
}
