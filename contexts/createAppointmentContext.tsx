import { createContext, useContext, useMemo, useState } from 'react';
// Models.
import { IDoctor, IDoctorSpecialityItem } from '../models';
// Initial Values.
import {
  initialDoctor,
  initialSpecialityItem,
} from '../constants/initialValues';

const CreateAppointmentStateContext = createContext({
  selectedSpeciality: initialSpecialityItem,
  selectedDoctor: initialDoctor,
  selectedDate: '',
  selectedTime: '',
  activeStepIndex: 0,
});

const CreateAppointmentApiContext = createContext({
  changeSpeciality: (specialityItem: IDoctorSpecialityItem) => {},
  changeDoctor: (doctor: IDoctor) => {},
  changeDate: (date: string) => {},
  changeTime: (time: string) => {},
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
  const [selectedSpeciality, setSelectedSpeciality] =
    useState<IDoctorSpecialityItem>(initialSpecialityItem);
  const [selectedDoctor, setSelectedDoctor] = useState<IDoctor>(initialDoctor);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const createAppointmentApi = useMemo(() => {
    return {
      changeSpeciality: (specialityItem: IDoctorSpecialityItem) =>
        setSelectedSpeciality(specialityItem),
      changeDoctor: (doctor: IDoctor) => setSelectedDoctor(doctor),
      changeDate: (date: string) => setSelectedDate(date),
      changeTime: (time: string) => setSelectedTime(time),
      changeStepIndex: (index: number) => setActiveStepIndex(index),
    };
  }, [setSelectedSpeciality, setSelectedDoctor, setSelectedDate]);

  return (
    <CreateAppointmentStateContext.Provider
      value={{
        selectedSpeciality,
        selectedDoctor,
        selectedDate,
        selectedTime,
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
