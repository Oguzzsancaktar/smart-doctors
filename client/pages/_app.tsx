import { NextUIProvider, createTheme } from "@nextui-org/react";
import { AppProps } from "next/app";
import { themeColors } from "../constants";

import "../shared/styles/globals.css";
import "../shared/styles/vendors/next-ui.css";
import "../shared/styles/vendors/react-flatpckr.css";

import { AppProvider } from "../contexts/appContext";
import { AuthProvider } from "../contexts/authContext";
import AuthRouter from "../routers/AuthRouter";

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
        text: themeColors.corduroy,
      },
      radii: {
        lg: "25px",
      },
    },
  });

  return (
    <NextUIProvider theme={theme}>
      <AppProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </AppProvider>
    </NextUIProvider>
  );
}

export default MyApp;
