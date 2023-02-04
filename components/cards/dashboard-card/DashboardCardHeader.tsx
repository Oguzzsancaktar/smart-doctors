import React from "react";
import { selectIcon } from "../../../utils/selectIconUtils";
import { Button } from "@nextui-org/react";

interface IProps {
  headIconName: string;
  headIconText: string;
  headButtonText?: string;
}
const DashboardCardHeader: React.FC<IProps> = ({
  headIconName,
  headIconText,
  headButtonText,
}) => {
  return (
    <div className="h-[8rem] px-[2rem]  border-b-[0.1rem] border-gallery flex items-center justify-between">
      <div
        className={
          "flex items-center font-UbuntuBold text-[1.6rem] leading-[1.8rem] text-easternBlue"
        }
      >
        <span className="mr-[1.8rem] ">{selectIcon(headIconName)} </span>
        <span>{headIconText}</span>
      </div>

      {headButtonText && (
        <div className="w-auto">
          <Button
            className="bg-easternBlue px-[1rem]"
            auto
            color="primary"
            css={{ borderRadius: "0.6rem" }}
            size={"sm"}
            // onClick={onSwitchChange}
          >
            <h4 className="font-UbuntuBold text-white text-[1.4rem] leading-[1.6rem]">
              {headButtonText}
            </h4>
          </Button>
        </div>
      )}
    </div>
  );
};

export default DashboardCardHeader;
