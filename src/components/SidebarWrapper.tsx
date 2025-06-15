import type { ComponentChildren } from 'preact';
import { useContext } from 'preact/hooks';
import { SidebarContext } from '@/components/SidebarProvider';

export default function SidebarWrapper({
  children,
}: {
  children: ComponentChildren;
}) {
  const { isSmall, close } = useContext(SidebarContext);

  const handleClick = (e: MouseEvent) => {
    const link = (e.target as HTMLElement).closest('a[href]');
    if (isSmall && link) {
      e.preventDefault();
      const href = (link as HTMLAnchorElement).href;

      close();

      setTimeout(() => {
        window.location.href = href;
      }, 350);
    }
  };

  return <div onClick={handleClick}>{children}</div>;
}
