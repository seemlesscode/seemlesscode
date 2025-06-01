import { useLangSync } from "@/hooks/useLang";

interface Props {
  alternates: {
    en: string;
    fr: string;
  };
}

export default function LangSwitcher({ alternates }: Props) {
  const { lang, updateLang } = useLangSync();

  return (
    <li>
      <a
        href={alternates.fr}
        class={lang === "fr" ? "lang-active" : "lang-inactive"}
        onClick={(e) => {
          e.preventDefault();
          updateLang("fr");
          window.location.href = alternates.fr;
        }}
      >
        Fr
      </a>
      /
      <a
        href={alternates.en}
        class={lang === "en" ? "lang-active" : "lang-inactive"}
        onClick={(e) => {
          e.preventDefault();
          updateLang("en");
          window.location.href = alternates.en;
        }}
      >
        En
      </a>
    </li>
  );
}
