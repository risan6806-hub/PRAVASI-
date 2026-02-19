import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Globe } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A3D62] pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1515079395349-1c18f26fb291?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMGZseWluZyUyMG92ZXIlMjBnbG9iZSUyMGJsdWUlMjBza3l8ZW58MXx8fHwxNzcwNDU2OTY1fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Airplane flying over globe"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A3D62]/90 via-[#0A3D62]/70 to-[#0A3D62] z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-4 px-4 py-1 rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 backdrop-blur-sm"
        >
          <span className="text-[#C9A227] font-medium tracking-wide text-xs md:text-sm font-['Noto_Sans_Malayalam']">
            PRAVASI SANTHWANAM 2020
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-['Noto_Sans_Malayalam'] leading-tight"
        >
          പ്രവാസികൾക്കായുള്ള <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-[#F1C40F]">
            വിശ്വസനീയ സേവന കേന്ദ്രം
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto font-['Noto_Sans_Malayalam'] leading-relaxed px-2"
        >
          നിങ്ങളുടെ പ്രവാസ ജീവിതത്തിന് സുരക്ഷയും സഹായവും ഉറപ്പാക്കുന്ന സമ്പൂർണ്ണ ഡിജിറ്റൽ സേവനങ്ങൾ.
          നോർക്ക, ഇൻഷുറൻസ്, ക്ഷേമനിധി സേവനങ്ങൾ ഇനി വിരൽത്തുമ്പിൽ.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
        >
          <a
            href="#services"
            className="group relative w-full sm:w-auto px-8 py-4 bg-[#C9A227] rounded-full text-[#0A3D62] font-bold text-lg overflow-hidden transition-all hover:scale-105 font-['Noto_Sans_Malayalam'] text-center"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              സേവനങ്ങൾ കാണുക <ArrowRight size={20} />
            </span>
            <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/20 rounded-full text-white font-bold text-lg hover:bg-white/10 transition-all font-['Noto_Sans_Malayalam'] text-center"
          >
            ബന്ധപ്പെടുക
          </a>
        </motion.div>
      </div>

      {/* Floating Elements Animation */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-10 left-10 text-white/10 hidden lg:block"
      >
        <Globe size={120} />
      </motion.div>
    </section>
  );
};
