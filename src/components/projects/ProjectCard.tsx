import { ArrowUpRight } from "lucide-react";

import type { Project } from "../../data/projects";
import GitHubIcon from "../ui/GitHubIcon";

import "./ProjectCard.css";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  const statusClass = project.status
    .toLowerCase()
    .replaceAll(" ", "-");

  return (
    <article className="project-card">
      <div
        className={`project-card__image-wrapper project-card__image-wrapper--${project.id}`}
      >
        <img
          className="project-card__image"
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
        />

        <span className="project-card__number">
          {project.number}
        </span>

        <span
          className={`project-card__status project-card__status--${statusClass}`}
        >
          {project.status}
        </span>
      </div>

      <div className="project-card__content">
        <p className="project-card__category">
          {project.category}
        </p>

        <div className="project-card__title-row">
          <h3>{project.name}</h3>

          {project.version && (
            <span className="project-card__version">
              {project.version}
            </span>
          )}
        </div>

        <p className="project-card__description">
          {project.description}
        </p>

        <div
          className="project-card__technologies"
          aria-label={`${project.name} technologies`}
        >
          {project.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <div className="project-card__actions">
          <a
            className="project-card__case-study"
            href={project.caseStudyUrl}
          >
            View Case Study
            <ArrowUpRight size={16} />
          </a>

          <a
            className="project-card__github"
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.name} GitHub repository`}
          >
            <GitHubIcon size={17} />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;