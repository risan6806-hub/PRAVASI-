import React, { useState } from 'react';
import { Menu, X, Globe, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '@/assets/2db3d6ed1fc9bf5d95ed3b504e248591c4fbce77.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: 'ഹോം', href: '#hero' },
    { title: 'സേവനങ്ങൾ', href: '#services' },
    { title: 'ആനുകൂല്യങ്ങൾ', href: '#benefits' },
    { title: 'യോഗ്യത', href: '#eligibility' },
    { title: 'ബന്ധപ്പെടുക', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0A3D62]/90 backdrop-blur-lg border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-3">
            <img
              src={logo}
              alt="Pravasi Santhwanam Logo"
              className="h-12 md:h-14 w-auto object-contain drop-shadow-lg"
            />
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm md:text-lg leading-tight">PRAVASI SANTHWANAM 2020</span>
              <span className="text-[#C9A227] text-[10px] md:text-xs font-medium tracking-wider">PRAVASI AVAAS CSC</span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="text-gray-300 hover:text-[#C9A227] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 font-['Noto_Sans_Malayalam']"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A3D62] border-b border-white/10 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-[#C9A227] block px-3 py-2 rounded-md text-base font-medium font-['Noto_Sans_Malayalam']"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
