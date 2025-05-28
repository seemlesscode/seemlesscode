import { useEffect, useState } from "preact/hooks";

export function useThemeSync() {
  const [theme, setTheme] = useState<string | null>(null);
  const [color, setColor] = useState<string | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const storedColor = localStorage.getItem("primary");

    if (storedTheme) {
      document.documentElement.setAttribute("data-theme", storedTheme);
      setTheme(storedTheme);
    }

    if (storedColor) {
      document.documentElement.setAttribute("data-primary", storedColor);
      setColor(storedColor);
    }
  }, []);

  const updateTheme = (newTheme: string) => {
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  const updateColor = (newColor: string) => {
    localStorage.setItem("primary", newColor);
    document.documentElement.setAttribute("data-primary", newColor);
    setColor(newColor);
  };

  return { theme, color, updateTheme, updateColor };
}
