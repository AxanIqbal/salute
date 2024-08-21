"use client";

import React from "react";
import { Table, TableCell, TableRow, THead } from "@/components/ui/table";
import { useRouter } from "next/navigation";

function Canceled() {
  const router = useRouter();

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
        <TableRow
          className={"cursor-pointer"}
          onClick={() => router.push("/approval/1")}
        >
          <TableCell>23 Apr 2022</TableCell>
          <TableCell>XYZ</TableCell>
          <TableCell>Denting</TableCell>
          <TableCell>Rs.5500</TableCell>
          <TableCell>Cancelled</TableCell>
        </TableRow>

        <TableRow
          className={"cursor-pointer"}
          onClick={() => router.push("/approval/1")}
        >
          <TableCell>23 Apr 2022</TableCell>
          <TableCell>XYZ</TableCell>
          <TableCell>Denting</TableCell>
          <TableCell>Rs.5500</TableCell>
          <TableCell>Cancelled</TableCell>
        </TableRow>
      </tbody>
    </Table>
  );
}

export default Canceled;
