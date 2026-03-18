import React from "react";

function IconButton({
  children,
  isActive,
  onClick,
  className,
}: {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      className={`cursor-pointer [&>svg]:w-6 [&>svg]:h-6 flex justify-center items-center rounded-14  ${isActive ? "bg-primary text-white" : "hover:bg-button-hover-bg text-text-muted hover:text-text"} ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default IconButton;
