import React from "react";

function IconButton({
  children,
  isActive,
  onClick,
}: {
  children: React.ReactNode;
  isActive: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      className={`cursor-pointer w-12 h-12 [&>svg]:w-6 [&>svg]:h-6 flex justify-center items-center rounded-14  ${isActive ? "bg-primary text-white" : "[&>svg]:text-muted hover:bg-sidebar text-muted"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default IconButton;
