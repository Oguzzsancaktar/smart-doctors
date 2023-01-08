import React from "react";
import { selectIcon } from "../../utils/selectIconUtils";

interface IProps {
  page: string;
}
const NotReadyPage: React.FC<IProps> = ({ page }) => {
  return (
    <div className="w-full h-full flex items-center justify-center text-easternBlue opacity-50">
      <div className="flex flex-col max-w-[400px]">
        <div className="flex items-center justify-center w-full h-[100px] mb-10">
          {selectIcon("settings", "100%")}
        </div>
        <span className="text-[30px] text-center">
          {page} Page Not Implemented Yet
        </span>
      </div>
    </div>
  );
};

export default NotReadyPage;
