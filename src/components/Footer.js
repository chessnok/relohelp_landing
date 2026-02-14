import React from "react";
import { LINKS } from "../constants/links";
import "./Footer.css";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer__inner">
        <p className="Footer__disclaimer">
          ReloHelp is not legal advice. Information is indicative only.
          Verify current rules with official sources. Last updated: {currentYear}.
        </p>
        <nav className="Footer__links">
          <a href={LINKS.signin} rel="noopener noreferrer" target="_blank">
            Sign in
          </a>
          <a href={LINKS.signup} rel="noopener noreferrer" target="_blank">
            Sign up
          </a>
          <a href={LINKS.privacy} rel="noopener noreferrer" target="_blank">
            Privacy policy
          </a>
        </nav>
        <p className="Footer__copy">© {currentYear} ReloHelp</p>
      </div>
    </footer>
  );
}

export default Footer;
