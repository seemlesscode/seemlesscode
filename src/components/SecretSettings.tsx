import ThemeSwitcher from "@/components/ThemeSwitcher";
import { useUnlockedSync } from "@/hooks/useUnlocked";

interface Props {
  title: string;
}

export default function Settings({ title }: Props) {
  const { unlocked } = useUnlockedSync();
  const show = unlocked ? "show" : "hidden";

  return (
    <div class={`easter-egg-${show}`}>
      <h1>{title}</h1>
      <ul>
        <ThemeSwitcher
          labels={{
            theme: "Theme",
            color: "Color",
            light: "Light",
            dark: "Dark",
          }}
        />
      </ul>
    </div>
  );
}
