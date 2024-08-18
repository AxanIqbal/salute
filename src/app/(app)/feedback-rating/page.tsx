import React from "react";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import { inter } from "@/utils/fonts";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Rating from "@/components/ui/rating";
import UploadImage from "@/components/ui/upload-image";

function Feedback() {
  return (
    <div className={"w-full"}>
      <Header className={"mb-[30px]"} />
      <p className={cn("font-bold text-[32px] mb-[20px]", inter.variable)}>
        Customer Feedback
      </p>

      <p className={"font-bold text-[28px] mb-[10px]"}>
        Salute <span className={"text-textRed"}>value your feedback</span>
      </p>

      <p className={"text-[20px] max-w-[450px] leading-[24px]"}>
        Your feedback help us to improve our services and provide a better
        experience
      </p>

      <div className={"flex flex-col"}>
        <div
          className={
            "my-[30px] flex flex-col lg:flex-row gap-[20px] md:gap-[50px]"
          }
        >
          <div className={"flex flex-col gap-[10px] flex-1 lg:max-w-[300px]"}>
            <Input label={"NAME"} placeholder={"NAME"} labelType={"outer"} />
            <Input
              type={"email"}
              label={"EMAIL"}
              placeholder={"CUSTOMER EMAIL"}
              labelType={"outer"}
            />
            <Textarea label={"COMMENT"} placeholder={"TYPE MESSAGE HERE"} />
            <Textarea label={"SUGGESTIONS"} placeholder={"TYPE MESSAGE HERE"} />
          </div>

          <div className={"flex-1 "}>
            <div
              className={
                "bg-[#616161CC] p-[30px] rounded-[10px] flex flex-col sm:flex-row sm:justify-between gap-[20px] items-center"
              }
            >
              <div>
                <p className={"text-center font-bold text-[20px]"}>Quality</p>
                <Rating iconProps={{ width: 30, height: 30 }} />
              </div>

              <div>
                <p className={"text-center font-bold text-[20px]"}>Service</p>
                <Rating iconProps={{ width: 30, height: 30 }} />
              </div>

              <div>
                <p className={"text-center font-bold text-[20px]"}>Staff</p>
                <Rating iconProps={{ width: 30, height: 30 }} />
              </div>
            </div>

            <div>
              <p className={"py-[10px] font-bold text-[12px] text-[#FFFFFFCC]"}>
                UPLOAD IMAGES
              </p>
              <div
                className={
                  "border border-white rounded-[10px] p-[6px] flex flex-wrap w-full gap-[5px] items-center justify-center"
                }
              >
                <UploadImage className={"w-full md:w-[24%]"} />
                <UploadImage className={"w-full md:w-[24%]"} />
                <UploadImage className={"w-full md:w-[24%]"} />
                <UploadImage className={"w-full md:w-[24%]"} />
                <UploadImage className={"w-full md:w-[24%]"} />
                <UploadImage className={"w-full md:w-[24%]"} />
                <UploadImage className={"w-full md:w-[24%]"} />
                <UploadImage className={"w-full md:w-[24%]"} />
              </div>
            </div>
          </div>
        </div>

        <Button className={"py-[17px] w-full max-w-[500px] self-center"}>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Feedback;
