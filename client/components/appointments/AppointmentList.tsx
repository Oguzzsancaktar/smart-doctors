import React from "react";
import AppointmentListItem from "./AppointmentListItem";

const AppointmentList = () => {
  return (
    <div className="h-full overflow-y-auto">
      <AppointmentListItem />
      <AppointmentListItem />
      <AppointmentListItem />
      <AppointmentListItem />
    </div>
  );
};

export default AppointmentList;
