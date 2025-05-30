import { useRef, useState } from "preact/hooks";
import { useKonamiCode } from "@/hooks/useKonamiCode";
import { useKonamiCodeMobile } from "@/hooks/useKonamiCodeMobile";

export default function StylizedVideo() {
  const [started, setStarted] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  useKonamiCode(() => setUnlocked(true));
  useKonamiCodeMobile(() => setUnlocked(true));

  const handleStart = () => {
    const video = videoRef.current;
    if (video) {
      video.play();
      setStarted(true);
    }
  };

  return (
    <>
      {unlocked && (
        <div class="video-wrapper">
          <video
            ref={videoRef}
            class={`video-pixel ${started ? "visible" : ""}`}
            width="720"
            preload="auto"
          >
            <source src="/media/tuco-pixel.mp4" type="video/mp4" />
          </video>

          {!started && (
            <button
              class="video-play-button"
              onClick={handleStart}
              aria-label="Play video"
            >
              <img
                src="/media/play-f82.png"
                alt="Play"
                width="64"
                height="64"
                class="pixel-icon"
              />
            </button>
          )}
        </div>
      )}
    </>
  );
}
