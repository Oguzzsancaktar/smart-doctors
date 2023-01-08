import React from "react";
import { DashboardCard } from "../../cards";
import { Top5Activity } from "../../activity";
import { UpcomingAppointments } from "../../appointments";
import { DoctorsChatList } from "../../chat";
import { DoctorStatistics } from "../../statistics";

const DoctorDashboard = () => {
  return (
    <>
      <div className="h-full">
        <div className="h-[602px]  w-full flex flex-row pb-[20px]">
          <div className="w-[calc(100%-360px)] mr-[20px] ">
            <DashboardCard
              headButtonText="New Appointment"
              headIconName="calendar"
              headIconText="Calendar"
              bodyElement={<UpcomingAppointments />}
            />
          </div>
          <div className="w-[360px] ml-[20px]">
            <DashboardCard
              headIconName="activity"
              headIconText="Activities"
              bodyElement={<Top5Activity />}
            />
          </div>
        </div>

        <div className="h-[calc(100%-602px)]  w-full flex flex-row  pt-[20px] ">
          <div className="w-[calc(100%-360px)] mr-[20px] ">
            <DashboardCard
              headButtonText="View All"
              headIconName="chart"
              headIconText="Statistics"
              bodyElement={<DoctorStatistics />}
            />
          </div>
          <div className="w-[360px] ml-[20px]">
            <DashboardCard
              headIconName="message"
              headIconText="Chats"
              bodyElement={<DoctorsChatList />}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDashboard;
