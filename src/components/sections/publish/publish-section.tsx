import { OrbitConnections } from "@/components/ui/orbit-connections";
import Image from "next/image";
import {
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  Globe2,
  Send,
} from "lucide-react";
import { channels } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";
const icons = {
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  website: Globe2,
};
function ChannelList({
  items,
}: {
  items: readonly (typeof channels)[number][];
}) {
  return (
    <ul className="orbit-list">
      {items.map((item) => {
        const Icon = icons[item.key];
        return (
          <li className="orbit-item channel-item" key={item.key}>
            <span
              className={`social-logo social-logo--${item.key}`}
              aria-hidden="true"
            >
              <Icon size={36} strokeWidth={1.8} />
            </span>
            <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
export function PublishSection() {
  return (
    <section
      id="ou-publier"
      aria-labelledby="publish-title"
      className="section-space bg-white"
    >
      <div className="section-container">
        <SectionHeading
          id="publish-title"
          description="Choisissez un canal qui correspond à votre contenu et aux personnes que vous souhaitez toucher."
        >
          Vos idées méritent de
          <br />
          <em>
            trouver leur public<span className="text-coral">.</span>
          </em>
        </SectionHeading>
        <div className="orbit-layout publish-layout">
          <OrbitConnections />
          <ChannelList items={channels.slice(0, 3)} />
          <div className="orbit-person">
            <Image
              src="/images/social.webp"
              alt="Une créatrice assise dans un fauteuil, souriante, prépare une publication sur son téléphone."
              width={600}
              height={800}
              sizes="(max-width: 767px) 90vw, 38vw"
            />
            <span className="ready-bubble">
              <Send size={18} aria-hidden="true" className="text-coral" />
              Prête à partager !
            </span>
          </div>
          <ChannelList items={channels.slice(3)} />
        </div>
        
      </div>
    </section>
  );
}
