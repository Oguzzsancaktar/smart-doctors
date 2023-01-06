import React from "react";
import { IIconProps } from "../../../models";

const MessageBgIcon: React.FC<IIconProps> = ({ color, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24.973"
      height="24.973"
      viewBox="0 0 24.973 24.973"
    >
      <path
        id="Icon_feather-message-circle"
        data-name="Icon feather-message-circle"
        d="M26.473,14.876a10.229,10.229,0,0,1-1.1,4.639A10.376,10.376,0,0,1,16.1,25.252a10.229,10.229,0,0,1-4.639-1.1L4.5,26.473l2.319-6.958a10.229,10.229,0,0,1-1.1-4.639A10.376,10.376,0,0,1,11.458,5.6,10.229,10.229,0,0,1,16.1,4.5h.61a10.351,10.351,0,0,1,9.766,9.766Z"
        transform="translate(-3 -3)"
        fill="#a6cee3"
        stroke="#1f78b4"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3"
      />
    </svg>
  );
};

export default MessageBgIcon;
