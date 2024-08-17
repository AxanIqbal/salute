"use client";

import React from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--red)",
  },
  // mobile: {
  //   label: "Mobile",
  //   color: "hsl(var(--chart-2))",
  // },
} satisfies ChartConfig;

const chartData = [
  { month: "April 2024", desktop: 73 },
  { month: "May 2024", desktop: 109 },
  { month: "June 2024", desktop: 214 },
];

function VisitsChart() {
  return (
    <div
      className={
        "p-[18px] bg-[#616161CC] rounded-[10px] flex-1 min-w-[340px] flex flex-col justify-between"
      }
    >
      <p className={"font-bold text-[20px] mb-[8px]"}>Frequency of visits</p>
      <ChartContainer config={chartConfig} className={"h-full min-h-[200px]"}>
        <LineChart accessibilityLayer data={chartData}>
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <YAxis tickMargin={4} stroke={"none"} />

          <Line
            dataKey="desktop"
            type="natural"
            stroke="var(--color-desktop)"
            strokeWidth={2}
            dot={{
              fill: "var(--color-desktop)",
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
