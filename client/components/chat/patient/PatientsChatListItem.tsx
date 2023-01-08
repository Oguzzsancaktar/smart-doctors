import { Avatar, Button } from "@nextui-org/react";
import React from "react";
import { getDateFromTimestamp } from "../../../utils/timeUtils";
import { momentMonthDateFormat } from "../../../constants/formats";
import { selectIcon } from "../../../utils/selectIconUtils";
interface IProps {
  message: any;
}
const PatientsChatListItem: React.FC<IProps> = ({ message }) => {
  return (
    <div className="w-full border-b-[1px] border-gallery  px-[15px] cursor-pointer">
      <div className="my-[17px] flex flex-row justify-between">
        <div className="flex items-center">
          <span className="flex items-center w-[46px] mr-[13px] ">
            <Avatar
              squared
              src={message.sender.photo}
              text="Faisal"
              size={"lg"}
            />
          </span>
          <div className="flex flex-col h-full justify-between">
            <span className="font-UbuntuBold text-corduroy text-[12px] leading-[13px]">
              {message.sender.name}
            </span>
            <span className="font-UbuntuRegular text-corduroy text-[11px] leading-[12px]">
              {message.message}
            </span>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex flex-col text-jungleMist w-[25px] mx-[40px] ">
            {selectIcon("info")}
          </div>
          <div className="flex flex-col items-center w-[70px]   ">
            <span className="font-UbuntuRegular text-corduroy text-[11px] leading-[12px] mb-[5px]">
              {getDateFromTimestamp(message.date, momentMonthDateFormat)}
            </span>
            <Button
              className="bg-easternBlue px-[10px]"
              auto
              size={"sm"}
              color="primary"
              css={{ borderRadius: "6px", width: "100%" }}
            >
              <h4 className="font-UbuntuBold text-white text-[14px] leading-[16px]">
                Chat
              </h4>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientsChatListItem;