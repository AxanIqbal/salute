import React from "react";

interface IStep {
  count: number;
  title: string;
}

function Step({ count, title }: IStep) {
  return (
    <div className={"flex items-center h-[39px]"}>
      <p
        className={
          "px-[20px] bg-red rounded-l-[5px] font-bold text-[24px] h-full text-center leading-[38px] w-[66px]"
        }
      >
        {count}
      </p>
      <div
        className={
          "bg-[#616161CC] rounded-r-[5px] flex-1 font-bold text-[20px] pl-[27px] h-full leading-[38px]"
        }
      >
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Step;
