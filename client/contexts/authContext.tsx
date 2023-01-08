import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { EUserType, ILoginCredentials } from "../models";
import Router from "next/router";
import { selectAppRoute } from "../utils/appRouteUtils";
import {
  doctorCredentials,
  patientCredentials,
} from "../constants/tempCredentials";

const AuthStateContext = createContext<{ loggedUser: any }>({
  loggedUser: null,
});

const AuthApiContext = createContext({
  login: (credentials: ILoginCredentials): any => {},
  logout: () => {},
});

const useAuthStateContext = () => {
  const context = useContext(AuthStateContext);

  if (!context) {
    throw new Error("useAuthStateContext must be used within a AuthProvider");
  }

  return context;
};

const useAuthApiContext = () => {
  const context = useContext(AuthApiContext);

  if (!context) {
    throw new Error("useAuthApiContext must be used within a AuthProvider");
  }

  return context;
};

const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);

  const authApi = useMemo(() => {
    return {
      login: (credentials: ILoginCredentials) => {
        let user = null;

        if (
          credentials.email === doctorCredentials.email &&
          credentials.password === doctorCredentials.password
        ) {
          user = {
            name: "Doctor Doe",
            type: EUserType.DOCTOR,
          };
        } else if (
          credentials.email === patientCredentials.email &&
          credentials.password === patientCredentials.password
        ) {
          user = {
            name: "Patient Doe",
            type: EUserType.PATIENT,
          };
        } else {
          user = null;
        }

        setUser(user);
        return user;
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
