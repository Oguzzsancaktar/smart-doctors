import { useEffect } from "react";
import { useAuth } from "../contexts/authContext";
import LoadingScreen from "../widgets/LoadingScreen";

export const ProtectRoute = ({ children }: any) => {
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    console.log(
      111,
      isLoading,
      !isAuthenticated,
      window.location.pathname !== "/login"
    );
  }, [window.location.pathname]);
  if (
    isLoading ||
    (!isAuthenticated && window.location.pathname !== "/login")
  ) {
    return <LoadingScreen />;
  }

  return children;
};
