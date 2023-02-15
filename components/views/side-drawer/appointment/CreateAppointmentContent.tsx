import React from 'react';
// Contexts.
import { useCreateAppointmentStateContext } from '../../../../contexts/createAppointmentContext';
// Components.
import SelectDate from './SelectDate';
import SelectDoctor from './SelectDoctor';
import SelectSpeciality from './SelectSpeciality';
import AppointmentSummary from './AppointmentSummary';
import AddAppointmentDocument from './AddAppointmentDocument';

const CreateAppointmentContent = () => {
  const { activeStepIndex } = useCreateAppointmentStateContext();

  return (
    <React.Fragment>
      {activeStepIndex === 3 ? (
        <React.Fragment>
          <div className="h-full min-w-[calc(270px+3rem+3rem+3rem)] border-r-[1px] border-edgeWater ">
            <AppointmentSummary />
          </div>

          <div className="h-full min-w-[calc(300px+3rem+3rem+3rem)] border-r-[1px] border-edgeWater ">
            <AddAppointmentDocument />
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="h-full min-w-[calc(270px+3rem+3rem+3rem)] border-r-[1px] border-edgeWater ">
            <SelectSpeciality />
          </div>

          <div className="h-full min-w-[calc(300px+3rem+3rem+3rem)] border-r-[1px] border-edgeWater ">
            <SelectDoctor />
          </div>

          <div className="h-full min-w-[calc(250px+3rem+3rem+3rem)] ">
            <SelectDate />
          </div>
        </React.Fragment>
      )}
      ;
    </React.Fragment>
  );
};

export default CreateAppointmentContent;
