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
  style: "white" | "purple" | "google";
  onClick?: () => void;
}) {
  const styles = {
    white:
      "bg-button-bg text-text border border-border border-solid hover:bg-border",
    purple: "bg-primary font-semibold text-white hover:bg-primary-hover",
    google:
      "bg-white text-text border border-border border-solid hover:bg-border font-medium",
  };

  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-xl px-6 py-3 cursor-pointer duration-200 ease-in-out ${styles[style]} ${className}`}
      onClick={onClick}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {name}
    </button>
  );
}

export default Button;
