"use client";
import React from "react";
import { cn } from "@/utils/cn";

function Button({
  name,
  className,
  icon,
  variant = "white",
  onClick,
  type = "button",
  isSelected,
  style,
}: {
  name: string;
  className?: string;
  icon?: React.ReactNode;
  variant?: "white" | "purple" | "google";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  isSelected?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <button
      type={type}
      style={style}
      className={cn(
        "flex items-center justify-center gap-2 rounded-xl px-6 py-3 cursor-pointer duration-200 ease-in-out",
        {
          "bg-button-bg text-text border border-border border-solid hover:bg-black/5 font-medium":
            variant === "white",
          "bg-primary font-semibold text-white hover:bg-primary-hover":
            variant === "purple",
          "bg-white text-text border border-border border-solid hover:bg-border font-medium":
            variant === "google",
        },
        className,
      )}
      onClick={() => onClick && onClick()}
      aria-selected={isSelected}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {name}
    </button>
  );
}

export default Button;
