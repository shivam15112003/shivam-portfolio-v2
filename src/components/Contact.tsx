import { profile } from "../data/portfolio";

const Contact = () => {
  return (
    <section className="page-section contact-section" id="contact">
      <div className="section-frame contact-frame">
        <div className="section-heading">
          <p className="section-kicker">Contact</p>
          <h2>Open to research, engineering, and robotics conversations.</h2>
          <p>
            The v1 contact flow is intentionally direct: email, LinkedIn, and
            GitHub, with no external form dependency and no extra setup required.
          </p>
        </div>

        <div className="contact-grid">
          <article className="content-card contact-card">
            <span className="card-label">Based in</span>
            <h3>{profile.location}</h3>
            <p>
              Current degree: {profile.degree} at {profile.school}.
            </p>
            <a
              className="button button-secondary contact-resume"
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              Open Resume
            </a>
          </article>

          <div className="contact-links">
            {profile.socialLinks.map((link) => (
              <a
                key={link.label}
                className="contact-link"
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
              >
                <span>{link.label}</span>
                <strong>{link.note ?? link.href}</strong>
              </a>
            ))}
          </div>
        </div>

        <footer className="site-footer">
          <span>Shivam Sharma</span>
          <span>{new Date().getFullYear()}</span>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
