export interface LayoutProps {
  lang?: "en" | "fr";
  title?: string;
  description?: string;
  alternates?: Record<string, string>;
  canonical?: string;
}
