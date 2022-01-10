import Image from "next/image";

const WelcomeHeader = () => {
  return (
    <div className="w-full relative h-screen text-black" data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-duration="2000">
      <div className="w-full h-full left-0 absolute"></div>
      
      <div className="w-full h-full flex flex-col-reverse absolute top-0 justify-center mx-auto items-center">
      <div className="flex">
        <div className="space-x-4">
          <a href="/#" data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="2000">
            <button className="text-xs md:text-md py-2 underline hover:text-gray-200 px-3 rounded-md font-bold  tracking-widest  uppercase mb-0 transition duration-300">
              Donate
            </button>
          </a>
          <a href="/#" data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="2000">
            <button className="text-xs md:text-md py-2 underline hover:text-gray-200 px-3 rounded-md font-bold  tracking-widest  uppercase mb-0 transition duration-300">
              About us
            </button>
          </a>
        </div>
      </div>
      <div className="text-4xl sm:text-5xl md:text-8xl font-bold" data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="2000">Time For Action</div>
      <div className="text-sm md:text-xl mb-2" data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="2000">Donate once. <span className="font-bold">Help twice.</span></div>
    </div>
  </div>
  );
};

export default WelcomeHeader;
