import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto">
        <nav className="navbar py-4 flex justify-between items-center px-4">
          {/* Logo Section */}
          <div className="logo">
            <h1 className="font-bold text-xl text-indigo-900">
              Saint Gregory College of Science and Technology
            </h1>
          </div>

          {/* Navigation Links - Hidden on Mobile */}
          <div className="nav-links space-x-6 hidden md:flex">
            <Link 
              href="/Home" 
              className="hover:text-indigo-600 transition font-medium"
            >
              Home
            </Link>
            <Link 
              href="/Programs" 
              className="hover:text-indigo-600 transition font-medium"
            >
              Programs
            </Link>
            <Link 
              href="/About-us" 
              className="hover:text-indigo-600 transition font-medium"
            >
              About Us
            </Link>
          </div>

          {/* Action Button */}
          <div className="flex items-center">
            <Link 
              href="/Portal/log-in" 
              className="login-btn bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Login
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;