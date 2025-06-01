import type { Alternates, Lang, Slugs } from "@/types/base";

export const buildAlternateUrl = (
  lang: Lang,
  collection: string,
  slug: string
): string => `/${lang}/${collection}/${slug}`;

export const buildAlternates = (slugs: Slugs, slug: string): Alternates => ({
  fr: slugs[slug].fr,
  en: slugs[slug].en,
});
