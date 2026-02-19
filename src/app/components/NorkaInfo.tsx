import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const NorkaInfo = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D62] mb-6 font-['Noto_Sans_Malayalam'] leading-tight">
              എന്താണ് നോർക്ക ഐഡി കാർഡ്? <br />
              <span className="text-[#1E90FF] text-xl md:text-2xl">അതുകൊണ്ടുള്ള പ്രയോജനങ്ങൾ എന്തൊക്കെ?</span>
            </h2>

            <p className="text-gray-600 mb-8 font-['Noto_Sans_Malayalam'] leading-relaxed">
              ഒരു പ്രവാസിക്ക് കേരള സർക്കാരുമായി ബന്ധപ്പെടാനുളള ഏക മാർഗ്ഗം. ഇത് വഴി വിവിധ സേവനങ്ങൾ നോർക്ക റൂട്സ് പ്രവാസികൾക്ക് ലഭ്യമാക്കുന്നു. 3 വർഷമാണ് ഐഡി കാർഡിന്റെ കാലാവധി.
            </p>

            <ul className="space-y-4">
              {[
                "അപകട ഇൻഷുറൻസ് കവറേജായി 5 ലക്ഷം രൂപ വരെ ലഭിക്കും",
                "സ്ഥിര/ഭാഗിക വൈകല്യത്തിന 2 ലക്ഷം രൂപ വരെ ലഭിക്കും",
                "കാരുണ്യ, സാന്ത്വന പദ്ധതികൾ വഴി പെൺമക്കളുടെ വിവാഹത്തിനും പഠനത്തിനും ചികിത്സക്കുമടക്കം വിവിധ ആനുകൂല്യങ്ങൾ",
                "NDRPM ന്റെ വിവിധ പദ്ധതികൾ വഴി സംരംഭകത്വ സഹായങ്ങൾ"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="bg-[#E6F7FF] text-[#1E90FF] p-1 rounded-full mt-1">
                    <Check size={16} />
                  </span>
                  <span className="text-gray-700 font-['Noto_Sans_Malayalam']">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxkb2N1bWVudHxlbnwwfHx8fDE3NzA0NTgzNzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Norka ID Card Sample"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A3D62] to-transparent p-6">
                <p className="text-white font-bold font-['Noto_Sans_Malayalam']">സുരക്ഷിത പ്രവാസം, സന്തോഷകരമായ ജീവിതം</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
