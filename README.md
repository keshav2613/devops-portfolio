# Keshav Singh | Cloud & DevOps Portfolio

Hands-on projects demonstrating AWS infrastructure, Kubernetes troubleshooting, secure CI/CD, cost optimization, and cloud-native observability.

## Featured Projects

### [CloudSpend Guard](https://github.com/keshav2613/cloudspend-guard)
An AWS cost optimization platform that discovers EC2 instances and EBS volumes, analyzes CloudWatch utilization, and estimates potential savings through a FastAPI API and React dashboard.

- **Infrastructure & deployment:** Amazon EKS, Terraform, Helm, Docker, Amazon ECR, and Application Load Balancer.
- **Secure delivery:** GitHub Actions with AWS OIDC authentication, immutable commit-tagged images, and EKS Pod Identity for workload access to AWS APIs.
- **Engineering focus:** Reproducible infrastructure, automated validation, and recommendation-only optimization.
- **Status:** Deployed and validated against real AWS resources; infrastructure intentionally decommissioned after validation to control costs.

### [KubeDiagnose](https://github.com/keshav2613/kubediagnose)
A Python CLI that combines Kubernetes workload state, events, termination details, and logs into evidence-based diagnoses and actionable troubleshooting guidance.

- **Diagnostics:** CrashLoopBackOff, image pull failures, scheduling failures, OOMKilled containers, and probe failures.
- **Security:** Read-only, namespace-scoped RBAC, a dedicated ServiceAccount, and non-root containers.
- **Quality & CI/CD:** Reproducible failure labs, pytest, Ruff, Docker smoke tests, and GitHub Actions security checks using pip-audit and Trivy.

### [Telemetry Lab](https://github.com/keshav2613/telemetry-lab)
An observability and incident analysis lab being developed to explore distributed-system failures by correlating metrics, logs, and traces.

- **Planned stack:** OpenTelemetry and its Collector, Prometheus, Loki, Tempo, and Grafana.
- **Planned focus:** Simulated service failures, alert investigation, root-cause analysis, and SLIs/SLOs.
- **Status:** In development; the repository documents the planned architecture.

## Skills Demonstrated

AWS · Kubernetes · Terraform · Helm · Docker · GitHub Actions · IAM/OIDC · Python · FastAPI · React/TypeScript · Automated Testing · Security Scanning

Explore each project repository for architecture, implementation details, and available setup instructions.

[GitHub Profile](https://github.com/keshav2613)
