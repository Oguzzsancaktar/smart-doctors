import React from 'react';
import { IIconProps } from '../../../models';

const FileIcon: React.FC<IIconProps> = ({ color, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17.989"
      height="21.986"
      viewBox="0 0 17.989 21.986"
    >
      <g
        id="Icon_feather-file-text"
        data-name="Icon feather-file-text"
        transform="translate(-5 -2)"
      >
        <path
          id="Pfad_94"
          data-name="Pfad 94"
          d="M15.993,3H8A2,2,0,0,0,6,5V20.987a2,2,0,0,0,2,2H19.99a2,2,0,0,0,2-2V9Z"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          id="Pfad_95"
          data-name="Pfad 95"
          d="M21,3V9h6"
          transform="translate(-5.007)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          id="Pfad_96"
          data-name="Pfad 96"
          d="M19.994,19.5H12"
          transform="translate(-2.003 -5.508)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          id="Pfad_97"
          data-name="Pfad 97"
          d="M19.994,25.5H12"
          transform="translate(-2.003 -7.511)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          id="Pfad_98"
          data-name="Pfad 98"
          d="M14,13.5H12"
          transform="translate(-2.003 -3.505)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
};

export default FileIcon;
