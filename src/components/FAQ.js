import React from "react";
import "./FAQ.css";

const ITEMS = [
  {
    q: "Is this a replacement for a lawyer?",
    a: "No. ReloHelp provides indicative visa matching and an action plan based on your answers. For decisions and filing, we recommend consulting an immigration lawyer.",
  },
  {
    q: "Which countries are available?",
    a: "In the MVP: Spain (Digital Nomad, Startup Law), Germany (Freelance, Blue Card), Portugal (D8, D7), Estonia (Startup Visa, Nomad), France (Passeport Talent).",
  },
  {
    q: "How is Fit Score calculated?",
    a: "We factor in income, stability, how well your employment type matches visa requirements, documentation complexity, and risks. The percentage is an indicative likelihood, not a guarantee.",
  },
  {
    q: "Is my data safe?",
    a: "We only store what’s needed for the assessment and don’t share it with third parties. See our privacy policy at app.relohelp.org.",
  },
];

function FAQ() {
  return (
    <section className="FAQ" id="faq">
      <div className="FAQ__inner">
        <h2 className="FAQ__heading">FAQ</h2>
        <dl className="FAQ__list">
          {ITEMS.map((item) => (
            <div key={item.q} className="FAQ__item">
              <dt className="FAQ__question">{item.q}</dt>
              <dd className="FAQ__answer">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default FAQ;
