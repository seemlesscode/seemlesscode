import { useEffect } from 'preact/hooks';
import { getMenu } from '@/lib/menu';
import { Lang } from '@/types/base';

interface Props {
  lang: Lang;
}

export function useSwipeNavigation({ lang }: Props) {
  const menu = getMenu(lang);

  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      handleSwipe();
    };

    const handleSwipe = () => {
      const currentPath = window.location.pathname;
      const index = menu.findIndex((m) => currentPath.startsWith(m.url));
      console.log({ currentPath });
      console.log({ menu });
      if (index === -1) return;

      const dx = touchEndX - touchStartX;
      const dy = Math.abs(touchEndY - touchStartY);
      const threshold = 50;

      if (dy > 40) return;

      if (dx > threshold && index > 0) {
        window.location.href = menu[index - 1].url;
      } else if (dx < -threshold && index < menu.length - 1) {
        window.location.href = menu[index + 1].url;
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);
}
