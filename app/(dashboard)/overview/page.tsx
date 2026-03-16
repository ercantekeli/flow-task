"use client";
import React from "react";
import { BarChart, Bar, XAxis, Pie, PieChart, Legend } from "recharts";

import StatCard from "@/components/dashboard/StatCard";
import TaskItem from "@/components/dashboard/TaskItem";
import Card from "@/components/Card";

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
  const renderLegend = (props: any) => {
    const { payload } = props;
    if (!payload) return null;
    return (
      <ul className="flex flex-col gap-2">
        {payload?.map(
          (
            entry: {
              color?: string;
              value: string;
              payload: { value: number };
            },
            index: number,
          ) => (
            <li key={index} className="flex items-center gap-2 text-xs">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-text-muted">{entry.value}</span>
              <span className="text-text font-semibold ml-auto">
                {entry.payload.value}
              </span>
            </li>
          ),
        )}
      </ul>
    );
  };
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

          <BarChart
            style={{
              width: "100%",
              maxHeight: "100px",
              aspectRatio: 1.618,
            }}
            responsive
            data={barData}
          >
            <Bar
              dataKey="uv"
              fill="#8884d8"
              background={{ fill: "rgba(0, 0, 0, 0.06)", radius: 10 }}
              radius={10}
              name="mea"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "rgba(23, 23, 23, 0.25)" }}
            />
          </BarChart>
          <div className="h-2/4">
            <PieChart
              style={{
                width: "40%",
                height: "80%",
              }}
            >
              <Pie
                data={pieChartData}
                cx="50%"
                innerRadius="80%"
                outerRadius="100%"
                dataKey="value"
                stroke="none"
              ></Pie>
              <Legend
                align="right"
                layout="vertical"
                verticalAlign="middle"
                iconType="circle"
                // formatter={(value, entry) =>
                //   `${value} ${entry?.payload?.value}`
                // }
                content={renderLegend}
              />
            </PieChart>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Overview;
