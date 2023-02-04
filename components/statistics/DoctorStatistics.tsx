import React from "react";
import { MonthlyBarChart, PieChart } from "../charts";

const DoctorStatistics = () => {
  return (
    <div className="h-full flex justify-between mb-[3rem] ">
      <div className="flex-col w-1/3 h-full ">
        <div className="flex flex-row justify-center mb-[3rem] h-[1.6rem]">
          <span className="font-UbuntuBold text-tundora text-[1.4rem] leading-[1.6rem]">
            Field of treatment |
          </span>
          <span className="font-UbuntuRegular text-tundora text-[1.4rem] leading-[1.6rem] ml-[0.3rem]">
            Percentage per month
          </span>
        </div>

        <div className="h-[calc(100%-1.6rem-3rem)] mb-[3rem]">
          <PieChart />
        </div>
      </div>

      <div className="w-1/3 h-full border-x-[0.1rem] border-gallery">
        <div className="flex flex-row justify-center mb-[3rem] h-[1.6rem]">
          <span className="font-UbuntuBold text-tundora text-[1.4rem] leading-[1.6rem]">
            Patients per month |
          </span>
          <span className="font-UbuntuRegular text-tundora text-[1.4rem] leading-[1.6rem] ml-[0.3rem]">
            Yearly overview
          </span>
        </div>

        <div className="h-[calc(100%-1.6rem-3rem)] mb-[3rem]">
          <MonthlyBarChart />
        </div>
      </div>

      <div className="w-1/3 h-full">
        <div className="flex flex-row justify-center mb-[3rem] h-[1.6rem]">
          <span className="font-UbuntuBold text-tundora text-[1.4rem] leading-[1.6rem]">
            Patients with most visits |
          </span>
          <span className="font-UbuntuRegular text-tundora text-[1.4rem] leading-[1.6rem] ml-[0.3rem]">
            Yearly
          </span>
        </div>

        <div className="h-[calc(100%-1.6rem-3rem)] mb-[3rem]">
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default DoctorStatistics;
