import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const services = [
    { name: 'Brand Protection', path: '/services/brand-protection' },
    { name: 'Mystery Shopping', path: '/services/mystery-shopping' },
    { name: 'Anti-Counterfeiting', path: '/services/anti-counterfeiting' },
    { name: 'Background Checks', path: '/services/background-checks' },
    { name: 'Illegal Imports Investigation', path: '/services/illegal-imports' },
    { name: 'Fraud & Forensic Investigation', path: '/services/fraud-investigation' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Afro Alpha
              </h1>
              <p className="text-xs text-blue-600 font-medium">Limited</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors duration-200 ${
                isActive('/') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition-colors duration-200 ${
                isActive('/about') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {isServicesOpen && (
                <div
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg py-2 z-50"
                >
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`transition-colors duration-200 ${
                isActive('/contact') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Contact
            </Link>
            
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
            >
              Get Consultation
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              
              <div className="space-y-2">
                <p className="text-gray-900 font-semibold">Services</p>
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block pl-4 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 font-semibold text-center shadow-md hover:shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Consultation
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;