import {
  ArrowUpRight,
  Award,
  BookOpen,
  Boxes,
  CloudCog,
  Telescope,
} from "lucide-react";

import "./Credentials.css";

const credentialUrl =
  "https://www.credly.com/badges/88d08410-891e-4a5b-a767-5bd7b767a411/linked_in_profile";

const learningAreas = [
  {
    icon: Boxes,
    title: "Kubernetes",
    description: "Platform engineering & orchestration",
  },
  {
    icon: Telescope,
    title: "Observability",
    description: "Metrics, logs, traces & incident analysis",
  },
  {
    icon: CloudCog,
    title: "Cloud Architecture",
    description: "Reliable and scalable cloud systems",
  },
];

function Credentials() {
  return (
    <section className="credentials" id="credentials">
      <div className="container">
        <div className="credentials__heading">
          <span className="credentials__eyebrow">Credentials</span>

          <h2>Certifications & Learning</h2>

          <p>
            Professional certification backed by continued hands-on learning
            across cloud, containers and platform engineering.
          </p>
        </div>

        <div className="credentials__featured">
          <div className="credentials__badge">
            <Award size={34} />

            <span>AWS</span>
          </div>

          <div className="credentials__content">
            <span className="credentials__type">
              Professional Certification
            </span>

            <h3>AWS Certified DevOps Engineer – Professional</h3>

            <p>Amazon Web Services</p>

            <div className="credentials__meta">
              <span>Issued 2024</span>
              <span>•</span>
              <span>Verified credential</span>
            </div>
          </div>

          <a
            className="credentials__button"
            href={credentialUrl}
            target="_blank"
            rel="noreferrer"
          >
            View Credential
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="credentials__learning">
          <div className="credentials__learning-heading">
            <span className="credentials__learning-icon">
              <BookOpen size={18} />
            </span>

            <div>
              <h3>Continuous Learning</h3>
              <p>
                Areas I'm actively exploring through projects, labs and
                documentation.
              </p>
            </div>
          </div>

          <div className="credentials__learning-grid">
            {learningAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  className="credentials__learning-item"
                  key={area.title}
                >
                  <span>
                    <Icon size={18} />
                  </span>

                  <div>
                    <strong>{area.title}</strong>
                    <small>{area.description}</small>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="credentials__note">
          always learning, always building ↗
        </p>
      </div>
    </section>
  );
}

export default Credentials;