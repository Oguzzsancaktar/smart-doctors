import React from 'react'
// Components.
import SelectSpeciality from './SelectSpeciality'
import SelectDoctor from './SelectDoctor'
import SelectDate from './SelectDate'
import { Button } from '@nextui-org/react'

const CreateAppointment = () => {
  return (
    <div className='h-full flex flex-col'>
      <div className="flex flex-row h-[calc(100%-10rem)]">
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

      <div className="w-full h-[10rem] px-[3rem] bg-catskillWhite rounded-bl-[12px]">
        <div className="w-full h-full flex items-center justify-between">
          <div>
            <p>Step 1 of 3</p>
          </div>

          <div className='flex flex-row '>
            <Button
              css={{
                borderWidth: '2px',
                borderRadius: '12px',
                borderColor: '$corduroy',
                fontSize: '16px',
                fontFamily: 'Ubuntu-Bold',
                height: '100%',
                width: '100%',
                transition: 'all 0.4 ease',
              }}
            >
              Back
            </Button>

            <Button
              css={{
                borderWidth: '2px',
                borderRadius: '12px',
                borderColor: '$corduroy',
                fontSize: '16px',
                fontFamily: 'Ubuntu-Bold',
                height: '100%',
                width: '100%',
                transition: 'all 0.4 ease',
              }}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default CreateAppointment 
