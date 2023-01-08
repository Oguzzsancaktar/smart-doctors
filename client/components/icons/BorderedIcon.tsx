import React from "react";
import { selectIcon } from "../../utils/selectIconUtils";

interface IProps {
  iconName: string;
  color?: string;
}
const BorderedIcon: React.FC<IProps> = ({ iconName, color }) => {
  return (
    <div className="flex items-center justify-center rounded-[6px] border-[2px] w-[32px] h-[32px]">
      {selectIcon(iconName)}
    </div>
  );
};

export default BorderedIcon;
