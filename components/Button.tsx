import React from "react";

function Button({
  name,
  className,
  icon,
  style,
}: {
  name: string;
  className?: string;
  icon?: React.ReactNode;
  style: "white" | "purple";
}) {
  return (
    <button
      className={`flex items-center gap-2 rounded-xl px-4 py-2 cursor-pointer ${style === "white" ? "bg-button-bg text-text border border-border border-solid" : "bg-primary text-white"} ${className}`}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {name}
    </button>
  );
}

export default Button;
