"use client";

import React, { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PhoneIcon from "@/assets/svg/phone.svg";
import { useRouter } from "next/navigation";
import LockIcon from "@/assets/svg/lock.svg";

function Login() {
  const router = useRouter();
  const [phone, setPhone] = useState("");

  const onLogin = useCallback(
    (formData: FormData) => {
      document.cookie = `user=${JSON.stringify({})}; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=Lax;`;
      router.replace("/dashboard");
    },
    [router],
  );

  if (phone) {
    return (
      <form action={onLogin}>
        <p className={"font-medium text-[22px] text-[#FFFFFFB2] text-center"}>
          Enter the 6 digit one time password to continue
        </p>
        <Input
          required
          name={"password"}
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
    >
      <p className={"font-bold text-[38px]"}>Welcome!</p>
      <p className={"text-[22px] text-textGray mb-[50px]"}>
        Hello there! login to get started
      </p>

      <div className={"mb-[50px]"}>
        <p className={"mb-[9px] text-textGray"}>
          Please enter your phone number to continue
        </p>
        <Input
          name={"phone"}
          required
          type={"tel"}
          label={"Phone number"}
          className={"rounded-[10px]"}
          icon={<PhoneIcon />}
        />
      </div>

      <Button className={"w-full text-[16px] py-[17px]"} type={"submit"}>
        Continue
      </Button>
    </form>
  );
}

export default Login;
