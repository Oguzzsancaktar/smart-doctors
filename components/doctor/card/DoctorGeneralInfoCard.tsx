import React from 'react';
// Libs.
import { Avatar } from '@nextui-org/react';
// Models.
import { IDoctor } from '../../../models';
// Utils.
import { getDoctorLocationFromPolyclinic } from '../../../utils/customUtils';
import { getFirstGivenChars } from '../../../utils/stringUtils';

interface IProps {
  doctor: IDoctor;
  height?: string;
  isActive?: boolean;
}
const DoctorGeneralInfoCard: React.FC<IProps> = ({
  doctor,
  height,
  isActive = false,
}) => {
  if (!doctor) return <div>No Data</div>;

  return (
    <div className={`w-full ${height ? 'h-[' + height + ']' : 'h-full'} `}>
      <div
        className={
          'flex items-center h-full w-full pl-[10px] ' +
          (isActive && 'bg-easternBlue py-[10px] rounded-[6px] ')
        }
      >
        <div className="flex items-center h-full  mr-[1.3rem] ">
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
        <div className="flex flex-col h-full justify-between w-[calc(100%-4.6rem-1.3rem)]">
          <span
            className={
              'font-UbuntuBold text-corduroy text-[16px] leading-[18px] h-auto' +
              (isActive && ' text-white ')
            }
          >
            {isActive ? (
              <span>
                Dr. {doctor.name} <br />
                {doctor.surname}
              </span>
            ) : (
              <span> Dr. {doctor.name + ' ' + doctor.surname}</span>
            )}
          </span>
          <span
            className={
              'text-corduroy text-[14px] leading-[16px]  ' +
              (isActive && 'hidden')
            }
          >
            {getFirstGivenChars(
              getDoctorLocationFromPolyclinic(doctor?.polyclinics[0]),
              25
            )}
          </span>
          <span
            className={
              'text-easternBlue text-[14px] leading-[16px] ' +
              (isActive && ' hidden')
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
