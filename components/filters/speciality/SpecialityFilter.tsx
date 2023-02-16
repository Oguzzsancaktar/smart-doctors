import React from 'react';
// Api.
import fetcher from '../../../api/fetcherConfig';
// Libs.
import map from 'lodash/map';
import useSWR from 'swr';
// Models.
import { ICallResponse, IDoctorSpeciality } from '../../../models';
// Constants.
import { DOCTORS_SPECIALITIES } from '../../../constants/apiEndpoints';
// Components.
import { Searchbar } from '../../searchbar';
import { SelectSpecialityList } from '../../doctor';
import SpecialityFilterItem from './SpecialityFilterItem';

const SpecialityFilter = () => {
  const { data: doctorSpecialitiesData, error } = useSWR<
    ICallResponse<IDoctorSpeciality[]>
  >(DOCTORS_SPECIALITIES, fetcher);

  return (
    <div className="flex flex-col h-full w-full rounded-[12px] border-easternBlue border-[2px]">
      <div className="h-[5rem] my-[2rem] pl-[1.5rem] pr-[3rem]">
        <Searchbar />
      </div>

      <div className="flex flex-col overflow-y-auto h-[calc(100%-5rem-4rem)] mr-[1.5rem] ">
        {map(doctorSpecialitiesData?.value, (doctorSpeciality, key) => {
          if (doctorSpeciality.children.length > 0) {
            return (
              <SpecialityFilterItem
                key={key}
                doctorSpeciality={doctorSpeciality}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default SpecialityFilter;
