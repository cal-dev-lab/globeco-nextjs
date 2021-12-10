import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full relative">
      <div className="w-full h-full top-0 left-0 absolute"></div>
      <div className="w-full h-full flex flex-col-reverse absolute top-0 left-0 justify-center mx-auto items-center">
        <Link href="/">
          <a href="/" className="grid grid-cols-1 text-center">
            <p className="text-xs md:text-md text-white mb-2 underline">
              See what we do
            </p>
            <div className="text-xl text-white animate-bounce">&darr;</div>
          </a>
        </Link>

        <Image
          src="/media/globeco-logos_white.png"
          width="250"
          height="250"
          alt="Logo"
        />
      </div>

      <video
        autoPlay
        muted
        loop
        className="object-cover w-100 w-screen h-screen cover z-0"
      >
        <source
          src="./media/pexels-mikhail-nilov-6942626.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Hero;
