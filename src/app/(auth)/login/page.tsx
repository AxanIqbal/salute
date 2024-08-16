import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PhoneIcon from "@/assets/phone.svg";

function Login() {
  return (
    <div className={""}>
      <p className={"font-[700] text-[38px]"}>Welcome</p>
      <p className={"text-[22px] text-textGray mb-[50px]"}>
        Hello there! login to get started
      </p>

      <div className={"mb-[50px]"}>
        <p className={"mb-[9px] text-textGray"}>
          Please enter your phone number to continue
        </p>
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

export default Login;
