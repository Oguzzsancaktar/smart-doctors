import React from 'react'
import SelectSpeciality from './SelectSpeciality'
import SelectDoctor from './SelectDoctor'
import SelectDate from './SelectDate'

const CreateAppointment = () => {
  return (
    <div className="flex flex-row h-full">
      <div className="h-full min-w-[calc(230px+3rem+3rem+3rem)] border-r-[1px] border-edgeWater ">
        <SelectSpeciality />
      </div>

      <div className="h-full min-w-[calc(280px+3rem+3rem+3rem)] border-r-[1px] border-edgeWater ">
        <SelectDoctor />
      </div>

      <div className="h-full min-w-[calc(300px+3rem+3rem+3rem)] ">
        <SelectDate />
      </div>
    </div>
  )
}

export default CreateAppointment 
