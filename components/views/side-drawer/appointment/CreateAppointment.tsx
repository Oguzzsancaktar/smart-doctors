import React from 'react';
// Contexts.
import { CreateAppointmentProvider } from '../../../../contexts/createAppointmentContext';
// Components.
import CreateAppointmentNavigation from './CreateAppointmentNavigation';
import CreateAppointmentContent from './CreateAppointmentContent';

const CreateAppointment = () => {
  return (
    <CreateAppointmentProvider>
      <div className="h-full flex flex-col">
        <div className="flex flex-row h-[calc(100%-10rem)]">
          <CreateAppointmentContent />
        </div>

        <div className="w-full h-[10rem] bg-catskillWhite rounded-bl-[12px]">
          <CreateAppointmentNavigation />
        </div>
      </div>
    </CreateAppointmentProvider>
  );
};

export default CreateAppointment;
