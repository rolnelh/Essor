import { planningSteps } from "@/content/site";
export function PlanningSection() {
  return (
    <section
      id="planifier"
      aria-labelledby="planning-title"
      className="section-space planning-section"
    >
      <div className="section-container planning-layout">
        <div className="planning-intro">
          <h2 id="planning-title" className="section-title !text-left">
            Comment
            <br />
            planifier <em>ton contenu ?</em>
          </h2>
          <p className="mt-6 max-w-[310px] text-lg leading-relaxed text-muted">
            Transforme tes idées en un calendrier simple, à ton rythme.
          </p>
          {/* <div className="mt-10">
            <span className="text-xs tracking-[.22em] text-coral">01 — 06</span>
            <p className="mt-3 text-sm text-muted">
              De l’idée à la publication.
            </p>
          </div> */}
        </div>
        <ol className="planning-board">
          {planningSteps.map((step, i) => (
            <li key={step.title} className={`planning-note note-${i + 1}`}>
              <span className="pushpin" aria-hidden="true" />
              <div className="note-paper">
                <span className="note-number">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
