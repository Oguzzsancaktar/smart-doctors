import React from "react";
import { ISideDrawerItemProps } from "../../models";
import { selectIcon } from "../../utils/selectIconUtils";

const SideDrawerItem: React.FC<ISideDrawerItemProps> = ({
  iconName,
  text,
  isActive,
}) => {
  return (
    <div
      className={
        "h-[80px] border-b-[1px] border-gallery flex items-center content-between cursor-pointer " +
        (text === "Settings" ? "border-t-[1px]" : "")
      }
    >
      <div className="w-[150px] m-auto ">
        <div
          className={
            "flex items-center font-bold text-[16px] leading-[18px] " +
            (isActive ? "text-easternBlue" : "text-corduroy")
          }
        >
          <span className="mr-[18px] ">{selectIcon(iconName)} </span>
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
};

export default SideDrawerItem;
