import { useRef, useState } from "preact/hooks";

export default function StylizedVideo() {
  const [started, setStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleStart = () => {
    const video = videoRef.current;
    if (video) {
      video.play();
      setStarted(true);
    }
  };

  return (
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
  );
}
