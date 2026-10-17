import { OrbitConnections } from "@/components/ui/orbit-connections";
import Image from "next/image";
import { ideas } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { ClayIcon } from "@/components/ui/clay-icon";
function IdeaList({ items }: { items: readonly (typeof ideas)[number][] }) {
  return (
    <ul className="orbit-list">
      {items.map((item) => (
        <li key={item.title} className="orbit-item">
          <ClayIcon index={item.icon} />
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
export function IdeasSection() {
  return (
    <section
      id="idees"
      aria-labelledby="ideas-title"
      className="section-space bg-white"
    >
      <div className="section-container">
        <SectionHeading
          id="ideas-title"
          description="Votre quotidien, votre savoir et votre parcours sont vos premières sources d’inspiration."
        >
          Vous avez déjà <em>de quoi créer.</em>
        </SectionHeading>
        <div className="orbit-layout ideas-layout">
          <OrbitConnections />
          <IdeaList items={ideas.slice(0, 3)} />
          <div className="orbit-person">
            <Image
              src="/images/ideas.webp"
              alt="Un jeune créateur pensif, téléphone à la main, cherche une idée à partager."
              width={600}
              height={800}
              sizes="(max-width: 767px) 90vw, 38vw"
            />
            <p className="thought-bubble">
              Que pourrais-je
              <br />
              partager ?
            </p>
          </div>
          <IdeaList items={ideas.slice(3)} />
        </div>
        {/* <p className="section-note">
          Commencez par une idée. Apportez quelque chose à quelqu’un.
        </p> */}
      </div>
    </section>
  );
}
