import { NextUIProvider, createTheme } from "@nextui-org/react";
import "../shared/styles/globals.css";
import "../shared/styles/vendors/next-ui.css";

import { AppProps } from "next/app";
import { themeColors } from "../constants";
import { Footer } from "../widgets";

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
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
