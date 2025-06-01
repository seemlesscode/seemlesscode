import type { Lang } from "@/types/base";

type MenuItem = {
  id: "about" | "projects" | "contact" | "settings";
  label: string;
  url: string;
};

export function getMenu(lang: Lang): MenuItem[] {
  const fr: MenuItem[] = [
    { id: "about", label: "À propos", url: "/fr/a-propos/manifeste" },
    { id: "projects", label: "Projets", url: "/fr/projets/kallosophia" },
    { id: "contact", label: "Contact", url: "/fr/contact" },
    { id: "settings", label: "Paramètres", url: "/fr/parametres" },
  ];

  const en: MenuItem[] = [
    { id: "about", label: "About", url: "/en/about/manifesto" },
    { id: "projects", label: "Projects", url: "/en/projects/kallosophia" },
    { id: "contact", label: "Contact", url: "/en/contact" },
    { id: "settings", label: "Settings", url: "/en/settings" },
  ];

  return lang === "fr" ? fr : en;
}
