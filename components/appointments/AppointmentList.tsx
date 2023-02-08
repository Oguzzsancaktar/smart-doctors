import React from "react"
import AppointmentListItem from "./AppointmentListItem"
import data from "../../shared/jsons/tempAppointment.json"

const AppointmentList = () => {
  return (
    <div className="h-full overflow-y-auto">
      {data.data.map((item, index) => (
        <AppointmentListItem appointment={item} key={index} />
      ))}
    </div>
  )
}

export default AppointmentList 
