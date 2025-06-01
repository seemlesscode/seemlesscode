import type { Alternates } from "./base";

export interface LayoutProps {
  lang?: "en" | "fr";
  title?: string;
  description?: string;
  alternates?: Alternates;
  canonical?: string;
}
