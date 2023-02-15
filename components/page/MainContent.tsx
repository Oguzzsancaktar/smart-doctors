import React, { useEffect, useState } from 'react';
// Views.
import {
  DashBoardPage,
  DoctorDashboard,
  DoctorSearchPage,
  FavoriteDoctorsPage,
  NotReadyPage,
  PatientDashboard,
  ChatPage,
  SettingsPage,
  CalendarPage,
} from '../views';
// Contexts.
import { useAuthApiContext } from '../../contexts/authContext';
import { useAppStateContext } from '../../contexts/appContext';
// Libs.
import Cookies from 'js-cookie';
const { useRouter } = require('next/router');
// Utils.
import { selectAppRoute } from '../../utils/appRouteUtils';

const MainContent = () => {
  // Context.
  const { login } = useAuthApiContext();
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
    } else {
      login(token);
    }
    setDomLoaded(true);
  }, [token]);

  const pageRenderSwitch = (page: string = 'dashboard') => {
    switch (page) {
      case 'calendar':
        return <NotReadyPage page="Calendar" />;
      case 'chat':
        return <ChatPage />;
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

  return domLoaded ? pageRenderSwitch(activePage) : null;
};

export default MainContent;
