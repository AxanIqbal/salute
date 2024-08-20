import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const indicatorVariable = cva(
  "w-[16px] h-[16px] rounded-full after:h-full after:border-r after:border-dashed after:absolute after:top-[21px] after:left-[7.5px]",
  {
    variants: {
      variant: {
        filled: "bg-red",
        outline: "border border-red border-[2px]",
      },
    },
    defaultVariants: {
      variant: "filled",
    },
  },
);

export interface IndicatorProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof indicatorVariable> {
  asChild?: boolean;
}

export function Indicator({ variant, className, ...props }: IndicatorProps) {
  return (
    <div className={cn(indicatorVariable({ variant }), className)} {...props} />
  );
}
