import { Avatar, Button } from "@nextui-org/react"
import React from "react"
import { getDateFromTimestamp } from "../../../utils/timeUtils"
import { momentMonthDateFormat } from "../../../constants/formats"
import { selectIcon } from "../../../utils/selectIconUtils"
interface IProps {
  message: any
}
const PatientsChatListItem: React.FC<IProps> = ({ message }) => {
  return (
    <div className="w-full border-b-[1px] border-gallery  px-[1.5rem] cursor-pointer">
      <div className="my-[1.7rem] flex flex-row justify-between">
        <div className="flex items-center">
          <span className="flex items-center w-[4.6rem] mr-[1.3rem] ">
            <Avatar
              squared
              src={message.sender.photo}
              text="Faisal"
              size={"lg"}
            />
          </span>
          <div className="flex flex-col h-full justify-between">
            <span className="font-UbuntuBold text-corduroy text-[1.2rem] leading-[1.3rem]">
              {message.sender.name}
            </span>
            <span className="font-UbuntuRegular text-corduroy text-[1.1rem] leading-[1.2rem]">
              {message.message}
            </span>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex flex-col text-jungleMist w-[2.5rem] mx-[2rem] ">
            {selectIcon("info")}
          </div>
          <div className="flex flex-col items-center w-[7rem]   ">
            <span className="font-UbuntuRegular text-corduroy text-[1.1rem] leading-[1.2rem] mb-[0.5rem]">
              {getDateFromTimestamp(message.date, momentMonthDateFormat)}
            </span>
            <Button
              className="bg-easternBlue px-[1rem]"
              auto
              size={"sm"}
              color="primary"
              css={{ borderRadius: "6px", width: "100%" }}
            >
              <h4 className="font-UbuntuBold text-white text-[1.4rem] leading-[1.6rem]">
                Chat
              </h4>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientsChatListItem 
