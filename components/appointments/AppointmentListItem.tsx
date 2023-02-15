import React from 'react';
// Libs.
import { FiChevronRight } from 'react-icons/fi';
import { Avatar } from '@nextui-org/react';
import moment from 'moment';
// Models.
import { IAppointment } from '../../models';
// Utils
import {
  getMinutesFromTimeText,
  getTimeTextFromMinutes,
} from '../../utils/timeUtils';
// Constants.
import { momentDateFormat } from '../../constants/formats';

interface IProps {
  appointment: IAppointment;
}

const AppointmentListItem: React.FC<IProps> = ({ appointment }) => {
  return (
    <div className="w-full border-b-[1px] border-gallery  px-[1.5rem] cursor-pointer">
      <div className="my-[1.7rem] flex flex-row justify-between">
        <div className="flex items-center">
          <span className="flex items-center w-[4.6rem] mr-[1.3rem] ">
            <Avatar
              squared
              src={appointment.doctor.profileImage}
              text="Faisal"
              size={'lg'}
            />
          </span>
          <div className="flex flex-col">
            <span className="font-UbuntuBold text-corduroy text-[1.2rem] leading-[1.3rem]">
              {appointment.doctor.name + ' ' + appointment.doctor.surname}
            </span>
            <span className="  text-corduroy text-[1.2rem] leading-[1.3rem] my-[0.4rem]">
              {appointment.doctor.polyclinics[0].street}
            </span>
            <span className="text-easternBlue text-[1.1rem] leading-[1.2rem] ">
              {appointment.doctor.specialties[0]?.name}
            </span>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex flex-col w-[16rem]">
            <span className="font-UbuntuBold text-corduroy text-[1.6rem] leading-[1.8rem] mb-[0.5rem]">
              {moment(appointment.appointmentDate).format(momentDateFormat)}
            </span>
            <span className=" text-easternBlue  text-[1.2rem] leading-[1.3rem] my-[0.4rem]">
              {moment(appointment.appointmentDate).format('dddd')} |{' '}
              {appointment.appointmentTime.replace(':00.0000000', '')} -{' '}
              {getTimeTextFromMinutes(
                getMinutesFromTimeText(
                  appointment.appointmentTime.replace(':00.0000000', '')
                ) + 30
              )}
            </span>
          </div>
          <div className="flex items-center w-[16px] mr-[1rem] ml-[1rem] ">
            <FiChevronRight size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentListItem;
