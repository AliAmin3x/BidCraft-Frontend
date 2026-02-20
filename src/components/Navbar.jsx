import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="w-full absolute top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          BidCraft
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          
          {/* Features Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="text-white hover:text-blue-300 font-medium">
              Features ▾
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 mt-3 w-48 bg-white border rounded-lg shadow-lg py-2">
                <Link
                  to="/feature1"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Feature One
                </Link>
                <Link
                  to="/feature2"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Feature Two
                </Link>
                <Link
                  to="/feature3"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Feature Three
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/pricing"
            className="text-white hover:text-blue-300 font-medium"
          >
            Pricing
          </Link>

          <Link
            to="/login"
            className="text-white hover:text-blue-300 font-medium"
          >
            Login
          </Link>

          <button className="bg-[#2474e4] px-4 py-2 rounded-lg font-semibold text-white shadow-lg hover:bg-[#1e5bb8] transition duration-300 cursor-pointer">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4 space-y-4">
          
          <div>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full text-left text-gray-700 font-medium"
            >
              Features
            </button>

            {dropdownOpen && (
              <div className="pl-4 mt-2 space-y-2">
                <Link to="/feature1" className="block text-gray-600">
                  Feature One
                </Link>
                <Link to="/feature2" className="block text-gray-600">
                  Feature Two
                </Link>
                <Link to="/feature3" className="block text-gray-600">
                  Feature Three
                </Link>
              </div>
            )}
          </div>

          <Link to="/pricing" className="block text-gray-700 font-medium">
            Pricing
          </Link>

          <Link to="/login" className="block text-gray-700 font-medium">
            Login
          </Link>

          <button className="w-full bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
