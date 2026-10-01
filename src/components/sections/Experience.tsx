import {
  Activity,
  Cloud,
  Code2,
  MapPin,
  Rocket,
  ServerCog,
} from "lucide-react";

import "./Experience.css";

const experiences = [
  {
    period: "Jan 2025 — Aug 2026",
    company: "Neosoft Systems & Cloud Services",
    role: "DevOps Engineer",
    location: "Pune, India",
    description:
      "Worked across deployment automation, cloud infrastructure, containerized workloads and operational reliability.",
    highlights: [
      {
        icon: Rocket,
        text: "CI/CD pipelines, release workflows and deployment troubleshooting",
      },
      {
        icon: Cloud,
        text: "AWS infrastructure provisioning and management with Terraform",
      },
      {
        icon: ServerCog,
        text: "Docker and Kubernetes deployments, health checks and configuration",
      },
      {
        icon: Activity,
        text: "Infrastructure and application monitoring with CloudWatch, Prometheus and Grafana",
      },
    ],
    technologies: [
      "AWS",
      "Terraform",
      "Kubernetes",
      "Docker",
      "CI/CD",
      "Python",
      "Bash",
    ],
  },
  {
    period: "Mar 2020 — Aug 2023",
    company: "Zensar Technologies",
    role: "Software Engineer",
    location: "Pune, India",
    description:
      "Built and supported CI/CD pipelines, cloud infrastructure, containerized environments and deployment automation.",
    metrics: [
      {
        value: "25+",
        label: "CI/CD pipelines",
      },
      {
        value: "<10 min",
        label: "Deployment time",
      },
      {
        value: "60%",
        label: "Faster infra setup",
      },
      {
        value: "98%",
        label: "Deployment success",
      },
    ],
    highlights: [
      {
        icon: Rocket,
        text: "Designed and maintained CI/CD pipelines for automated application delivery",
      },
      {
        icon: Cloud,
        text: "Provisioned AWS and Azure environments using Terraform",
      },
      {
        icon: ServerCog,
        text: "Supported Kubernetes microservices using Helm, autoscaling and health probes",
      },
      {
        icon: Code2,
        text: "Implemented monitoring, access controls and deployment security practices",
      },
    ],
    technologies: [
      "Jenkins",
      "AWS",
      "Azure",
      "Terraform",
      "Docker",
      "Kubernetes",
      "Helm",
      "Prometheus",
      "Grafana",
    ],
  },
];

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="experience__heading">
          <span className="experience__eyebrow">
            Professional journey
          </span>

          <h2>Engineering Experience</h2>

          <p>
            From software delivery to cloud infrastructure, automation and
            container platforms.
          </p>
        </div>

        <div className="experience__timeline">
          {experiences.map((experience, index) => (
            <article
              className="experience__item"
              key={`${experience.company}-${experience.period}`}
            >
              <div className="experience__timeline-marker">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className="experience__card">
                <div className="experience__card-top">
                  <div>
                    <span className="experience__period">
                      {experience.period}
                    </span>

                    <h3>{experience.role}</h3>

                    <strong className="experience__company">
                      {experience.company}
                    </strong>
                  </div>

                  <span className="experience__location">
                    <MapPin size={15} />
                    {experience.location}
                  </span>
                </div>

                <p className="experience__description">
                  {experience.description}
                </p>

                {experience.metrics && (
                  <div className="experience__metrics">
                    {experience.metrics.map((metric) => (
                      <div
                        className="experience__metric"
                        key={metric.label}
                      >
                        <strong>{metric.value}</strong>
                        <span>{metric.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="experience__highlights">
                  {experience.highlights.map((highlight) => {
                    const Icon = highlight.icon;

                    return (
                      <div
                        className="experience__highlight"
                        key={highlight.text}
                      >
                        <span className="experience__highlight-icon">
                          <Icon size={16} />
                        </span>

                        <p>{highlight.text}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="experience__technologies">
                  {experience.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="experience__journey">
          automation → infrastructure → containers → cloud ↗
        </p>
      </div>
    </section>
  );
}

export default Experience;