import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-brand-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {}
          <Link to="/" className="flex items-center space-x-2 group">
            <img 
              src="/src/assets/logo.jpg" 
              alt="SS Security Logo" 
              className="h-16 w-16 object-cover rounded-lg group-hover:shadow-lg transition-shadow duration-300"
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-wider">SS SECURITY</span>
              <span className="text-xs text-gray-400 uppercase tracking-widest">Guard & Services</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    location.pathname === item.path
                      ? 'text-brand-accent'
                      : 'text-gray-300 hover:text-white hover:bg-brand-800'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-brand-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.path
                    ? 'text-brand-accent bg-brand-900'
                    : 'text-gray-300 hover:text-white hover:bg-brand-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;