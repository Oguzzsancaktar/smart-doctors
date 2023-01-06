import { useEffect } from "react";
import { useAuth } from "../contexts/authContext";
import LoadingScreen from "../widgets/LoadingScreen";

export const ProtectRoute = ({ children }: any) => {
  const { isAuthenticated, isLoading } = useAuth();

  // console.log(isAuthenticated);

  // if (isLoading) {
  //   return <LoadingScreen />;
  // }

  return children;
};
