export function StlPlaceholder() {
  return (
    <div className="flex aspect-square items-center justify-center rounded-xl bg-surface-container-low shadow-pressed-sm">
      <div className="text-center">
        <svg
          className="mx-auto mb-2 text-outline-variant"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z" />
          <path d="M2 7l10 5 10-5" />
          <path d="M12 22V12" />
        </svg>
        <span className="text-xs text-outline-variant">
          [Anteprima 3D]
        </span>
      </div>
    </div>
  );
}
