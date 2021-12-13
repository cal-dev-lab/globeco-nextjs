import Image from "next/image";

const WelcomeHeader = () => {
  return (
    <div data-aos="fade-up" className="flex mx-auto max-w-6xl md:mt-24">
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 px-10 md:gap-8">
        {/* Practical */}
        <li className="md:text-center items-center rounded-lg md:h-full h-full px-3">
          <Image
            src="/media/eva-blue-wmdVFw9ubKs-unsplash.jpg"
            alt="Man"
            className="object-cover"
            width="2400"
            height="1634"
          />
        </li>
        {/* Reliable */}
        <li className="justify-center align-items mt-1 items-center h-full">
          <p className="pt-9 text-left uppercase tracking-widest text-sm font-light">
            CHANGE IS COMING
          </p>
          <h1 className="text-green-500 text-6xl  text-left font-bold">
            Globeco
          </h1>
          <a href="/#" className="font-semibold">
            We are going to change the{" "}
            <a href="/#" className="hover:underline text-green-500">
              world
            </a>{" "}
            .
          </a>
          <p className="text-sm mt-2 font-light mb-4 md:mb-0">
            We all know the climate clock is ticking, but there is still time
            left for action. <br />
            <br />
          </p>
          <div className="flex">
            <div className="space-x-4">
              <a href="/#">
                <button className="text-xs md:text-md py-2 border-2 border-green-500 px-3 rounded-md font-bold bg-green-500 tracking-widest text-white uppercase mb-0 hover:text-green-500 hover:bg-white transition duration-300">
                  Donate
                </button>
              </a>
              <a href="/#">
                <button className="text-xs md:text-md py-2 px-3 rounded-md font-bold border-2 border-green-500 tracking-widest text-green-500 uppercase mb-0 hover:bg-green-500 hover:text-white transition duration-300">
                  About us
                </button>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default WelcomeHeader;
