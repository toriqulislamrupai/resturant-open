import React, { useState } from 'react';

const Header = ({
  heroRef,
  aboutRef,
  menuItemsRef,
  testimonialsRef,
  reservationRef,
  footerRef,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-red-500 shadow-md z-50">
      <nav className="relative flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold text-white">Restaurant</h1>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden text-xl focus:outline-none text-white"
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* Navigation Menu */}
        <ul
          className={`flex-col md:flex-row flex md:flex gap-4 md:gap-8 absolute md:static left-0 right-0 top-[4rem] bg-red-500 md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none ${
            isMenuOpen ? 'flex' : 'hidden'
          }`}
        >
          <li
            className="hover:text-yellow-300 text-white cursor-pointer"
            onClick={() => handleScroll(heroRef)}
          >
            Home
          </li>
          <li
            className="hover:text-yellow-300 text-white cursor-pointer"
            onClick={() => handleScroll(aboutRef)}
          >
            About
          </li>
          <li
            className="hover:text-yellow-300 text-white cursor-pointer"
            onClick={() => handleScroll(menuItemsRef)}
          >
            Portfolio
          </li>
          <li
            className="hover:text-yellow-300 text-white cursor-pointer"
            onClick={() => handleScroll(testimonialsRef)}
          >
            Clients
          </li>
          <li
            className="hover:text-yellow-300 text-white cursor-pointer"
            onClick={() => handleScroll(reservationRef)}
          >
            Blog
          </li>
          <li
            className="hover:text-yellow-300 text-white cursor-pointer"
            onClick={() => handleScroll(footerRef)}
          >
            Contact
          </li>

          {/* Book a Table Button (Mobile) */}
          <li className="block md:hidden mt-4">
            <button className="px-4 py-2 bg-yellow-500 text-gray-800 rounded-md hover:bg-yellow-600">
              Book a Table
            </button>
          </li>
        </ul>

        {/* Book a Table Button (Desktop) */}
        <button className="hidden md:block px-4 py-2 bg-yellow-500 text-gray-800 rounded-md hover:bg-yellow-600">
          Book a Table
        </button>
      </nav>
    </header>
  );
};

export default Header;
