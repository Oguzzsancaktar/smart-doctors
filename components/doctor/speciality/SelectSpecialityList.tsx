import React, { useMemo } from 'react';
import { ConfirmSelectButton } from '../../button';
import { IDoctorSpeciality, IDoctorSpecialityItem } from '../../../models';
import map from 'lodash/map';
import { Button } from '@nextui-org/react';
import {
  useCreateAppointmentApiContext,
  useCreateAppointmentStateContext,
} from '../../../contexts/createAppointmentContext';
import { disabledButtonStyle, selectedButtonStyle } from '../../../constants';
import { initialSpecialityItem } from '../../../constants/initialValues';

interface IProps {
  doctorSpeciality: IDoctorSpeciality;
}
const SelectSpecialityList: React.FC<IProps> = ({ doctorSpeciality }) => {
  // Contexts.
  const { selectedSpeciality, activeStepIndex } =
    useCreateAppointmentStateContext();

  const { changeSpeciality, changeStepIndex } =
    useCreateAppointmentApiContext();

  // Handlers.
  const handleSelectSpeciality = (specialityItem: IDoctorSpecialityItem) => {
    changeSpeciality(specialityItem);
    if (!!specialityItem.id.trim().length) {
      changeStepIndex(1);
    } else {
      changeStepIndex(0);
    }
  };

  // Variables.
  const isDisabled = activeStepIndex !== 0;

  // Render.
  if (!doctorSpeciality) return <div>No Data</div>;

  return (
    <div className="w-full flex flex-col pr-[1.5rem]">
      <h3
        className="
      font-UbuntuBold
      text-[20px]
      h-[40px]
      flex
      items-center
      w-full 
      text-easternBlue
      bg-easternBlue/25
      pl-[3rem]
      pr-[1.5rem]
      rounded-tr-[6px]
      rounded-br-[6px]
      "
      >
        {doctorSpeciality.name}
      </h3>

      <ul className="w-full flex flex-col py-5 pl-[3rem] ">
        {map(doctorSpeciality.children, (specialityItem, index) => {
          return (
            <li className="w-full h-[5rem] mb-[1rem]" key={index}>
              <ConfirmSelectButton
                onConfirm={() => handleSelectSpeciality(specialityItem)}
                onCancel={() => handleSelectSpeciality(initialSpecialityItem)}
                isButton={true}
                isDisabled={isDisabled}
                isSelected={selectedSpeciality.id === specialityItem.id}
              >
                <Button
                  // style={
                  //   selectedSpeciality === speciality.id
                  //     ? selectedButtonStyle
                  //     : isDisabled
                  //     ? disabledButtonStyle
                  //     : {}
                  // }
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
                  {specialityItem.name}
                </Button>
              </ConfirmSelectButton>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SelectSpecialityList;
