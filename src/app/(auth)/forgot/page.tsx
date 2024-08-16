import React from "react";
import { Input } from "@/components/ui/input";
import PhoneIcon from "@/assets/phone.svg";
import { Button } from "@/components/ui/button";

function ForgotPage() {
  return (
    <div className={""}>
      <p className={"font-[700] text-[38px]"}>Forgot password!</p>
      <p className={"text-[22px] text-textGray mb-[50px]"}>
        Please enter your phone number
      </p>

      <div className={"mb-[50px]"}>
        <Input
          type={"tel"}
          label={"Phone number"}
          className={"rounded-[10px]"}
          icon={<PhoneIcon />}
        />
      </div>

      <Button className={"w-full text-[16px] py-[17px]"}>Continue</Button>
    </div>
  );
}

export default ForgotPage;
