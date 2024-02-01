import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import RecoilContextProvider from "../RecoilContextProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilContextProvider>
      <Component {...pageProps} />
    </RecoilContextProvider>
  );
}

export default MyApp;
