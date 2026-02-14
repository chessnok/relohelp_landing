import React from "react";
import { LINKS } from "../constants/links";
import "./Header.css";

function Header() {
  return (
    <header className="Header">
      <div className="Header__inner">
        <a href="/" className="Header__logo" aria-label="ReloHelp home">
          <span className="Header__logo-icon" aria-hidden>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          ReloHelp
        </a>
        <nav className="Header__nav">
          <a href="#how-it-works" className="Header__link">How it works</a>
          <a href="#countries" className="Header__link">Countries</a>
          <a href="#pricing" className="Header__link">Pricing</a>
          <a href={LINKS.signin} className="Header__link Header__link--secondary" rel="noopener noreferrer" target="_blank">Sign in</a>
          <a href={LINKS.signup} className="Header__cta" rel="noopener noreferrer" target="_blank">Get started</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
