(function () {
  try {
    const theme = localStorage.getItem("theme") || "light";
    const primary = localStorage.getItem("primary") || "#f82";
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-primary", primary);
  } catch (_) {}
})();
