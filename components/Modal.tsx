import React from "react";
import Button from "./Button";

function Modal({
  onClose,
  children,
}: {
  onClose: () => void;
  children?: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-9999">
      <div className="w-full max-w-4xl bg-white rounded-10 min-h-96 max-h-[85dvh] overflow-auto">
        <Button name="Close" style="white" onClick={onClose} />
        {children}
      </div>
    </div>
  );
}

export default Modal;
