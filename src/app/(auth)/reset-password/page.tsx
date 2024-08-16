import React from "react";
import { Input } from "@/components/ui/input";
import LockIcon from "@/assets/lock.svg";
import { Button } from "@/components/ui/button";

function ResetPassword() {
  return (
    <div className={""}>
      <p className={"font-[700] text-[38px]"}>Reset Password!</p>
      <p className={"text-[22px] text-textGray mb-[50px]"}>
        Please enter the new password
      </p>

      <div className={"mb-[50px] flex flex-col gap-[20px]"}>
        <Input
          type={"password"}
          label={"Enter New Password"}
          className={"rounded-[10px]"}
          icon={<LockIcon />}
        />
        <Input
          type={"password"}
          label={"Confirm New Password"}
          className={"rounded-[10px]"}
          icon={<LockIcon />}
        />
      </div>

      <Button className={"w-full text-[16px] py-[17px]"}>
        Save New Password
      </Button>
    </div>
  );
}

export default ResetPassword;
