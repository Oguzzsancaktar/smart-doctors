import React from 'react';
// Contexts.
import { CreateAppointmentProvider } from '../../../../contexts/createAppointmentContext';
// Components.
import SelectSpeciality from './SelectSpeciality';
import SelectDoctor from './SelectDoctor';
import SelectDate from './SelectDate';
import CreateAppointmentNavigation from './CreateAppointmentNavigation';

const CreateAppointment = () => {
  return (
    <CreateAppointmentProvider>
      <div className="h-full flex flex-col">
        <div className="flex flex-row h-[calc(100%-10rem)]">
          <div className="h-full min-w-[calc(230px+3rem+3rem+3rem)] border-r-[1px] border-edgeWater ">
            <SelectSpeciality />
          </div>

          <div className="h-full min-w-[calc(280px+3rem+3rem+3rem)] border-r-[1px] border-edgeWater ">
            <SelectDoctor />
          </div>

          <div className="h-full min-w-[calc(250px+3rem+3rem+3rem)] ">
            <SelectDate />
          </div>
        </div>

        <div className="w-full h-[10rem] bg-catskillWhite rounded-bl-[12px]">
          <CreateAppointmentNavigation />
        </div>
      </div>
    </CreateAppointmentProvider>
  );
};

export default CreateAppointment;
