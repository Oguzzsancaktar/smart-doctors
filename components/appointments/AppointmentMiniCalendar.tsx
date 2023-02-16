import React, { useState } from 'react';
import 'flatpickr/dist/themes/material_blue.css';

import Flatpickr from 'react-flatpickr';

const AppointmentMiniCalendar = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="appointmentMiniCalendar">
      <Flatpickr
        value={date}
        options={{
          // @ts-ignore ftapickr types are not up to date
          mode: 'none',
          dateFormat: 'd-m-Y',
          inline: true,
          minDate: 'today',
          disableMobile: true,
        }}
      />
    </div>
  );
};

export default AppointmentMiniCalendar;
