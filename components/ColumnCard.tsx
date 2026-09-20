import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

import { Task } from "@/app/(dashboard)/board/page";
import TaskCard from "./TaskCard";
import IconButton from "./IconButton";

function ColumnCard({
  data,
  children,
}: {
  data: {
    columnId: number;
    columnName: string;
    color: string;
    totalTasks: number;
  };
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 p-6 bg-col-bg rounded-18 border border-border h-full overflow-y-auto">
      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: data?.color }}
          />
          <div className="text-base font-semibold">{data?.columnName}</div>

          <div
            style={{
              backgroundColor: `${data?.color}20`,
              color: data?.color,
            }}
            className="text-sm h-6 w-6 rounded-full font-semibold flex items-center justify-center"
          >
            {data.totalTasks}
          </div>
        </div>
        <IconButton
          onClick={() => console.log("Add task")}
          className="w-8 h-8 text-text-muted bg-button-bg rounded-lg [&>svg]:w-4 [&>svg]:h-4"
        >
          <AiOutlinePlus />
        </IconButton>
      </div>
      {children}
    </div>
  );
}

export default ColumnCard;
