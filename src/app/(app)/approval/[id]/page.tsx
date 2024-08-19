import React from "react";
import Header from "@/components/Header";
import BackButton from "@/components/ui/back-button";

function ApprovalDetail() {
  return (
    <div className={"w-full"}>
      <Header className={"mb-[30px]"} />
      <BackButton />

      <p className={"font-bold text-[32px] my-[20px]"}>Quotation Form</p>
    </div>
  );
}

export default ApprovalDetail;
