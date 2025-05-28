import { useEffect, useState } from "preact/hooks";

export function useLangSync(defaultLang: "en" | "fr" = "en") {
  const [lang, setLang] = useState<"en" | "fr">(defaultLang);

  useEffect(() => {
    const stored = localStorage.getItem("lang") as "en" | "fr" | null;
    if (stored) setLang(stored);
  }, []);

  const updateLang = (newLang: "en" | "fr") => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return { lang, updateLang };
}
