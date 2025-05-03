// src/pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Make sure this path is correct

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
