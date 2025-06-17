import { useContext } from 'preact/hooks';
import { SidebarContext } from '@/components/SidebarProvider';

export default function SidebarToggle() {
  const { visible, toggle } = useContext(SidebarContext);

  return (
    <button class="chevron-toggle" onClick={() => toggle()}>
      {visible ? '◀' : '▶'}
    </button>
  );
}
