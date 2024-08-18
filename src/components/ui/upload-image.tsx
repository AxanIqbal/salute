"use client";

import { forwardRef, useState } from "react";
import * as React from "react";
import { cn } from "@/lib/utils";
import UploadIcon from "@/assets/svg/upload.svg";
import Image from "next/image";

export interface UploadProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const UploadImage = forwardRef<HTMLInputElement, UploadProps>(
  ({ className, ...props }, ref) => {
    const [image, setImage] = useState<File | string | undefined>(undefined);

    if (image) {
      return (
        <div
          style={{
            backgroundImage: `url(${image instanceof File ? URL.createObjectURL(image) : image})`,
          }}
          className={cn(
            "w-[100px] aspect-[2.3/3] rounded-[10px] cursor-pointer bg-cover bg-center",
            className,
          )}
          // onClick={() => {
          //   setImage(undefined);
          //   props.onChange?.([]);
          // }}
        />
      );
    }

    return (
      <label
        className={cn(
          "bg-[#616161CC] flex flex-col items-center justify-center w-[100px] aspect-[2.3/3] rounded-[10px] cursor-pointer",
          className,
        )}
        htmlFor={props.name}
      >
        <input
          ref={ref}
          type="file"
          accept="image/*"
          hidden
          {...props}
          onChange={(e) => {
            props.onChange?.(e);
            setImage(e.target.files?.[0]);
          }}
        />
        <p className={"text-[10px] text-[#FFFFFF80]"}>Upload Image</p>
        <UploadIcon width={20} height={20} />
      </label>
    );
  },
);

UploadImage.displayName = "Upload Image";

export default UploadImage;
