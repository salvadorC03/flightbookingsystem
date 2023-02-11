import "../styles/globals.css";
import type { AppProps } from "next/app";
import ContextProvider from "../store/context";
import Layout from "../components/UI/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}
