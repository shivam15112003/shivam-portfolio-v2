import { useEffect, useRef } from "react";
import * as THREE from "three";
import setCharacter from "./utils/character";
import setLighting from "./utils/lighting";
import handleResize from "./utils/resizeUtils";
import {
  handleMouseMove,
  handleTouchEnd,
  handleHeadRotation,
  handleTouchMove,
} from "./utils/mouseUtils";
import setAnimations from "./utils/animationUtils";

type SceneProps = {
  onError?: (error: unknown) => void;
};

const Scene = ({ onError }: SceneProps) => {
  const canvasDiv = useRef<HTMLDivElement | null>(null);
  const hoverDivRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef(new THREE.Scene());

  useEffect(() => {
    const canvasElement = canvasDiv.current;
    if (!canvasElement) {
      return;
    }

    const scene = sceneRef.current;
    const rect = canvasElement.getBoundingClientRect();
    const width = rect.width || 720;
    const height = rect.height || 720;
    const aspect = width / height;
    const clock = new THREE.Clock();

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
      });
    } catch (error) {
      onError?.(error);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    canvasElement.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(17, aspect, 0.1, 1000);
    camera.position.set(0, 12.4, 28);
    camera.zoom = 1;
    camera.updateProjectionMatrix();

    const light = setLighting(scene);
    const { loadCharacter } = setCharacter(renderer, scene, camera);

    let character: THREE.Object3D | null = null;
    let hoverCleanup: (() => void) | undefined;
    let headBone: THREE.Object3D | null = null;
    let screenLight: THREE.Object3D | null = null;
    let mixer: THREE.AnimationMixer | null = null;
    let animationFrame = 0;
    let touchStartTimeout: number | undefined;
    let mounted = true;
    let mouse = { x: 0, y: 0 };
    let interpolation = { x: 0.1, y: 0.2 };

    const resizeHandler = () => {
      if (character) {
        handleResize(renderer, camera, canvasDiv, character);
      }
    };

    const onMouseMove = (event: MouseEvent) => {
      handleMouseMove(event, (x, y) => {
        mouse = { x, y };
      });
    };

    const onTouchMove = (event: TouchEvent) => {
      handleTouchMove(event, (x, y) => {
        mouse = { x, y };
      });
    };

    const onTouchStart = () => {
      touchStartTimeout = window.setTimeout(() => {
        document.addEventListener("touchmove", onTouchMove, { passive: true });
      }, 200);
    };

    const onTouchEnd = () => {
      handleTouchEnd((x, y, interpolationX, interpolationY) => {
        mouse = { x, y };
        interpolation = { x: interpolationX, y: interpolationY };
      });
    };

    const landingDiv = document.getElementById("landingDiv");
    document.addEventListener("mousemove", onMouseMove);
    landingDiv?.addEventListener("touchstart", onTouchStart, { passive: true });
    landingDiv?.addEventListener("touchend", onTouchEnd);
    window.addEventListener("resize", resizeHandler);

    loadCharacter()
      .then((gltf) => {
        if (!mounted || !gltf) {
          return;
        }

        const animations = setAnimations(gltf);
        if (hoverDivRef.current) {
          hoverCleanup = animations.hover(gltf, hoverDivRef.current);
        }

        mixer = animations.mixer;
        character = gltf.scene;
        scene.add(character);
        headBone = character.getObjectByName("spine006") || null;
        screenLight = character.getObjectByName("screenlight") || null;
        light.turnOnLights();
        window.setTimeout(() => {
          animations.startIntro();
        }, 120);
      })
      .catch((error) => {
        console.error("Failed to load 3D hero scene", error);
        onError?.(error);
      });

    const animate = () => {
      if (!mounted) {
        return;
      }

      animationFrame = window.requestAnimationFrame(animate);

      if (headBone) {
        handleHeadRotation(
          headBone,
          mouse.x,
          mouse.y,
          interpolation.x,
          interpolation.y,
          THREE.MathUtils.lerp
        );
        light.setPointLight(screenLight);
      }

      if (mixer) {
        mixer.update(clock.getDelta());
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mounted = false;
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(touchStartTimeout);
      hoverCleanup?.();
      scene.clear();
      renderer.dispose();
      window.removeEventListener("resize", resizeHandler);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("touchmove", onTouchMove);
      landingDiv?.removeEventListener("touchstart", onTouchStart);
      landingDiv?.removeEventListener("touchend", onTouchEnd);
      if (canvasElement.contains(renderer.domElement)) {
        canvasElement.removeChild(renderer.domElement);
      }
    };
  }, [onError]);

  return (
    <div className="character-container">
      <div className="character-model" ref={canvasDiv}>
        <div className="character-rim"></div>
        <div className="character-hover" ref={hoverDivRef}></div>
      </div>
    </div>
  );
};

export default Scene;
