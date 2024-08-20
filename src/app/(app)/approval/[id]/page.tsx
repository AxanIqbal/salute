import React from "react";
import Header from "@/components/Header";
import BackButton from "@/components/ui/back-button";
import ApprovalInfo from "@/components/Approval/Detail/Info";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { TableCell } from "@/components/Approval/Detail/Table";

function ApprovalDetail() {
  return (
    <div className={"w-full"}>
      <Header className={"mb-[30px]"} />
      <BackButton />

      <p className={"font-bold text-[32px] my-[20px]"}>Quotation Form</p>

      <div className={"flex justify-between flex-wrap gap-4 mb-[30px]"}>
        <ApprovalInfo
          title={"Client’s Contact"}
          infos={[
            { title: "Name", value: "Jack willson" },
            { title: "Cell", value: "034569238" },
            { title: "Email", value: "Jackwillson@gmail.com" },
          ]}
        />

        <ApprovalInfo
          title={"Vehicle Information"}
          infos={[
            { title: "Vehicle Year", value: "2015" },
            { title: "Vehicle Make", value: "United" },
            { title: "Submission Date", value: "12 July 2024" },
            { title: "Vehicle Mileage", value: "23km" },
            { title: "Vehicle Part", value: "Bumper" },
            { title: "Service", value: "Denting" },
          ]}
        />

        <ApprovalInfo
          title={"Contractor’s Contact"}
          infos={[
            { title: "Name", value: "Salute" },
            { title: "Cell", value: "444555666" },
            { title: "Email", value: "Saluteworkshop@gmail.com" },
          ]}
        />
      </div>

      <p className={"font-bold text-[22px] text-red mb-[12px]"}>Description</p>

      <ScrollArea>
        <div
          className={"px-[32px] py-[15px] border rounded-[10px] border-white"}
        >
          <table
            className={
              "table-auto border-separate border-spacing-x-[30px] border-spacing-y-[5px] w-full"
            }
          >
            <thead>
              <tr className={"text-[18px] font-bold"}>
                <th>Services</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Package</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              <tr className={"text-center"}>
                <TableCell>Tire</TableCell>
                <TableCell>00</TableCell>
                <TableCell>0000</TableCell>
                <TableCell>0000</TableCell>
                <TableCell>0000</TableCell>
              </tr>

              <tr className={"text-center"}>
                <TableCell>Tire</TableCell>
                <TableCell>00</TableCell>
                <TableCell>0000</TableCell>
                <TableCell>0000</TableCell>
                <TableCell>0000</TableCell>
              </tr>

              <tr className={"text-center"}>
                <TableCell>Tire</TableCell>
                <TableCell>00</TableCell>
                <TableCell>0000</TableCell>
                <TableCell>0000</TableCell>
                <TableCell>0000</TableCell>
              </tr>

              <tr className={"text-center"}>
                <TableCell>Tire</TableCell>
                <TableCell>00</TableCell>
                <TableCell>0000</TableCell>
                <TableCell>0000</TableCell>
                <TableCell>0000</TableCell>
              </tr>
            </tbody>
          </table>

          <p className={"pl-[55px] font-bold text-[18px] my-[14px]"}>
            Grand Total
          </p>

          <div
            className={
              "py-[11px] border w-full rounded-[10px] border-white text-center font-bold text-[#FFFFFF33]"
            }
          >
            000000
          </div>
        </div>

        <ScrollBar orientation={"horizontal"} />
      </ScrollArea>

      <div
        className={
          "mt-[15px] flex flex-col lg:flex-row justify-between gap-[12px]"
        }
      >
        <div className={"lg:min-w-[400px]"}>
          <p className={"font-bold text-[18px] mb-[10px]"}>Prepared By</p>
          <p
            className={
              "px-[12px] py-[11px] rounded-[12px] border border-white w-full font-bold text-[14px] text-[#FFFFFFCC] max-w-[400px]"
            }
          >
            John Smith
          </p>
        </div>

        <div className={"lg:min-w-[400px]"}>
          <p className={"font-bold text-[18px] mb-[10px]"}>Prepared For</p>
          <p
            className={
              "px-[12px] py-[11px] rounded-[12px] border border-white w-full font-bold text-[14px] text-[#FFFFFFCC] max-w-[400px]"
            }
          >
            Jack willson
          </p>
        </div>
      </div>
    </div>
  );
}

export default ApprovalDetail;
