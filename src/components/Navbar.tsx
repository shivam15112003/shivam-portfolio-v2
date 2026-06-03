import { type MouseEvent, useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#focus", label: "Education + Focus" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#publications", label: "Publications" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeDesktopMenu = () => {
      if (window.innerWidth > 820) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeDesktopMenu);
    return () => window.removeEventListener("resize", closeDesktopMenu);
  }, []);

  const handleNavItemClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const target = document.getElementById(href.replace("#", ""));

    if (!target) {
      setIsMenuOpen(false);
      return;
    }

    event.preventDefault();
    const shouldDelayScroll = isMenuOpen && window.innerWidth <= 820;
    setIsMenuOpen(false);

    window.setTimeout(
      () => {
        window.history.pushState(null, "", href);
        target.scrollIntoView({ block: "start" });
      },
      shouldDelayScroll ? 240 : 0
    );
  };

  return (
    <header className="site-nav">
      <div className="site-nav__inner">
        <a href="#top" className="site-brand" aria-label="Go to top">
          <span className="site-brand__mark">SS</span>
          <span className="site-brand__text">
            <strong>Shivam Sharma</strong>
            <span>AI + Robotics</span>
          </span>
        </a>

        <button
          type="button"
          className="site-nav__toggle"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>

        <nav
          id="primary-navigation"
          className="site-nav__links"
          data-open={isMenuOpen}
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => handleNavItemClick(event, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
