import React from 'react';
import { IIconProps } from '../../../models';

const SearchIcon: React.FC<IIconProps> = ({ color, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18.018"
      height="18.018"
      viewBox="0 0 18.018 18.018"
    >
      <g
        id="Icon_feather-search"
        data-name="Icon feather-search"
        transform="translate(1.25 1.25)"
      >
        <path
          id="Pfad_88"
          data-name="Pfad 88"
          d="M17.833,11.167A6.667,6.667,0,1,1,11.167,4.5a6.667,6.667,0,0,1,6.667,6.667Z"
          transform="translate(-4.5 -4.5)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
        />
        <path
          id="Pfad_89"
          data-name="Pfad 89"
          d="M28.6,28.6l-3.625-3.625"
          transform="translate(-13.6 -13.6)"
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

export default SearchIcon;
