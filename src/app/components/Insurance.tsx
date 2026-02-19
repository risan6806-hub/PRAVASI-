import React from 'react';
import { motion } from 'motion/react';
import { Shield, Heart, Activity } from 'lucide-react';

export const Insurance = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D62] mb-4 font-['Noto_Sans_Malayalam']">
            ഇൻഷുറൻസ് പരിരക്ഷകൾ
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto font-['Noto_Sans_Malayalam'] leading-relaxed">
            നോർക്ക ഐഡി കാർഡ് ഉള്ളവർക്ക് ലഭിക്കുന്ന ഇൻഷുറൻസ് ആനുകൂല്യങ്ങളും പ്രവാസി രക്ഷാ ഇൻഷുറൻസ് പദ്ധതിയും.
            ഈ പദ്ധതികൾ പ്രവാസികൾക്കും അവരുടെ കുടുംബാംഗങ്ങൾക്കും വലിയ സുരക്ഷയേകുന്നു.
            <span className="block mt-2 text-sm text-[#0A3D62] font-semibold">((നാർക്ക പുതുക്കിയ സർക്കുലറിലാണ് ഈ ആനുകൂല്യം))</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Shield,
              amount: "5 ലക്ഷം",
              title: "നോർക്ക അപകട ഇൻഷുറൻസ്",
              desc: "അപകടം മൂലം മരണം സംഭവിച്ചാൽ അവകാശികൾക്ക് ലഭിക്കുന്നത്. കാലാവധി: 3 വർഷം."
            },
            {
              icon: Activity,
              amount: "1 ലക്ഷം",
              title: "ശാരീരിക വൈകല്യ പരിരക്ഷ",
              desc: "നോർക്ക ഐഡി വഴി സ്ഥിര/ഭാഗിക വൈകല്യത്തിന് ലഭിക്കും."
            },
            {
              icon: Heart,
              amount: "1 ലക്ഷം",
              title: "പ്രവാസി രക്ഷാ ഇൻഷുറൻസ്",
              desc: "ഗുരുതര രോഗങ്ങൾക്ക് ഒരംഗത്തിന് ലഭിക്കുന്ന ചികിത്സാ സഹായം. കാലാവധി: 1 വർഷം."
            },
            {
              icon: Shield,
              amount: "3 ലക്ഷം",
              title: "ജീവഹാനി പരിരക്ഷ",
              desc: "പ്രവാസി രക്ഷാ പദ്ധതി വഴി മരണാനന്തര സഹായം. ഒപ്പം വൈകല്യത്തിന് 1 ലക്ഷം കൂടി."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-[#C9A227] text-center"
            >
              <div className="w-14 h-14 mx-auto bg-[#FFF9E6] rounded-full flex items-center justify-center mb-4">
                <item.icon size={28} className="text-[#C9A227]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A3D62] mb-1 font-['Noto_Sans_Malayalam']">{item.amount}</h3>
              <h4 className="text-base font-semibold text-gray-800 mb-2 font-['Noto_Sans_Malayalam']">{item.title}</h4>
              <p className="text-gray-500 font-['Noto_Sans_Malayalam'] text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
