import { Download, Menu, X } from "lucide-react";
import { useState } from "react";

import GitHubIcon from "../ui/GitHubIcon";

import "./Navbar.css";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Credentials", href: "#credentials" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a className="navbar__brand" href="#" aria-label="Home">
          <span className="navbar__brand-mark">KS</span>

          <span className="navbar__brand-text">
            <strong>Keshav Singh</strong>
            <small>DevOps Engineer</small>
          </span>
        </a>

        <nav className="navbar__links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a
            className="navbar__github"
            href="https://github.com/keshav2613"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <GitHubIcon size={19} />
          </a>

          <a
            className="button button--primary navbar__resume"
            href="/resume/Keshav-Singh-Resume.pdf"
          >
            <Download size={17} />
            Resume
          </a>
        </div>

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
            >
              GitHub
            </a>

            <a href="/resume/Keshav-Singh-Resume.pdf">
              Download Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;