import { publications } from "../data/portfolio";

const Publications = () => {
  return (
    <section className="page-section" id="publications">
      <div className="section-frame">
        <div className="section-heading">
          <p className="section-kicker">Publications</p>
          <h2>Research work that already has a paper trail.</h2>
          <p>
            Selected published work in AI interaction, virtual hardware, and
            gesture-driven intelligent systems.
          </p>
        </div>

        <div className="publication-grid">
          {publications.map((publication) => (
            <article key={publication.title} className="publication-card">
              <span className="publication-meta">{publication.venueYear}</span>
              <h3>{publication.title}</h3>
              <p>{publication.summary}</p>
              <a
                className="button button-secondary"
                href={publication.url}
                target="_blank"
                rel="noreferrer"
              >
                View Paper
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
