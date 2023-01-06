import React from "react";
import { selectIcon } from "../../utils/selectIconUtils";
import { EActivityType } from "../../models";
import { FiChevronRight } from "react-icons/fi";

interface IProps {
  type: EActivityType;
}
const ActivityListItem: React.FC<IProps> = ({ type }) => {
  const appointmentItem = (
    <div className="my-[17px] flex flex-row ">
      <span className="flex items-center w-[26px] mr-[20px] ">
        {selectIcon("bg-calendar")}
      </span>
      <div className="flex flex-col">
        <span className="font-UbuntuBold text-corduroy text-[12px] leading-[13px]">
          New Appointment
        </span>
        <span className=" text-easternBlue  text-[12px] leading-[13px] my-[4px]">
          for general examination
        </span>
        <span className="text-corduroy text-[11px] leading-[12px] ">
          View Details
        </span>
      </div>
      <div className="flex items-center w-[16px] ml-auto ">
        <FiChevronRight />
      </div>
    </div>
  );

  const messageItem = (
    <div className="my-[17px] flex flex-row ">
      <span className="flex items-center w-[26px] mr-[20px] ">
        {selectIcon("bg-message")}
      </span>
      <div className="flex flex-col">
        <span className="font-UbuntuBold text-corduroy text-[12px] leading-[13px]">
          New Message
        </span>
        <span className=" text-easternBlue  text-[12px] leading-[13px] my-[4px]">
          from Han-yu Wang
        </span>
        <span className="text-corduroy text-[11px] leading-[12px] ">
          View Details
        </span>
      </div>

      <div className="flex items-center w-[16px] ml-auto ">
        <FiChevronRight />
      </div>
    </div>
  );

  const reviewItem = (
    <div className="my-[17px] flex flex-row ">
      <span className="flex items-center w-[26px] mr-[20px] ">
        {selectIcon("bg-star")}
      </span>
      <div className="flex flex-col">
        <span className="font-UbuntuBold text-corduroy text-[12px] leading-[13px]">
          New Review
        </span>
        <span className=" text-easternBlue  text-[12px] leading-[13px] my-[4px]">
          on your profile
        </span>
        <span className="text-corduroy text-[11px] leading-[12px] ">
          View Details
        </span>
      </div>
      <div className="flex items-center w-[16px] ml-auto ">
        <FiChevronRight />
      </div>
    </div>
  );

  const renderActivityType = (type: EActivityType) => {
    switch (type) {
      case EActivityType.APPOINTMENT:
        return appointmentItem;
      case EActivityType.MESSAGE:
        return messageItem;
      case EActivityType.REVIEW:
        return reviewItem;
      default:
        return;
    }
  };

  return (
    <div className="w-full border-b-[1px] border-gallery  px-[15px] cursor-pointer">
      {renderActivityType(type)}
    </div>
  );
};

export default ActivityListItem;
