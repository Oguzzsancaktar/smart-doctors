import { Avatar } from "@nextui-org/react"
import React from "react"
import { FiChevronRight } from "react-icons/fi"
import {
  getDateFromTimestamp,
  getDayFromTimestamp,
  getTimeFromTimestamp,
} from "../../utils/timeUtils"
import { IAppointment } from "../../models"

interface IProps {
  appointment: IAppointment | any
}

const AppointmentListItem: React.FC<IProps> = ({ appointment }) => {
  return (
    <div className="w-full border-b-[1px] border-gallery  px-[1.5rem] cursor-pointer">
      <div className="my-[1.7rem] flex flex-row justify-between">
        <div className="flex items-center">
          <span className="flex items-center w-[4.6rem] mr-[1.3rem] ">
            <Avatar
              squared
              src={appointment.doctor.photo}
              text="Faisal"
              size={"lg"}
            />
          </span>
          <div className="flex flex-col">
            <span className="font-UbuntuBold text-corduroy text-[1.2rem] leading-[1.3rem]">
              {appointment.doctor.name + " " + appointment.doctor.surname}
            </span>
            <span className="  text-corduroy text-[1.2rem] leading-[1.3rem] my-[0.4rem]">
              {appointment.doctor.address}
            </span>
            <span className="text-easternBlue text-[1.1rem] leading-[1.2rem] ">
              {appointment.doctor.speciality}
            </span>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex flex-col w-[16rem]">
            <span className="font-UbuntuBold text-corduroy text-[1.6rem] leading-[1.8rem] mb-[0.5rem]">
              {getDateFromTimestamp(appointment.date)}
            </span>
            <span className=" text-easternBlue  text-[1.2rem] leading-[1.3rem] my-[0.4rem]">
              {getDayFromTimestamp(appointment.date)} |{" "}
              {getTimeFromTimestamp(appointment.date)} -{" "}
              {getTimeFromTimestamp(appointment.date + appointment.duration)}
            </span>
          </div>
          <div className="flex items-center w-[16px] mr-[1rem] ml-[1rem] ">
            <FiChevronRight size={16} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppointmentListItem 
