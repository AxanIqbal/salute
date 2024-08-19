import React from "react";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import { inter } from "@/utils/fonts";
import { Table, TableCell, TableRow, THead } from "@/components/ui/table";
import { cva } from "class-variance-authority";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const paymentVariant = cva(
  "h-[28px] w-[65px] text-center rounded-[5px] text-[12px] font-medium flex items-center justify-center mx-auto",
  {
    variants: {
      variant: {
        paid: "bg-green text-white",
        due: "bg-white border border-red text-red",
      },
    },
    defaultVariants: {
      variant: "paid",
    },
  },
);

const statusVariant = cva(
  "h-[28px] w-[80px] text-center rounded-[5px] text-[12px] font-medium flex items-center justify-center mx-auto",
  {
    variants: {
      variant: {
        process: "bg-[#A09A15] text-white",
        pending: "bg-red text-white",
        complete: "bg-green text-white",
      },
    },
    defaultVariants: {
      variant: "process",
    },
  },
);

function MyJobs() {
  return (
    <div className={"w-full"}>
      <Header className={"mb-[30px]"} />
      <p className={cn("font-bold text-[32px] mb-[20px]", inter.variable)}>
        My Jobs
      </p>

      <Table>
        <thead className={"shadow-2xl"}>
          <tr>
            <THead className={"rounded-tl-[10px]"}>Date</THead>
            <THead>Vehicle Name</THead>
            <THead>Service Needed</THead>
            <THead>Cost</THead>
            <THead>Payment</THead>
            <THead>Status</THead>
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
              <p className={paymentVariant({ variant: "due" })}>Due</p>
            </TableCell>
            <TableCell>
              <p className={statusVariant({ variant: "process" })}>
                In process
              </p>
            </TableCell>
            <TableCell>
              <div className={"flex items-center gap-[8px] justify-center"}>
                <Button
                  className={
                    "w-[65px] h-[28px] rounded-[5px] text-[12px] font-medium"
                  }
                >
                  View
                </Button>

                <Button
                  variant={"success"}
                  className={
                    "h-[28px] w-[70px] rounded-[5px] text-[12px] font-medium"
                  }
                >
                  Approved
                </Button>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant={"info"}
                      className={
                        "h-[28px] w-[100px] rounded-[5px] text-[12px] font-medium"
                      }
                    >
                      Track progress
                    </Button>
                  </DialogTrigger>

                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className={"font-medium text-[20px]"}>
                        Track progress
                      </DialogTitle>
                    </DialogHeader>

                    <div>
                      <Input placeholder={"Enter your vehicle number"} />
                    </div>

                    <DialogFooter>
                      <Button
                        className={"font-normal text-[12px] rounded-[5px]"}
                      >
                        Continue
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>23 Apr 2022</TableCell>
            <TableCell>XYZ</TableCell>
            <TableCell>Denting</TableCell>
            <TableCell>Rs.5500</TableCell>
            <TableCell>
              <p className={paymentVariant({ variant: "due" })}>Due</p>
            </TableCell>
            <TableCell>
              <p className={statusVariant({ variant: "pending" })}>Pending</p>
            </TableCell>

            <TableCell>
              <div className={"flex items-center gap-[8px] justify-center"}>
                <Button
                  className={
                    "w-[65px] h-[28px] rounded-[5px] text-[12px] font-medium"
                  }
                >
                  View
                </Button>

                <Button
                  variant={"success"}
                  className={
                    "h-[28px] w-[70px] rounded-[5px] text-[12px] font-medium"
                  }
                >
                  Approve
                </Button>

                <div className={"w-[100px] text-center"}>------</div>
              </div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>23 Apr 2022</TableCell>
            <TableCell>XYZ</TableCell>
            <TableCell>Denting</TableCell>
            <TableCell>Rs.5500</TableCell>
            <TableCell>
              <p className={paymentVariant({ variant: "paid" })}>Paid</p>
            </TableCell>
            <TableCell>
              <p className={statusVariant({ variant: "complete" })}>
                Completed
              </p>
            </TableCell>
            <TableCell>
              <div className={"flex items-center gap-[8px] justify-center"}>
                <Button
                  className={
                    "w-[65px] h-[28px] rounded-[5px] text-[12px] font-medium"
                  }
                >
                  View
                </Button>

                <div className={"w-[70px] text-center"}>------</div>

                <div className={"w-[100px] text-center"}>------</div>
              </div>
            </TableCell>
          </TableRow>
        </tbody>
      </Table>
    </div>
  );
}

export default MyJobs;
