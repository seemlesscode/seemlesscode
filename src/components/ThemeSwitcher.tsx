import { useThemeSync } from '@/hooks/useTheme';
import { useUnlockedSync } from '@/hooks/useUnlocked';

interface ThemeSwitcherProps {
  labels: {
    theme: string;
    light: string;
    dark: string;
    color: string;
  };
}

export default function ThemeSwitcher({ labels }: ThemeSwitcherProps) {
  const { theme, color, updateTheme, updateColor } = useThemeSync();
  const { unlocked } = useUnlockedSync(false);

  const themes = [
    { label: labels.light, value: 'light' },
    { label: labels.dark, value: 'dark' },
  ];

  const colors = ['#f82', '#0d4', '#c2c', '#0cf'];

  return (
    <>
      <li>
        {labels.theme}:
        <div class="theme-options">
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
      </li>

      {unlocked && (
        <li>
          {labels.color}:
          <div class="color-options">
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
        </li>
      )}
    </>
  );
}
