import React from "react";
import { LINKS } from "../constants/links";
import "./KillerFeature.css";

function KillerFeature() {
  return (
    <section className="KillerFeature">
      <div className="KillerFeature__inner">
        <h2 className="KillerFeature__heading">Visa Improvement Plan</h2>
        <p className="KillerFeature__tagline">
          Not just “eligible” or “not eligible” — a concrete plan to get there.
        </p>
        <div className="KillerFeature__example">
          <p className="KillerFeature__exampleText">
            “You’re 18% away from Germany Blue Card. Increase salary to €58,400 or move to a
            shortage occupation — and the visa becomes within reach.”
          </p>
        </div>
        <p className="KillerFeature__desc">
          See which steps bring you closer to your target visa and get a personal roadmap.
        </p>
        <a
          href={LINKS.signup}
          className="KillerFeature__cta"
          rel="noopener noreferrer"
          target="_blank"
        >
          Get your plan
        </a>
      </div>
    </section>
  );
}

export default KillerFeature;
