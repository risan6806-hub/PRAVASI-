import React from 'react';
import { motion } from 'motion/react';
import { Banknote, GraduationCap, HeartPulse, Gift, Shield, Activity, Users, Stethoscope, Home } from 'lucide-react';
import { LoginModal } from './LoginModal';

export const WelfareBenefits = () => {
  const benefits = [
    {
      icon: Banknote,
      title: "പെൻഷൻ",
      desc: "60 വയസ്സ് പൂർത്തിയായ അംഗങ്ങൾക്ക് ചുരുങ്ങിയത് 5 വർഷത്തെ അടവ് പൂർത്തിയാക്കിയാൽ 3500 രൂപ മുതൽ 7000 രൂപ വരെ പെൻഷൻ ലഭിക്കും"
    },
    {
      icon: Users,
      title: "കുടുംബ പെൻഷൻ",
      desc: "അംഗം മരണപ്പെട്ടാലുടൻ ഏറ്റവും അടുത്ത അവകാശിക്ക് പെൻഷൻ തുകയുടെ പകുതി കുടുംബ പെൻഷൻ ആയി ലഭിക്കും"
    },
    {
      icon: Stethoscope,
      title: "അവശത പെൻഷൻ",
      desc: "ഒരംഗത്തിന് ശാരീരിക അവശത മൂലം ജോലി ചെയ്യാന് കഴിയാതെ വന്നാല് പെൻഷൻ തുകയുടെ 40% അവശത പെൻഷൻ ആയി ലഭിക്കും"
    },
    {
      icon: HeartPulse,
      title: "ചികിത്സാ സഹായം",
      desc: "ഒരംഗത്തിന് 50000 രൂപ വരെ ചികിത്സ സഹായമായി ലഭിക്കും"
    },
    {
      icon: Gift,
      title: "വിവാഹ സഹായം",
      desc: "3 വർഷത്തെ അടവെങ്കിലും പൂർത്തിയാക്കിയ അംഗത്തിന്  2 പെണ്മക്കളുടെ വിവാഹത്തിന് 10000 രൂപയുടെ സഹായം ലഭിക്കും"
    },
    {
      icon: Activity,
      title: "പ്രസവ സഹായം",
      desc: "2 വർഷത്തെ അടവെങ്കിലും പൂർത്തിയാക്കിയ വനിത അംഗത്തിന് 2  തവണ  പ്രസവ സഹായമായി 3000 രൂപ ലഭിക്കും"
    },
    {
      icon: Home,
      title: "ഭവന വായ്പ സബ്സിഡി",
      desc: "ഒരംഗത്തിന് ഭവന വായ്പകൾക്ക് 5% (1 ലക്ഷം രൂപ വരെ) സബ്സിഡി ലഭിക്കും"
    },
    {
      icon: GraduationCap,
      title: "വിദ്യഭ്യാസ ഗ്രാന്റ്",
      desc: "2 വർഷത്തെ അടവെങ്കിലും പൂർത്തിയാക്കിയ അംഗത്തിന് മക്കളുടെ ഉപരി പഠനത്തിന് ഗ്രാന്റ് ലഭിക്കും "
    },
    {
      icon: Shield,
      title: "മരണ ധനസഹായം",
      desc: "അംഗം മരണപ്പെട്ടാൽ അടുത്ത അവകാശിക്ക് 1 ലക്ഷം രൂപ വരെ സഹായധനം ലഭിക്കും "
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D62] mb-6 font-['Noto_Sans_Malayalam']">
              പ്രവാസി ക്ഷേമനിധി <br />
              <span className="text-[#C9A227]">ആനുകൂല്യങ്ങൾ</span>
            </h2>
            <p className="text-gray-600 mb-6 font-['Noto_Sans_Malayalam']">
              കേരള പ്രവാസി ക്ഷേമനിധിയിൽ അംഗമാകുന്നതിലൂടെ നിങ്ങളുടെ ഭാവി സുരക്ഷിതമാക്കാം.
            </p>
            <LoginModal
              trigger={
                <button className="bg-[#0A3D62] text-white px-6 py-3 rounded-lg font-['Noto_Sans_Malayalam'] hover:bg-[#082a45] transition-colors">
                  ഇന്നുതന്നെ അംഗമാകൂ
                </button>
              }
            />
          </motion.div>

          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#F8FAFC] p-6 rounded-xl border border-gray-100 hover:border-[#C9A227] transition-all hover:shadow-md group"
              >
                <item.icon className="w-10 h-10 text-[#1E90FF] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-[#0A3D62] mb-2 font-['Noto_Sans_Malayalam']">{item.title}</h3>
                <p className="text-gray-600 font-['Noto_Sans_Malayalam'] text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
