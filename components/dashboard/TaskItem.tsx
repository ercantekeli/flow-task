import React from "react";
import Checkbox from "../Checkbox";

function TaskItem({
  title,
  dueDate,
  isCompleted,
  label,
  labelColor,
}: {
  title: string;
  dueDate: string;
  isCompleted: boolean;
  label: string;
  labelColor: string;
}) {
  return (
    <div className="flex items-center gap-2 bg-button-bg border border-card-bg py-2 px-2.5 rounded-xl">
      <Checkbox isChecked={isCompleted} isDisabled />
      <div className="flex-1">
        <div
          className={`font-semibold text-sm
           ${isCompleted ? "line-through text-text-muted " : "text-text"}
          `}
        >
          {title}
        </div>
        <div className="text-xs text-text-muted">{dueDate}</div>
      </div>
      <div
        className="py-1 px-2 rounded-14 bg-primary/15 text-xs font-semibold"
        style={{ color: labelColor, backgroundColor: `${labelColor}20` }}
      >
        {label}
      </div>
    </div>
  );
}

export default TaskItem;
