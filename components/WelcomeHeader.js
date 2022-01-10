import Image from "next/image";

const WelcomeHeader = () => {
  return (
    <div className="w-full relative">
      <div className="w-full h-full left-0 absolute"></div>
      <Image
          src="/media/mathieu-ramus-gSd173Bwsqk-unsplash.jpg"
          className="object-cover w-screen z-0 cover mx-auto"
          width="2600"
          height="1200"
          alt="Polar bear playing on the mountain floor."
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
        />
      <div className="w-full h-full flex flex-col-reverse absolute top-0 justify-center mx-auto items-center">
      <div className="flex">
        <div className="space-x-4">
          <a href="/#">
            <button className="text-xs md:text-md py-2 underline hover:text-gray-200 px-3 rounded-md font-bold  tracking-widest text-white uppercase mb-0 transition duration-300">
              Donate
            </button>
          </a>
          <a href="/#">
            <button className="text-xs md:text-md py-2 underline hover:text-gray-200 px-3 rounded-md font-bold  tracking-widest text-white uppercase mb-0 transition duration-300">
              About us
            </button>
          </a>
        </div>
      </div>
      <div className="text-4xl sm:text-5xl md:text-8xl font-bold text-white">Time For Action</div>
      <div className="text-sm md:text-xl text-white mb-2">Donate once. Help twice.</div>
    </div>
  </div>
  );
};

export default WelcomeHeader;
