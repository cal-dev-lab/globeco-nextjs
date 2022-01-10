import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WelcomeHeader from "../components/WelcomeHeader";
import WhatWeDo from "./WhatWeDo";

export default function Home() {
  return (
    <div>
      <Head>
        <title>GLOBECO | Global Warming Awareness Organisation (UK)</title>
        <meta
          name="description"
          content="Raising awareness for the global warming pandemic."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/px-grotesk/px-grotesk-regular.ttf"
          as="font"
          crossOrigin=""
          display="swap"
        />
      </Head>
      <Hero />
      <Navbar />
      <WelcomeHeader />
      <WhatWeDo />
    </div>
  );
}
