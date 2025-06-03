export default function PlayButton() {
  return (
    <svg
      class="play-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 768 768"
      width="100%"
      height="100%"
    >
      <circle
        cx="384"
        cy="384"
        r="380"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
      />
      <circle
        cx="384"
        cy="384"
        r="300"
        fill="none"
        stroke="none"
        strokeWidth="120"
      />
      <circle
        cx="384"
        cy="384"
        r="200"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
      />
      <polygon
        points="336,288 336,480 480,384"
        fill="currentColor"
        class="play-icon-triangle"
        stroke="currentColor"
        strokeWidth="8"
      />
    </svg>
  );
}
