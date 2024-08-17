import React from "react";
import { Table, TableCell, TableRow, THead } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

function Pending() {
  return (
    <Table>
      <thead className={"shadow"}>
        <tr className={"shadow-2xl"}>
          <THead className={"rounded-tl-[10px]"}>Date</THead>
          <THead>Vehicle Name</THead>
          <THead>Service Needed</THead>
          <THead>Cost</THead>
          <THead className={"rounded-tr-[10px] text-center"}>Actions</THead>
        </tr>
      </thead>
      <tbody>
        <TableRow>
          <TableCell>23 Apr 2022</TableCell>
          <TableCell>XYZ</TableCell>
          <TableCell>Denting</TableCell>
          <TableCell>Rs.5500</TableCell>
          <TableCell>
            <div className={"flex gap-[8px] items-center justify-center"}>
              <Button
                className={"font-medium text-[12px] h-[28px] rounded-[5px]"}
              >
                View
              </Button>
              <Button
                variant={"destructive"}
                className={"font-medium text-[12px] h-[28px] rounded-[5px]"}
              >
                Cancel
              </Button>
              <Button
                className={
                  "bg-green hover:bg-green/90 font-medium text-[12px] h-[28px] rounded-[5px]"
                }
              >
                Approve
              </Button>
            </div>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>23 Apr 2022</TableCell>
          <TableCell>XYZ</TableCell>
          <TableCell>Denting</TableCell>
          <TableCell>Rs.5500</TableCell>
          <TableCell>
            <div className={"flex gap-[8px] items-center justify-center"}>
              <Button
                className={"font-medium text-[12px] h-[28px] rounded-[5px]"}
              >
                View
              </Button>
              <Button
                variant={"destructive"}
                className={"font-medium text-[12px] h-[28px] rounded-[5px]"}
              >
                Cancel
              </Button>
              <Button
                className={
                  "bg-green hover:bg-green/90 font-medium text-[12px] h-[28px] rounded-[5px]"
                }
              >
                Approve
              </Button>
            </div>
          </TableCell>
        </TableRow>
      </tbody>
    </Table>
  );
}

export default Pending;
