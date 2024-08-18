import React from "react";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import { inter } from "@/utils/fonts";
import Step from "@/components/NewJob/Step";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import InfoCircleIcon from "@/assets/svg/info-circle.svg";
import UploadImage from "@/components/ui/upload-image";
import VideoIcon from "@/assets/svg/video.svg";
import MicIcon from "@/assets/svg/mic.svg";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

function NewJob() {
  return (
    <div className={"w-full flex flex-col"}>
      <Header className={"mb-[30px]"} />
      <p className={cn("font-bold text-[32px] mb-[25px]", inter.variable)}>
        Job Submission Form
      </p>

      <Step count={1} title={"Vehicle Information"} />
      <div
        className={
          "mt-[18px] mb-[32px] md:px-[60px] flex flex-col md:flex-row gap-[20px]"
        }
      >
        <div className={"flex flex-col gap-[10px] w-full flex-1"}>
          <Input
            labelType={"outer"}
            label={"VEHICLE YEAR"}
            className={"w-[87px]"}
            placeholder={"2015"}
          />

          <div>
            <p className={"text-textGray text-[14px] mb-[6px]"}>VEHICLE MAKE</p>
            <Select>
              <SelectTrigger className="">
                <SelectValue
                  placeholder="CHOOSE"
                  className={"placeholder:text-muted-foreground"}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Input
            labelType={"outer"}
            label={"VEHICLE NAME"}
            placeholder={"VEHICLE NAME"}
          />

          <Input
            labelType={"outer"}
            label={"VEHICLE NUMBER"}
            placeholder={"VEHICLE NUMBER"}
          />

          <Input
            labelType={"outer"}
            label={"VEHICLE MILEAGE"}
            placeholder={"VEHICLE MILEAGE"}
          />

          <Input
            labelType={"outer"}
            label={"VEHICLE PART"}
            placeholder={"VEHICLE PART"}
          />
        </div>

        <div>
          <div
            className={
              "flex gap-[20px] flex-col lg:flex-row mb-[20px] justify-stretch flex-1"
            }
          >
            <div>
              <div className={"flex gap-[6px] items-center mb-[8px]"}>
                <p className={"text-[#FFFFFFCC]"}>IMAGES</p>
                <div
                  className={"bg-[#616161CC] px-[4px] py-[3px] flex gap-[4px]"}
                >
                  <InfoCircleIcon width={12} height={12} />
                  <p className={"text-[8px] text-[#FFFFFF80]"}>
                    Must upload images & video
                  </p>
                </div>
              </div>

              <div
                className={
                  "border border-white rounded-[10px] p-[6px] flex flex-wrap w-full gap-[5px] items-center justify-center"
                }
              >
                <UploadImage className={"w-full md:w-[32%]"} />
                <UploadImage className={"w-full md:w-[32%]"} />
                <UploadImage className={"w-full md:w-[32%]"} />
                <UploadImage className={"w-full md:w-[32%]"} />
                <UploadImage className={"w-full md:w-[32%]"} />
                <UploadImage className={"w-full md:w-[32%]"} />
              </div>
            </div>

            <div className={"flex flex-col"}>
              <p className={"mb-[8px] text-[#FFFFFFCC]"}>VIDEO</p>
              <div
                className={
                  "border border-white rounded-[10px] w-full md:w-[200px] flex flex-col items-center justify-center h-full  aspect-[2.4/3]"
                }
              >
                <VideoIcon />
              </div>
            </div>
          </div>
          <div
            className={
              "bg-[#616161] rounded-[10px] h-[42px] flex items-center px-[12px] justify-between"
            }
          >
            <p className={"text-[12px] font-bold text-[#FFFFFF33]"}>
              ADD VOICE NOTE
            </p>
            <div
              className={
                "h-[32px] w-[32px] bg-red rounded-full flex items-center justify-center"
              }
            >
              <MicIcon />
            </div>
          </div>
        </div>
      </div>

      <Step count={3} title={"Services Needed"} />

      <div
        className={
          "flex my-[12px] md:px-[60px] flex-wrap gap-[8px] md:justify-between"
        }
      >
        <div className={"flex items-center gap-[10px]"}>
          <Checkbox id={"denting"} />
          <label htmlFor={"denting"}>DENTING</label>
        </div>

        <div className={"flex items-center gap-[10px]"}>
          <Checkbox id={"panting"} />
          <label htmlFor={"panting"}>PAINTING</label>
        </div>

        <div className={"flex items-center gap-[10px]"}>
          <Checkbox id={"mechanical"} />
          <label htmlFor={"mechanical"}>MECHANICAL</label>
        </div>

        <div className={"flex items-center gap-[10px]"}>
          <Checkbox id={"electrician"} />
          <label htmlFor={"electrician"}>ELECTRICIAN</label>
        </div>

        <div className={"flex items-center gap-[10px]"}>
          <Checkbox id={"inspection"} />
          <label htmlFor={"inspection"}>INSPECTION</label>
        </div>
      </div>

      <Step count={4} title={"Contact Details"} />

      <div className={"mt-[12px] flex gap-[12px] md:px-[60px]"}>
        <div className={"flex flex-col gap-[10px] flex-1"}>
          <Input
            labelType={"outer"}
            label={"ENTER YOUR NAME"}
            placeholder={"ENTER YOUR NAME"}
          />

          <Input
            type={"tel"}
            labelType={"outer"}
            label={"ENTER YOUR PHONE NUMBER"}
            placeholder={"ENTER YOUR PHONE NUMBER"}
          />

          <Input
            type={"email"}
            labelType={"outer"}
            label={"EMAIL ADDRESS"}
            placeholder={"EMAIL ADDRESS"}
          />

          <Input
            type={"date"}
            labelType={"outer"}
            label={"SUBMISSION DATE"}
            placeholder={"SUBMISSION DATE"}
          />
        </div>

        <div className={"flex-1"}>
          <Textarea label={"COMMENT"} placeholder={"TYPE MESSAGE HERE"} />
        </div>
      </div>

      <Button
        className={"py-[17px] w-full max-w-[500px] self-center mt-[50px]"}
      >
        Submit
      </Button>
    </div>
  );
}

export default NewJob;
