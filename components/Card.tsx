import React from "react";

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-6 bg-card-bg rounded-18 flex flex-col gap-4 border border-border">
      {children}
    </div>
  );
}

export default Card;
