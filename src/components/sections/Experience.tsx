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
    location: "Remote",
    metrics: [
      { value: "40%", label: "Less manual release effort" },
      { value: "3–5", label: "AWS environments" },
      { value: "8–10 hrs", label: "Saved monthly" },
      { value: "15+", label: "Services monitored" },
    ],
    description:
      "Worked across deployment automation, cloud infrastructure, containerized workloads and operational reliability.",
    highlights: [
      {
        icon: Rocket,
        text: "Jenkins and GitHub Actions pipelines for build, test and scheduled releases",
      },
      {
        icon: Cloud,
        text: "Provisioned 3–5 AWS environments with Terraform, including EC2, RDS, IAM and VPC",
      },
      {
        icon: ServerCog,
        text: "Supported Docker and Kubernetes deployments, probes, resource limits and rolling updates",
      },
      {
        icon: Activity,
        text: "Monitored 15+ services using CloudWatch, Prometheus and Grafana; investigated production incidents",
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
    period: "Nov 2020 — Mar 2023",
    company: "Zensar Technologies",
    role: "Software Engineer",
    location: "Pune, India",
    description:
      "Started in Java application development and progressed into CI/CD automation, cloud infrastructure and production support.",
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
        value: "20+",
        label: "Services monitored",
      },
    ],
    highlights: [
      {
        icon: Rocket,
        text: "Designed and maintained 25+ CI/CD pipelines, reducing deployment time from 45 to under 10 minutes",
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
        text: "Built monitoring for 20+ services and supported IAM, RBAC and deployment security",
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