import React from "react";
import {
  DashBoardPage,
  DoctorDashboard,
  DoctorSearchPage,
  FavoriteDoctorsPage,
  NotReadyPage,
  PatientDashboard,
} from "../views";
import { useAppStateContext } from "../../contexts/appContext";
import ChatPage from "../views/chat/ChatPage";
import { SettingsPage } from "../views/settings";
import CalendarPage from "../views/calendar/CalendarPage";

const MainContent = () => {
  const { activePage } = useAppStateContext();

  const pageRenderSwitch = (page: string) => {
    switch (page) {
      case "calendar":
        return <NotReadyPage page="Calendar" />;
      case "chat":
        return <NotReadyPage page="Chat" />;
      case "dashboard":
        return <DashBoardPage />;
      case "doctor-search":
        return <NotReadyPage page="Doctor Search" />;
      case "favorite-doctors":
        return <NotReadyPage page="Favorite Doctors" />;
      case "settings":
        return <NotReadyPage page="Settings" />;

      default:
        return <DoctorDashboard />;
    }
  };

  return pageRenderSwitch(activePage);
};

export default MainContent;
