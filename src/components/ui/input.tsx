import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  label?: string;
  labelType?: "outer" | "inner";
  inputClassName?: string;
  rightIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      icon,
      label,
      inputClassName,
      rightIcon,
      labelType = "outer",
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={cn(
          "rounded-md border border-input px-[12px] gap-[16px] py-[10px] flex items-center",
          className,
        )}
      >
        {icon}
        <div>
          {label && <p className={"text-textGray text-[14px]"}>{label}</p>}
          <input
            type={type}
            className={cn(
              "flex h-auto w-full bg-transparent text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
              inputClassName,
            )}
            ref={ref}
            {...props}
          />
        </div>
        {rightIcon}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
