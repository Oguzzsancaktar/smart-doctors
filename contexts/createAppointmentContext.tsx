// import { createContext, useContext, useMemo, useState } from "react"
// import { EUserType } from "../models"

// const CreateAppointmentStateContext = createContext({
//   selectedSpeciality: null,
//   sideDrawerContent: null,
//   userType: EUserType.PATIENT
// })

// const CreateAppointmentApiContext = createContext({
//   changePage: (page: string) => { },
//   changeSideDrawerContent: (content: JSX.Element[] | JSX.Element | null) => { },
//   changeUserType: (userType: EUserType) => { }
// })

// const useCreateAppointmentStateContext = () => {
//   const context = useContext(CreateAppointmentStateContext)

//   if (!context) {
//     throw new Error("useCreateAppointmentContext must be used within a CreateAppointmentProvider")
//   }

//   return context
// }

// const useCreateAppointmentApiContext = () => {
//   const context = useContext(CreateAppointmentApiContext)

//   if (!context) {
//     throw new Error("useCreateAppointmentApiContext must be used within a CreateAppointmentProvider")
//   }

//   return context
// }

// const CreateAppointmentProvider = ({ children }: any) => {
//   const [activePage, setActivePage] = useState("dashboard")
//   const [sideDrawerContent, setSideDrawerContent] = useState<JSX.Element[] | JSX.Element | any>(null)
//   const [userType, setUserType] = useState<EUserType>(EUserType.PATIENT)

//   const createAppointmentApi = useMemo(() => {
//     return {
//       changePage: (page: string) => setActivePage(page),
//       changeSideDrawerContent: (content: JSX.Element[] | JSX.Element | null) => setSideDrawerContent(content),
//       changeUserType: (userType: EUserType) => setUserType(userType)
//     }
//   }, [setActivePage])

//   return (
//     <CreateAppointmentStateContext.Provider
//       value={{
//         activePage,
//         sideDrawerContent,
//         userType
//       }}
//     >
//       <CreateAppointmentApiContext.Provider value={createAppointmentApi}>{children}</CreateAppointmentApiContext.Provider>
//     </CreateAppointmentStateContext.Provider>
//   )
// }

// export { CreateAppointmentProvider, useCreateAppointmentStateContext, useCreateAppointmentApiContext }
export default {};
