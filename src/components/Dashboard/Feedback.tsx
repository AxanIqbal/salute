import React from "react";
import Rating from "@/components/ui/rating";

function Feedback() {
  return (
    <div
      className={"p-[18px] bg-[#616161CC] rounded-[10px] flex-1 min-w-[340px]"}
    >
      <p className={"font-bold text-[20px] mb-[12px]"}>Feedback Rating</p>

      <div className={"flex flex-col items-center justify-center"}>
        <p className={"text-[16px] font-medium text-[#FFFFFFCC]"}>Quality</p>
        <Rating initialRating={3} readonly className={"mb-[20px]"} />

        <p className={"text-[16px] font-medium text-[#FFFFFFCC]"}>Service</p>
        <Rating initialRating={5} readonly className={"mb-[20px]"} />

        <p className={"text-[16px] font-medium text-[#FFFFFFCC]"}>Staff</p>
        <Rating initialRating={5} readonly className={"mb-[20px]"} />
      </div>
    </div>
  );
}

export default Feedback;
