import React from 'react';
// Api.
import { fetcherQuery } from '../../api/fetcherConfig';
import { APPOINTMENTS, PATIENT } from '../../constants/apiEndpoints';
// Components.
import AppointmentListItem from './AppointmentListItem';
// Contexts.
import { useAuthStateContext } from '../../contexts/authContext';
// Libs.
import { IAppointment, ICallResponse } from '../../models';
//Models
import useSWR from 'swr';

const AppointmentList = () => {
  const { loggedUser } = useAuthStateContext();

  const { data: appointmentData, error } = useSWR<
    ICallResponse<IAppointment[]>
  >(`${PATIENT}/${loggedUser?.patientId}/${APPOINTMENTS}`, fetcherQuery);

  console.log(appointmentData);

  return (
    <div className="h-full overflow-y-auto">
      {/* {data.data.map((item, index) => (
        <AppointmentListItem appointment={item} key={index} />
      ))} */}
    </div>
  );
};

export default AppointmentList;
