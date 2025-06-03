import ThemeSwitcher from '@/components/ThemeSwitcher';
import { useUnlockedSync } from '@/hooks/useUnlocked';

interface Props {
  title: string;
  labels: {
    theme: string;
    color: string;
    light: string;
    dark: string;
  };
}

export default function Settings({ title, labels }: Props) {
  const { unlocked } = useUnlockedSync();
  const show = unlocked ? 'show' : 'hidden';

  return (
    <div class={`easter-egg-${show}`}>
      <h1>{title}</h1>
      <ul>
        <ThemeSwitcher labels={labels} />
      </ul>
    </div>
  );
}
