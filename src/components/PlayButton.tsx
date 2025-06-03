export default function PlayButton() {
  return (
    <div class="play-wrapper">
      <svg
        class="play-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
        width="100%"
        height="100%"
      >
        <circle
          cx="384"
          cy="384"
          r="376"
          fill="none"
          stroke="currentColor"
          stroke-width="16"
        ></circle>

        <circle
          cx="384"
          cy="384"
          r="280"
          fill="none"
          stroke="currentColor"
          stroke-width="16"
        ></circle>

        <polygon
          points="336,238 336,530 505,384"
          fill="currentColor"
          class="play-icon-triangle"
          stroke="currentColor"
          stroke-width="32"
        ></polygon>
      </svg>
    </div>
  );
}
