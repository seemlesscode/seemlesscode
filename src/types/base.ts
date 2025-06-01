export type Lang = "en" | "fr";

export type Alternates = {
  en: string;
  fr: string;
};

export type Slugs = { [key: string]: Alternates };
