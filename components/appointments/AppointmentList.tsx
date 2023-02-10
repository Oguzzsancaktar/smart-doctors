import React from 'react';
import AppointmentListItem from './AppointmentListItem';
import data from '../../shared/jsons/tempAppointment.json';
import { IAppointment, ICallResponse } from '../../models';
import useSWR from 'swr';
import { fetcherQuery } from '../../api/fetcherConfig';
import { APPOINTMENTS } from '../../constants/apiEndpoints';

const AppointmentList = () => {
  const { data: appointmentData, error } = useSWR<
    ICallResponse<IAppointment[]>
  >(
    [APPOINTMENTS, `?doctorId=acb17c6c-8505-48c7-b2f5-0bda4cf76818`],
    fetcherQuery
  );

  console.log('appointmentData', appointmentData);
  return (
    <div className="h-full overflow-y-auto">
      {data.data.map((item, index) => (
        <AppointmentListItem appointment={item} key={index} />
      ))}
    </div>
  );
};

export default AppointmentList;
