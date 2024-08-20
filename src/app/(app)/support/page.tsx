import React from "react";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import { inter } from "@/utils/fonts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import SearchIcon from "@/assets/svg/search.svg";

function SupportPage() {
  return (
    <div className={"w-full"}>
      <Header className={"mb-[30px]"} />
      <p className={cn("font-bold text-[32px] mb-[13px]", inter.variable)}>
        Help & Support
      </p>

      <p className={"text-[28px]"}>
        We‘re here to help you with anything and everything at Salute an auto
        mechanical workshop.
      </p>
      <p className={"text-[18px] text-[#FFFFFFCC]"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
        posuere ridiculus dolor, nisl id dignissim cras. Faucibus semper
        accumsan vulputate varius. Aenean bibendum duis quam cras elementum
        turpis vulputate vel.
      </p>

      <Input
        className={
          "max-w-[500px] bg-[#616161CC] border-none h-[50px] my-[30px] rounded-[10px]"
        }
        placeholder={"Search help"}
        rightIcon={<SearchIcon />}
      />

      <p className={"font-bold text-[32px] mt-[30px]"}>FAQ’s</p>

      <div className={"w-full max-w-[500px]"}>
        <Accordion type={"multiple"}>
          <AccordionItem value={"item-1"}>
            <AccordionTrigger className={"text-[#FFFFFFCC] text-[20px]"}>
              What is Salute?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value={"item-2"}>
            <AccordionTrigger className={"text-[#FFFFFFCC] text-[20px]"}>
              Why choose Salute?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value={"item-3"}>
            <AccordionTrigger className={"text-[#FFFFFFCC] text-[20px]"}>
              Why salute is different from other workshop?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value={"item-4"}>
            <AccordionTrigger className={"text-[#FFFFFFCC] text-[20px]"}>
              What if I can not receive notification?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default SupportPage;
