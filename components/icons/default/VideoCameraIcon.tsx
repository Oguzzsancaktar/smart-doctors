import React from 'react';
import { IIconProps } from '../../../models';

const VideoCameraIcon: React.FC<IIconProps> = ({ color, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="auto"
      height={size}
      viewBox="0 0 27.118 18.166"
    >
      <g
        id="Icon_feather-video"
        data-name="Icon feather-video"
        transform="translate(-0.25 -6.25)"
      >
        <path
          id="Pfad_115"
          data-name="Pfad 115"
          d="M31.833,10.5,24,16.1l7.833,5.6Z"
          transform="translate(-5.715 -0.762)"
          fill="none"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2.5"
        />
        <path
          id="Pfad_116"
          data-name="Pfad 116"
          d="M3.738,7.5H16.047a2.238,2.238,0,0,1,2.238,2.238v11.19a2.238,2.238,0,0,1-2.238,2.238H3.738A2.238,2.238,0,0,1,1.5,20.928V9.738A2.238,2.238,0,0,1,3.738,7.5Z"
          fill="none"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2.5"
        />
      </g>
    </svg>
  );
};

export default VideoCameraIcon;
