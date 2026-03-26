import React from "react";

function IconBox({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-10 bg-icon-box-bg border border-border">
      {children}
    </div>
  );
}

export default IconBox;
