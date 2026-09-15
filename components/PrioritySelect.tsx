import React, { useState } from "react";

export function PrioritySelect() {
  const priorities = [
    { id: 1, name: "🔴 High", color: "#dc2626" },
    { id: 2, name: "🟡 Medium", color: "#fbbf24" },
    { id: 3, name: "🟢 Low", color: "#16a34a" },
  ];
  const [selectedPriority, setSelectedPriority] = useState<number | null>(null);

  const handlePriorityClick = (id: number) => {
    setSelectedPriority(id);
  };

  return (
    <div>
      <label className="text-xs font-semibold text-text-muted">PRIORITY</label>
      <div className="grid grid-cols-3 items-center gap-2 mt-1 flex-wrap">
        {priorities.map((priority) => (
          <span
            onClick={() => handlePriorityClick(priority.id)}
            key={priority.id}
            style={{
              color: priority.color,
              backgroundColor: `${priority.color}20`,
              opacity: selectedPriority === priority.id ? 1 : 0.5,
              border:
                selectedPriority === priority.id
                  ? `1px solid ${priority.color}`
                  : "1px solid transparent",
            }}
            className="font-semibold p-2 rounded-10 cursor-pointer text-center text-11"
          >
            {priority.name}
          </span>
        ))}
      </div>
    </div>
  );
}
