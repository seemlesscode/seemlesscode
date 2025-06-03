import { useKonamiCode } from '@/hooks/useKonamiCode';
import { useKonamiCodeMobile } from '@/hooks/useKonamiCodeMobile';

export default function Konami() {
  useKonamiCode();
  useKonamiCodeMobile();

  return null;
}
