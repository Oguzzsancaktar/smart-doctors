import React from "react"
import {
  DashboardCard,
  PatientsChatList,
  FavoriteDoctorsList,
  Top5Activity,
  UpcomingAppointments,
  CreateAppointment,
} from "../../../components"
import { useAppApiContext } from "../../../contexts/appContext"

const PatientDashboard = () => {
  // Context.
  const { changeSideDrawerContent } = useAppApiContext()

  // Handlers.
  const handleNewAppointmentClick = () => {
    changeSideDrawerContent(<CreateAppointment />)
  }


  return (
    <div className="h-full">
      <div className="h-[60.1rem]  w-full flex flex-row pb-[1rem]">
        <div className="w-[calc(100%-30rem)] mr-[1rem] ">
          <DashboardCard
            headButton={{ text: "New Appointment", action: () => handleNewAppointmentClick() }}
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
            headButton={{ text: "View All" }}
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
  )
}

export default PatientDashboard 
