import React, { useState } from "react";
import "flatpickr/dist/themes/material_blue.css";

import Flatpickr from "react-flatpickr";

const AppointmentMiniCalendar = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="appointmentMibiCalendar">
      <Flatpickr
        value={date}
        options={{
          mode: "multiple",
          dateFormat: "d-m-Y",
          inline: true,
          minDate: "today",
          disableMobile: true,
        }}
      />
    </div>
  );
};

export default AppointmentMiniCalendar;
