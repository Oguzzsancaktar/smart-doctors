import React, { useState } from 'react'

// Libs
import Flatpickr from "react-flatpickr"

// Components
import { Searchbar } from '../../../searchbar'
import { SelectDoctorList } from '../../../doctor'
import { SelectDateList } from '../../../appointments'

const SelectDate = () => {
  const [date, setDate] = useState(new Date())



  return (
    <div className="flex flex-col h-full w-full">
      <h5 className="h-[10rem] flex items-center justify-center text-[20px] text-easternBlue font-UbuntuBold px-[3rem] border-b-[1px] border-edgeWater ">
        3. Select date and time
      </h5>

      <div className="flex flex-col items-center h-[calc(100%-10rem)] mr-[1.5rem] py-5 pl-[3rem]">
        <div className='appointmentMiniCalendar h-[340px] pr-[1.5rem]'>
          <Flatpickr
            value={date}
            options={{
              mode: "single",
              dateFormat: "d-m-Y",
              inline: true,
              minDate: "today",
              disableMobile: true,
            }}
          />
        </div>

        <div className='w-full h-[calc(100%-340px)]'>
          <SelectDateList />
        </div>
      </div>
    </div>
  )
}

export default SelectDate 
