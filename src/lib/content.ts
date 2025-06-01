import {
  getCollection,
  type CollectionEntry,
  type ContentEntryMap,
} from "astro:content";

export async function loadLocalizedEntry<T extends keyof ContentEntryMap>(
  collection: T,
  slug: string,
  lang: string,
): Promise<{
  current: CollectionEntry<T> | undefined;
  localized: CollectionEntry<T>[];
}> {
  const entries = await getCollection(collection);
  const localized = entries.filter((entry) => entry.data.lang === lang);
  const current = localized.find((entry) => entry.data.slug === slug);
  return { current, localized };
}

export async function getLocalizedPaths<T extends keyof ContentEntryMap>(
  collection: T,
  lang: string,
) {
  const entries = await getCollection(collection);
  return entries
    .filter((entry) => entry.data.lang === lang)
    .map((entry) => ({ params: { slug: entry.data.slug } }));
}
