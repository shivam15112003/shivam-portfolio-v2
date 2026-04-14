import { useEffect, useRef, useState } from "react";

const audioUrl = `${import.meta.env.BASE_URL}audio/portfolio-ambient.wav`;

const SoundToggle = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(audioUrl);
    audio.loop = true;
    audio.volume = 0.18;
    audio.preload = "auto";
    audioRef.current = audio;

    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.pause();
      audio.currentTime = 0;
      audio.removeEventListener("ended", handleEnded);
      audioRef.current = null;
    };
  }, []);

  const handleToggle = async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Unable to start ambient audio.", error);
      setIsPlaying(false);
    }
  };

  return (
    <button
      type="button"
      className="sound-toggle"
      data-active={isPlaying}
      aria-pressed={isPlaying}
      onClick={() => void handleToggle()}
    >
      <span className="sound-toggle__dot" aria-hidden="true"></span>
      <span className="sound-toggle__text">
        <span className="sound-toggle__label">
          {isPlaying ? "Ambient sound on" : "Ambient sound off"}
        </span>
        <span className="sound-toggle__hint">
          {isPlaying ? "Click to pause" : "Click to play"}
        </span>
      </span>
    </button>
  );
};

export default SoundToggle;
