import '../styles/globals.css';
import "@fontsource/inter";
import { RefreshProvider } from '../context/RefreshContext';
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <RefreshProvider>
      <Head>
        <title>Vahalla Savannahs</title>
        <link rel="icon" href="/favicon.jpg" type="image/jpg" />
        {/* Optional: For dark/light theme icons or different sizes */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Component {...pageProps} />
    </RefreshProvider>
  );
}
