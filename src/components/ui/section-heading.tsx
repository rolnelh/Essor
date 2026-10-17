import type { ReactNode } from 'react';
type Props = { id: string; children: ReactNode; description?: string; eyebrow?: string; className?: string };
export function SectionHeading({ id, children, description, eyebrow, className = '' }: Props) {
  return <div className={`section-heading ${className}`}>{eyebrow && <span className="mb-5 inline-block rounded-full bg-[#fbf8dc] px-5 py-2 text-xs font-medium">{eyebrow}</span>}<h2 id={id} className="section-title">{children}</h2>{description && <p className="section-description">{description}</p>}</div>;
}
