import {
  Activity,
  Boxes,
  Cloud,
  Code2,
  GitBranch,
  ShieldCheck,
} from "lucide-react";

import "./Skills.css";

const skillGroups = [
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    skills: [
      "AWS",
      "Azure",
      "GCP",
      "Terraform",
      "CloudFormation",
      "AWS CDK",
    ],
  },
  {
    title: "Containers & Orchestration",
    icon: Boxes,
    skills: [
      "Kubernetes",
      "Docker",
      "Amazon EKS",
      "Helm",
    ],
  },
  {
    title: "CI/CD & Automation",
    icon: GitBranch,
    skills: [
      "Jenkins",
      "GitHub Actions",
      "GitLab CI/CD",
      "Azure DevOps",
      "AWS CodePipeline",
      "Ansible",
    ],
  },
  {
    title: "Observability",
    icon: Activity,
    skills: [
      "Prometheus",
      "Grafana",
      "CloudWatch",
      "Azure Monitor",
      "OpenTelemetry",
    ],
  },
  {
    title: "Development",
    icon: Code2,
    skills: [
      "Python",
      "Java",
      "TypeScript",
      "SQL",
      "React",
      "FastAPI",
      "REST APIs",
      "boto3",
    ],
  },
  {
    title: "Security & Operations",
    icon: ShieldCheck,
    skills: [
      "IAM",
      "RBAC",
      "AWS Secrets Manager",
      "GitHub OIDC",
      "EKS Pod Identity",
      "Linux",
      "Git",
      "Bash",
    ],
  },
];

const coreStack = [
  "AWS",
  "Terraform",
  "GitHub Actions / Jenkins",
  "Docker",
  "Kubernetes",
  "Prometheus / Grafana",
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills__heading">
          <span className="skills__eyebrow">
            Technical toolkit
          </span>

          <h2>Tools I Work With</h2>

          <p>
            Technologies I use to build, automate and operate cloud
            infrastructure and application platforms.
          </p>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                className="skills__card"
                key={group.title}
              >
                <div className="skills__card-header">
                  <span className="skills__icon">
                    <Icon size={19} />
                  </span>

                  <h3>{group.title}</h3>
                </div>

                <div className="skills__list">
                  {group.skills.map((skill) => (
                    <span className="skills__tag" key={skill}>
                        {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="skills__stack">
          <div className="skills__stack-heading">
            <span>Core working stack</span>

            <small>
              from infrastructure to observability
            </small>
          </div>

          <div className="skills__stack-flow">
            {coreStack.map((technology, index) => (
              <div
                className="skills__stack-item"
                key={technology}
              >
                <span>{technology}</span>

                {index < coreStack.length - 1 && (
                  <strong aria-hidden="true">→</strong>
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="skills__note">
          tools change — engineering fundamentals stay ↗
        </p>
      </div>
    </section>
  );
}

export default Skills;