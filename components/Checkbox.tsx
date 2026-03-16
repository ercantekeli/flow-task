"use client";
import React, { useState } from "react";

function Checkbox({
  isChecked = false,
  title,
  isDisabled = false,
  onChange,
}: {
  isChecked?: boolean;
  title?: string;
  isDisabled?: boolean;
  onChange?: (checked: boolean) => void;
}) {
  const [checked, setChecked] = useState(isChecked || false);
  const handleClick = (newChecked: boolean) => {
    setChecked(newChecked);
    onChange?.(newChecked);
  };
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        checked={checked}
        className="hidden"
        onClick={(e) => handleClick(e.currentTarget.checked)}
        readOnly={isDisabled}
        disabled={isDisabled}
      />
      <div
        className={
          "w-4 h-4 border border-primary rounded-sm flex items-center justify-center duration-200 ease-in-out" +
          (checked ? " bg-primary" : "") +
          (isDisabled ? " cursor-not-allowed" : "")
        }
      >
        <span className={checked ? "opacity-100 text-white" : "opacity-0"}>
          ✓
        </span>
      </div>
      {title}
    </label>
  );
}

export default Checkbox;
