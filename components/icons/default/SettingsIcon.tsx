import React from "react"
import { IIconProps } from "../../../models"

const SettingsIcon: React.FC<IIconProps> = ({ color, size }) => {
  return (
    <svg
      id="Icon_feather-settings"
      data-name="Icon feather-settings"
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : "30.056"}
      height={size ? size : "30.056"}
      viewBox="0 0 30.056 30.056"
    >
      <path
        id="Pfad_44"
        data-name="Pfad 44"
        d="M20.879,17.189A3.689,3.689,0,1,1,17.189,13.5,3.689,3.689,0,0,1,20.879,17.189Z"
        transform="translate(-2.161 -2.161)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        id="Pfad_45"
        data-name="Pfad 45"
        d="M24.129,18.718a2.029,2.029,0,0,0,.406,2.238l.074.074a2.461,2.461,0,1,1-3.48,3.48l-.074-.074a2.046,2.046,0,0,0-3.468,1.451V26.1a2.46,2.46,0,1,1-4.919,0v-.111a2.029,2.029,0,0,0-1.328-1.857,2.029,2.029,0,0,0-2.238.406l-.074.074a2.461,2.461,0,1,1-3.48-3.48l.074-.074a2.046,2.046,0,0,0-1.451-3.468H3.96a2.46,2.46,0,1,1,0-4.919H4.07a2.029,2.029,0,0,0,1.857-1.328A2.029,2.029,0,0,0,5.522,9.1l-.074-.074a2.461,2.461,0,1,1,3.48-3.48L9,5.62a2.029,2.029,0,0,0,2.238.406h.1a2.029,2.029,0,0,0,1.23-1.857V3.96a2.46,2.46,0,0,1,4.919,0V4.07a2.046,2.046,0,0,0,3.468,1.451l.074-.074a2.461,2.461,0,1,1,3.48,3.48L24.436,9a2.029,2.029,0,0,0-.406,2.238v.1a2.029,2.029,0,0,0,1.857,1.23H26.1a2.46,2.46,0,0,1,0,4.919h-.111a2.029,2.029,0,0,0-1.857,1.23Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </svg>
  )
}

export default SettingsIcon 
