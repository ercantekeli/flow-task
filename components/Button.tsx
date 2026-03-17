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
      className={`flex items-center gap-2 rounded-xl px-4 py-2 cursor-pointer duration-200 ease-in-out ${style === "white" ? "bg-button-bg text-text border border-border border-solid hover:bg-lightGray" : "bg-primary text-white hover:bg-card-bg hover:text-text"} ${className}`}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {name}
    </button>
  );
}

export default Button;
