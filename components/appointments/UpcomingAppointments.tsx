import React from 'react';
import AppointmentList from './AppointmentList';
import AppointmentMiniCalendar from './AppointmentMiniCalendar';

const UpcomingAppointments = () => {
  return (
    <div className="h-full px-[2rem]">
      <div className="flex h-full flex-col justify-between ">
        <div className="flex justify-between h-[calc(100%-5.6rem)] ">
          <div className="w-[calc(100%-32.5rem)] h-full flex flex-col justify-between border-r-[0.1rem]  border-gallery pr-[2rem]">
            <h4 className="text-[1.6rem] leading-[1.8rem] text-corduroy font-UbuntuBold pb-[1.5rem] mb-[1.5rem] border-b-[1px]  border-gallery">
              Upcoming Appointments
            </h4>
            <div className="h-[calc(100%-1.8rem)]">
              <AppointmentList />
            </div>
          </div>

          <div className="w-[32.5rem] h-full  flex flex-col justify-between ml-[2rem] ">
            <h4 className="text-[1.6rem] leading-[1.8rem] text-easternBlue  text-end font-UbuntuBold  pb-[1.5rem]">
              December 2022
            </h4>
            <div className="h-[calc(100%-1.8rem)] ">
              <AppointmentMiniCalendar />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-start  h-[5.6rem] cursor-pointer">
          <h5 className="text-[1.2rem] leading-[1.3rem] text-easternBlue">
            View more appointments
          </h5>
        </div>
      </div>
    </div>
  );
};

export default UpcomingAppointments;
