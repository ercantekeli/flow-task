import StatCard from "@/components/dashboard/StatCard";
import React from "react";

function Overview() {
  const stats = [
    {
      icon: "📋",
      badge: "+12%",
      color: "#818cf8",
      bgColor: "primary/15",
      value: 2,
      label: "Total Tasks",
      progress: "50%",
    },
    {
      icon: "✅",
      badge: "+8%",
      color: "#4ade80",
      bgColor: "secondary/15",

      value: 80,
      label: "Completed",
      progress: "80%",
    },
    {
      icon: "⏳",
      badge: "Active",
      color: "#fbbf24",
      bgColor: "accent/15",
      value: 40,
      label: "In Progress",
      progress: "40%",
    },
    {
      icon: "🔥",
      badge: "Urgent",
      color: "#dc2626",
      bgColor: "red/15",
      value: 20,
      label: "Overdue",
      progress: "20%",
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          icon={stat.icon}
          badge={stat.badge}
          color={stat.color}
          bgColor={stat.bgColor}
          value={stat.value}
          label={stat.label}
          progress={stat.progress}
        />
      ))}
    </div>
  );
}

export default Overview;
