import React, { useId, forwardRef } from "react";

type selecetProps = {
  label: string;
  options: { value: number; label: string }[];
};

const Select = forwardRef<HTMLSelectElement, selecetProps>(
  ({ label, options, ...props }, ref) => {
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
          ref={ref}
          {...props}
          id={generatedId}
          className="bg-card-hover-bg w-full px-4 py-3 rounded-xl text-text text-sm border outline-0 border-lightGray focus:bg-white focus:border-primary placeholder:text-text-light transition-colors"
        >
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  },
);

Select.displayName = "Select";
export default Select;
