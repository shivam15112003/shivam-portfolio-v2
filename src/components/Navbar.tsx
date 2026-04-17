const navItems = [
  { href: "#about", label: "About" },
  { href: "#focus", label: "Education + Focus" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#publications", label: "Publications" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
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

        <nav className="site-nav__links" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
