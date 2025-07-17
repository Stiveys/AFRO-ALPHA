import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-blue-400" />
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                  Afro Alpha
                </h3>
                <p className="text-sm text-blue-400 font-medium">Limited</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Expert security and investigation services tailored to Africa's unique challenges. 
              Protecting your brand and business across the continent.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                About Us
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Contact
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Get Consultation
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Core Services</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/services/brand-protection" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Brand Protection
              </Link>
              <Link to="/services/anti-counterfeiting" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Anti-Counterfeiting
              </Link>
              <Link to="/services/fraud-investigation" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Fraud Investigation
              </Link>
              <Link to="/services/background-checks" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Background Checks
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+234 (0) 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@afroalphasecurityltd.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <span className="text-gray-300">
                  Lagos, Nigeria<br />
                  Serving all of Africa
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Afro Alpha Limited. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;