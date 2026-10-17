import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Essor — Créer du contenu, c’est ouvrir des portes.', description: 'Vos idées ont de la valeur. Découvrez pourquoi créer du contenu, partager votre savoir et aller à la rencontre de nouvelles opportunités.', robots: { index: false, follow: false } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body><a href="#contenu" className="skip-link">Aller au contenu</a>{children}</body></html>;
}
