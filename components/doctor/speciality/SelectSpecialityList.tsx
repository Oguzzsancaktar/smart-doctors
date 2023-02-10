import React from 'react';
import { ConfirmSelectButton } from '../../button';
import { IDoctorSpeciality, IDoctorSpecialityItem } from '../../../models';
import map from 'lodash/map';
import { Button } from '@nextui-org/react';
import {
  useCreateAppointmentApiContext,
  useCreateAppointmentStateContext,
} from '../../../contexts/createAppointmentContext';

interface IProps {
  doctorSpeciality: IDoctorSpeciality;
}
const SelectSpecialityList: React.FC<IProps> = ({ doctorSpeciality }) => {
  // Contexts.
  const { selectedSpeciality } = useCreateAppointmentStateContext();
  const { changeSpeciality } = useCreateAppointmentApiContext();

  // Handlers.
  const handleSelectSpeciality = (
    specialityId: IDoctorSpecialityItem['id']
  ) => {
    changeSpeciality(specialityId);
  };

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
        {map(doctorSpeciality.children, (speciality, index) => {
          return (
            <li className="w-full h-[5rem] mb-[1rem]" key={index}>
              <ConfirmSelectButton
                isSelected={selectedSpeciality === speciality.id}
                onConfirm={() => handleSelectSpeciality(speciality.id)}
                isButton={true}
              >
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
                  {speciality.name}
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
