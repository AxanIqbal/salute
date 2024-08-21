"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import PhoneIcon from "@/assets/svg/phone.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LockIcon from "@/assets/svg/lock.svg";
import { useRouter } from "next/navigation";

function SignupPage() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");

  if (code) {
    return (
      <form
        action={() => {
          document.cookie = `user=${JSON.stringify({})}; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=Lax;`;
          router.replace("/dashboard");
        }}
      >
        <p className={"font-medium text-[22px] text-[#FFFFFFB2] text-center"}>
          If you want to reset your password
        </p>
        <Input
          required
          name={"password"}
          type={"password"}
          label={"Enter New Password"}
          className={"rounded-[10px] mt-[30px]"}
          icon={<LockIcon />}
        />
        <Input
          required
          name={"confirm_password"}
          type={"password"}
          label={"Confirm Password"}
          className={"rounded-[10px] mt-[20px] mb-[50px]"}
          icon={<LockIcon />}
        />

        <Button className={"w-full text-[16px] py-[17px]"} type={"submit"}>
          Continue
        </Button>
      </form>
    );
  }

  if (phone) {
    return (
      <form
        action={(formData) => {
          setCode(formData.get("code") as string);
        }}
      >
        <p className={"font-medium text-[22px] text-[#FFFFFFB2] text-center"}>
          Enter the 6 digit one time password to continue
        </p>
        <Input
          required
          name={"code"}
          type={"password"}
          label={"Enter Password"}
          className={"rounded-[10px] mt-[30px] mb-[50px]"}
          icon={<LockIcon />}
        />
        <Button className={"w-full text-[16px] py-[17px]"} type={"submit"}>
          Login
        </Button>
      </form>
    );
  }

  return (
    <form
      action={(formData) => {
        setPhone(formData.get("phone") as string);
      }}
      className={""}
    >
      <p className={"font-[700] text-[38px]"}>Sign Up</p>
      <p className={"text-[22px] text-textGray mb-[50px]"}>
        Hello there! sign up to get started
      </p>

      <div className={"mb-[50px]"}>
        <p className={"mb-[9px] text-textGray"}>
          Please enter your phone number to continue
        </p>
        <Input
          name={"phone"}
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
    </form>
  );
}

export default SignupPage;
