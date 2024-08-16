import React from "react";
import Header from "@/components/Header";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import AvatarImagee from "@/assets/avatar.png";
import { Button } from "@/components/ui/button";
import EditIcon from "@/assets/svg/edit.svg";
import { Input } from "@/components/ui/input";
import PersonIcon from "@/assets/svg/person.svg";
import EmailIcon from "@/assets/svg/mail.svg";
import LockIcon from "@/assets/svg/lock.svg";
import PhoneIcon from "@/assets/svg/phone.svg";

function ProfileSetting() {
  return (
    <div className={"w-full"}>
      <Header className={"mb-[30px]"} />

      <div
        className={
          "flex flex-col items-center justify-center h-full max-w-[500px] w-full m-auto"
        }
      >
        <div className={"relative mb-[30px]"}>
          <Avatar className={"w-[120px] h-[120px]"}>
            <AvatarImage src={AvatarImagee.src} />
          </Avatar>

          <Button
            className={
              "absolute bg-white rounded-full w-[30px] h-[30px] right-0 bottom-0"
            }
            size={"icon"}
          >
            <EditIcon />
          </Button>
        </div>

        <div className={"flex flex-col gap-[20px] w-full"}>
          <Input
            disabled
            defaultValue={"Andrew Rapchat"}
            label={"Username"}
            className={"w-full"}
            icon={<PersonIcon />}
          />
          <Input
            disabled
            defaultValue={"example12@gmail.com"}
            type={"email"}
            label={"Email"}
            className={"w-full"}
            icon={<EmailIcon />}
          />
          <Input
            type={"password"}
            label={"Current Password"}
            className={"w-full"}
            icon={<LockIcon />}
            rightIcon={<EditIcon />}
          />
          <Input
            type={"password"}
            label={"New Password"}
            className={"w-full"}
            icon={<LockIcon />}
            rightIcon={<EditIcon />}
          />
          <Input
            type={"password"}
            label={"Confirm New Password"}
            className={"w-full"}
            icon={<LockIcon />}
            rightIcon={<EditIcon />}
          />
          <Input
            defaultValue={"0333445577"}
            type={"tel"}
            label={"Phone number"}
            className={"w-full"}
            icon={<PhoneIcon />}
            rightIcon={<EditIcon />}
          />
        </div>

        <Button className={"w-full rounded-[10px] py-[17px] mt-[50px]"}>
          Save Changes
        </Button>
      </div>
    </div>
  );
}

export default ProfileSetting;
