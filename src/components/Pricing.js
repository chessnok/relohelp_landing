import React from "react";
import { LINKS } from "../constants/links";
import "./Pricing.css";

const PLANS = [
  {
    name: "Free",
    price: "0",
    features: ["Top 2 visas", "Basic Fit Score"],
    cta: "Start for free",
    primary: false,
  },
  {
    name: "Pro",
    price: "29–49",
    currency: "€",
    features: [
      "Full visa comparison",
      "Roadmap and document checklist",
      "AI Q&A chat",
      "PDF plan",
    ],
    cta: "Choose plan",
    primary: true,
  },
];

function Pricing() {
  return (
    <section className="Pricing" id="pricing">
      <div className="Pricing__inner">
        <h2 className="Pricing__heading">Pricing</h2>
        <p className="Pricing__intro">
          Start for free, unlock the full report when you need it.
        </p>
        <div className="Pricing__grid">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`Pricing__card ${plan.primary ? "Pricing__card--primary" : ""}`}
            >
              <h3 className="Pricing__name">{plan.name}</h3>
              <p className="Pricing__price">
                {plan.currency && <span className="Pricing__currency">{plan.currency}</span>}
                {plan.price}
              </p>
              <ul className="Pricing__features">
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a
                href={LINKS.signup}
                className={plan.primary ? "Pricing__cta Pricing__cta--primary" : "Pricing__cta"}
                rel="noopener noreferrer"
                target="_blank"
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
