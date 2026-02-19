import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className={`text-lg font-medium font-['Noto_Sans_Malayalam'] transition-colors ${isOpen ? 'text-[#1E90FF]' : 'text-[#0A3D62] group-hover:text-[#1E90FF]'}`}>
          {question}
        </span>
        <span className={`flex-shrink-0 ml-4 p-2 rounded-full transition-colors ${isOpen ? 'bg-[#1E90FF] text-white' : 'bg-gray-100 text-gray-500'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-600 font-['Noto_Sans_Malayalam'] leading-relaxed pr-8">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ = () => {
  const faqs = [
    {
      question: "എന്താണ് നോർക്ക ഐഡി?",
      answer: "ഒരു പ്രവാസിക്ക് കേരള സർക്കാരുമായി ബന്ധപ്പെടാനുളള ഏക മാർഗ്ഗം. ഇത് വഴി വിവിധ സേവനങ്ങൾ നോർക്ക റൂട്സ് പ്രവാസികൾക്ക് ലഭ്യമാക്കുന്നു. 3 വർഷമാണ് ഐഡി കാർഡിന്റെ കാലാവധി."
    },
    {
      question: "എന്താണ് നോർക്ക ഐഡിയുടെ മറ്റു പ്രയോജനങ്ങൾ?",
      answer: "1. അപകട ഇൻഷുറൻസ് കവറേജായി 5 ലക്ഷം രൂപ വരെ ലഭിക്കും, 2. സ്ഥിര/ഭാഗിക വൈകല്യത്തിന 2 ലക്ഷം രൂപ വരെ ലഭിക്കും, 3. കാരുണ്യ, സാന്ത്വന പദ്ധതികൾ വഴി പെൺമക്കളുടെ വിവാഹത്തിനും പഠനത്തിനും ചികിത്സക്കുമടക്കം വിവിധ ആനുകൂല്യങ്ങൾ, 4. NDRPM ന്റെ വിവിധ പദ്ധതികൾ വഴി സംരംഭകത്വ സഹായങ്ങൾ."
    },
    {
      question: "എന്താണ് പ്രവാസി രക്ഷാ ഇൻഷുറൻസ്?",
      answer: "ഈ പദ്ധതി വഴി ഗുരുതര രോഗങ്ങൾക്ക് 1 ലക്ഷ രൂപ വരെ സഹായം ലഭിക്കും. കൂടാതെ ജീവഹാനിക്ക് 3 ലക്ഷം രൂപയും സ്ഥിര/ഭാഗിക വൈകല്യത്തിന് 1 ലക്ഷം രൂപയും ലഭിക്കും. ((നാർക്ക പുതുക്കിയ സർക്കുലറിലാണ് ഈ ആനുകൂല്യം)) 1 വർഷമാണ് ഇതിന്റെ കാലാവധി."
    },
    {
      question: "നോർക്ക ഐഡി, ഇൻഷുറൻസ് - യോഗ്യത എന്ത്?",
      answer: "6 മാസത്തേക്ക് സാധുവായ പാസ്സ്പോർട്ടുള്ള 18 നും 70 നും ഇടക്ക് പ്രായമുള്ള പ്രവാസികൾക്ക് അപേക്ഷിക്കാം."
    },
    {
      question: "പ്രവാസി ക്ഷേമനിധി അംഗത്വ യോഗ്യത എന്ത്?",
      answer: "വിദേശത്ത് ജോലി ചെയ്ത് കൊണ്ടിരിക്കുന്നതോ 2 വർഷമെങ്കിലും ജോലി ചെയ്ത് തിരിച്ച് വന്നതോ ആയ 18 നും 60 നും ഇടക്ക് പ്രായമുള്ള പ്രവാസികൾക്ക് അപേക്ഷിക്കാം."
    },
    {
      question: "എന്താണ് ക്ഷേമനിധിയുടെ പ്രധാന പ്രയോജനങ്ങൾ?",
      answer: "പ്രതിമാസ പെൻഷൻ (3500 - 7000 രൂപ), കുടുംബ പെൻഷൻ, അവശത പെൻഷൻ, ചികിത്സ ധനസഹായം (50000 വരെ), വിവാഹ/പ്രസവ സഹായങ്ങൾ, ഭവന വായ്പ സബ്സിഡി (1 ലക്ഷം വരെ), മരണാനന്തര ധനസഹായം എന്നിവ ലഭിക്കും."
    },
    {
      question: "ആവശ്യമായ രേഖകൾ എന്തൊക്കെ?",
      answer: "1. പാസ്സ്പോർട്ടിന്റെ ആദ്യത്തെയും അവസാനത്തെയും പേജുകൾ, 2. ഇഖാമ (അബ്ഷിർ പ്രിന്റ് ഉചിതം), 3. അപേക്ഷകന്റെ ഫോട്ടോയും ഒപ്പും."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D62] mb-4 font-['Noto_Sans_Malayalam']">സംശയങ്ങളും മറുപടിയും</h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};
