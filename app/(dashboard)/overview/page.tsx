"use client";
import React from "react";

import StatCard from "@/components/overview/StatCard";
import TaskItem from "@/components/overview/TaskItem";
import Card from "@/components/Card";
import PieChartComp from "@/components/overview/PieChartComp";
import BarChartComp from "@/components/overview/BarChartComp";

function Overview() {
  const stats = [
    {
      icon: "📋",
      badge: "+12%",
      color: "#818cf8",
      value: 2,
      label: "Total Tasks",
      progress: "50%",
    },
    {
      icon: "✅",
      badge: "+8%",
      color: "#16a34a",
      value: 80,
      label: "Completed",
      progress: "80%",
    },
    {
      icon: "⏳",
      badge: "Active",
      color: "#fbbf24",
      value: 40,
      label: "In Progress",
      progress: "40%",
    },
    {
      icon: "🔥",
      badge: "Urgent",
      color: "#dc2626",
      value: 20,
      label: "Overdue",
      progress: "20%",
    },
  ];
  const recentTasks = [
    {
      title: "Review design mockups",
      dueDate: "2024-07-15",
      isCompleted: false,
      label: "Design",
      labelColor: "#818cf8",
    },
    {
      title: "Implement drag & drop",
      dueDate: "2024-07-10",
      isCompleted: true,
      label: "Dev",
      labelColor: "#16a34a",
    },
    {
      title: "Write unit tests",
      dueDate: "2024-07-20",
      isCompleted: false,
      label: "Review",
      labelColor: "#fbbf24",
    },
  ];
  const barData = [
    { name: "Mon", uv: 30 },
    { name: "Tue", uv: 50 },
    { name: "Wed", uv: 40 },
    { name: "Thu", uv: 60 },
    { name: "Fri", uv: 20 },
    { name: "Sat", uv: 70 },
    { name: "Sun", uv: 50 },
  ];
  const pieChartData = [
    { name: "Completed", value: 14, fill: "#818cf8" },
    { name: "In Progress", value: 7, fill: "#16a34a" },
    { name: "Overdue", value: 3, fill: "#dc2626" },
  ];

  return (
    <div className="grid grid-rows-3 gap-6 h-full">
      <div className="grid grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            badge={stat.badge}
            color={stat.color}
            value={stat.value}
            label={stat.label}
            progress={stat.progress}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 row-span-2 gap-6">
        <Card>
          <div className="flex items-center justify-between text-text font-semibold">
            Recent Tasks{" "}
            <span className="text-xs text-text-muted font-normal">
              View all →
            </span>
          </div>
          {recentTasks.map((task, index) => (
            <TaskItem
              key={index}
              title={task.title}
              dueDate={task.dueDate}
              isCompleted={task.isCompleted}
              label={task.label}
              labelColor={task.labelColor}
            />
          ))}
        </Card>
        <Card>
          <div className="flex items-center justify-between text-text font-semibold">
            Weekly Progress
            <span className="text-xs text-text-muted font-normal">
              This week
            </span>
          </div>

          <BarChartComp data={barData} />

          <PieChartComp data={pieChartData} />
        </Card>
      </div>
    </div>
  );
}

export default Overview;
