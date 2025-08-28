import '../styles/globals.css';
import "@fontsource/inter";
import { RefreshProvider } from '../context/RefreshContext';
import Head from "next/head";
import { Analytics } from "@vercel/analytics/next"

export default function App({ Component, pageProps }) {
  return (
    <Analytics>
      <RefreshProvider>
        <Head>
          <title>Vahalla Savannahs</title>
          <link rel="icon" href="/favicon.jpg" type="image/jpg" />
          {/* Optional: For dark/light theme icons or different sizes */}
          {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>
        <Component {...pageProps} />
      </RefreshProvider>
    </Analytics>
  );
}
