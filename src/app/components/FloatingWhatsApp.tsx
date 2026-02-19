import React from 'react';
import { motion } from 'motion/react';
import whatsappLogo from '@/assets/whatsapp-logo.png';

export const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/97460062530"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center w-16 h-16"
      aria-label="Chat on WhatsApp"
    >
      <img src={whatsappLogo} alt="WhatsApp" className="w-12 h-12 object-contain" />
    </motion.a>
  );
};
