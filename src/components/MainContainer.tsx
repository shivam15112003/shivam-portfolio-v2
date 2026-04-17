import About from "./About";
import Contact from "./Contact";
import EducationFocus from "./EducationFocus";
import Experience from "./Experience";
import Landing from "./Landing";
import Navbar from "./Navbar";
import Publications from "./Publications";
import SoundToggle from "./SoundToggle";
import Work from "./Work";

const MainContainer = () => {
  return (
    <main className="site-shell">
      <div className="site-orb site-orb-left" aria-hidden="true"></div>
      <div className="site-orb site-orb-right" aria-hidden="true"></div>
      <Navbar />
      <SoundToggle />
      <div className="site-content">
        <Landing />
        <About />
        <EducationFocus />
        <Experience />
        <Work />
        <Publications />
        <Contact />
      </div>
    </main>
  );
};

export default MainContainer;
