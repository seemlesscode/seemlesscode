import { useEffect, useState } from "preact/hooks";

export default function SidebarToggle() {
  const [visible, setVisible] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("sidebar");
    return stored === "open" || stored === null;
  });

  useEffect(() => {
    document.body.classList.toggle("drawer-open", visible);
  }, [visible]);

  const toggleSidebar = () => {
    const next = !visible;
    setVisible(next);
    localStorage.setItem("sidebar", next ? "open" : "closed");
    document.body.classList.toggle("drawer-open", next);
  };

  return (
    <button class="chevron-toggle" onClick={toggleSidebar}>
      {visible ? "◀" : "▶"}
    </button>
  );
}
