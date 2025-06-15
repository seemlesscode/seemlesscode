import { useLangSync } from '@/hooks/useLang';

interface Props {
  alternates: {
    en: string;
    fr: string;
  };
}

export default function LangSwitcher({ alternates }: Props) {
  const { lang, updateLang } = useLangSync();

  const className = (isCurrentLang: boolean) => {
    const active = isCurrentLang ? 'lang-active' : 'lang-inactive';
    return `header-lang ${active}`;
  };

  return (
    <>
      <a
        href={alternates.fr}
        class={className(lang === 'fr')}
        onClick={(e) => {
          e.preventDefault();
          updateLang('fr');
          window.location.href = alternates.fr;
        }}
      >
        Fr
      </a>
      .
      <a
        href={alternates.en}
        class={className(lang === 'en')}
        onClick={(e) => {
          e.preventDefault();
          updateLang('en');
          window.location.href = alternates.en;
        }}
      >
        En
      </a>
    </>
  );
}
