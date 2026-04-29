// components/ClickModal.tsx

interface ClickModalProps {
  isVisible: boolean;
  message?: string;
  position?: { x: number; y: number };
}

function ClickModal({ isVisible, message = "Copied!" }: ClickModalProps) {
  if (!isVisible) return null;

  return (
    <div
      className="alert alert-success fixed z-50 w-auto shadow-lg animate-bounce
      right-50 bottom-50"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span className="font-semibold">{message}</span>
    </div>
  );
}

export default ClickModal;
