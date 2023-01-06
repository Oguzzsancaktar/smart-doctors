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
    <div className="h-[80px] px-[40px]  border-b-[1px] border-gallery flex items-center justify-between">
      <div
        className={
          "flex items-center font-bold text-[16px] leading-[18px] text-easternBlue"
        }
      >
        <span className="mr-[18px] ">{selectIcon(headIconName)} </span>
        <span>{headIconText}</span>
      </div>

      {headButtonText && (
        <div className="w-auto">
          <Button
            className="bg-easternBlue px-[10px]"
            auto
            color="primary"
            css={{ borderRadius: "6px" }}
            size={"sm"}
            // onClick={onSwitchChange}
          >
            <h4 className="font-bold text-white text-[14px] leading-[16px]">
              {headButtonText}
            </h4>
          </Button>
        </div>
      )}
    </div>
  );
};

export default DashboardCardHeader;
