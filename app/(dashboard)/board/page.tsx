"use client";
import React from "react";
import ColumnCard from "@/components/ColumnCard";

type Tag = "Design" | "Dev" | "Review" | "Bug";
type Priority = "HIGH" | "MEDIUM" | "LOW";
type Column = "To Do" | "In Progress" | "Done";
type Color = "#94a3b8" | "#818cf8" | "#16a34a";

export interface Task {
  id: number;
  title: string;
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
      title: "Design onboarding screens",
      description: "Create wireframes and hi-fi mockups for new user flow.",
      tags: ["Design"],
      priority: "HIGH",
      due: "Mar 22",
      column: "To Do",
      color: "#94a3b8",
    },
    {
      id: 2,
      title: "Write API documentation",
      description: "Document endpoints for user management and authentication.",
      tags: ["Dev"],
      priority: "LOW",
      due: "Mar 28",
      column: "To Do",
      color: "#94a3b8",
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
    },
    // In Progress
    {
      id: 4,
      title: "Implement drag & drop",
      description: "Integrate dnd-kit for kanban board interactions.",
      tags: ["Dev"],
      priority: "HIGH",
      due: "Mar 20",
      column: "In Progress",
      color: "#818cf8",
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
    // Done
    {
      id: 6,
      title: "Review design mockups",
      description: "Review and provide feedback on the new design mockups.",
      tags: ["Design"],
      priority: "LOW",
      due: "Mar 15",
      column: "Done",
      color: "#16a34a",
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
