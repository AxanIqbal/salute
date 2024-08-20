import React from "react";

interface IApprovalInfo {
  title: string;
  infos: { title: string; value: string }[];
}

function ApprovalInfo({ title, infos }: IApprovalInfo) {
  return (
    <div>
      <p className={"font-bold text-[22px] mb-[12px] text-red"}>{title}</p>
      <div className={"flex flex-col gap-[8px]"}>
        {infos.map((i) => (
          <div
            className={"flex items-center gap-[6px] font-medium text-[18px]"}
            key={i.title}
          >
            <p>{i.title}:</p>
            <p className={"text-[#FFFFFFCC]"}>{i.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ApprovalInfo;
