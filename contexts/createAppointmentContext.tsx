import { createContext, useContext, useMemo, useState } from 'react';
import { EUserType } from '../models';

const CreateAppointmentStateContext = createContext({
  selectedSpeciality: '',
  selectedDoctor: '',
  selectedDate: '',
  activeStepIndex: 0,
});

const CreateAppointmentApiContext = createContext({
  changeSpeciality: (page: string) => {},
  changeDoctor: (doctor: string) => {},
  changeDate: (date: string) => {},
  changeStepIndex: (index: number) => {},
});

const useCreateAppointmentStateContext = () => {
  const context = useContext(CreateAppointmentStateContext);

  if (!context) {
    throw new Error(
      'useCreateAppointmentContext must be used within a CreateAppointmentProvider'
    );
  }

  return context;
};

const useCreateAppointmentApiContext = () => {
  const context = useContext(CreateAppointmentApiContext);

  if (!context) {
    throw new Error(
      'useCreateAppointmentApiContext must be used within a CreateAppointmentProvider'
    );
  }

  return context;
};

const CreateAppointmentProvider = ({ children }: any) => {
  const [selectedSpeciality, setSelectedSpeciality] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const createAppointmentApi = useMemo(() => {
    return {
      changeSpeciality: (speciality: string) =>
        setSelectedSpeciality(speciality),
      changeDoctor: (doctor: string) => setSelectedDoctor(doctor),
      changeDate: (date: string) => setSelectedDate(date),
      changeStepIndex: (index: number) => setActiveStepIndex(index),
    };
  }, [setSelectedSpeciality, setSelectedDoctor, setSelectedDate]);

  return (
    <CreateAppointmentStateContext.Provider
      value={{
        selectedSpeciality,
        selectedDoctor,
        selectedDate,
        activeStepIndex,
      }}
    >
      <CreateAppointmentApiContext.Provider value={createAppointmentApi}>
        {children}
      </CreateAppointmentApiContext.Provider>
    </CreateAppointmentStateContext.Provider>
  );
};

export {
  CreateAppointmentProvider,
  useCreateAppointmentStateContext,
  useCreateAppointmentApiContext,
};
