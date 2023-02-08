import React from "react"
import { useAuthStateContext } from "../../../contexts/authContext"
import { EUserType } from "../../../models"
import DoctorDashboard from "./DoctorDashboard"
import PatientDashboard from "./PatientDashboard"

const DashBoardPage = () => {
  const { loggedUser } = useAuthStateContext()

  return (
    <>
      {loggedUser && loggedUser?.type === EUserType.DOCTOR ? (
        <DoctorDashboard />
      ) : (
        <PatientDashboard />
      )}
    </>
  )
}

export default DashBoardPage 
