"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { benefits } from "@/content/site";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import styles from "./benefits.module.css";

export function BenefitsSection() {
  const track = useRef<HTMLUListElement>(null);
  const [current, setCurrent] = useState(0);
  const [stops, setStops] = useState(3);

  const measure = useCallback(() => {
    const el = track.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = card.getBoundingClientRect().width + gap;
    const last = Math.max(
      0,
      Math.round((el.scrollWidth - el.clientWidth) / step),
    );
    setStops(last + 1);
    setCurrent(Math.max(0, Math.min(Math.round(el.scrollLeft / step), last)));
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    measure();
    return () => observer.disconnect();
  }, [measure]);

  function go(index: number) {
    const el = track.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollTo({
      left:
        Math.max(0, Math.min(index, stops - 1)) *
        (card.getBoundingClientRect().width + gap),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }

  return (
    <section
      id="benefices"
      aria-labelledby="benefits-title"
      aria-roledescription="carrousel"
      className={styles.section}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h2 id="benefits-title" className={styles.title}>
              Les bénéfices du contenu
            </h2>
            <p className={styles.subtitle}>
              Ce que la création de contenu peut vous apporter.
            </p>
          </div>
          <div className={styles.arrows}>
            <button
              type="button"
              onClick={() => go(current - 1)}
              disabled={current === 0}
              className={styles.arrow}
              aria-label="Bénéfices précédents"
              aria-controls="benefits-track"
            >
              <ArrowLeft size={23} strokeWidth={2.5} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(current + 1)}
              disabled={current >= stops - 1}
              className={`${styles.arrow} ${styles.next}`}
              aria-label="Bénéfices suivants"
              aria-controls="benefits-track"
            >
              <ArrowRight size={23} strokeWidth={2.5} aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className={styles.shelf}>
          <ul
            ref={track}
            id="benefits-track"
            className={styles.track}
            onScroll={measure}
            tabIndex={0}
            aria-label="Les cinq bénéfices de la création de contenu"
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") {
                event.preventDefault();
                go(current + 1);
              }
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                go(current - 1);
              }
              if (event.key === "Home") {
                event.preventDefault();
                go(0);
              }
              if (event.key === "End") {
                event.preventDefault();
                go(stops - 1);
              }
            }}
          >
            {benefits.map((item, index) => (
              <li
                key={item.title}
                className={`${styles.card} ${styles[item.color]}`}
                aria-label={`${index + 1} sur ${benefits.length}`}
              >
                <div className={styles.art} aria-hidden="true">
                  <span className={styles.disc}>
                    <span
                      className={styles.sprite}
                      style={{
                        backgroundPosition: `${(index % 3) * 50}% ${Math.floor(index / 3) * 100}%`,
                      }}
                    />
                  </span>
                </div>
                <div className={styles.copy}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.pagination}>
          {Array.from({ length: stops }, (_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => go(index)}
              aria-label={`Afficher le groupe ${index + 1}`}
              aria-current={current === index ? "true" : undefined}
              className={styles.dot}
            >
              <span />
            </button>
          ))}
        </div>
        <span className="sr-only" aria-live="polite">
          Groupe {current + 1} sur {stops}
        </span>
      </div>
    </section>
  );
}
