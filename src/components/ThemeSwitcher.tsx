import { useThemeSync } from '@/hooks/useTheme';
import { useUnlockedSync } from '@/hooks/useUnlocked';
import { Lang } from '@/types/base';

interface ThemeSwitcherProps {
  lang: Lang;
  labels: {
    theme: string;
    light: string;
    dark: string;
    color: string;
  };
}

export default function ThemeSwitcher({ labels, lang }: ThemeSwitcherProps) {
  const { theme, color, updateTheme, updateColor } = useThemeSync();
  const { unlocked } = useUnlockedSync(false);

  const themes = [
    { label: labels.light, value: 'light' },
    { label: labels.dark, value: 'dark' },
  ];

  const colors = ['#f82', '#0d4', '#c2c', '#0cf'];

  return (
    <>
      <div class="theme-options">
        {labels.theme}:
        {themes.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => updateTheme(value)}
            aria-pressed={theme === value}
            style={
              theme === value
                ? {
                    borderColor: 'var(--color-primary)',
                    color: 'var(--color-primary)',
                  }
                : undefined
            }
          >
            {label}
          </button>
        ))}
      </div>
      {unlocked ? (
        <div class="color-options">
          {labels.color}:
          {colors.map((c) => (
            <div
              key={c}
              class={`color-choice-${c.substring(1)}`}
              data-active={color === c}
              style={{ backgroundColor: c }}
              onClick={() => updateColor(c)}
            />
          ))}
        </div>
      ) : (
        <a href={`/${lang}/secret`} class="taunt-button">
          <span class="taunt-cta">TRY ?</span>
          <span class="taunt-text">and unlock secret content...</span>
        </a>
      )}
    </>
  );
}
