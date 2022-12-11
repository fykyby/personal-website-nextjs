import type { AppProps } from "next/app";
import "../styles/App.scss";
import "../styles/shared.scss";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
