import React from 'react';
import { appointmentTimes } from '../../../constants/appointmentTimes';
import { map } from 'lodash';
import { ConfirmSelectButton } from '../../button';
import { Button } from '@nextui-org/react';
import { disabledButtonStyle } from '../../../constants';
import {
  useCreateAppointmentApiContext,
  useCreateAppointmentStateContext,
} from '../../../contexts/createAppointmentContext';

interface IProps {
  isDisabled?: boolean;
}
const SelectDateList: React.FC<IProps> = ({ isDisabled }) => {
  const { selectedTime } = useCreateAppointmentStateContext();
  const { changeTime, changeStepIndex } = useCreateAppointmentApiContext();

  const handleTimeChange = (time: string) => {
    changeStepIndex(3);
    changeTime(time);
  };

  return (
    <ul className="w-full h-full flex flex-col overflow-y-auto pr-[1.5rem]">
      {map(appointmentTimes, (time, index) => {
        return (
          <li className="w-full h-[5rem] mb-[1rem] min-h-[5rem] " key={index}>
            <ConfirmSelectButton
              isButton={true}
              isDisabled={isDisabled}
              isSelected={selectedTime === time}
              onConfirm={() => handleTimeChange(time)}
              onCancel={() => handleTimeChange('')}
            >
              <Button
                style={isDisabled ? disabledButtonStyle : {}}
                css={{
                  borderWidth: '2px',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontFamily: 'Ubuntu-Bold',
                  height: '100%',
                  width: '100%',
                  transition: 'all 0.4 ease',
                }}
                disabled={isDisabled}
              >
                {time}
              </Button>
            </ConfirmSelectButton>
          </li>
        );
      })}
    </ul>
  );
};

export default SelectDateList;
