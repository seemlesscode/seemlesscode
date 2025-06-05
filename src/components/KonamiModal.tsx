import { useEffect, useState } from 'preact/hooks';
import { useUnlockedSync } from '@/hooks/useUnlocked';
import { Lang } from '@/types/base';

interface Props {
  lang: Lang;
}

export default function KonamiModal({ lang }: Props) {
  const { unlocked } = useUnlockedSync();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const wasShown = localStorage.getItem('unlockNotification') === 'done';
    if (!wasShown && unlocked) {
      setVisible(true);
    }
  }, [unlocked]);

  const handleClose = () => {
    localStorage.setItem('unlockNotification', 'done');
    setVisible(false);
  };

  const handleBackdropClick = (event: MouseEvent) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  if (!visible) return null;

  return (
    <div class="konami-backdrop" onClick={handleBackdropClick}>
      <div class="konami-modal">
        <h2>COLOURS UNLOCKED</h2>
        <button class="konami-close" onClick={handleClose}>
          ✕
        </button>
      </div>
    </div>
  );
}
