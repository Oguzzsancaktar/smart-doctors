import React from 'react'
import { appointmentTimes } from '../../../constants/appointmentTimes'
import { map } from 'lodash'
import { ConfirmSelectButton } from '../../button'
import { Button } from '@nextui-org/react'

const SelectDateList = () => {
  return (
    <ul className="w-full h-full flex flex-col overflow-y-auto pr-[1.5rem]">
      {map(appointmentTimes, (time, index) => {
        return (
          <li className="w-full h-[5rem] mb-[1rem] min-h-[5rem] " key={index}>
            <ConfirmSelectButton isButton={true}>
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
                {time}
              </Button>
            </ConfirmSelectButton>
          </li>
        )
      })}
    </ul>
  )
}

export default SelectDateList