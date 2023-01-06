import React from "react";
import { IIconProps } from "../../../models";

const InfoIcon: React.FC<IIconProps> = ({ color, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21.015"
      height="21.015"
      viewBox="0 0 21.015 21.015"
    >
      <g
        id="Icon_feather-info"
        data-name="Icon feather-info"
        transform="translate(-2 -2)"
      >
        <path
          id="Pfad_52"
          data-name="Pfad 52"
          d="M22.015,12.508A9.508,9.508,0,1,1,12.508,3a9.508,9.508,0,0,1,9.508,9.508Z"
          transform="translate(0 0)"
          fill="none"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
        <path
          id="Pfad_53"
          data-name="Pfad 53"
          d="M18,21.8V18"
          transform="translate(-5.492 -5.492)"
          fill="none"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
        <path
          id="Pfad_54"
          data-name="Pfad 54"
          d="M18,12h0"
          transform="translate(-5.492 -3.295)"
          fill="none"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </g>
    </svg>
  );
};

export default InfoIcon;
