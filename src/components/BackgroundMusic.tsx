import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const startMusic = async () => {
      if (!audioRef.current) return;

      try {
        audioRef.current.volume = 0.35; // soft piano volume
        await audioRef.current.play();
      } catch (err) {
        console.log("Autoplay blocked until interaction");
      }
    };

    // try immediately
    startMusic();

    // fallback: start after first interaction
    document.addEventListener("click", startMusic);
    document.addEventListener("scroll", startMusic);
    document.addEventListener("touchstart", startMusic);

    return () => {
      document.removeEventListener("click", startMusic);
      document.removeEventListener("scroll", startMusic);
      document.removeEventListener("touchstart", startMusic);
    };
  }, []);

  return (
    <audio ref={audioRef} loop preload="auto">
      <source src="/music/birthday-piano.mp3" type="audio/mpeg" />
    </audio>
  );
}