import React from 'react';
import { ConfirmSelectButton } from '../../button';
import { IDoctorSpeciality } from '../../../models';
import map from 'lodash/map';
import { Button, Checkbox } from '@nextui-org/react';

interface IProps {
  doctorSpeciality: IDoctorSpeciality;
}
const SpecialityFilterItem: React.FC<IProps> = ({ doctorSpeciality }) => {
  if (!doctorSpeciality) return <div>No Data</div>;

  return (
    <div className="w-full flex flex-col pr-[1.5rem]">
      <h3
        className="
      font-UbuntuBold
      text-[1.6rem]
      h-[3rem]
      flex
      items-center
      w-full 
      text-easternBlue
      bg-easternBlue/25
      pl-[1.5rem]
      pr-[1.5rem]
      rounded-tr-[6px]
      rounded-br-[6px]
      "
      >
        {doctorSpeciality.name}
      </h3>

      <ul className="w-full flex flex-col py-5 pl-[1.5rem]">
        {map(doctorSpeciality.children, (speciality, index) => {
          return (
            <li className="flex w-full h-[2rem] mb-[1rem] " key={index}>
              <Checkbox size="xl" />
              <p>{speciality.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SpecialityFilterItem;
