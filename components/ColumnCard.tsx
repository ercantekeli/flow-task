import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

import { Task } from "@/app/(dashboard)/board/page";
import IconButton from "./IconButton";

function ColumnCard({ data }: { data: Task[] }) {
  return (
    <div className="p-6 bg-col-bg rounded-18 flex flex-col gap-4 border border-border">
      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: data[0]?.color }}
          />
          <div className="text-base font-semibold">{data[0]?.column}</div>

          <div
            style={{
              backgroundColor: `${data[0]?.color}20`,
              color: data[0]?.color,
            }}
            className="text-sm h-6 w-6 rounded-full font-semibold flex items-center justify-center"
          >
            {data.length}
          </div>
        </div>
      </div>
      <IconButton
        onClick={() => console.log("Add task")}
        className="bg-red-500/10 text-red-500 hover:bg-red-500/20 h-3 w-3 [&>svg]:w-3 [&>svg]:h-3"
      >
        <AiOutlinePlus />
      </IconButton>
    </div>
  );
}

export default ColumnCard;
