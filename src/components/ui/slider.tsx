"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ISlider<T extends string | number> {
  options: { label: string; value: T }[];
  value: T;
  onChange: (value: T) => void;
}

function Slider<T extends string | number>({
  options,
  value,
  onChange,
}: ISlider<T>) {
  return (
    <div className={"bg-[#656966] flex rounded-[10px] overflow-x-auto "}>
      {options.map((e) => (
        <p
          className={cn(
            "font-bold text-[20px] py-[12px] text-center rounded-[10px] cursor-pointer flex-1",
            e.value === value ? "bg-red" : "",
          )}
          key={e.value}
          onClick={() => onChange(e.value)}
        >
          {e.label}
        </p>
      ))}
    </div>
  );
}

export default Slider;
