import React from "react";

function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`p-6 bg-card-bg rounded-18 flex flex-col gap-4 border border-border ${className || ""}`}
    >
      {children}
    </div>
  );
}

export default Card;
