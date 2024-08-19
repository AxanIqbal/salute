"use client";

import React from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartConfig = {
  visit: {
    label: "Visits",
    color: "var(--red)",
  },
  // mobile: {
  //   label: "Mobile",
  //   color: "hsl(var(--chart-2))",
  // },
} satisfies ChartConfig;

const chartData = [
  { month: "April 2024", visit: 0 },
  { month: "May 2024", visit: 2 },
  { month: "June 2024", visit: 1 },
  { month: "July 2024", visit: 3 },
];

const AxisLabel = ({
  axisType = "yAxis",
  x = 10,
  y = 10,
  width = 37,
  height = 18,
}: any) => {
  const isVert = axisType === "yAxis";
  const cx = isVert ? x : x + width / 2;
  const cy = isVert ? height / 2 + y : y + height + 10;
  const rot = isVert ? `270 ${cx} ${cy}` : 0;
  return (
    <text
      x={cx}
      y={cy}
      transform={`rotate(${rot})`}
      textAnchor="middle"
      // stroke={"stroke"}
      className={"font-medium text-[14px]"}
      fill={"#FFFFFFCC"}
    >
      Visits
    </text>
  );
};

function VisitsChart() {
  return (
    <div
      className={
        "p-[18px] bg-[#616161CC] rounded-[10px] flex-1 min-w-[340px] flex flex-col justify-between"
      }
    >
      <p className={"font-bold text-[20px] mb-[30px]"}>Frequency of visits</p>
      <ChartContainer config={chartConfig} className={"h-full min-h-[200px]"}>
        <LineChart accessibilityLayer data={chartData}>
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <YAxis
            tickMargin={25}
            stroke={"none"}
            allowDecimals={false}
            label={<AxisLabel />}
          />

          <Line
            dataKey="visit"
            type="natural"
            stroke="var(--red)"
            strokeWidth={2}
            dot={{
              fill: "var(--red)",
              strokeWidth: 6,
            }}
            activeDot={{
              r: 6,
            }}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}

export default VisitsChart;
