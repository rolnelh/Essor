import Link from 'next/link';
import type { ReactNode } from 'react';
type Props = { href: string; available?: boolean; className?: string; children: ReactNode; onClick?: () => void };
/** Unbuilt destinations stay disabled instead of sending visitors to broken anchors. */
export function AnchorLink({ href, available = true, className = '', children, onClick }: Props) {
  if (!available) return <span aria-disabled="true" title="Cette section sera disponible à la prochaine étape." className={`${className} cursor-default`}>{children}<span className="sr-only"> — section à venir</span></span>;
  return <Link href={href} className={className} onClick={onClick}>{children}</Link>;
}
