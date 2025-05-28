import { useLangSync } from "@/hooks/useLang";

export default function LangSwitcher() {
  const { lang, updateLang } = useLangSync();

  return (
    <li>
      Language:
      <a
        href="/fr/parametres"
        class={lang === "fr" ? "lang-active" : "lang-inactive"}
        onClick={() => updateLang("fr")}
      >
        Fr
      </a>
      /
      <a
        href="/en/settings"
        class={lang === "en" ? "lang-active" : "lang-inactive"}
        onClick={() => updateLang("en")}
      >
        En
      </a>
    </li>
  );
}
