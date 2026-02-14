import React from "react";
import { LINKS } from "../constants/links";
import "./Hero.css";

function Hero() {
  return (
    <section className="Hero">
      <div className="Hero__inner">
        <h1 className="Hero__title">
          Visa fit and relocation roadmap in 5–10 minutes
        </h1>
        <p className="Hero__subtitle">
          AI Visa Fit Assistant for solo founders and digital nomads: personalized visa matching,
          likelihood score, and a clear action plan — not just a list, but “Spanish Digital Nomad Visa
          is 72% fit for you, here’s what to do.”
        </p>
        <a
          href={LINKS.signup}
          className="Hero__cta"
          rel="noopener noreferrer"
          target="_blank"
        >
          Get your visa fit →
        </a>
      </div>
    </section>
  );
}

export default Hero;
