import { Avatar } from "@nextui-org/react";
import React from "react";
import { FiChevronRight } from "react-icons/fi";

const AppointmentListItem = () => {
  return (
    <div className="w-full border-b-[1px] border-gallery  px-[15px] cursor-pointer">
      <div className="my-[17px] flex flex-row ">
        <span className="flex items-center w-[46px] mr-[13px] ">
          <Avatar
            squared
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            text="Faisal"
            size={"lg"}
          />
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
    </div>
  );
};

export default AppointmentListItem;
