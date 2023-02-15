import React from 'react';
// Api.
import { fetcherQuery } from '../../api/fetcherConfig';
import { APPOINTMENTS, PATIENT } from '../../constants/apiEndpoints';
// Components.
import AppointmentListItem from './AppointmentListItem';
// Contexts.
import { useAuthStateContext } from '../../contexts/authContext';
// Libs.
import map from 'lodash/map';
import useSWR from 'swr';
//Models
import { IAppointment, ICallResponse } from '../../models';

const AppointmentList = () => {
  const { loggedUser } = useAuthStateContext();

  const { data: appointmentData, error } = useSWR<
    ICallResponse<IAppointment[]>
  >(`${PATIENT}/${loggedUser?.userId}/${APPOINTMENTS}`, fetcherQuery);

  return (
    <div className="h-full overflow-y-auto">
      {map(appointmentData?.value, (item, index) => (
        <AppointmentListItem appointment={item} key={index} />
      ))}
    </div>
  );
};

export default AppointmentList;
