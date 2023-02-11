import React, { useEffect, useState } from 'react';
import {
  DashBoardPage,
  DoctorDashboard,
  DoctorSearchPage,
  FavoriteDoctorsPage,
  NotReadyPage,
  PatientDashboard,
} from '../views';
import { useAppStateContext } from '../../contexts/appContext';
import ChatPage from '../views/chat/ChatPage';
import { SettingsPage } from '../views/settings';
import CalendarPage from '../views/calendar/CalendarPage';
import Cookies from 'js-cookie';
import { selectAppRoute } from '../../utils/appRouteUtils';
const { useRouter } = require('next/router');

const MainContent = () => {
  // Hooks.
  const { activePage } = useAppStateContext();
  const router = useRouter();
  // State.
  const [domLoaded, setDomLoaded] = useState(false);
  const [token, setToken] = useState(Cookies.get('token'));

  // LifeCycle.
  useEffect(() => {
    if (!token) {
      router.push(selectAppRoute('login'));
    }
    setDomLoaded(true);
  }, [token]);

  const pageRenderSwitch = (page: string = 'dashboard') => {
    switch (page) {
      case 'calendar':
        return <NotReadyPage page="Calendar" />;
      case 'chat':
        return <NotReadyPage page="Chat" />;
      case 'dashboard':
        return <DashBoardPage />;
      case 'doctor-search':
        return <DoctorSearchPage />;
      case 'favorite-doctors':
        return <NotReadyPage page="Favorite Doctors" />;
      case 'settings':
        return <NotReadyPage page="Settings" />;
      default:
        return <DoctorDashboard />;
    }
  };

  console.log('pageRenderSwitch(activePage) ', domLoaded);
  return domLoaded ? pageRenderSwitch(activePage) : null;
};

export default MainContent;
