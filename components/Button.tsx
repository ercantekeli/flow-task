import React from "react";

function Button({
  name,
  className,
  icon,
  style,
  onClick,
}: {
  name: string;
  className?: string;
  icon?: React.ReactNode;
  style: "white" | "purple";
  onClick?: () => void;
}) {
  return (
    <button
      className={`flex items-center gap-2 rounded-xl px-4 py-2 cursor-pointer duration-200 ease-in-out ${style === "white" ? "bg-button-bg text-text border border-border border-solid hover:bg-border" : "bg-primary text-white hover:bg-primary-hover"} ${className}`}
      onClick={onClick}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {name}
    </button>
  );
}

export default Button;
