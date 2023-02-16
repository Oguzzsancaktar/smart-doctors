import React from 'react';
//Libs
import useSWR from 'swr';
// Models
import { ICallResponse, IDoctorSpeciality } from '../../../../models';
// Components
import { DOCTORS_SPECIALITIES } from '../../../../constants/apiEndpoints';
import fetcher from '../../../../api/fetcherConfig';
import { useCreateAppointmentStateContext } from '../../../../contexts/createAppointmentContext';
import { Button } from '@nextui-org/react';
import { DoctorGeneralInfoCard } from '../../../doctor';
import moment from 'moment';
import { fullDateWithDay } from '../../../../constants/formats';
import {
  getMinutesFromTimeText,
  getTimeTextFromMinutes,
} from '../../../../utils/timeUtils';

const AppointmentSummary = () => {
  // Api.
  const { data: doctorSpecialitiesData, error } = useSWR<
    ICallResponse<IDoctorSpeciality[]>
  >(DOCTORS_SPECIALITIES, fetcher);

  // Contexts.
  const { selectedDate, selectedDoctor, selectedSpeciality, selectedTime } =
    useCreateAppointmentStateContext();

  return (
    <div className="flex flex-col h-full w-full">
      <h5
        className={
          'h-[10rem] flex items-center justify-center text-[20px] text-easternBlue font-UbuntuBold px-[3rem] border-b-[1px] border-edgeWater  '
        }
      >
        Summary of your appointment
      </h5>

      <div className="flex flex-col overflow-y-auto h-[calc(100%-10rem-5rem-4rem)] mr-[1.5rem] pl-[3rem] pr-[1.5rem]">
        <div className="my-[2rem] h-[7rem] ">
          <DoctorGeneralInfoCard doctor={selectedDoctor} />
        </div>
        <div className="h-[5rem]  mb-[1rem]">
          <Button
            className="border-solid border-2  border-easternBlue h-full w-full  "
            auto
            color="primary"
            css={{ borderRadius: '0.6rem' }}
            size={'sm'}
            disabled={true}
          >
            <h4 className="font-UbuntuBold text-easternBlue text-[1.4rem] leading-[1.6rem]">
              {selectedSpeciality.name}
            </h4>
          </Button>
        </div>

        <div className="h-[5rem] mb-[1rem]">
          <Button
            className="border-solid border-2  border-easternBlue h-full w-full  "
            auto
            color="primary"
            css={{ borderRadius: '0.6rem' }}
            size={'sm'}
            disabled={true}
          >
            <h4 className="font-UbuntuBold text-corduroy text-[1.4rem] leading-[1.6rem]">
              {moment(selectedDate).format(fullDateWithDay)}
            </h4>
          </Button>
        </div>

        <div className="h-[5rem] ">
          <Button
            className="border-solid border-2  border-easternBlue h-full w-full  "
            auto
            color="primary"
            css={{ borderRadius: '0.6rem' }}
            size={'sm'}
            disabled={true}
          >
            <h4 className="font-UbuntuBold text-easternBlue text-[1.4rem] leading-[1.6rem]">
              {selectedTime} -{' '}
              {getTimeTextFromMinutes(
                getMinutesFromTimeText(selectedTime) + 30
              )}
            </h4>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSummary;
