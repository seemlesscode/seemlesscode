import { useEffect } from "preact/hooks";

export function useKonamiCode(onUnlock: () => void) {
  useEffect(() => {
    const previouslyUnlocked = localStorage.getItem("unlocked") === "true";

    if (previouslyUnlocked) {
      onUnlock();
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
          localStorage.setItem("unlocked", "true");
          onUnlock();
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
