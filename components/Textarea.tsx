import React, { useId } from "react";

function Textarea({
  placeholder,
  label,
}: {
  placeholder: string;
  label: string;
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
      <textarea
        rows={2}
        id={generatedId}
        placeholder={placeholder}
        className="bg-card-hover-bg w-full px-4 py-3 rounded-xl text-text text-sm border outline-0 border-lightGray focus:bg-white focus:border-primary placeholder:text-text-light transition-colors resize-none"
      />
    </div>
  );
}

export default Textarea;
