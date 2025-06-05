import { useKonamiCode } from '@/hooks/useKonamiCode';
import { useKonamiCodeMobile } from '@/hooks/useKonamiCodeMobile';
import { useUnlockedSync } from '@/hooks/useUnlocked';
import { Lang } from '@/types/base';
import KonamiModal from './KonamiModal';

interface Props {
  lang: Lang;
}

export default function Konami({ lang }: Props) {
  useKonamiCode({ lang });
  useKonamiCodeMobile({ lang });

  const { unlocked } = useUnlockedSync();

  return <>{unlocked && <KonamiModal lang={lang} />}</>;
}
