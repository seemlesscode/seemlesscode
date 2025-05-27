export function setupSidebarToggle(): void {
  const drawer = document.querySelector(".drawer") as HTMLElement | null;
  const toggle = document.getElementById("drawer-toggle") as HTMLElement | null;
  const content = document.querySelector(".content") as HTMLElement | null;

  if (!drawer || !toggle || !content) return;

  content.classList.add("no-transition");

  const isOpen = localStorage.getItem("drawer") === "open";

  if (isOpen) {
    drawer.classList.add("no-transition");
    drawer.classList.add("drawer-open");
    document.body.classList.add("drawer-open");
  } else {
    drawer.classList.remove("drawer-open");
    document.body.classList.remove("drawer-open");
  }

  drawer.offsetHeight;
  drawer.classList.remove("no-transition");
  content.classList.remove("no-transition");

  toggle.addEventListener("click", () => {
    const isNowOpen = drawer.classList.toggle("drawer-open");
    document.body.classList.toggle("drawer-open", isNowOpen);
    localStorage.setItem("drawer", isNowOpen ? "open" : "closed");
  });
}
