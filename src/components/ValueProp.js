import React from "react";
import "./ValueProp.css";

const ITEMS = [
  { icon: "search", title: "3–5 matching visas", desc: "Based on your profile and goals" },
  { icon: "score", title: "Fit Score", desc: "Likelihood of approval" },
  { icon: "list", title: "Personal action list", desc: "Step-by-step to-dos" },
  { icon: "doc", title: "Document checklist", desc: "Per-visa requirements" },
  { icon: "time", title: "Timeline and complexity", desc: "e.g. 2–4 months" },
  { icon: "budget", title: "Rough budget", desc: "Cost estimates" },
];

function ValueProp() {
  return (
    <section className="ValueProp" id="value">
      <div className="ValueProp__inner">
        <h2 className="ValueProp__heading">What you get</h2>
        <p className="ValueProp__intro">
          Not just “here’s a list of visas” — personalized recommendations with explanation and roadmap.
        </p>
        <ul className="ValueProp__grid">
          {ITEMS.map((item) => (
            <li key={item.icon} className="ValueProp__card">
              <span className="ValueProp__icon" aria-hidden>
                {item.icon === "search" && <IconSearch />}
                {item.icon === "score" && <IconScore />}
                {item.icon === "list" && <IconList />}
                {item.icon === "doc" && <IconDoc />}
                {item.icon === "time" && <IconTime />}
                {item.icon === "budget" && <IconBudget />}
              </span>
              <h3 className="ValueProp__cardTitle">{item.title}</h3>
              <p className="ValueProp__cardDesc">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function IconSearch() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
    </svg>
  );
}
function IconScore() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}
function IconList() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
    </svg>
  );
}
function IconDoc() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
  );
}
function IconTime() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
    </svg>
  );
}
function IconBudget() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M12 8v8M8 12h8" />
    </svg>
  );
}

export default ValueProp;
