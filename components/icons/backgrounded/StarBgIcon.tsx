import React from 'react';
import { IIconProps } from '../../../models';

const StarBgIcon: React.FC<IIconProps> = ({ color, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29.269"
      height="27.982"
      viewBox="0 0 29.269 27.982"
    >
      <path
        id="Icon_feather-star"
        data-name="Icon feather-star"
        d="M16.135,3l4.059,8.222,9.076,1.327-6.567,6.4,1.55,9.037-8.117-4.269L8.017,27.982l1.55-9.037L3,12.549l9.076-1.327Z"
        transform="translate(-1.5 -1.5)"
        fill="#ffc674"
        stroke="#ee9310"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </svg>
  );
};

export default StarBgIcon;
