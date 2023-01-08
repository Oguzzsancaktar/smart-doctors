import React from "react";
import AppointmentList from "./AppointmentList";
import AppointmentMiniCalendar from "./AppointmentMiniCalendar";

const UpcomingAppointments = () => {
  return (
    <div className="h-full px-[40px]">
      <div className="flex h-full flex-col justify-between ">
        <div className="flex justify-between h-[calc(100%-56px)] ">
          <div className="w-[calc(100%-390px)] h-full flex flex-col justify-between border-r-[1px]  border-gallery pr-[40px]">
            <h4 className="text-[16px] leading-[18px] text-corduroy font-UbuntuBold pb-[30px] mb-[30px] border-b-[1px]  border-gallery">
              Upcoming Appointments
            </h4>
            <div className="h-[calc(100%-18px)]">
              <AppointmentList />
            </div>
          </div>

          <div className="w-[390px] h-full  flex flex-col justify-between ml-[40px]">
            <h4 className="text-[16px] leading-[18px] text-easternBlue  text-end font-UbuntuBold  pb-[30px]">
              December 2022
            </h4>
            <div className="h-[calc(100%-18px)] ">
              <AppointmentMiniCalendar />
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