import { useEffect } from "preact/hooks";

export function useKonamiCodeMobile(onUnlock: () => void) {
  useEffect(() => {
    const previouslyUnlocked = localStorage.getItem("unlocked") === "true";

    if (previouslyUnlocked) {
      onUnlock();
      return;
    }

    const sequence = [
      "up",
      "up",
      "down",
      "down",
      "left",
      "right",
      "left",
      "right",
      "tap",
      "tap",
    ];
    let current = 0;
    let startX = 0;
    let startY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.changedTouches[0];
      startX = touch.clientX;
      startY = touch.clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touch = e.changedTouches[0];
      const dx = touch.clientX - startX;
      const dy = touch.clientY - startY;

      let direction = "";

      if (Math.abs(dx) < 10 && Math.abs(dy) < 10) {
        direction = "tap";
      } else if (Math.abs(dx) > Math.abs(dy)) {
        direction = dx > 0 ? "right" : "left";
      } else {
        direction = dy > 0 ? "down" : "up";
      }

      if (direction === sequence[current]) {
        current++;
        if (current === sequence.length) {
          localStorage.setItem("unlocked", "true");
          onUnlock();
          current = 0;
        }
      } else {
        current = 0;
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);
}
