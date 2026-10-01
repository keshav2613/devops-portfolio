import {
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";

import GitHubIcon from "../ui/GitHubIcon";

import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__card">
          <div className="contact__content">
            <span className="contact__eyebrow">
              Let's connect
            </span>

            <h2>Interested in building reliable systems together?</h2>

            <p>
              I'm always happy to connect about DevOps, cloud infrastructure,
              platform engineering and interesting engineering opportunities.
            </p>

            <div className="contact__location">
              <MapPin size={16} />
              Dublin, Ireland
            </div>
          </div>

          <div className="contact__actions">
            <a
              className="contact__primary"
              href="mailto:keshavsingh425@gmail.com?subject=Portfolio%20Enquiry"
            >
              <Mail size={17} />
              Get in touch
            </a>

            <a
              className="contact__secondary"
              href="https://www.linkedin.com/in/keshavsingh26"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <ArrowUpRight size={16} />
            </a>

            <a
              className="contact__secondary"
              href="https://github.com/keshav2613"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon size={16} />
              GitHub
            </a>
          </div>
        </div>

        <footer className="footer">
          <div className="footer__identity">
            <strong>Keshav Singh</strong>
            <span>DevOps Engineer</span>
          </div>

          <p>
            Built with React, TypeScript & a lot of curiosity.
          </p>

          <a href="#" className="footer__top">
            Back to top ↑
          </a>
        </footer>
      </div>
    </section>
  );
}

export default Contact;