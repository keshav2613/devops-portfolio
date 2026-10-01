import {
    ArrowLeft,
    ArrowUpRight,
    CheckCircle2,
    Cloud,
    Code2,
    GitBranch,
    LockKeyhole,
    ServerCog,
    Wrench,
} from "lucide-react";

import GitHubIcon from "../components/ui/GitHubIcon";

import "./CaseStudy.css";

const engineeringHighlights = [
    {
        icon: Cloud,
        title: "AWS Infrastructure",
        text: "Provisioned the platform with Terraform across VPC networking, Amazon EKS, ECR, IAM and an Application Load Balancer.",
    },
    {
        icon: ServerCog,
        title: "Kubernetes",
        text: "Deployed containerized frontend and backend workloads to private EKS worker nodes using Kubernetes and Helm.",
    },
    {
        icon: GitBranch,
        title: "CI/CD",
        text: "Built GitHub Actions workflows for testing, Docker builds and publishing immutable Git-SHA-tagged images to ECR.",
    },
    {
        icon: LockKeyhole,
        title: "Cloud Security",
        text: "Used GitHub OIDC, EKS Pod Identity and least-privilege IAM instead of storing long-lived AWS credentials.",
    },
];

const workflow = [
    {
        number: "01",
        title: "Resource Discovery",
        text: "Discover EC2 instances and EBS volumes using AWS APIs.",
    },
    {
        number: "02",
        title: "Utilization Analysis",
        text: "Collect CloudWatch metrics to identify underutilized or unused infrastructure.",
    },
    {
        number: "03",
        title: "Cost Analysis",
        text: "Use AWS pricing information to estimate infrastructure cost and potential savings.",
    },
    {
        number: "04",
        title: "Recommendations",
        text: "Convert resource and utilization data into actionable cost optimization findings.",
    },
    {
        number: "05",
        title: "Dashboard",
        text: "Present discovered resources, findings and estimated savings through a React dashboard.",
    },
];

function CloudSpendCaseStudy() {
    return (
        <main className="case-study">
            {/* HERO */}
            <section className="case-study__hero">
                <div className="container">
                    <a className="case-study__back" href="/#projects">
                        <ArrowLeft size={16} />
                        Back to projects
                    </a>

                    <div className="case-study__hero-grid">
                        <div>
                            <span className="case-study__eyebrow">
                                Cloud • FinOps • Automation
                            </span>

                            <h1>CloudSpend-Guard</h1>

                            <p className="case-study__lead">
                                An AWS cost optimization platform that discovers cloud
                                resources, analyzes utilization and pricing data, and turns
                                those signals into actionable savings recommendations.
                            </p>

                            <div className="case-study__tags">
                                <span>AWS</span>
                                <span>Terraform</span>
                                <span>Amazon EKS</span>
                                <span>Python</span>
                                <span>FastAPI</span>
                                <span>React</span>
                                <span>GitHub Actions</span>
                            </div>

                            <div className="case-study__hero-actions">
                                <a
                                    className="button button--primary"
                                    href="https://github.com/keshav2613/cloudspend-guard"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <GitHubIcon size={17} />
                                    View source
                                </a>

                                <a
                                    className="case-study__secondary-link"
                                    href="#architecture"
                                >
                                    Explore architecture
                                    <ArrowUpRight size={16} />
                                </a>
                            </div>
                        </div>

                        <div className="case-study__hero-image">
                            <img
                                src="/images/projects/cloudspend-guard.png"
                                alt="CloudSpend-Guard dashboard"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* THE PROBLEM */}
            <section className="case-study__section">
                <div className="container case-study__two-column">
                    <div>
                        <span className="case-study__section-number">01</span>
                        <h2>The Problem</h2>
                    </div>

                    <div className="case-study__prose">
                        <p>
                            Cloud resources are easy to provision, but unused and
                            underutilized infrastructure can remain unnoticed and continue
                            generating cost.
                        </p>

                        <p>
                            I wanted to build something that went beyond simply listing AWS
                            resources: a platform that combines resource discovery,
                            utilization signals and pricing information to produce useful
                            optimization recommendations.
                        </p>
                    </div>
                </div>
            </section>

            {/* WHAT I BUILT */}
            <section className="case-study__section case-study__section--soft">
                <div className="container">
                    <div className="case-study__section-heading">
                        <span className="case-study__section-number">02</span>
                        <h2>What I Built</h2>

                        <p>
                            A full-stack cloud engineering project covering application
                            development, infrastructure, containers, CI/CD and AWS security.
                        </p>
                    </div>

                    <div className="case-study__highlight-grid">
                        {engineeringHighlights.map((highlight) => {
                            const Icon = highlight.icon;

                            return (
                                <article
                                    className="case-study__highlight"
                                    key={highlight.title}
                                >
                                    <span>
                                        <Icon size={20} />
                                    </span>

                                    <h3>{highlight.title}</h3>
                                    <p>{highlight.text}</p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ARCHITECTURE */}
            <section
                className="case-study__section"
                id="architecture"
            >
                <div className="container">
                    <div className="case-study__section-heading">
                        <span className="case-study__section-number">03</span>

                        <h2>Architecture</h2>

                        <p>
                            A containerized full-stack application deployed on Amazon EKS
                            with automated CI/CD, using AWS services for resource discovery,
                            monitoring and cost analysis.
                        </p>
                    </div>

                    <div className="case-study__architecture-image">
                        <img
                            src="/images/cloudspend/cloudspend-architecture.png"
                            alt="CloudSpend-Guard AWS architecture showing EKS, React, FastAPI, AWS services, GitHub Actions and Terraform"
                        />
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="case-study__section case-study__section--soft">
                <div className="container">
                    <div className="case-study__section-heading">
                        <span className="case-study__section-number">04</span>
                        <h2>How It Works</h2>
                    </div>

                    <div className="case-study__workflow">
                        {workflow.map((step) => (
                            <article key={step.number}>
                                <span>{step.number}</span>

                                <h3>{step.title}</h3>

                                <p>{step.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ENGINEERING DECISIONS */}
            <section className="case-study__section">
                <div className="container">
                    <div className="case-study__section-heading">
                        <span className="case-study__section-number">05</span>
                        <h2>Engineering Decisions</h2>
                    </div>

                    <div className="case-study__decisions">
                        <div>
                            <CheckCircle2 size={18} />

                            <p>
                                <strong>Recommendation-only design.</strong> The application
                                analyzes infrastructure and suggests actions rather than
                                modifying or deleting AWS resources automatically.
                            </p>
                        </div>

                        <div>
                            <CheckCircle2 size={18} />

                            <p>
                                <strong>Immutable container versions.</strong> CI publishes
                                Docker images using Git commit SHA tags instead of relying only
                                on mutable latest tags.
                            </p>
                        </div>

                        <div>
                            <CheckCircle2 size={18} />

                            <p>
                                <strong>Keyless CI/CD authentication.</strong> GitHub Actions
                                uses OIDC to access AWS without storing long-lived AWS access
                                keys in the repository.
                            </p>
                        </div>

                        <div>
                            <CheckCircle2 size={18} />

                            <p>
                                <strong>Workload-level AWS identity.</strong> The backend uses
                                EKS Pod Identity with least-privilege permissions for the AWS
                                APIs required by the application.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TROUBLESHOOTING */}
            <section className="case-study__section case-study__section--soft">
                <div className="container case-study__two-column">
                    <div>
                        <span className="case-study__section-number">06</span>
                        <h2>A Real Troubleshooting Moment</h2>
                    </div>

                    <div className="case-study__prose">
                        <div className="case-study__incident-icon">
                            <Wrench size={20} />
                        </div>

                        <p>
                            During the EKS deployment, workloads on one worker node began
                            failing to receive pod IP addresses.
                        </p>

                        <p>
                            I traced the issue through Kubernetes events and the VPC CNI
                            networking layer, narrowed it to stale ENI/IPAM state on the
                            affected node, and recovered the node by restarting its{" "}
                            <code>aws-node</code> CNI pod.
                        </p>

                        <p>
                            It became one of the most useful parts of the project because it
                            required troubleshooting across Kubernetes, AWS networking and
                            the underlying cluster infrastructure rather than only
                            application code.
                        </p>
                    </div>
                </div>
            </section>

            {/* DASHBOARD */}
            <section className="case-study__section">
                <div className="container">
                    <div className="case-study__section-heading">
                        <span className="case-study__section-number">07</span>
                        <h2>Dashboard & Recommendations</h2>

                        <p>
                            The frontend brings resource discovery, optimization findings and
                            estimated savings together in a simple operational dashboard.
                        </p>
                    </div>

                    <div className="case-study__gallery">
                        <figure className="case-study__gallery-main">
                            <div className="case-study__gallery-image">
                                <img
                                    src="/images/cloudspend/dashboard-overview.png"
                                    alt="CloudSpend-Guard dashboard overview"
                                />
                            </div>

                            <figcaption>
                                <strong>Dashboard Overview</strong>
                                <span>
                                    Resource inventory, optimization findings and estimated monthly
                                    savings in one view.
                                </span>
                            </figcaption>
                        </figure>

                        <div className="case-study__gallery-grid">
                            <figure>
                                <div className="case-study__gallery-image">
                                    <img
                                        src="/images/cloudspend/ec2-recommendation.png"
                                        alt="CloudSpend-Guard EC2 recommendation"
                                    />
                                </div>

                                <figcaption>
                                    <strong>EC2 Recommendation</strong>
                                    <span>
                                        Utilization analysis identifies low-usage EC2 resources and
                                        surfaces optimization opportunities.
                                    </span>
                                </figcaption>
                            </figure>

                            <figure>
                                <div className="case-study__gallery-image">
                                    <img
                                        src="/images/cloudspend/cost-optimization.png"
                                        alt="CloudSpend-Guard cost optimization results"
                                    />
                                </div>

                                <figcaption>
                                    <strong>Cost Optimization</strong>
                                    <span>
                                        Findings are translated into actionable recommendations and
                                        estimated savings.
                                    </span>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>

            {/* CLOSING */}
            <section className="case-study__closing">
                <div className="container">
                    <Code2 size={25} />

                    <h2>Explore the implementation</h2>

                    <p>
                        The repository contains the application code, infrastructure,
                        Kubernetes configuration and CI/CD workflows.
                    </p>

                    <a
                        className="button button--primary"
                        href="https://github.com/keshav2613/cloudspend-guard"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <GitHubIcon size={17} />
                        View on GitHub
                    </a>
                </div>
            </section>
        </main>
    );
}

export default CloudSpendCaseStudy;