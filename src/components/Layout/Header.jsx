import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"; // Fixed path because it's now in components/Layout/

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navLinks = [
    { name: "The Kitchen", path: "https://flenjor-foods.netlify.app/" },
    { name: "Flenjor Shop", path: "https://www.flenjorfoods.com/s1/home" },
    { name: "Wholesale", path: "/wholesale" },
  ];

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" onClick={closeMenu}>
              <img className="h-11 w-auto" src={logo} alt="Flenjor Foods Logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5D5D5D] hover:text-black font-normal transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.name}
              </a>
            ))}
            <Link
              to="/contact"
              className="bg-[#569b5e] hover:bg-[#437d49] text-white font-medium py-2.5 px-6 rounded-md transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-white flex flex-col pt-6 pb-8 px-5">
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="bg-gray-100 rounded-full p-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-900 focus:outline-none"
              onClick={closeMenu}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mt-8 flex-grow">
            <nav className="grid gap-y-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-black hover:text-gray-700"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  onClick={closeMenu}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="mt-8">
            <Link
              to="/contact"
              className="w-full flex items-center justify-center px-4 py-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#569b5e] hover:bg-[#437d49]"
              style={{ fontFamily: "'Inter', sans-serif" }}
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
