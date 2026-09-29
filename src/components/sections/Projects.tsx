import { ArrowRight } from "lucide-react";

import { projects } from "../../data/projects";
import ProjectCard from "../projects/ProjectCard";

import "./Projects.css";

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="projects__heading">
          <div>
            <span className="projects__eyebrow">
              Selected engineering work
            </span>

            <h2>Featured Projects</h2>

            <p>
              Projects built around real cloud, Kubernetes and
              observability problems.
            </p>
          </div>

          <a
            className="projects__github-link"
            href="https://github.com/keshav2613"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        <p className="projects__note">
          Built to learn by solving actual engineering problems —
          not tutorial clones.
        </p>
      </div>
    </section>
  );
}

export default Projects;