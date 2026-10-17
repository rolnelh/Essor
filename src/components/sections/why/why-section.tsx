import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
export function WhySection() {
  return (
    <section
      id="pourquoi-creer"
      aria-labelledby="why-title"
      className="section-space bg-white"
    >
      <div className="section-container">
        <SectionHeading
          id="why-title"
          eyebrow="Pourquoi créer ?"
          description="Partagez ce que vous savez, inspirez les autres et créez des liens grâce à votre contenu."
        >
          Vos idées ont de la valeur.
          <br />
          Donnez-leur une voix.
        </SectionHeading>
        <div className="why-grid">
          <div className="why-photo relative overflow-hidden rounded-[22px]">
            <Image
              src="/images/why.webp"
              alt="Un créateur en chemise bleue réfléchit devant son ordinateur, au milieu des nuages."
              fill
              sizes="(max-width: 767px) 100vw, 36vw"
              className="object-cover"
            />
          </div>
          <article className="why-useful">
            <div className="relative z-10 max-w-[300px]">
              <h3>
                Un contenu utile
                <br />
                peut faire la différence.
              </h3>
              <p>
                Un conseil, une expérience ou une passion peuvent aider
                quelqu’un à avancer.
              </p>
            </div>
            <div
              className="orb-network"
              aria-label="Partager, inspirer, échanger"
            >
              <span className="orb orb-blue">
                <span>Partager</span>
              </span>
              <span className="orb orb-pink">
                <span>Inspirer</span>
              </span>
              <span className="orb orb-lime">
                <span>Échanger</span>
              </span>
            </div>
          </article>
          <article className="why-start">
            <span aria-hidden="true" className="tiny-orb" />
            <h3>
              Commencez avec
              <br />
              ce que vous savez.
            </h3>
            <p>
              Votre expérience mérite d’être partagée, même avec une petite
              audience.
            </p>
            <Link href="#benefices" className="dark-link">
              Découvrir les bénéfices{" "}
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </article>
          <article className="why-one">
            <span aria-hidden="true" className="silver-orb" />
            <p>
              <strong>1</strong>
              <span>
                idée peut tout
                <br />
                changer.
              </span>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
