import React, { useId, forwardRef } from "react";

type textAreaProps = {
  placeholder: string;
  label: string;
};

const Textarea = forwardRef<HTMLTextAreaElement, textAreaProps>(
  ({ placeholder, label, ...props }, ref) => {
    const generatedId = useId();
    return (
      <div>
        <label
          htmlFor={generatedId}
          className="text-xs font-semibold text-text-muted"
        >
          {label}
        </label>
        <textarea
          ref={ref}
          rows={2}
          {...props}
          id={generatedId}
          placeholder={placeholder}
          className="bg-card-hover-bg w-full px-4 py-3 rounded-xl text-text text-sm border outline-0 border-lightGray focus:bg-white focus:border-primary placeholder:text-text-light transition-colors resize-none"
        />
      </div>
    );
  },
);

Textarea.displayName = "Textarea";
export default Textarea;
