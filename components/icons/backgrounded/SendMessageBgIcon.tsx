import React from 'react';
import { IIconProps } from '../../../models';

const SendMessageBgIcon: React.FC<IIconProps> = ({ color, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
    >
      <g
        id="Gruppe_176"
        data-name="Gruppe 176"
        transform="translate(-1710.881 -898.881)"
      >
        <rect
          id="Rechteck_193"
          data-name="Rechteck 193"
          width="30"
          height="30"
          rx="8"
          transform="translate(1710.881 898.881)"
          fill="#21ada9"
        />
        <g
          id="Icon_feather-send"
          data-name="Icon feather-send"
          transform="translate(1715.871 904.871)"
        >
          <path
            id="Pfad_117"
            data-name="Pfad 117"
            d="M27.511,3,16.5,14.011"
            transform="translate(-8.511 -3)"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            id="Pfad_118"
            data-name="Pfad 118"
            d="M22,3,15.35,22l-3.8-8.55L3,9.65Z"
            transform="translate(-3 -3)"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </g>
      </g>
    </svg>
  );
};

export default SendMessageBgIcon;
