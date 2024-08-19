"use client";

import React from "react";
import BackIcon from "@/assets/svg/back.svg";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();
  return (
    <Button
      className={"h-[32px] w-[32px] rounded-[5px] p-0"}
      onClick={() => router.back()}
    >
      <BackIcon />
    </Button>
  );
}

export default BackButton;
