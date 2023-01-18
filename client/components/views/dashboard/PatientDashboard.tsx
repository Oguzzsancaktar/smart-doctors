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
      <div className="h-[60.1rem]  w-full flex flex-row pb-[1rem]">
        <div className="w-[calc(100%-36rem)] mr-[1rem] ">
          <DashboardCard
            headButtonText="New Appointment"
            headIconName="calendar"
            headIconText="Calendar"
            bodyElement={<UpcomingAppointments />}
          />
        </div>
        <div className="w-[36rem] ml-[1rem]">
          <DashboardCard
            headIconName="activity"
            headIconText="Activities"
            bodyElement={<Top5Activity />}
          />
        </div>
      </div>

      <div className="h-[calc(100%-60.1rem)]  w-full flex flex-row  pt-[1rem] ">
        <div className="h-full w-6/12  mr-[1rem]">
          <DashboardCard
            headButtonText="View All"
            headIconName="message"
            headIconText="Chats"
            bodyElement={<PatientsChatList />}
          />
        </div>
        <div className="h-full w-6/12 ml-[1rem]">
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
