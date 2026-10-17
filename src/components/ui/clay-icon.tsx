export function ClayIcon({ index, className = '' }: { index: number; className?: string }) {
  return <span aria-hidden="true" className={`clay-icon ${className}`} style={{ backgroundPosition: `${(index % 3) * 50}% ${Math.floor(index / 3) * 100}%` }} />;
}
