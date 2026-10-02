import React, { forwardRef, useId } from "react";

type DateInputProps = {
  label: string;
  placeholder?: string;
};

const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  ({ label, placeholder, ...props }, ref) => {
    const generatedId = useId();
    return (
      <div>
        <label
          htmlFor={generatedId}
          className="text-xs font-semibold text-text-muted"
        >
          {label}
        </label>
        <input
          onClick={(e) => e.currentTarget.showPicker()}
          ref={ref}
          {...props}
          id={generatedId}
          type="date"
          className="bg-card-hover-bg w-full px-4 py-3 rounded-xl text-text text-sm border outline-0 border-lightGray focus:bg-white focus:border-primary placeholder:text-text-light transition-colors "
        />
      </div>
    );
  },
);

export default DateInput;
