import Image from "next/image";
export function ClosingSection() {
  return (
    <section
      id="passer-a-laction"
      aria-labelledby="closing-title"
      className="closing-section section-space"
    >
      <div className="section-container closing-layout">
        <div className="closing-art">
          <Image
            src="/images/closing.webp"
            alt="Deux femmes sortent d’une ouverture en papier déchiré : la première sourit, la seconde l’encourage avec une impatience théâtrale."
            width={800}
            height={1000}
            sizes="(max-width: 767px) 100vw, 50vw"
          />
          <p className="closing-bubble">
            Tu attends quoi encore ? Ton premier contenu ne va pas se publier
            tout seul !
          </p>
        </div>
        <div className="closing-copy">
          <h2 id="closing-title" className="section-title !text-left">
            Les opportunités commencent par{" "}
            <em>
              un premier pas<span className="text-coral">.</span>
            </em>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Osez partager vos idées. Votre premier contenu peut être le début de
            nouvelles rencontres et de nouvelles possibilités.
          </p>
          <p className="closing-question">
            Alors, tu passes
            <br />
            <em>à l’action ?</em>
          </p>
        </div>
      </div>
    </section>
  );
}
