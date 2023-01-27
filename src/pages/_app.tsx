import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/nav/navbar";
import Footer from "@/components/footer/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
