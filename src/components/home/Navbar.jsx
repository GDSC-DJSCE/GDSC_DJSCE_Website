import { useState } from "react";
import { Link } from "react-router-dom/dist";
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <header className="flex flex-wrap sm:justify-start dark:bg-white  bg-white sm:flex-nowrap z-50 w-full  fixed top-0  text-sm py-4 ">
        <nav
          className="max-w-[75rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <Link
              className="inline-flex items-center gap-x-2 text-xl font-semibold dark:text-white"
              to="/"
            >
              <div aria-hidden="true" className="flex space-x-1 dark">
                <img src="GDSCLogo.jpg" className="w-60 h-16" alt="" />
              </div>

            </Link>
            <div className="sm:hidden">
              <button
                type="button"
                className={`hs-collapse-toggle p-2  inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
                onClick={toggleMobileMenu}
              >
                <svg
                  className="hs-collapse-open:hidden dark:text-black flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {isMobileMenuOpen ? (
                    <>
                      <line key="line1" x1="18" y1="6" x2="6" y2="18" />
                      <line key="line2" x1="6" y1="6" x2="18" y2="18" />
                    </>
                  ) : (
                    <>
                      <line key="line3" x1="3" x2="21" y1="6" y2="6" />
                      <line key="line4" x1="3" x2="21" y1="12" y2="12" />
                      <line key="line5" x1="3" x2="21" y1="18" y2="18" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-image-and-text-1"
            className={`hs-collapse overflow-hidden  transition-all duration-300 basis-full grow sm:block ${isMobileMenuOpen ? "block   bg-gray-50 border border-zinc-100 rounded-3xl p-5 font-semibold mt-6 " : "hidden  p-0 mt-0"
              }`}
          >
            <div className="flex flex-col gap-5 lg:gap-10  sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              <Link
                to="/"
                className="font-medium nav-item text-gray-600 dark:text-zinc-200   "
                aria-current="page"
              >
                Home
              </Link>
              <Link to="/team"
                className="font-medium nav-item text-gray-600 dark:text-zinc-200 "
                aria-current="page"
              >
                Our Team
              </Link>
              <Link to="/events"
                className="font-medium nav-item text-gray-600 dark:text-zinc-200 "
                aria-current="page"
              >
                Events
              </Link>
              <Link to="/gallery"
                className="font-medium nav-item text-gray-600 dark:text-zinc-200 "
                aria-current="page"
              >
                Gallery
              </Link>
              <Link to="/contactus"
                className="font-medium nav-item text-gray-600 dark:text-zinc-200 "
                aria-current="page"
              >
                Contact us
              </Link>
            </div>
          </div>


          <style jsx>{`
.nav-item {
  font-family: 'Barlow' !important;
  font-size: 18px;
  text-lg;
  font-normal;
  cursor-pointer;
  transition: font-weight 0.3s;
  color: black;
  position: relative;
}

.nav-item::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #4285f4, #0f9d58, #f4b400, #db4437);
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease-in-out;
}

.nav-item:hover {
  font-weight: bold;
  cursor: pointer;
}

.nav-item:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
}
`}</style>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
