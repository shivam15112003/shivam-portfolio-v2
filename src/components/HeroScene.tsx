import { lazy, Suspense, useEffect, useState } from "react";
import { profile } from "../data/portfolio";

const CharacterModel = lazy(() => import("./Character"));

const supportsWebGL = () => {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
};

const HeroFallback = () => {
  const profileImageUrl = `${import.meta.env.BASE_URL}images/shivam-profile.jpeg`;

  return (
    <div className="hero-scene-fallback">
      <img src={profileImageUrl} alt={profile.name} />
      <div className="hero-scene-fallback__content">
        <strong>Static hero fallback</strong>
        <p>
          The 3D model stays enabled for desktop browsers with motion allowed. On
          smaller screens or unsupported devices, the site falls back cleanly.
        </p>
      </div>
    </div>
  );
};

const HeroScene = () => {
  const [canRender3d, setCanRender3d] = useState(false);
  const [sceneFailed, setSceneFailed] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateSupport = () => {
      const shouldUse3d =
        window.innerWidth >= 960 && !mediaQuery.matches && supportsWebGL();
      setCanRender3d(shouldUse3d);
    };

    updateSupport();
    window.addEventListener("resize", updateSupport);
    mediaQuery.addEventListener("change", updateSupport);

    return () => {
      window.removeEventListener("resize", updateSupport);
      mediaQuery.removeEventListener("change", updateSupport);
    };
  }, []);

  const showScene = canRender3d && !sceneFailed;

  return (
    <aside className="hero-scene-panel" aria-label="3D hero">
      <span className="hero-scene-status">
        {showScene ? "Interactive desktop mode" : "Static fallback"}
      </span>
      <div className="hero-scene-body">
        {showScene ? (
          <Suspense fallback={<HeroFallback />}>
            <CharacterModel onError={() => setSceneFailed(true)} />
          </Suspense>
        ) : (
          <HeroFallback />
        )}
      </div>
    </aside>
  );
};

export default HeroScene;
