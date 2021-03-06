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
                  <Link
                    href="/#"
                    passHref
                    className="flex items-center py-2 px-2 text-gray-700"
                  >
                    <Image
                      src="/media/globeco-logos_black.png"
                      width="125"
                      height="35"
                      alt="Globeco logo"
                    />
                  </Link>
              </div>

              {/* Main nav */}
              <div className="hidden md:flex items-center space-x-1 pl-10"></div>
            </div>

            {/* Secondary nav */}
            <div className="hidden md:flex items-center space-x-12">
              <Link
                href="/#"
                passHref
              >
                <a className="tracking-wide text-xs tracking-widest py-2 px-3 text-gray-700 transition duration-500 hover:underline hover:text-green-500">
                  Why We Exist
                </a>
              </Link>
              <Link
                passHref
                href="/#"
              >
                <a className="tracking-wide text-xs tracking-widest py-2 px-3 text-gray-700 transition duration-500 hover:underline hover:text-green-500">
                Radical Solutions
                </a>
              </Link>
              <Link
                passHref
                href="/#"
              >
                <a className="tracking-wide text-xs tracking-widest py-2 px-3 text-gray-700 transition duration-500 hover:underline hover:text-green-500">
                Impact
                </a>
              </Link>
              <Link
                passHref
                href="/#"
              >
                <a className="tracking-wide text-xs tracking-widest py-2 px-3 text-gray-700 transition duration-500 hover:underline hover:text-green-500">
                Act Now
                </a>
              </Link>
            </div>
            {/* Mobile button */}
            <div className="md:hidden flex items-center">
              <button onClick={mobileClick} className="mobile-menu-button">
                <svg
                  className="w-6 h-6 text-black hover:text-green-500 transition duration-500 mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div className="mobile-menu hidden md:hidden">
          <Link
            passHref
            href="/#"
          >
            <a className="block tracking-wide py-6 px-24 text-sm tracking-widest bg-black text-white hover:bg-gray-200 hover:text-black transition duration-500">
            Why We Exist
            </a>
          </Link>
          <Link
            passHref
            href="/#"
          >
            <a className="block tracking-wide py-6 px-24 text-sm tracking-widest bg-black text-white hover:bg-gray-200 hover:text-black transition duration-500">
            Radical Solutions
            </a>
          </Link>
          <Link
            passHref
            href="/#"
          >
            <a className="block tracking-wide py-6 px-24 text-sm tracking-widest bg-black text-white hover:bg-gray-200 hover:text-black transition duration-500">
            Impact
            </a>
          </Link>
          <Link
            passHref
            href="/#"
          >
            <a className="block tracking-wide py-6 px-24 text-sm tracking-widest bg-black text-white hover:bg-gray-200 hover:text-black transition duration-500">
            Act Now
            </a>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
