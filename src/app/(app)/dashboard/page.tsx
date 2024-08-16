import React from "react";
import Header from "@/components/Header";
import { inter } from "@/utils/fonts";
import { cn } from "@/lib/utils";
import UpperTile from "@/components/Dashboard/UpperTile";
import CarIcon from "@/assets/svg/car.svg";
import EngineIcon from "@/assets/svg/engine.svg";
import DangerIcon from "@/assets/svg/danger.svg";
import VisitsChart from "@/components/Dashboard/VisitsChart";
import Services from "@/components/Dashboard/Services";
import Feedback from "@/components/Dashboard/Feedback";

function Dashboard() {
  return (
    <div className={"w-full"}>
      <Header role={"customer"} className={"mb-[30px]"} />
      <p className={cn("font-bold text-[32px] mb-[20px]", inter.variable)}>
        Dashboard
      </p>

      <div className={"flex gap-[20px] flex-wrap mb-[30px]"}>
        <UpperTile
          title={"Total vehicles at garage"}
          icon={<CarIcon />}
          location={""}
          count={20}
        />
        <UpperTile
          title={"Total Services"}
          icon={<EngineIcon />}
          location={""}
          count={20}
        />
        <UpperTile
          title={"Total pending for approval"}
          icon={<DangerIcon />}
          location={""}
          count={8}
        />
      </div>

      <div className={"flex gap-[20px] flex-wrap"}>
        <VisitsChart />
        <Services />
        <Feedback />
      </div>
    </div>
  );
}

export default Dashboard;
