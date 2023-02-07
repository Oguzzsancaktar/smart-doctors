import React from "react";
//Libs
import useSWR from "swr";
import map from "lodash/map";
// Models
import { IDoctorSpeciality } from "../../../../models";
// Components
import { Searchbar } from "../../../searchbar";
import { SelectSpecialityList } from "../../../doctor";
import { DOCTORS_SPECIALITIES } from "../../../../constants/apiEndpoints";
import fetcher from "../../../../api/fetcherConfig";

const SelectSpeciality = () => {
  const { data: doctorSpecialitiesData, error } = useSWR<IDoctorSpeciality[]>(
    DOCTORS_SPECIALITIES,
    fetcher
  );


  return (
    <div className="flex flex-col h-full w-full">
      <h5 className="h-[10rem] flex items-center justify-center text-[20px] text-easternBlue font-UbuntuBold px-[3rem] border-b-[1px] border-edgeWater ">
        1. Select speciality field
      </h5>

      <div className="h-[5rem] my-[2rem] pl-[3rem] pr-[3rem]">
        <Searchbar />
      </div>

      <div className="flex flex-col overflow-y-auto h-[calc(100%-10rem-5rem-4rem)] mr-[1.5rem] ">
        {map(doctorSpecialitiesData, (doctorSpeciality, key) => {
          return (
            <SelectSpecialityList
              key={key}
              doctorSpeciality={doctorSpeciality}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SelectSpeciality;
