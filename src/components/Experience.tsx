import { experienceEntries } from "../data/portfolio";

const Experience = () => {
  return (
    <section className="page-section" id="experience">
      <div className="section-frame">
        <div className="section-heading">
          <p className="section-kicker">Work Experience</p>
          <h2>Applied AI work across research systems and production ML.</h2>
          <p>
            The experience here is pulled from the current AI and robotics
            resume so recruiters can scan recent impact without opening the PDF
            first.
          </p>
        </div>

        <div className="experience-grid">
          {experienceEntries.map((entry) => (
            <article
              key={`${entry.role}-${entry.company}`}
              className="content-card experience-card"
            >
              <div className="experience-card__meta">
                <span className="card-label">{entry.timeline}</span>
                <span className="education-meta">{entry.location}</span>
              </div>
              <h3>{entry.role}</h3>
              <p className="experience-card__company">{entry.company}</p>
              <p>{entry.summary}</p>
              <ul className="experience-highlights">
                {entry.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
