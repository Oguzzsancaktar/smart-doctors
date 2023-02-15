import React from 'react';
import { useAuthStateContext } from '../../../contexts/authContext';
import { EUserType } from '../../../models';
import DoctorDashboard from './DoctorDashboard';
import PatientDashboard from './PatientDashboard';
import { useAppStateContext } from '../../../contexts/appContext';

const DashBoardPage = () => {
  const { loggedUser } = useAuthStateContext();

  return (
    <>
      {loggedUser?.role.toLowerCase() === EUserType.DOCTOR.toLowerCase() ? (
        <DoctorDashboard />
      ) : (
        <PatientDashboard />
      )}
    </>
  );
};

export default DashBoardPage;
