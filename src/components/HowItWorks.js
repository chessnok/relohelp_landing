import React from "react";
import { LINKS } from "../constants/links";
import "./HowItWorks.css";

const STEPS = [
  {
    step: 1,
    title: "Onboarding",
    desc: "Answer questions: citizenship, income, employment type, relocation goals.",
  },
  {
    step: 2,
    title: "Analysis",
    desc: "Structured rules + AI evaluate matching visas and compute Fit Score.",
  },
  {
    step: 3,
    title: "Result",
    desc: "Visa shortlist, Fit Score, personal roadmap and document checklist.",
  },
];

function HowItWorks() {
  return (
    <section className="HowItWorks" id="how-it-works">
      <div className="HowItWorks__inner">
        <h2 className="HowItWorks__heading">How it works</h2>
        <p className="HowItWorks__intro">
          Three steps from questionnaire to your personal relocation plan.
        </p>
        <ol className="HowItWorks__steps">
          {STEPS.map((item) => (
            <li key={item.step} className="HowItWorks__step">
              <span className="HowItWorks__stepNum">{item.step}</span>
              <div className="HowItWorks__stepContent">
                <h3 className="HowItWorks__stepTitle">{item.title}</h3>
                <p className="HowItWorks__stepDesc">{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>
        <a
          href={LINKS.signup}
          className="HowItWorks__cta"
          rel="noopener noreferrer"
          target="_blank"
        >
          Start the questionnaire
        </a>
      </div>
    </section>
  );
}

export default HowItWorks;
