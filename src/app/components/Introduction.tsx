import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle } from 'lucide-react';

export const Introduction = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522199873717-bc67b1a5e32b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhaXJwb3J0fGVufDF8fHx8MTc3MDQ1ODA1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Travelers at airport"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D62]/50 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#C9A227] rounded-full opacity-20 blur-2xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#1E90FF] rounded-full opacity-20 blur-2xl" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D62] mb-6 font-['Noto_Sans_Malayalam'] leading-tight">
              പ്രവാസി സാന്ത്വനം <br />
              <span className="text-[#1E90FF]">ഒരു കൈത്താങ്ങ്</span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-6 font-['Noto_Sans_Malayalam'] leading-relaxed">
              വിദേശത്ത് ജോലി ചെയ്യുന്നവർക്കും തിരികെ എത്തിയവർക്കും ആവശ്യമായ എല്ലാ സർക്കാർ സേവനങ്ങളും ഒരു കുടക്കീഴിൽ ലഭ്യമാക്കുകയാണ് ഞങ്ങളുടെ ലക്ഷ്യം. നോർക്ക രജിസ്ട്രേഷൻ മുതൽ ഇൻഷുറൻസ് ക്ലെയിം വരെ ഞങ്ങൾ സഹായിക്കുന്നു.
            </p>

            <div className="space-y-4">
              {[
                "നോർക്ക തിരിച്ചറിയൽ കാർഡ്",
                "പ്രവാസി ക്ഷേമനിധി അംശാദായം",
                "യാത്രാ ഇൻഷുറൻസ്",
                "വിവിധ ലോൺ സഹായങ്ങൾ"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-[#C9A227] flex-shrink-0" size={24} />
                  <span className="text-gray-700 font-medium font-['Noto_Sans_Malayalam']">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a href="#services" className="text-[#1E90FF] font-bold hover:text-[#0A3D62] transition-colors inline-flex items-center gap-2 font-['Noto_Sans_Malayalam']">
                കൂടുതൽ അറിയുക <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
