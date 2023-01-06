import React from "react";
import { IIconProps } from "../../../models";

const HeartIcon: React.FC<IIconProps> = ({ color, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26.118"
      height="23.964"
      viewBox="0 0 26.118 23.964"
    >
      <path
        id="Icon_material-favorite-border"
        data-name="Icon material-favorite-border"
        d="M21.936,4.5a7.82,7.82,0,0,0-5.877,2.729A7.82,7.82,0,0,0,10.183,4.5,7.113,7.113,0,0,0,3,11.683c0,4.936,4.44,8.959,11.166,15.07l1.894,1.711,1.894-1.724c6.725-6.1,11.166-10.121,11.166-15.057A7.113,7.113,0,0,0,21.936,4.5ZM16.19,24.807l-.131.131-.131-.131C9.712,19.178,5.612,15.457,5.612,11.683a4.463,4.463,0,0,1,4.571-4.571,5.105,5.105,0,0,1,4.662,3.082h2.442a5.073,5.073,0,0,1,4.649-3.082,4.463,4.463,0,0,1,4.571,4.571C26.506,15.457,22.406,19.178,16.19,24.807Z"
        transform="translate(-3 -4.5)"
        fill={color}
      />
    </svg>
  );
};

export default HeartIcon;
