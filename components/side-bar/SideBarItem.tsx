import React from "react";
import { ISideBarItemProps } from "../../models";
import { selectIcon } from "../../utils/selectIconUtils";

const SideBarItem: React.FC<ISideBarItemProps> = ({
  iconName,
  text,
  isActive,
}) => {
  return (
    <div
      className={
        "h-[8rem] border-b-[0.1rem] border-gallery flex items-center content-between cursor-pointer " +
        (text === "Settings" ? "border-t-[0.1rem]" : "")
      }
    >
      <div className="w-[15rem] m-auto ">
        <div
          className={
            "flex items-center font-UbuntuBold text-[1.6rem] leading-[1.8rem] " +
            (isActive ? "text-easternBlue" : "text-corduroy")
          }
        >
          <span className="mr-[1.8rem] ">{selectIcon(iconName)} </span>
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
};

export default SideBarItem;
