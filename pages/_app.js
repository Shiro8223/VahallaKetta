import '../styles/globals.css';
import "@fontsource/inter";
import { RefreshProvider } from '../context/RefreshContext';

export default function App({ Component, pageProps }) {
  return (
    <RefreshProvider>
      <Component {...pageProps} />
    </RefreshProvider>
  );
}
