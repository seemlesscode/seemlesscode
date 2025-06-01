import { useRef, useState } from "preact/hooks";
import useHint from "@/hooks/useHint";
import { useKonamiCode } from "@/hooks/useKonamiCode";
import { useKonamiCodeMobile } from "@/hooks/useKonamiCodeMobile";
import { useThemeSync } from "@/hooks/useTheme";
import { useUnlockedSync } from "@/hooks/useUnlocked";

export default function StylizedVideo() {
  useHint();
  const [started, setStarted] = useState(false);
  const { unlocked } = useUnlockedSync(false);
  const { color } = useThemeSync();

  const videoRef = useRef<HTMLVideoElement>(null);
  useKonamiCode();
  useKonamiCodeMobile();

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
                src={`/media/play-${color?.substring(1)}.png`}
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
