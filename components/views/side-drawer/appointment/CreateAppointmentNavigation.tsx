import { Button } from '@nextui-org/react';
import React from 'react';
import {
  useCreateAppointmentApiContext,
  useCreateAppointmentStateContext,
} from '../../../../contexts/createAppointmentContext';

const CreateAppointmentNavigation = () => {
  // HardCoded.
  const stepsLength = 3;
  // Context.
  const { activeStepIndex } = useCreateAppointmentStateContext();
  const { changeStepIndex } = useCreateAppointmentApiContext();
  // Handlers
  const handleNavigation = (step: number) => {
    if (step < 0) return;
    if (step > stepsLength - 1) {
      return console.log('submit');
    }
    changeStepIndex(step);
  };

  return (
    <div className="w-full h-full flex items-center justify-between">
      <div className="pl-[3rem]">
        <p className="font-wat text-jungleMist text-[2rem] leading-[2.4rem]">
          Step {activeStepIndex + 1} of 3
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
          className="bg-easternBlue h-full w-1/2  "
          auto
          color="primary"
          css={{ borderRadius: '0.6rem' }}
          size={'sm'}
          onPress={handleNavigation.bind(this, activeStepIndex + 1)}
        >
          <h4 className="font-UbuntuBold text-white text-[1.4rem] leading-[1.6rem]">
            Continue
          </h4>
        </Button>
      </div>
    </div>
  );
};

export default CreateAppointmentNavigation;
