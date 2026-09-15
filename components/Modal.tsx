import React, { useEffect } from "react";
import IconButton from "./IconButton";

function Modal({
  onClose,
  children,
  title,
}: {
  onClose: () => void;
  children?: React.ReactNode;
  title?: string;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-modal-overlay-bg flex justify-center items-center z-9999 backdrop-blur-xs"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl bg-modal-bg rounded-3xl p-6 min-h-96 max-h-[85dvh] overflow-auto backdrop-blur-lg"
      >
        <h2 className="font-bold text-text">{title}</h2>
        <IconButton
          className="text-text-muted bg-light-bg absolute top-6 right-6 w-8 h-8 rounded-10 hover:bg-border px-0 py-0"
          onClick={onClose}
        >
          ✕
        </IconButton>
        {children}
      </div>
    </div>
  );
}

export default Modal;
