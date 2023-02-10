import React from 'react';

// Components
import { Searchbar } from '../../../searchbar';
import { SelectDoctorList } from '../../../doctor';
import { useCreateAppointmentStateContext } from '../../../../contexts/createAppointmentContext';

const SelectSpeciality = () => {
  // Contexts.
  const { activeStepIndex } = useCreateAppointmentStateContext();

  return (
    <div className="flex flex-col h-full w-full">
      <h5
        className={
          'h-[10rem] flex items-center justify-center text-[20px] text-easternBlue font-UbuntuBold px-[3rem] border-b-[1px] border-edgeWater duration-300 transition-all ' +
          (activeStepIndex !== 1 &&
            ' text-edgeWater duration-300 transition-all')
        }
      >
        2. Select doctor and field
      </h5>

      <div className="h-[5rem] my-[2rem] pl-[3rem] pr-[3rem]">
        <Searchbar />
      </div>

      <div className="flex flex-col overflow-y-auto h-[calc(100%-10rem-5rem-4rem)] mr-[1.5rem] ">
        <SelectDoctorList />
      </div>
    </div>
  );
};

export default SelectSpeciality;
