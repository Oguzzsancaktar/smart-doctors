import React from "react"
// Components.
import { DashboardCard } from "../../cards"
import { Top5Activity } from "../../activity"
import { UpcomingAppointments } from "../../appointments"
import { DoctorsChatList } from "../../chat"
import { DoctorStatistics } from "../../statistics"
import { useAppApiContext } from "../../../contexts/appContext"
import { CreateAppointment } from "../side-drawer"

const DoctorDashboard = () => {
  // Context.
  const { changeSideDrawerContent } = useAppApiContext()

  // Handlers.
  const handleNewAppointmentClick = () => {
    changeSideDrawerContent(<CreateAppointment />)
  }

  return (
    <>
      <div className="h-full">
        <div className="h-[60.2rem]  w-full flex flex-row pb-[1rem]">
          <div className="w-[calc(100%-30rem)] mr-[1rem] ">
            <DashboardCard
              headButton={{ text: "All Appointment" }}
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

        <div className="h-[calc(100%-60.2rem)]  w-full flex flex-row  pt-[1rem] ">
          <div className="w-[calc(100%-30rem)] mr-[1rem] ">
            <DashboardCard
              headButton={{ text: "View All" }}
              headIconName="chart"
              headIconText="Statistics"
              bodyElement={<DoctorStatistics />}
            />
          </div>
          <div className="w-[36rem] ml-[1rem]">
            <DashboardCard
              headIconName="message"
              headIconText="Chats"
              bodyElement={<DoctorsChatList />}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default DoctorDashboard 
