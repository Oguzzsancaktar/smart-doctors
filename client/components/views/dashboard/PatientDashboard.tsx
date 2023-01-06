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
    <>
      <div className="w-full flex flex-row h-[calc(100%-450px)] pb-[20px]">
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

      <div className=" w-full flex flex-row h-[450px] pt-[20px] ">
        <div className="w-6/12  mr-[20px]">
          <DashboardCard
            headButtonText="View All"
            headIconName="message"
            headIconText="Chats"
            bodyElement={<PatientsChatList />}
          />
        </div>
        <div className="w-6/12 ml-[20px]">
          <DashboardCard
            headIconName="heart"
            headIconText="Favorite Doctors"
            bodyElement={<FavoriteDoctorsList />}
          />
        </div>
      </div>
    </>
  );
};

export default PatientDashboard;
