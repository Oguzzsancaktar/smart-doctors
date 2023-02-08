import React from "react"
import { IIconProps } from "../../../models"

const DashboardIcon: React.FC<IIconProps> = ({ color, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27.556"
      height="27.556"
      viewBox="0 0 27.556 27.556"
    >
      <path
        id="Icon_open-dashboard"
        data-name="Icon open-dashboard"
        d="M13.778,0A13.778,13.778,0,1,0,27.556,13.778,13.819,13.819,0,0,0,13.778,0Zm0,3.445A10.334,10.334,0,1,1,3.445,13.778,10.32,10.32,0,0,1,13.778,3.445Zm0,3.445A1.722,1.722,0,1,0,15.5,8.611,1.706,1.706,0,0,0,13.778,6.889ZM8.06,10.334a1.722,1.722,0,0,0-.654,2.893l3.135,3.135a3.5,3.5,0,0,0-.207.861,3.445,3.445,0,1,0,3.445-3.445,3.5,3.5,0,0,0-.861.207L9.782,10.85A1.722,1.722,0,0,0,8.267,10.3a1.722,1.722,0,0,0-.207,0Zm10.885,0a1.722,1.722,0,1,0,1.722,1.722A1.706,1.706,0,0,0,18.945,10.334Z"
        fill={color}
      />
    </svg>
  )
}

export default DashboardIcon 
