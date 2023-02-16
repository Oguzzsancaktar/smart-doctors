import React from 'react';
import map from 'lodash/map';
import { IDoctorSpeciality } from '../../../models';

interface IProps {
  specialities: IDoctorSpeciality[];
}
const DoctorSpecialities: React.FC<IProps> = ({ specialities }) => {
  return (
    <ul className="flex flex-row flex-wrap  h-full w-full ">
      {map(specialities, (speciality, key) => {
        return (
          <li
            className={
              'w-1/3 rounded-[12px] h-[5rem] flex items-center justify-center border-[1px] border-easternBlue' +
              (key % 3 === 1 ? ' mx-[1.5rem]' : '')
            }
            key={key}
          >
            <p className="font-Ubuntu text-[1.6rem] text-center text-easternBlue">
              {speciality.name}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default DoctorSpecialities;
