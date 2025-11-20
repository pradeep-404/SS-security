
import React from 'react';
import { ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-white">
              <ShieldCheck className="text-brand-accent" size={28} />
              <span className="font-bold text-xl">SAFETY SECURE</span>
            </div>
            <p className="text-sm text-gray-400 max-w-xs">
              Providing top-tier security solutions for industrial, residential, and event needs. Managed by ex-police personnel.
            </p>
            <div className="text-xs text-gray-500">
              Regd. No: {COMPANY_INFO.regNo}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Services & Rates</Link></li>
              <li><Link to="/careers" className="hover:text-brand-accent transition-colors">Job Openings</Link></li>
              <li><Link to="/about" className="hover:text-brand-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-accent flex-shrink-0 mt-0.5" />
                <span className="w-3/4">{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-brand-accent flex-shrink-0" />
                <div className="flex flex-col">
                  {COMPANY_INFO.phone.map((num, i) => (
                    <span key={i}>{num}</span>
                  ))}
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-brand-accent flex-shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
