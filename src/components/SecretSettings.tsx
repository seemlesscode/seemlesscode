import { useUnlockedSync } from "@/hooks/useUnlocked";
import LangSwitcher from "@/components/LangSwitcher";
import ThemeSwitcher from "@/components/ThemeSwitcher";

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
        <LangSwitcher />
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
