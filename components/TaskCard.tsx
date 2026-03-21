import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";

function TaskCard({ task }: { task: any }) {
  const tagColors: { [key: string]: string } = {
    Design: "#fbbf24",
    Dev: "#818cf8",
    Review: "#16a34a",
    Bug: "#ef4444",
  };

  const priorityColors: { [key: string]: string } = {
    HIGH: "#ef4444",
    MEDIUM: "#fbbf24",
    LOW: "#16a34a",
  };

  return (
    <div className="p-3 bg-card-bg rounded-14 flex flex-col gap-4 border border-border cursor-pointer hover:bg-card-hover-bg hover:shadow-md hover:-translate-y-1 duration-200 ease-in-out">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold">{task.title}</div>
        <div className="text-text-light">...</div>
      </div>
      <div className="text-xs text-text-muted">{task.description}</div>
      <div className="flex gap-2">
        {task.tags.map((tag: string, idx: number) => (
          <div
            key={idx}
            style={{
              backgroundColor: tagColors[tag] + "20",
              color: tagColors[tag],
            }}
            className="text-xs text-text-muted bg-tag-bg rounded-full px-2 py-0.5 font-semibold"
          >
            {tag}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-xs text-text-light [&>svg]:w-3.5 [&>svg]:h-3.5">
          <AiOutlineCalendar />
          {task.due}
        </div>
        <div
          style={{
            color: priorityColors[task.priority],
            backgroundColor: priorityColors[task.priority] + "20",
          }}
          className="text-xs text-white rounded-full px-2 py-0.5 font-bold"
        >
          {task.priority}
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
