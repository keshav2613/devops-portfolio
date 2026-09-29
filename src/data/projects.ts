export type ProjectStatus =
  | "Completed"
  | "Released"
  | "In Development";

export type Project = {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  status: ProjectStatus;
  version?: string;
  technologies: string[];
  githubUrl: string;
  caseStudyUrl: string;
};

export const projects: Project[] = [
  {
    id: "cloudspend-guard",
    number: "01",
    name: "CloudSpend-Guard",
    category: "Cloud • FinOps • Automation",
    description:
      "AWS cost optimization platform that detects waste, analyzes resource usage and generates actionable savings recommendations.",
    image: "/images/projects/cloudspend-guard.png",
    imageAlt: "CloudSpend-Guard dashboard",
    status: "Completed",
    technologies: [
      "AWS",
      "Python",
      "FastAPI",
      "CloudWatch",
      "Terraform",
      "GitHub Actions",
    ],
    githubUrl:
      "https://github.com/keshav2613/CloudSpend-Guard",
    caseStudyUrl: "#cloudspend-guard",
  },
  {
    id: "kubediagnose",
    number: "02",
    name: "KubeDiagnose",
    category:
      "Kubernetes • DevSecOps • Troubleshooting",
    description:
      "Kubernetes diagnostic toolkit that detects workload failures and turns cluster evidence into actionable troubleshooting recommendations.",
    image: "/images/projects/kubediagnose.png",
    imageAlt: "KubeDiagnose architecture",
    status: "Released",
    version: "v0.1.0",
    technologies: [
      "Kubernetes",
      "Python",
      "Docker",
      "RBAC",
      "GitHub Actions",
      "Security",
    ],
    githubUrl:
      "https://github.com/keshav2613/kubediagnose",
    caseStudyUrl: "#kubediagnose",
  },
  {
    id: "telemetry-lab",
    number: "03",
    name: "Telemetry Lab",
    category: "Observability • SRE",
    description:
      "Observability lab for investigating distributed-system failures by correlating metrics, logs and traces.",
    image: "/images/projects/telemetry.png",
    imageAlt: "Telemetry Lab observability project",
    status: "In Development",
    technologies: [
      "OpenTelemetry",
      "Prometheus",
      "Grafana",
      "Loki",
      "Tempo",
    ],
    githubUrl:
      "https://github.com/keshav2613/telemetry-lab",
    caseStudyUrl: "#telemetry-lab",
  },
];