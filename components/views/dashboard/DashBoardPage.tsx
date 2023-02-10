import React from "react"
import { useAuthStateContext } from "../../../contexts/authContext"
import { EUserType } from "../../../models"
import DoctorDashboard from "./DoctorDashboard"
import PatientDashboard from "./PatientDashboard"
import { useAppStateContext } from "../../../contexts/appContext"

const DashBoardPage = () => {
  const { userType } = useAppStateContext()

  return (
    <>
      {userType === EUserType.DOCTOR ? (
        <DoctorDashboard />
      ) : (
        <PatientDashboard />
      )}
    </>
  )
}

export default DashBoardPage 
