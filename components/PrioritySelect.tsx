import React, { useState, forwardRef } from "react";

const priorities = [
  { id: 1, label: "🔴 High", value: "HIGH", color: "#dc2626" },
  { id: 2, label: "🟡 Medium", value: "MEDIUM", color: "#fbbf24" },
  { id: 3, label: "🟢 Low", value: "LOW", color: "#16a34a" },
];

const PrioritySelect = forwardRef<HTMLInputElement>(({ ...props }, ref) => {
  return (
    <div>
      <label className="text-xs font-semibold text-text-muted">PRIORITY</label>
      <div className="grid grid-cols-3 items-center gap-2 mt-1 flex-wrap">
        {priorities.map((priority) => (
          <label
            key={`priority-${priority.id}`}
            style={{
              color: priority.color,
              backgroundColor: `${priority.color}20`,
            }}
            className="font-semibold p-2 rounded-10 cursor-pointer opacity-50 has-checked:opacity-100  text-center text-11 border border-solid border-transparent has-checked:border has-checked:border-solid has-checked:border-current"
            htmlFor={`priority-${priority.id}`}
          >
            <input
              ref={ref}
              {...props}
              type="radio"
              value={priority.value}
              id={`priority-${priority.id}`}
              hidden
            />
            {priority.label}
          </label>
        ))}
      </div>
    </div>
  );
});

PrioritySelect.displayName = "PrioritySelect";
export default PrioritySelect;
