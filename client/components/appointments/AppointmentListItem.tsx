import { Avatar } from "@nextui-org/react";
import React from "react";
import { FiChevronRight } from "react-icons/fi";
import {
  getDateFromTimestamp,
  getDayFromTimestamp,
  getTimeFromTimestamp,
} from "../../utils/timeUtils";
import { IAppointment } from "../../models";

interface IProps {
  appointment: IAppointment | any;
}

const AppointmentListItem: React.FC<IProps> = ({ appointment }) => {
  return (
    <div className="w-full border-b-[1px] border-gallery  px-[15px] cursor-pointer">
      <div className="my-[17px] flex flex-row justify-between">
        <div className="flex items-center">
          <span className="flex items-center w-[46px] mr-[13px] ">
            <Avatar
              squared
              src={appointment.doctor.photo}
              text="Faisal"
              size={"lg"}
            />
          </span>
          <div className="flex flex-col">
            <span className="font-UbuntuBold text-corduroy text-[12px] leading-[13px]">
              {appointment.doctor.name + " " + appointment.doctor.surname}
            </span>
            <span className="  text-corduroy text-[12px] leading-[13px] my-[4px]">
              {appointment.doctor.address}
            </span>
            <span className="text-easternBlue text-[11px] leading-[12px] ">
              {appointment.doctor.speciality}
            </span>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex flex-col w-[160px]">
            <span className="font-UbuntuBold text-corduroy text-[16px] leading-[18px] mb-[5px]">
              {getDateFromTimestamp(appointment.date)}
            </span>
            <span className=" text-easternBlue  text-[12px] leading-[13px] my-[4px]">
              {getDayFromTimestamp(appointment.date)} |{" "}
              {getTimeFromTimestamp(appointment.date)} -{" "}
              {getTimeFromTimestamp(appointment.date + appointment.duration)}
            </span>
          </div>
          <div className="flex items-center w-[16px] mr-[20px] ml-[40px] ">
            <FiChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentListItem;
