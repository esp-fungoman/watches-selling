import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import RecoilContextProvider from "../RecoilContextProvider";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";
import localeData from "dayjs/plugin/localeData";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";
import weekYear from "dayjs/plugin/weekYear";

dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilContextProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </RecoilContextProvider>
  );
}

export default MyApp;
