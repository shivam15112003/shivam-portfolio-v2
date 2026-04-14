import { aboutCards } from "../data/portfolio";

const About = () => {
  return (
    <section className="page-section" id="about">
      <div className="section-frame">
        <div className="section-heading">
          <p className="section-kicker">About</p>
          <h2>AI, robotics, and practical systems thinking.</h2>
          <p>
            The site keeps the visual punch of the 3D reference, but the story is
            tuned for recruiters: what Shivam builds, where that work is headed,
            and which projects best represent it.
          </p>
        </div>

        <div className="about-grid">
          {aboutCards.map((card) => (
            <article key={card.title} className="content-card">
              <span className="card-label">{card.title}</span>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
