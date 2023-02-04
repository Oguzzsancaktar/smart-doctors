import React from "react";
import { selectIcon } from "../../utils/selectIconUtils";

interface IProps {
  iconName: string;
  color?: string;
}
const BorderedIcon: React.FC<IProps> = ({ iconName, color }) => {
  return (
    <div className="flex items-center justify-center rounded-[0.6rem] border-[0.2rem] w-[3.2rem] h-[3.2rem]">
      {selectIcon(iconName)}
    </div>
  );
};

export default BorderedIcon;
