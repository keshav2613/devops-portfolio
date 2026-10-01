import {
  ArrowLeft,
  ArrowUpRight,
  Bug,
  CheckCircle2,
  Code2,
  Container,
  Search,
  ShieldCheck,
  Terminal,
  Wrench,
} from "lucide-react";

import GitHubIcon from "../components/ui/GitHubIcon";

import "./CaseStudy.css";

const engineeringHighlights = [
  {
    icon: Terminal,
    title: "Diagnostic CLI",
    text: "A command-line workflow for inspecting Kubernetes workloads and turning cluster evidence into useful troubleshooting guidance.",
  },
  {
    icon: Search,
    title: "Evidence Collection",
    text: "Examines workload state, pod conditions, container status and Kubernetes events to understand why a workload is unhealthy.",
  },
  {
    icon: Bug,
    title: "Failure Detection",
    text: "Built around realistic Kubernetes failures including CrashLoopBackOff, image pull errors, OOM conditions, probe failures and scheduling issues.",
  },
  {
    icon: ShieldCheck,
    title: "Kubernetes-Aware",
    text: "Designed around Kubernetes APIs and RBAC-aware access rather than relying on destructive remediation actions.",
  },
];

const diagnosticWorkflow = [
  {
    number: "01",
    title: "Select Workload",
    text: "Run KubeDiagnose against a target Kubernetes workload and namespace.",
  },
  {
    number: "02",
    title: "Inspect State",
    text: "Collect workload, pod and container status from the Kubernetes cluster.",
  },
  {
    number: "03",
    title: "Read Events",
    text: "Use Kubernetes events and failure signals to gather additional diagnostic evidence.",
  },
  {
    number: "04",
    title: "Classify Failure",
    text: "Map the collected evidence to known Kubernetes failure patterns.",
  },
  {
    number: "05",
    title: "Explain Next Steps",
    text: "Present the likely cause and actionable troubleshooting guidance to the engineer.",
  },
];

const failureScenarios = [
  {
    title: "CrashLoopBackOff",
    text: "Detect repeated container restarts and surface evidence that helps investigate why the application cannot remain healthy.",
  },
  {
    title: "ImagePull",
    text: "Identify container image retrieval failures and direct troubleshooting toward image names, registries and access.",
  },
  {
    title: "OOM",
    text: "Surface memory-related container failures so resource limits and application memory behaviour can be investigated.",
  },
  {
    title: "Probe Failures",
    text: "Recognize unhealthy readiness or liveness behaviour and highlight probe configuration as part of the investigation.",
  },
  {
    title: "Scheduling",
    text: "Identify workloads that cannot be scheduled and expose the cluster evidence needed to investigate placement constraints.",
  },
];

function KubeDiagnoseCaseStudy() {
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
                Kubernetes • Troubleshooting • DevSecOps
              </span>

              <h1>KubeDiagnose</h1>

              <p className="case-study__lead">
                A Kubernetes diagnostic toolkit that investigates unhealthy
                workloads, collects cluster evidence and turns common failure
                signals into actionable troubleshooting guidance.
              </p>

              <div className="case-study__tags">
                <span>Kubernetes</span>
                <span>Python</span>
                <span>Docker</span>
                <span>RBAC</span>
                <span>GitHub Actions</span>
                <span>CLI</span>
              </div>

              <div className="case-study__hero-actions">
                <a
                  className="button button--primary"
                  href="https://github.com/keshav2613/kubediagnose"
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
                src="/images/projects/kubediagnose.png"
                alt="KubeDiagnose Kubernetes diagnostic architecture"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="case-study__section">
        <div className="container case-study__two-column">
          <div>
            <span className="case-study__section-number">01</span>
            <h2>The Problem</h2>
          </div>

          <div className="case-study__prose">
            <p>
              When a Kubernetes workload fails, identifying the actual cause
              often requires engineers to inspect several different sources:
              workload state, pod status, container state and cluster events.
            </p>

            <p>
              KubeDiagnose was built to make that investigation more
              structured by collecting relevant evidence and translating
              common Kubernetes failure patterns into useful troubleshooting
              guidance.
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
              A focused Kubernetes troubleshooting tool designed around
              realistic workload failures and repeatable diagnostic steps.
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
              KubeDiagnose sits between the engineer and the Kubernetes API,
              gathering workload evidence and converting it into a structured
              diagnosis.
            </p>
          </div>

          <div className="case-study__architecture-image">
            <img
              src="/images/projects/kubediagnose.png"
              alt="KubeDiagnose architecture diagram"
            />
          </div>
        </div>
      </section>

      {/* DIAGNOSTIC WORKFLOW */}
      <section className="case-study__section case-study__section--soft">
        <div className="container">
          <div className="case-study__section-heading">
            <span className="case-study__section-number">04</span>
            <h2>Diagnostic Workflow</h2>

            <p>
              The diagnostic process follows the same evidence-first approach
              an engineer would use while investigating a failing Kubernetes
              workload.
            </p>
          </div>

          <div className="case-study__workflow">
            {diagnosticWorkflow.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>

                <h3>{step.title}</h3>

                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAILURE SCENARIOS */}
      <section className="case-study__section">
        <div className="container">
          <div className="case-study__section-heading">
            <span className="case-study__section-number">05</span>
            <h2>Failure Scenarios</h2>

            <p>
              I created intentionally unhealthy workloads to test the
              diagnostic workflow against common Kubernetes problems.
            </p>
          </div>

          <div className="case-study__scenario-grid">
            {failureScenarios.map((scenario) => (
              <article
                className="case-study__scenario"
                key={scenario.title}
              >
                <div className="case-study__scenario-icon">
                  <Bug size={18} />
                </div>

                <h3>{scenario.title}</h3>

                <p>{scenario.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ENGINEERING DECISIONS */}
      <section className="case-study__section case-study__section--soft">
        <div className="container">
          <div className="case-study__section-heading">
            <span className="case-study__section-number">06</span>
            <h2>Engineering Decisions</h2>
          </div>

          <div className="case-study__decisions">
            <div>
              <CheckCircle2 size={18} />

              <p>
                <strong>Evidence before recommendation.</strong> Diagnosis is
                based on workload state and Kubernetes evidence rather than
                returning generic troubleshooting advice.
              </p>
            </div>

            <div>
              <CheckCircle2 size={18} />

              <p>
                <strong>Non-destructive troubleshooting.</strong> The tool is
                focused on diagnosis and guidance rather than automatically
                changing workloads in the cluster.
              </p>
            </div>

            <div>
              <CheckCircle2 size={18} />

              <p>
                <strong>Repeatable failure testing.</strong> Purpose-built demo
                workloads make it possible to reproduce common Kubernetes
                failure states and validate diagnostic behaviour.
              </p>
            </div>

            <div>
              <CheckCircle2 size={18} />

              <p>
                <strong>Focused CLI experience.</strong> The interface keeps
                the workflow close to the terminal, where Kubernetes engineers
                already spend much of their troubleshooting time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXAMPLE DIAGNOSIS */}
      <section className="case-study__section">
        <div className="container case-study__two-column">
          <div>
            <span className="case-study__section-number">07</span>
            <h2>From Failure to Diagnosis</h2>
          </div>

          <div className="case-study__prose">
            <div className="case-study__incident-icon">
              <Wrench size={20} />
            </div>

            <p>
              A failing workload may initially expose only a high-level
              Kubernetes state such as CrashLoopBackOff or Pending.
            </p>

            <p>
              KubeDiagnose brings together the surrounding evidence — pod and
              container state together with relevant Kubernetes events — so
              the engineer can move from the visible symptom toward the likely
              underlying cause.
            </p>

            <p>
              The goal is not to replace Kubernetes troubleshooting knowledge,
              but to make the investigation faster, more consistent and easier
              to follow.
            </p>
          </div>
        </div>
      </section>

      {/* RELEASE */}
      <section className="case-study__section case-study__section--soft">
        <div className="container">
          <div className="case-study__section-heading">
            <span className="case-study__section-number">08</span>
            <h2>Release</h2>

            <p>
              KubeDiagnose reached its first portfolio release as
              <strong> v0.1.0</strong>.
            </p>
          </div>

          <div className="case-study__release-card">
            <div>
              <Container size={22} />
            </div>

            <div>
              <span>Current Release</span>
              <strong>v0.1.0</strong>

              <p>
                Initial diagnostic workflow with reproducible Kubernetes
                failure scenarios and troubleshooting guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="case-study__closing">
        <div className="container">
          <Code2 size={25} />

          <h2>Explore KubeDiagnose</h2>

          <p>
            Explore the CLI implementation, Kubernetes workloads and project
            documentation in the repository.
          </p>

          <a
            className="button button--primary"
            href="https://github.com/keshav2613/kubediagnose"
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

export default KubeDiagnoseCaseStudy;