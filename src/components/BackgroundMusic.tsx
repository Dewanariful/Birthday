import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [started, setStarted] = useState(false);

  // Try autoplay on load
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.35;

    audio.play()
      .then(() => setStarted(true))
      .catch(() => {
        // autoplay blocked — user must click button
        console.log("Autoplay blocked");
      });
  }, []);

  const startMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      await audio.play();
      setStarted(true);
    } catch (err) {
      console.log("User interaction required");
    }
  };

  return (
    <>
      {/* Audio Element */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/music/birthday-piano.mp3" type="audio/mpeg" />
      </audio>

      {/* Show button only if music not started */}
      {!started && (
        <button
          onClick={startMusic}
          className="
            fixed top-8 right-30 z-50
            px-5 py-3
            rounded-full
            bg-pink-500 text-white
            font-semibold
            shadow-lg
            animate-bounce
            hover:bg-pink-600
            transition-all duration-300
          "
        >
          🎵 Click for Music
        </button>
      )}
    </>
  );
}