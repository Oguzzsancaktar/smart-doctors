import React from "react";
import {
  DashboardCard,
  PatientsChatList,
  FavoriteDoctorsList,
  Top5Activity,
  UpcomingAppointments,
} from "../../../components";

const PatientDashboard = () => {
  return (
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
        <div className="h-full w-6/12  mr-[20px]">
          <DashboardCard
            headButtonText="View All"
            headIconName="message"
            headIconText="Chats"
            bodyElement={<PatientsChatList />}
          />
        </div>
        <div className="h-full w-6/12 ml-[20px]">
          <DashboardCard
            headIconName="heart"
            headIconText="Favorite Doctors"
            bodyElement={<FavoriteDoctorsList />}
          />
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;