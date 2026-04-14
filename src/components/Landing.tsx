import { heroHighlights, profile, quickFacts } from "../data/portfolio";
import HeroScene from "./HeroScene";

const Landing = () => {
  const profileImageUrl = `${import.meta.env.BASE_URL}images/shivam-profile.jpeg`;

  return (
    <section className="hero-section" id="top">
      <div className="section-frame hero-frame" id="landingDiv">
        <div className="hero-copy">
          <div className="hero-profile-card">
            <img
              className="hero-profile-card__image"
              src={profileImageUrl}
              alt={profile.name}
            />
            <div className="hero-profile-card__text">
              <strong>{profile.name}</strong>
              <span>{profile.location}</span>
            </div>
          </div>

          <p className="section-kicker">Automating the physical world with AI</p>
          <h1 className="hero-title">{profile.name}</h1>
          <p className="hero-headline">{profile.headline}</p>
          <p className="hero-summary">{profile.shortBio}</p>

          <div className="hero-pill-row" aria-label="Highlights">
            {heroHighlights.map((item) => (
              <span key={item} className="hero-pill">
                {item}
              </span>
            ))}
          </div>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View Projects
            </a>
            <a
              className="button button-secondary"
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
            <a
              className="button button-secondary"
              href={profile.socialLinks[2]?.href}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>

          <div className="hero-facts">
            {quickFacts.map((fact) => (
              <article key={fact.label} className="fact-card">
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </article>
            ))}
          </div>
        </div>

        <HeroScene />
      </div>
    </section>
  );
};

export default Landing;
