import React from "react";
import { IIconProps } from "../../../models";

const ActivitiesIcon: React.FC<IIconProps> = ({ color, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24.75"
      height="21.656"
      viewBox="0 0 24.75 21.656"
    >
      <path
        id="Icon_open-list-rich"
        data-name="Icon open-list-rich"
        d="M0,0V9.281H9.281V0ZM12.375,0V3.094H24.75V0Zm0,6.188V9.281h9.281V6.188ZM0,12.375v9.281H9.281V12.375Zm12.375,0v3.094H24.75V12.375Zm0,6.188v3.094h9.281V18.563Z"
        fill={color}
      />
    </svg>
  );
};

export default ActivitiesIcon;
