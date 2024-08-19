import React from "react";
import { Table, TableCell, TableRow, THead } from "@/components/ui/table";

function ApprovedTable() {
  return (
    <Table>
      <thead className={"shadow"}>
        <tr className={"shadow-2xl"}>
          <THead className={"rounded-tl-[10px]"}>Date</THead>
          <THead>Vehicle Name</THead>
          <THead>Service Needed</THead>
          <THead>Cost</THead>
          <THead className={"rounded-tr-[10px]"}>Status</THead>
        </tr>
      </thead>
      <tbody>
        <TableRow>
          <TableCell>23 Apr 2022</TableCell>
          <TableCell>XYZ</TableCell>
          <TableCell>Denting</TableCell>
          <TableCell>Rs.5500</TableCell>
          <TableCell>
            <div className={"flex"}>
              <p
                className={
                  "font-medium px-[7px] py-[6px] bg-green rounded-[5px] text-[12px] mx-auto"
                }
              >
                Approved
              </p>
            </div>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>23 Apr 2022</TableCell>
          <TableCell>XYZ</TableCell>
          <TableCell>Denting</TableCell>
          <TableCell>Rs.5500</TableCell>
          <TableCell>
            <div className={"flex"}>
              <p
                className={
                  "font-medium px-[7px] py-[6px] bg-green rounded-[5px] text-[12px] mx-auto"
                }
              >
                Approved
              </p>
            </div>
          </TableCell>
        </TableRow>
      </tbody>
    </Table>
  );
}

export default ApprovedTable;
