import React from "react";
import "./Countries.css";

const COUNTRIES = [
  { code: "ES", name: "Spain", visas: "Digital Nomad, Startup Law" },
  { code: "DE", name: "Germany", visas: "Freelance, Blue Card" },
  { code: "PT", name: "Portugal", visas: "D8, D7" },
  { code: "EE", name: "Estonia", visas: "Startup Visa, Nomad" },
  { code: "FR", name: "France", visas: "Passeport Talent" },
];

function Countries() {
  return (
    <section className="Countries" id="countries">
      <div className="Countries__inner">
        <h2 className="Countries__heading">MVP countries</h2>
        <p className="Countries__intro">
          To start: 5 countries with visas for founders and digital nomads.
        </p>
        <ul className="Countries__grid">
          {COUNTRIES.map((c) => (
            <li key={c.code} className="Countries__card">
              <span className="Countries__flag" aria-hidden>
                {c.code}
              </span>
              <h3 className="Countries__name">{c.name}</h3>
              <p className="Countries__visas">{c.visas}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Countries;
