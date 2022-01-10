import Head from "next/head";
import Home from "../components/Home";

export default function Index() {
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
      <Home />
    </div>
  );
}
