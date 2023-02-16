import React from 'react';
import { IIconProps } from '../../../models';

const MapPinIcon: React.FC<IIconProps> = ({ color, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height="20.005"
      viewBox="0 0 16.822 20.005"
    >
      <g
        id="Icon_feather-map-pin"
        data-name="Icon feather-map-pin"
        transform="translate(-3.25 -0.25)"
      >
        <path
          id="Pfad_103"
          data-name="Pfad 103"
          d="M18.822,8.661c0,5.57-7.161,10.344-7.161,10.344S4.5,14.231,4.5,8.661a7.161,7.161,0,0,1,14.322,0Z"
          transform="translate(0 0)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
        />
        <path
          id="Pfad_104"
          data-name="Pfad 104"
          d="M18.274,12.887A2.387,2.387,0,1,1,15.887,10.5,2.387,2.387,0,0,1,18.274,12.887Z"
          transform="translate(-4.226 -4.226)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
        />
      </g>
    </svg>
  );
};

export default MapPinIcon;
