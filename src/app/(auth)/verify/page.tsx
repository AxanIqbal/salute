import React from "react";
import { Input } from "@/components/ui/input";
import MailIcon from "@/assets/mail.svg";
import { Button } from "@/components/ui/button";

function Verification() {
  return (
    <div className={"flex flex-col"}>
      <p className={"font-[700] text-[38px]"}>Code Verification!</p>
      <p className={"text-[22px] text-textGray mb-[50px]"}>
        Please enter the code sent to your phone number
      </p>

      <div className={"mb-[50px]"}>
        <Input
          label={"Code"}
          className={"rounded-[10px]"}
          icon={<MailIcon />}
        />
      </div>

      <Button className={"w-full text-[16px] py-[17px]"}>Send</Button>
      <Button variant={"link"} className={"self-end"}>
        Resend
      </Button>
    </div>
  );
}

export default Verification;
