import { useThemeSync } from "@/hooks/useTheme";

export default function ThemeClientInit() {
  useThemeSync();
  return null;
}
