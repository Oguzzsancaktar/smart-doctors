import React from "react";
// Components
import fetcher from "../../../api/fetcherConfig";
import { DoctorGeneralInfoCard } from "../card";
// Constants
import { DOCTORS } from "../../../constants/apiEndpoints";
// Libs
import useSWR from "swr";
import map from "lodash/map";
// Models
import { IDoctor } from "../../../models";

interface IProps {}
const SelectDoctorList: React.FC<IProps> = () => {
  const { data: doctorsData, error } = useSWR<IDoctor[]>(DOCTORS, fetcher);

  if (!doctorsData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full flex flex-col pr-[1.5rem]">
      <ul className="w-full flex flex-col pl-[3rem]">
        {map(doctorsData, (doctor, index) => {
          return (
            <li className="w-full h-[9rem]" key={index}>
              <DoctorGeneralInfoCard doctor={doctor} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SelectDoctorList;
