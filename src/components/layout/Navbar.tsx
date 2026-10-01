import { Download, Menu, X } from "lucide-react";
import { useState } from "react";

import GitHubIcon from "../ui/GitHubIcon";

import "./Navbar.css";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        {/* Brand */}
        <a className="navbar__brand" href="#" aria-label="Keshav Singh home">
          <span className="navbar__brand-mark">KS</span>

          <span className="navbar__brand-text">
            <strong>Keshav Singh</strong>
            <small>DevOps Engineer</small>
          </span>
        </a>

        {/* Desktop navigation */}
        <nav className="navbar__links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="navbar__actions">
          <a
            className="navbar__github"
            href="https://github.com/keshav2613"
            target="_blank"
            rel="noreferrer"
            aria-label="Keshav Singh GitHub profile"
          >
            <GitHubIcon size={19} />
          </a>

          <a
            className="button button--primary navbar__resume"
            href="/resume/Keshav-Singh-Resume.pdf"
            download="Keshav-Singh-Resume.pdf"
          >
            <Download size={17} />
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="navbar__menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav className="navbar__mobile" aria-label="Mobile navigation">
          <div className="container">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <a
              href="https://github.com/keshav2613"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              GitHub
            </a>

            <a
              href="/resume/Keshav-Singh-Resume.pdf"
              download="Keshav-Singh-Resume.pdf"
              onClick={() => setMenuOpen(false)}
            >
              Download Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;