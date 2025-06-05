import { useSwipeNavigation } from '@/hooks/useSwipeNavigation';
import { Lang } from '@/types/base';

interface Props {
  lang: Lang;
}

export default function SwipeNavigation({ lang }: Props) {
  useSwipeNavigation({ lang });
}
