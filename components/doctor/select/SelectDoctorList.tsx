import React from 'react';
// Components
import fetcher from '../../../api/fetcherConfig';
import { DoctorGeneralInfoCard } from '../card';
// Constants
import { DOCTORS } from '../../../constants/apiEndpoints';
// Libs
import useSWR from 'swr';
import map from 'lodash/map';
// Models
import { ICallResponse, IDoctor } from '../../../models';
import { ConfirmSelectButton } from '../../button';
import {
  useCreateAppointmentStateContext,
  useCreateAppointmentApiContext,
} from '../../../contexts/createAppointmentContext';
import { initialDoctor } from '../../../constants/initialValues';

interface IProps {}
const SelectDoctorList: React.FC<IProps> = () => {
  // Contexts.
  const { selectedDoctor, activeStepIndex } =
    useCreateAppointmentStateContext();
  const { changeDoctor, changeStepIndex } = useCreateAppointmentApiContext();

  // Api.
  const { data: doctorsData, error } = useSWR<ICallResponse<IDoctor[]>>(
    DOCTORS,
    fetcher
  );

  // Handlers.
  const handleSelectDoctor = (doctor: IDoctor) => {
    changeDoctor(doctor);
    if (!!doctor.id.trim().length) {
      changeStepIndex(2);
    } else {
      changeStepIndex(1);
    }
  };

  if (!doctorsData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full flex flex-col pr-[1.5rem]">
      <ul className="w-full flex flex-col pl-[3rem]">
        {map(doctorsData.value, (doctor, index) => {
          return (
            <li
              className={
                'w-full h-[9rem] border-b-[1px]  py-[1rem] border-gallery cursor-pointer ' +
                (activeStepIndex !== 1 && 'opacity-70 cursor-default')
              }
              key={index}
            >
              <ConfirmSelectButton
                onConfirm={() => handleSelectDoctor(doctor)}
                onCancel={() => handleSelectDoctor(initialDoctor)}
                isDisabled={activeStepIndex !== 1}
              >
                <DoctorGeneralInfoCard
                  isActive={selectedDoctor.id === doctor.id}
                  doctor={doctor}
                />
              </ConfirmSelectButton>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SelectDoctorList;
