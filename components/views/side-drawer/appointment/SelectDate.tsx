import React, { useState } from 'react';

// Libs
import Flatpickr from 'react-flatpickr';

// Components
import { SelectDateList } from '../../../appointments';
import {
  useCreateAppointmentApiContext,
  useCreateAppointmentStateContext,
} from '../../../../contexts/createAppointmentContext';

const SelectDate = () => {
  // Contexts.
  const { activeStepIndex } = useCreateAppointmentStateContext();
  const { changeDate, changeTime } = useCreateAppointmentApiContext();
  // States.
  const [date, setDate] = useState<Date>(new Date()[0]);
  // Handlers.
  const handleDateChange = (date: Date[]) => {
    setDate(date[0]);
    changeTime('');
    changeDate(date[0].toString());
  };

  return (
    <div className="flex flex-col h-full w-full">
      <h5
        className={
          'h-[10rem] flex items-center justify-center text-[20px] text-easternBlue font-UbuntuBold px-[3rem] border-b-[1px] border-edgeWater duration-300 transition-all' +
          (activeStepIndex !== 2 &&
            ' text-edgeWater duration-300 transition-all')
        }
      >
        3. Select date and time
      </h5>

      <div className="flex flex-col items-center h-[calc(100%-10rem)] mr-[1.5rem] py-5 pl-[3rem]">
        <div className="appointmentMiniCalendar pr-[1.5rem]">
          <Flatpickr
            value={date}
            options={{
              mode: 'single',
              dateFormat: 'd-m-Y',
              inline: true,
              minDate: 'today',
              disableMobile: true,
            }}
            onChange={handleDateChange}
          />
        </div>

        {date && (
          <div className="w-full h-[calc(100%-340px)]">
            <SelectDateList isDisabled={activeStepIndex !== 2} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectDate;
