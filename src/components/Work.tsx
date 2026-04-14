import { featuredProjects } from "../data/portfolio";

const Work = () => {
  return (
    <section className="page-section" id="projects">
      <div className="section-frame">
        <div className="section-heading">
          <p className="section-kicker">Selected Projects</p>
          <h2>Six projects that best show AI + robotics range.</h2>
          <p>
            Each card keeps a fixed recruiter-friendly format: short summary,
            focused tags, GitHub link, and a demo link when one already exists.
          </p>
        </div>

        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <article key={project.title} className="project-card">
              <div className="project-card__top">
                <span className="project-card__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {project.featured ? (
                  <span className="project-card__badge">Featured</span>
                ) : null}
              </div>

              <h3>{project.title}</h3>
              <p>{project.summary}</p>

              <div className="tag-row" aria-label={`${project.title} tags`}>
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="card-actions">
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                {project.demoUrl ? (
                  <a href={project.demoUrl} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                ) : null}
                {project.paperUrl ? (
                  <a href={project.paperUrl} target="_blank" rel="noreferrer">
                    Paper
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
