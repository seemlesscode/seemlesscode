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
    const link = (e.target as HTMLElement).closest('a');
    if (isSmall && link) close();
  };
  return <div onClick={handleClick}>{children}</div>;
}
