import { NextUIProvider, createTheme } from "@nextui-org/react";
import { AppProps } from "next/app";
import { themeColors } from "../constants";
import { AuthProvider } from "../contexts/authContext";

import "../shared/styles/globals.css";
import "../shared/styles/vendors/next-ui.css";
import { ProtectRoute } from "../routers/ProtectedRoute";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
      colors: {
        ...themeColors,
        primary: themeColors.easternBlue,
        border: themeColors.jungleMist,
        accents6: themeColors.jungleMist,
        primarySolidHover: themeColors.gamboge,
      },
      radii: {
        lg: "25px",
      },
    },
  });

  return (
    <NextUIProvider theme={theme}>
      <AuthProvider>
        <ProtectRoute>
          <Component {...pageProps} />
        </ProtectRoute>
      </AuthProvider>
    </NextUIProvider>
  );
}

export default MyApp;
