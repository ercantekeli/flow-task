import React, { useId } from "react";

function Select({
  label,
  options,
}: {
  label: string;
  options: { value: string; label: string }[];
}) {
  const generatedId = useId();
  return (
    <div>
      <label
        htmlFor={generatedId}
        className="text-xs font-semibold text-text-muted"
      >
        {label}
      </label>
      <select
        id={generatedId}
        className="bg-card-hover-bg w-full px-4 py-3 rounded-xl text-text text-sm border outline-0 border-lightGray focus:bg-white focus:border-primary placeholder:text-text-light transition-colors"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
