import React, { useState } from 'react'

// Libs
import Flatpickr from "react-flatpickr"

// Components
import { Searchbar } from '../../../searchbar'
import { SelectDoctorList } from '../../../doctor'

const SelectDate = () => {
  const [date, setDate] = useState(new Date())



  return (
    <div className="flex flex-col h-full w-full">
      <h5 className="h-[10rem] flex items-center justify-center text-[20px] text-easternBlue font-UbuntuBold px-[3rem] border-b-[1px] border-edgeWater ">
        3. Select date and time
      </h5>

      <div className=" flex flex-col overflow-y-auto h-[calc(100%-10rem-5rem-4rem)] mr-[1.5rem] ">

        <div className='appointmentMiniCalendar'>

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

      </div>
    </div>
  )
}

export default SelectDate 
