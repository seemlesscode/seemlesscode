import { useEffect } from 'preact/hooks';
import { settings } from '@/pages/en/data/settings.astro';
import { Lang } from '@/types/base';
import { useUnlockedSync } from './useUnlocked';

interface Props {
  lang: Lang;
}

export function useKonamiCode({ lang }: Props) {
  const { unlocked, updateUnlocked } = useUnlockedSync();

  useEffect(() => {
    if (unlocked) {
      return;
    }

    const konami = [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'b',
      'a',
    ];
    let current = 0;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === konami[current]) {
        current++;
        if (current === konami.length) {
          updateUnlocked(true);
          current = 0;
          window.location.href = settings.data.alternates[lang];
        }
      } else {
        current = 0;
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);
}
