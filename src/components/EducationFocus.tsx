import { coreStack, educationEntries, focusAreas } from "../data/portfolio";

const EducationFocus = () => {
  return (
    <section className="page-section" id="focus">
      <div className="section-frame">
        <div className="section-heading">
          <p className="section-kicker">Education + Focus</p>
          <h2>Graduate training plus a clear direction in AI and robotics.</h2>
          <p>
            Instead of a generic career timeline, this section puts education,
            current direction, and the core tools behind the work in one place.
          </p>
        </div>

        <div className="education-focus-grid">
          <article className="education-panel">
            <span className="card-label">Education</span>
            {educationEntries.map((entry) => (
              <div key={entry.degree} className="education-entry">
                <span className="education-meta">{entry.timeline}</span>
                <h3>{entry.degree}</h3>
                <p>{entry.school}</p>
                <p>{entry.detail}</p>
              </div>
            ))}
          </article>

          <article className="focus-panel">
            <span className="card-label">Current focus</span>
            {focusAreas.map((focus) => (
              <div key={focus.title} className="focus-card">
                <span className="focus-card__title">{focus.title}</span>
                <p>{focus.description}</p>
              </div>
            ))}

            <div>
              <span className="card-label">Core stack</span>
              <div className="chip-row">
                {coreStack.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default EducationFocus;
