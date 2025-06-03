import { useEffect, useRef, useState } from 'preact/hooks';
import useHint from '@/hooks/useHint';
import { Lang } from '@/types/base';
import PlayButton from './PlayButton';

interface Props {
  lang: Lang;
}

export default function StylizedVideo({ lang }: Props) {
  useHint();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setIsDone(true);
    };

    video.addEventListener('ended', handleEnded);
    return () => video.removeEventListener('ended', handleEnded);
  }, []);

  if (isDone) return null;

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
        class={`video-pixel ${started ? 'visible' : ''}`}
        width="720"
        preload="auto"
        playsInline
      >
        <source src={`/media/earn-it-${lang}.mp4`} type="video/mp4" />
      </video>

      {!started && (
        <button
          class="video-play-button"
          onClick={handleStart}
          aria-label="Play video"
        >
          <PlayButton />
        </button>
      )}
    </div>
  );
}
