"use client";

import React from "react";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { LabelList, Pie, PieChart } from "recharts";

const chartData = [
  { browser: "chrome", visitors: 45.25, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 25.75, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 25, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 0, fill: "var(--color-edge)" },
  { browser: "other", visitors: 0, fill: "var(--color-other)" },
];

const chartConfig: Record<string, { label: string; color: string }> = {
  chrome: {
    label: "Denting",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Painting",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Mechanical",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Electrician",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Inspection",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

function Services() {
  return (
    <div
      className={"p-[18px] bg-[#616161CC] rounded-[10px] flex-1 min-w-[340px]"}
    >
      <p className={"font-bold text-[20px] mb-[8px]"}>Services Requested</p>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <PieChart>
          <Pie data={chartData} dataKey="visitors">
            <LabelList
              dataKey="visitors"
              className="fill-background"
              stroke="none"
              fontSize={12}
              formatter={(value: number) => (value > 0 ? `${value}%` : "")}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
      <table>
        <tbody>
          {chartData.map((e) => (
            <tr key={e.browser}>
              <td>
                <div
                  className={"h-[6px] w-[6px] rounded-full"}
                  style={{ backgroundColor: chartConfig[e.browser].color }}
                />
              </td>

              <td className={"w-[80px]"}>
                <p className={"text-[10px] font-[500]"}>
                  {chartConfig[e.browser]?.label}
                </p>
              </td>

              <td>
                <p className={"text-[10px] font-[500]"}>{e.visitors}%</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Services;
