import { createContext, useContext, useMemo, useState } from 'react';
import jwt from 'jsonwebtoken';
import { EUserType, ILoginCredentials, ITokenUser } from '../models';

// Libs.
import { useSWRConfig } from 'swr';
import { LOGIN } from '../constants/apiEndpoints';
import Cookies from 'js-cookie';

const AuthStateContext = createContext<{ loggedUser: any }>({
  loggedUser: null,
});

const AuthApiContext = createContext({
  login: (token: string) => {},
  logout: () => {},
});

const useAuthStateContext = () => {
  const context = useContext(AuthStateContext);

  if (!context) {
    throw new Error('useAuthStateContext must be used within a AuthProvider');
  }

  return context;
};

const useAuthApiContext = () => {
  const context = useContext(AuthApiContext);

  if (!context) {
    throw new Error('useAuthApiContext must be used within a AuthProvider');
  }

  return context;
};

const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);

  const authApi = useMemo(() => {
    return {
      login: (token: string) => {
        const user: ITokenUser = jwt.decode(token);
        Cookies.set('token', token);
        setUser(user);
      },
      logout: () => setUser(null),
    };
  }, [setUser]);

  return (
    <AuthStateContext.Provider
      value={{
        loggedUser: user,
      }}
    >
      <AuthApiContext.Provider value={authApi}>
        {children}
      </AuthApiContext.Provider>
    </AuthStateContext.Provider>
  );
};

export { AuthProvider, useAuthStateContext, useAuthApiContext };
