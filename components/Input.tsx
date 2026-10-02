import React, { forwardRef, useId } from "react";

type inputProps = {
  label: string;
  type?: "password" | "text" | "email";
  placeholder?: string;
};

const Input = forwardRef<HTMLInputElement, inputProps>(
  ({ label, type, placeholder, ...props }, ref) => {
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
          id={generatedId}
          type={type}
          placeholder={placeholder}
          ref={ref}
          {...props}
          className="bg-card-hover-bg w-full px-4 py-3 rounded-xl text-text text-sm border outline-0 border-lightGray focus:bg-white focus:border-primary placeholder:text-text-light transition-colors "
        />
      </div>
    );
  },
);

Input.displayName = "Input";
export default Input;
