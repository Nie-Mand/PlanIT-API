import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import { StoreProvider } from "../utlis/store";
import { Toaster } from "react-hot-toast";
import IndexPage from "./index"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Toaster />
      <Navbar />
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
