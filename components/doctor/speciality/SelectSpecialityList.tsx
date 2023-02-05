import React from "react";
import { ConfirmSelectButton } from "../../button";
import { IDoctorSpeciality } from "../../../models";
import map from "lodash/map";

interface IProps {
  doctorSpeciality: IDoctorSpeciality;
}
const SelectSpecialityList: React.FC<IProps> = ({ doctorSpeciality }) => {
  return (
    <div className="w-full flex flex-col pr-[1.5rem]">
      <h3 className="font-UbuntuBold text-[20px] h-[40px] flex items-center w-full text-easternBlue bg-easternBlue/25 pl-[3rem] pr-[1.5rem] rounded-tr-[6px] rounded-br-[6px] ">
        {doctorSpeciality.name}
      </h3>

      <ul className="w-full flex flex-col py-5 pl-[3rem]">
        {map(doctorSpeciality.children, (speciality, index) => {
          return (
            <li className="w-full h-[5rem]" key={index}>
              <ConfirmSelectButton buttonText={speciality.name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SelectSpecialityList;
