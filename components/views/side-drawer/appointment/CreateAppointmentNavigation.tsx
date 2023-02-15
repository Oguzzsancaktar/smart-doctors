import React, { useMemo } from 'react';
// Api
import { fetcherPost } from '../../../../api/fetcherConfig';
// Constants.
import { systemDateFormat } from '../../../../constants/formats';
import { APPOINTMENTS, PATIENT } from '../../../../constants/apiEndpoints';
// Contexts.
import {
  useCreateAppointmentApiContext,
  useCreateAppointmentStateContext,
} from '../../../../contexts/createAppointmentContext';
import { useAppApiContext } from '../../../../contexts/appContext';
import { useAuthStateContext } from '../../../../contexts/authContext';
// Libs.
import moment from 'moment';
import { Button } from '@nextui-org/react';
import useSWR, { useSWRConfig } from 'swr';
// Models.
import IAppointmentCreateDto from '../../../../models/entities/appointment/IAppointmentCreateDto';
import { ICallResponse } from '../../../../models';

const CreateAppointmentNavigation = () => {
  // HardCoded.
  const stepsLength = 4;
  // Context.
  const {
    activeStepIndex,
    selectedDoctor,
    selectedTime,
    selectedSpeciality,
    selectedDate,
  } = useCreateAppointmentStateContext();
  const { changeSideDrawerContent } = useAppApiContext();
  const { changeStepIndex } = useCreateAppointmentApiContext();
  const { loggedUser } = useAuthStateContext();

  const { mutate } = useSWRConfig();

  const { data: createAppointmentResultData } = useSWR<
    ICallResponse<any>,
    IAppointmentCreateDto
  >(APPOINTMENTS, (url) => fetcherPost(url, {}), {
    revalidateOnFocus: false,
  });

  // Handlers
  const handleNavigation = (step: number) => {
    if (step < 0) return;
    if (step > stepsLength - 1) {
      return handleSubmit();
    }
    changeStepIndex(step);
  };

  const handleSubmit = async () => {
    let appointmentCreateDto: IAppointmentCreateDto = {
      appointmentDate: moment(selectedDate).format(systemDateFormat),
      appointmentTime: selectedTime,
      attachment: 'string',
      doctorId: selectedDoctor.id,
      note: 'string',
      specialtyId: selectedSpeciality.id,
    };
    const result = await fetcherPost(APPOINTMENTS, appointmentCreateDto);

    mutate(`${PATIENT}/${loggedUser?.userId}/${APPOINTMENTS}`);

    if (result.isSuccess) {
      return changeSideDrawerContent(null);
    }
  };

  // Variables.
  const isNextDisabled = useMemo(() => {
    switch (activeStepIndex) {
      case 0:
        return !selectedSpeciality.id.trim().length;
      case 1:
        return !selectedDoctor.id.trim().length;
      case 2:
        return !selectedTime.trim().length;
      case 3:
        return false;
      default:
        return true;
    }
  }, [activeStepIndex, selectedSpeciality, selectedDoctor, selectedTime]);

  return (
    <div className="w-full h-full flex items-center justify-between">
      <div className="pl-[3rem]">
        <p className="font-wat text-jungleMist text-[2rem] leading-[2.4rem]">
          {activeStepIndex === 3
            ? 'Summary'
            : `Step ${activeStepIndex + 1} of 3`}
        </p>
      </div>

      <div className="flex flex-row h-[4rem] min-w-[calc(300px+3rem+3rem+3rem)] px-[3rem]">
        <Button
          className="bg-transparent px-[1rem] h-full w-1/2 mr-[10px]"
          auto
          color="primary"
          css={{ borderRadius: '0.6rem', border: '2px solid #21ADA9' }}
          size={'sm'}
          onPress={handleNavigation.bind(this, activeStepIndex - 1)}
        >
          <h4 className="font-UbuntuBold text-easternBlue text-[1.4rem] leading-[1.6rem]">
            Back
          </h4>
        </Button>
        <Button
          className={
            'h-full w-1/2  ' +
            (isNextDisabled ? 'bg-jungleMist' : 'bg-easternBlue')
          }
          auto
          color="primary"
          css={{ borderRadius: '0.6rem' }}
          size={'sm'}
          onPress={handleNavigation.bind(this, activeStepIndex + 1)}
          disabled={isNextDisabled}
        >
          <h4 className="font-UbuntuBold text-white text-[1.4rem] leading-[1.6rem]">
            {activeStepIndex === 3 ? 'Book' : 'Continue'}
          </h4>
        </Button>
      </div>
    </div>
  );
};

export default CreateAppointmentNavigation;
