import React from "react";
import AppointmentList from "./AppointmentList";

const UpcomingAppointments = () => {
  return (
    <div className="h-full px-[40px]">
      <div className="flex h-full flex-col justify-between ">
        <div className="flex justify-between h-[calc(100%-56px)] ">
          <div className="w-2/3 h-full flex flex-col justify-between border-r-[1px]  border-gallery pr-[40px]">
            <h4 className="text-[16px] leading-[18px] text-corduroy font-bold pb-[30px] mb-[30px] border-b-[1px]  border-gallery">
              Upcoming Appointments
            </h4>
            <div className="h-[calc(100%-18px)]">
              <AppointmentList />
            </div>
          </div>

          <div className="w-1/3 h-full  flex flex-col justify-between ml-[40px]">
            <h4 className="text-[16px] leading-[18px] text-easternBlue  text-end font-bold mb-[30px] pb-[30px] border-b-[1px]  border-gallery">
              December 2022
            </h4>
            <div className="h-[calc(100%-18px)] ">
              <AppointmentList />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-start  h-[56px] cursor-pointer">
          <h5 className="text-[12px] leading-[13px] text-easternBlue">
            View more appointments
          </h5>
        </div>
      </div>
    </div>
  );
};

export default UpcomingAppointments;
