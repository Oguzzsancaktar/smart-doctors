import React from 'react';
import { IIconProps } from '../../../models';

const LogoutIcon: React.FC<IIconProps> = ({ color, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
    >
      <g
        id="Icon_feather-log-out"
        data-name="Icon feather-log-out"
        transform="translate(-3 -3)"
      >
        <path
          id="Pfad_99"
          data-name="Pfad 99"
          d="M13.5,31.5h-6a3,3,0,0,1-3-3V7.5a3,3,0,0,1,3-3h6"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <path
          id="Pfad_100"
          data-name="Pfad 100"
          d="M24,25.5,31.5,18,24,10.5"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <path
          id="Pfad_101"
          data-name="Pfad 101"
          d="M31.5,18h-18"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
      </g>
    </svg>
  );
};

export default LogoutIcon;
