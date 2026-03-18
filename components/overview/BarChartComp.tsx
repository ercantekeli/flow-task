import React from "react";
import { BarChart, Bar, XAxis } from "recharts";

function BarChartComp({ data }: { data: any }) {
  return (
    <div>
      <BarChart
        style={{
          width: "100%",
          maxHeight: "100px",
          aspectRatio: 1.618,
        }}
        responsive
        data={data}
      >
        <Bar
          dataKey="uv"
          fill="#818cf8"
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
    </div>
  );
}

export default BarChartComp;
