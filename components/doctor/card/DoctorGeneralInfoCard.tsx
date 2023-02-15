import React from 'react';
// Libs.
import { Avatar } from '@nextui-org/react';
// Models.
import { IDoctor } from '../../../models';
// Utils.
import { getDoctorLocationFromPolyclinic } from '../../../utils/customUtils';

interface IProps {
  doctor: IDoctor;
  isActive?: boolean;
}
const DoctorGeneralInfoCard: React.FC<IProps> = ({
  doctor,
  isActive = false,
}) => {
  if (!doctor) return <div>No Data</div>;

  return (
    <div className="w-full h-full ">
      <div
        className={
          'flex items-center  h-full w-full  pl-[10px] ' +
          (isActive && 'bg-easternBlue rounded-[6px] ')
        }
      >
        <div className="flex items-center w-[4.6rem] mr-[1.3rem] ">
          <Avatar
            squared
            src={doctor.profileImage}
            text="Faisal"
            size={'xl'}
            bordered={false}
            //@ts-ignore // next ui bug - contribute
            borderWeight={'none'}
          />
        </div>
        <div className="flex flex-col w-[calc(100%-4.6rem-1.3rem)]">
          <span
            className={
              'font-UbuntuBold text-corduroy text-[1.2rem] leading-[1.3rem]' +
              (isActive && ' text-white ')
            }
          >
            {doctor.name + ' ' + doctor.surname}
          </span>
          <span
            className={
              '  text-corduroy text-[1.2rem] leading-[1.3rem] my-[0.4rem]' +
              (isActive && ' text-white ')
            }
          >
            {getDoctorLocationFromPolyclinic(doctor.polyclinics[0])}
          </span>
          <span
            className={
              'text-easternBlue text-[1.1rem] leading-[1.2rem] ' +
              (isActive && ' text-white ')
            }
          >
            {doctor.phone}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DoctorGeneralInfoCard;
