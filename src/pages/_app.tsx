import FlyonuiScript from "@/components/FlyonuiScript";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <FlyonuiScript />
      <Component {...pageProps} />
    </>
  );
}
