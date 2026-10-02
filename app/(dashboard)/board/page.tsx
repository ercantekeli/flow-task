"use client";
import React, { useContext, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { getAllTasks } from "@/services/boardService";

import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "@hello-pangea/dnd";

import ColumnCard from "@/components/ColumnCard";
import TaskCard from "@/components/TaskCard";
import { useFetch } from "@/hooks/useFetch";
import { TaskContext } from "@/context/taskContext";

type Tag = "Design" | "Dev" | "Review" | "Bug";
type Priority = "HIGH" | "MEDIUM" | "LOW";
type Column = "To Do" | "In Progress" | "Done";
type Color = "#94a3b8" | "#818cf8" | "#16a34a";

const Board = () => {
  useFetch(getAllTasks);

  const [apiData, setApiData] = useState<null>(null);
  const { allTasks } = useContext(TaskContext);

  const [mockTasks, setMockTasks] = useState([
    {
      columnName: "To Do",
      columnId: 1,
      color: "#94a3b8",
      order: 1,
      tasks: [
        {
          id: 1,
          title: "Design onboarding screens",
          description: "Create wireframes and hi-fi mockups for new user flow.",
          tags: ["Design"],
          priority: "HIGH",
          due: "Mar 22",
          column: "To Do",
          color: "#94a3b8",
          isOverdue: true,
        },
        {
          id: 2,
          title: "Write API documentation",
          description:
            "Document endpoints for user management and authentication.",
          tags: ["Dev"],
          priority: "LOW",
          due: "Mar 28",
          column: "To Do",
          color: "#94a3b8",
          isOverdue: false,
        },
        {
          id: 3,
          title: "Set up CI/CD pipeline",
          description:
            "Integrate GitHub Actions for automated testing and deployment.",
          tags: ["Review"],
          priority: "MEDIUM",
          due: "Apr 1",
          column: "To Do",
          color: "#94a3b8",
          isOverdue: true,
        },
      ],
    },
    {
      columnName: "In Progress",
      columnId: 2,
      color: "#818cf8",
      order: 2,
      tasks: [
        {
          id: 4,
          title: "Implement drag & drop",
          description: "Integrate dnd-kit for kanban board interactions.",
          tags: ["Dev"],
          priority: "HIGH",
          due: "Mar 20",
          column: "In Progress",
          color: "#818cf8",
          isOverdue: false,
        },
        {
          id: 5,
          title: "Fix auth bug on login",
          description: "Resolve authentication issue when users try to log in.",
          tags: ["Bug"],
          priority: "HIGH",
          due: "Mar 10",
          column: "In Progress",
          isOverdue: true,
          color: "#818cf8",
        },
      ],
    },
    {
      columnName: "Done",
      columnId: 3,
      color: "#16a34a",
      order: 3,
      tasks: [
        {
          id: 6,
          title: "Review design mockups",
          description: "Review and provide feedback on the new design mockups.",
          tags: ["Design"],
          priority: "LOW",
          due: "Mar 15",
          column: "Done",
          color: "#16a34a",
          isOverdue: false,
        },
        {
          id: 7,
          title: "Set up project repo",
          description: "Create and configure the initial project repository.",
          tags: ["Dev"],
          priority: "LOW",
          due: "Mar 5",
          column: "Done",
          color: "#16a34a",
          isOverdue: false,
        },
      ],
    },
  ]);

  const handleDragDrop = (result: DropResult) => {
    if (!result.destination) return;
    const copyTasks = structuredClone(apiData);

    const sourceColumn = copyTasks?.find(
      (column) => column?.id === Number(result?.source?.droppableId),
    );

    const destinationColumn = copyTasks?.find(
      (column) => column?.id === Number(result?.destination?.droppableId),
    );

    if (sourceColumn && destinationColumn) {
      const [movedTask] = sourceColumn?.tasks?.splice(result?.source?.index, 1);
      const lastUpdate = destinationColumn?.tasks?.splice(
        result?.destination?.index,
        0,
        movedTask,
      );
      setApiData(copyTasks);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-4 h-full overflow-hidden">
      <DragDropContext onDragEnd={(result) => handleDragDrop(result)}>
        {allTasks?.map((column: Task) => {
          const { id, column_name, color } = column;
          return (
            <ColumnCard
              key={id}
              data={{
                id,
                column_name,
                color,
                totalTasks: column?.tasks?.length,
              }}
            >
              <Droppable key={id} droppableId={String(id)}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="flex flex-col gap-4 h-full overflow-y-auto"
                  >
                    {column?.tasks?.map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={String(task.id)}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <TaskCard key={task?.id} task={task} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </div>
                )}
              </Droppable>
            </ColumnCard>
          );
        })}
      </DragDropContext>
    </div>
  );
};

export default Board;
