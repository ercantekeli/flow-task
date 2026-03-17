"use client";
import React from "react";
import ColumnCard from "@/components/ColumnCard";

type Tag = "Design" | "Dev" | "Review" | "Bug";
type Priority = "high" | "medium" | "low";
type Column = "To Do" | "In Progress" | "Done";
type Color = "#94a3b8" | "#818cf8" | "#16a34a";

export interface Task {
  id: number;
  name: string;
  description?: string;
  tags: Tag[];
  priority: Priority;
  due: string;
  column: Column;
  isOverdue?: boolean;
  color?: Color;
}
const Board = () => {
  const mockTasks: Task[] = [
    // To Do
    {
      id: 1,
      name: "Design onboarding screens",
      description: "Create wireframes and hi-fi mockups for new user flow.",
      tags: ["Design"],
      priority: "high",
      due: "Mar 22",
      column: "To Do",
      color: "#94a3b8",
    },
    {
      id: 2,
      name: "Write API documentation",
      tags: ["Dev"],
      priority: "low",
      due: "Mar 28",
      column: "To Do",
      color: "#94a3b8",
    },
    {
      id: 3,
      name: "Set up CI/CD pipeline",
      tags: ["Dev"],
      priority: "medium",
      due: "Apr 1",
      column: "To Do",
      color: "#94a3b8",
    },
    // In Progress
    {
      id: 4,
      name: "Implement drag & drop",
      description: "Integrate dnd-kit for kanban board interactions.",
      tags: ["Dev"],
      priority: "high",
      due: "Mar 20",
      column: "In Progress",
      color: "#818cf8",
    },
    {
      id: 5,
      name: "Fix auth bug on login",
      tags: ["Bug"],
      priority: "high",
      due: "Mar 10",
      column: "In Progress",
      isOverdue: true,
      color: "#818cf8",
    },
    // Done
    {
      id: 6,
      name: "Review design mockups",
      tags: ["Design"],
      priority: "low",
      due: "Mar 15",
      column: "Done",
      color: "#16a34a",
    },
    {
      id: 7,
      name: "Set up project repo",
      tags: ["Dev"],
      priority: "low",
      due: "Mar 5",
      column: "Done",
      color: "#16a34a",
    },
  ];
  const todoTasks = mockTasks.filter((t) => t.column === "To Do");
  const progressTasks = mockTasks.filter((t) => t.column === "In Progress");
  const doneTasks = mockTasks.filter((t) => t.column === "Done");
  return (
    <div className="grid grid-cols-3 gap-4 h-full">
      <ColumnCard data={todoTasks} />
      <ColumnCard data={progressTasks} />
      <ColumnCard data={doneTasks} />
    </div>
  );
};

export default Board;
