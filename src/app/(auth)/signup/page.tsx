import React from "react";
import { Input } from "@/components/ui/input";
import PhoneIcon from "@/assets/phone.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function SignupPage() {
  return (
    <div className={""}>
      <p className={"font-[700] text-[38px]"}>Sign Up</p>
      <p className={"text-[22px] text-textGray mb-[50px]"}>
        Hello there! sign up to get started
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

      <Button className={"w-full text-[16px] py-[17px]"}>Sign Up</Button>
      <p className={"text-center text-textGray mt-[9px]"}>
        Already have an account?{" "}
        <Link className={"text-red"} href={"/login"}>
          Login
        </Link>
      </p>
    </div>
  );
}

export default SignupPage;
