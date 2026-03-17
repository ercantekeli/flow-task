import React from "react";
import { Pie, PieChart, Legend } from "recharts";

export default function PieChartComp({ data }: { data: any }) {
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
    <div className="flex items-center h-full">
      <PieChart
        style={{
          width: "50%",
          height: "60%",
        }}
      >
        <Pie
          data={data}
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
  );
}
