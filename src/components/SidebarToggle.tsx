import { useEffect, useState } from "preact/hooks";

export default function SidebarToggle() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isOpen =
      localStorage.getItem("sidebar") === "open" ||
      localStorage.getItem("sidebar") === null;
    setVisible(isOpen);
    document.body.classList.toggle("drawer-open", isOpen);
  }, []);

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
