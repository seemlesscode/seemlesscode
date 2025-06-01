import type { Alternates, Lang, Slugs } from "./base";

export type DisplayDataType =
  | { type: "slug"; data: SlugDataType }
  | { type: "page"; data: PageDataType };

export type PageDataType = {
  title: string;
  description: string;
  lang: Lang;
  alternates: Alternates;
};

export type SlugDataType = {
  title: string;
  description: string;
  lang: Lang;
  alternates: Alternates;
  slugs: Slugs;
};
