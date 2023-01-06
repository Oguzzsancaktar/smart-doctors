import React from "react";
import { DashboardCard } from "../../cards";

const DoctorDashboard = () => {
  return (
    <>
      <div className="w-full flex flex-row h-[calc(100%-400px)] pb-[20px]">
        <div className="w-[calc(100%-360px)] mr-[20px]">
          <DashboardCard
            headButtonText="New Appointment"
            headIconName="calendar"
            headIconText="Calendar"
          />
        </div>
        <div className="w-[360px] ml-[20px]">
          <DashboardCard headIconName="activity" headIconText="Activities" />
        </div>
      </div>

      <div className=" w-full flex flex-row h-[400px] pt-[20px] ">
        <div className="w-6/12  mr-[20px]">
          <DashboardCard
            headButtonText="View All"
            headIconName="message"
            headIconText="Chats"
          />
        </div>
        <div className="w-6/12 ml-[20px]">
          <DashboardCard headIconName="heart" headIconText="Favorite Doctors" />
        </div>
      </div>
    </>
  );
};

export default DoctorDashboard;
