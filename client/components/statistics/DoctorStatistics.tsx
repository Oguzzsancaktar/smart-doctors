import React from "react";
import { MonthlyBarChart, PieChart } from "../charts";

const DoctorStatistics = () => {
  return (
    <div className="h-full flex justify-between mb-[30px] ">
      <div className="flex-col w-1/3 h-full ">
        <div className="flex flex-row justify-center mb-[30px] h-[16px]">
          <span className="font-UbuntuBold text-tundora text-[14px] leading-[16px]">
            Field of treatment |
          </span>
          <span className="font-UbuntuRegular text-tundora text-[14px] leading-[16px] ml-[3px]">
            Percentage per month
          </span>
        </div>

        <div className="h-[calc(100%-16px-30px)] mb-[30px]">
          <PieChart />
        </div>
      </div>

      <div className="w-1/3 h-full border-x-[1px] border-gallery">
        <div className="flex flex-row justify-center mb-[30px] h-[16px]">
          <span className="font-UbuntuBold text-tundora text-[14px] leading-[16px]">
            Patients per month |
          </span>
          <span className="font-UbuntuRegular text-tundora text-[14px] leading-[16px] ml-[3px]">
            Yearly overview
          </span>
        </div>

        <div className="h-[calc(100%-16px-30px)] mb-[30px]">
          <MonthlyBarChart />
        </div>
      </div>

      <div className="w-1/3 h-full">
        <div className="flex flex-row justify-center mb-[30px] h-[16px]">
          <span className="font-UbuntuBold text-tundora text-[14px] leading-[16px]">
            Patients with most visits |
          </span>
          <span className="font-UbuntuRegular text-tundora text-[14px] leading-[16px] ml-[3px]">
            Yearly
          </span>
        </div>

        <div className="h-[calc(100%-16px-30px)] mb-[30px]">
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default DoctorStatistics;
