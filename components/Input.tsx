import React from "react";

function Input({
  name,
  label,
  type,
  placeholder,
}: {
  name: string;
  label: string;
  type?: "password" | "text" | "email";
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold text-text-muted">
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        className="bg-card-hover-bg w-full px-4 py-3 rounded-xl text-text text-sm border outline-0 border-lightGray focus:bg-white focus:border-primary placeholder:text-text-light transition-colors "
      />
    </div>
  );
}

export default Input;
