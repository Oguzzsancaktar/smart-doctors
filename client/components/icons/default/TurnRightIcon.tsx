import React from "react";
import { IIconProps } from "../../../models";

const TurnRightIcon: React.FC<IIconProps> = ({ color, size }) => {
  return (
    <svg
      fill="none"
      height="30"
      viewBox="0 0 20 20"
      width="30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.7197 3.21967C11.0126 2.92678 11.4874 2.92678 11.7803 3.21967L15.7803 7.21967C16.0732 7.51256 16.0732 7.98744 15.7803 8.28033L11.7803 12.2803C11.4874 12.5732 11.0126 12.5732 10.7197 12.2803C10.4268 11.9874 10.4268 11.5126 10.7197 11.2197L13.4393 8.5H7C6.17157 8.5 5.5 9.17157 5.5 10V16.25C5.5 16.6642 5.16421 17 4.75 17C4.33579 17 4 16.6642 4 16.25V10C4 8.34315 5.34315 7 7 7H13.4393L10.7197 4.28033C10.4268 3.98744 10.4268 3.51256 10.7197 3.21967Z"
        fill={color}
      />
    </svg>
  );
};

export default TurnRightIcon;
