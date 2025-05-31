import { useEffect } from "preact/hooks";
import { useUnlockedSync } from "./useUnlocked";

export function useKonamiCode() {
  const { unlocked, updateUnlocked } = useUnlockedSync();

  useEffect(() => {
    if (unlocked) {
      return;
    }

    const konami = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ];
    let current = 0;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === konami[current]) {
        current++;
        if (current === konami.length) {
          updateUnlocked(true);
          current = 0;
        }
      } else {
        current = 0;
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);
}
