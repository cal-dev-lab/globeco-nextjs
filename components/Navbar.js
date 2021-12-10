import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  function mobileClick() {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("hidden");
  }
  return (
    <>
      <nav className="bg-white  sticky top-0 z-30 font-grotesk">
        <div className="max-w-6xl px-8 mx-auto">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* Logo */}
              <div className="">
                <Link href="/">
                  <a
                    href="/#"
                    className="flex items-center py-5 px-2 text-gray-700"
                  >
                    <Image
                      src="/media/globeco-logos_black.png"
                      width="200"
                      height="50"
                    />
                  </a>
                </Link>
              </div>
              {/* Main nav */}
              <div className="hidden md:flex items-center space-x-1 pl-10">
                <a
                  href="/#"
                  className="tracking-wide text-xs tracking-widest py-5 px-3 text-gray-700 transition duration-500 hover:underline hover:text-green-500"
                >
                  Why We Exist
                </a>
                <a
                  href="/#"
                  className="tracking-wide text-xs tracking-widest py-5 px-3 text-gray-700 transition duration-500 hover:underline hover:text-green-500"
                >
                  Radical Solutions
                </a>
                <a
                  href="/#"
                  className="tracking-wide text-xs tracking-widest py-5 px-3 text-gray-700 transition duration-500 hover:underline hover:text-green-500"
                >
                  Act Now
                </a>
              </div>
            </div>
            {/* Secondary nav */}
            <div className="hidden md:flex items-center space-x-1">
              <button className="text-xs hover:bg-green-500 hover:text-white py-2 px-4 border-2 border-green-500 text-gray-700 rounded transition duration-300 pxgrotesk">
                Sign up
              </button>
              <button className="text-xs bg-green-500 hover:text-white hover:bg-green-600 py-2 px-4 text-white rounded border-2 border-green-500 transition duration-300 pxgrotesk">
                Log in
              </button>
            </div>
            {/* Mobile button */}
            <div className="md:hidden flex items-center">
              <button onClick={mobileClick} className="mobile-menu-button">
                <svg
                  className="w-6 h-6 text-black hover:text-green-500 transition duration-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div className="mobile-menu hidden md:hidden">
          <a
            href="/#"
            className="block tracking-wide py-6 px-24 text-sm tracking-widest bg-green-500 text-white hover:bg-white hover:text-black transition duration-500"
          >
            Why We Exist
          </a>
          <a
            href="/#"
            className="block tracking-wide py-6 px-24 text-sm tracking-widest bg-green-500 text-white hover:bg-white hover:text-black transition duration-500"
          >
            Radical Solutions
          </a>
          <a
            href="/#"
            className="block tracking-wide py-6 px-24 text-sm tracking-widest bg-green-500 text-white hover:bg-white hover:text-black transition duration-500"
          >
            Act Now
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
