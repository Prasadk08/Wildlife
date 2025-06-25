import { Link } from "react-router-dom";
import { useState } from "react";
import { color } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const style ={
    textDecoration: 'none',
    color: 'black',
  }
  const navcolor={
    backgroundColor: "#ffddd2",
  }

  return (
    <nav className="fixed w-screen top-0 left-0 right-0 z-50 backdrop-blur-md shadow-lg border-b border-gray-200 font-['Plus_Jakarta_Sans']" style={navcolor}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-blue-700 tracking-wide">
            PURE SOUL
          </div>
          {/* Mobile Hamburger Icon */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-blue-600 focus:outline-none transition-colors"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10 text-lg font-medium text-gray-800">
            <Link to="/Wildlife" className="hover:text-blue-600 transition-colors px-2" style={style}>WildLife</Link>
            <Link to="/JoinUs" className=" hover:text-blue-600 transition-colors px-2" style={style}>Join Us</Link>
            <Link to="/Program" className="hover:text-blue-600 transition-colors px-2" style={style}>Program</Link>
            <Link to="/ContactUs" className="hover:text-blue-600 transition-colors px-2" style={style}>Contact Us</Link>
            <Link to="/Blog" className="hover:text-blue-600 transition-colors px-2" style={style}>Blog</Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col bg-yellow-50 px-6 py-4 shadow-md border-t border-gray-200 space-y-2 text-base font-medium text-gray-800">
          <Link to="/Wildlife" className="hover:text-blue-600 transition-colors px-2" style={style}>WildLife</Link>
            <Link to="/JoinUs" className=" hover:text-blue-600 transition-colors px-2" style={style}>Join Us</Link>
            <Link to="/Program" className="hover:text-blue-600 transition-colors px-2" style={style}>Program</Link>
            <Link to="/ContactUs" className="hover:text-blue-600 transition-colors px-2" style={style}>Contact Us</Link>
            <Link to="/Blog" className="hover:text-blue-600 transition-colors px-2" style={style}>Blog</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
