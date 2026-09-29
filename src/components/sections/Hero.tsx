import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  MapPin,
  Network,
  ServerCog,
} from "lucide-react";

import GitHubIcon from "../ui/GitHubIcon";

import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero__glow hero__glow--one" />
      <div className="hero__glow hero__glow--two" />

      <div className="container hero__grid">
        <div className="hero__content">
          <div className="hero__eyebrow">
            <span className="hero__availability-dot" />
            Cloud • DevOps • Platform • SRE
          </div>

          <h1>
            Building <span>reliable</span>
            <br />
            cloud systems.
          </h1>

          <p className="hero__intro">
            I'm Keshav, a DevOps Engineer focused on building, automating
            and troubleshooting reliable cloud-native systems.
          </p>

          <div className="hero__meta">
            <span>
              <MapPin size={17} />
              Dublin, Ireland
            </span>

            <span>
              <CheckCircle2 size={17} />
              Open to opportunities
            </span>
          </div>

          <div className="hero__actions">
            <a className="button button--primary" href="#projects">
              Explore my work
              <ArrowRight size={17} />
            </a>

            <a
              className="button button--secondary"
              href="https://github.com/keshav2613"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon size={17} />
              GitHub
            </a>
          </div>

          <div className="hero__note">
            <span>Currently building</span>

            <strong>
              Telemetry Lab
              <span className="hero__note-dot" />
            </strong>

            <small>
              Cloud-native observability &amp; incident analysis
            </small>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__ireland-card">
            <div className="hero__ireland-top">
              <span className="hero__ireland-label">
                <MapPin size={15} />
                Based in Dublin
              </span>

              
            </div>

            <div className="hero__scene">
              <img
                src="/images/dublin-hero.jpg"
                alt="Ha'penny Bridge over the River Liffey in Dublin"
                className="hero__dublin-image"
              />

              <div className="hero__image-overlay" />

              <span className="hero__scene-caption">
                Dublin • Ireland
              </span>
            </div>

            <div className="hero__systems">
              <div>
                <Cloud size={18} />

                <span>
                  <small>Cloud</small>
                  <strong>AWS</strong>
                </span>
              </div>

              <div>
                <Network size={18} />

                <span>
                  <small>Platform</small>
                  <strong>Kubernetes</strong>
                </span>
              </div>

              <div>
                <ServerCog size={18} />

                <span>
                  <small>Automation</small>
                  <strong>Terraform</strong>
                </span>
              </div>
            </div>
          </div>

          <span className="hero__handwritten">
            from Dublin, into the cloud ↗
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;