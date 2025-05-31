import { useEffect, useState } from "preact/hooks";

export function useUnlockedSync(defaultUnlocked: boolean = false) {
  const [unlocked, setUnlocked] = useState<boolean>(defaultUnlocked);

  useEffect(() => {
    const stored = localStorage.getItem("unlocked") === "true";
    if (stored) setUnlocked(stored);
  }, []);

  const updateUnlocked = (newUnlocked: boolean) => {
    setUnlocked(newUnlocked);
    localStorage.setItem("unlocked", newUnlocked ? "true" : "false");
  };

  return { unlocked, updateUnlocked };
}
