import React from 'react';
import logo from '@/assets/2db3d6ed1fc9bf5d95ed3b504e248591c4fbce77.png';

export const Footer = () => {
  return (
    <footer className="bg-[#052035] text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <img
              src={logo}
              alt="Pravasi Santhwanam Logo"
              className="h-16 w-auto object-contain brightness-90"
            />
            <div>
              <h3 className="text-xl font-bold font-['Noto_Sans_Malayalam'] text-[#C9A227]">PRAVASI SANTHWANAM 2020</h3>
              <p className="text-xs text-gray-400 mt-2">PRAVASI AVAAS CSC | ഫൈസൽ ബത്തേരി</p>
              <p className="text-xs text-gray-500 mt-1">
                +974 6006 2530 | +91 85472 09513 | +91 89210 94396
              </p>
              <p className="text-xs text-gray-500 mt-1">
                <a href="mailto:pravasiaavas@gmail.com" className="hover:text-[#C9A227]">pravasiaavas@gmail.com</a>
              </p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Designed with care for Pravasis.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
