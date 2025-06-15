import { createContext, type ComponentChildren } from 'preact';
import { useEffect, useMemo, useState } from 'preact/hooks';

interface ContextValue {
  isSmall: boolean;
  visible: boolean;
  toggle: () => void;
  close: () => void;
}
export const SidebarContext = createContext<ContextValue>({
  isSmall: false,
  visible: false,
  toggle: () => {},
  close: () => {},
});

export function SidebarProvider({ children }: { children: ComponentChildren }) {
  const [isSmall, setIsSmall] = useState(false);
  const [visible, setVisible] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const stored = localStorage.getItem('sidebar');
    return stored === 'open' || stored === null;
  });

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const handler = (e: MediaQueryListEvent) => {
      setIsSmall(e.matches);
      if (e.matches) setVisible(false);
    };
    mq.addEventListener('change', handler);
    handler(mq as any);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('drawer-open', visible);
    localStorage.setItem('sidebar', visible ? 'open' : 'closed');
  }, [visible]);

  const toggle = () => {
    setVisible((v) => !v);
  };

  const close = () => setVisible(false);

  return (
    <SidebarContext.Provider value={{ isSmall, visible, toggle, close }}>
      {children}
    </SidebarContext.Provider>
  );
}
