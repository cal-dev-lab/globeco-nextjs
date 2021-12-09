import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

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
      </Head>
      <main>
        <div className="mx-auto flex justify-center items-center h-screen">
          <div className="text-center">
            <Image
              src="/media/globeco-logos_black.png"
              alt="GlobeCo Logo"
              width="250"
              height="250"
              layout="fixed"
            />
            <Link
              href="https://climate.nasa.gov/resources/global-warming-vs-climate-change/"
              target="_blank"
            >
              <a target="_blank">
                <p className=" text-xs underline hover:text-blue-500 transition duration-500">
                  Change is coming &rarr;
                </p>
              </a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
