import React from "react";
import Card from "../Card";
function StatCard({
  icon,
  badge,
  color,
  value,
  label,
  progress,
}: {
  icon: string;
  badge: string;
  color: string;
  value: number;
  label: string;
  progress: string;
}) {
  return (
    <Card>
      {/* stat header */}
      <div className="flex items-center justify-between">
        <div
          className={`text-2xl rounded-lg w-12 h-12 flex items-center justify-center`}
          style={{ backgroundColor: `${color}20` }}
        >
          {icon}
        </div>
        <div
          className="py-1 px-2 rounded-14 bg-primary/15 text-xs font-semibold"
          style={{ color: color, backgroundColor: `${color}20` }}
        >
          {badge}
        </div>
      </div>
      {/* stat value */}
      <div className="text-text text-3xl font-bold">{value}</div>
      {/* stat label */}
      <div className="text-text-muted text-xs font-medium">{label}</div>
      {/* stat progress */}
      <div className="h-1 w-full bg-lightGray rounded-full">
        <div
          className="h-1 bg-primary rounded-full"
          style={{ backgroundColor: color, width: progress }}
        ></div>
      </div>
    </Card>
  );
}

export default StatCard;
