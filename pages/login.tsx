import React, { useEffect, useState } from 'react';
import { SignIn } from '../components';
import { useRouter } from 'next/router';
import { selectAppRoute } from '../utils/appRouteUtils';
import Cookies from 'js-cookie';

const login = () => {
  // Hooks.
  const router = useRouter();
  // State.
  const [domLoaded, setDomLoaded] = useState(false);
  const [token, setToken] = useState(Cookies.get('token'));

  // LifeCycle.
  useEffect(() => {
    if (token) {
      router.push(selectAppRoute('home'));
    }
    setDomLoaded(true);
  }, [token]);

  return (
    <React.Fragment>
      <SignIn />
    </React.Fragment>
  );
};

export default login;
