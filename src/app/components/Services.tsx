import React from 'react';
import { motion } from 'motion/react';
import { CreditCard, ShieldCheck, HeartHandshake, Banknote, FileCheck, Plane } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ icon: Icon, title, description, delay }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 group"
  >
    <div className="w-14 h-14 bg-[#0A3D62]/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0A3D62] transition-colors duration-300">
      <Icon size={32} className="text-[#0A3D62] group-hover:text-[#C9A227] transition-colors duration-300" />
    </div>
    <h3 className="text-xl font-bold text-[#0A3D62] mb-2 font-['Noto_Sans_Malayalam']">{title}</h3>
    <p className="text-gray-600 font-['Noto_Sans_Malayalam'] text-sm leading-relaxed">{description}</p>
  </motion.div>
);

export const Services = () => {
  const services = [
    {
      icon: CreditCard,
      title: "നോർക്ക ഐഡി കാർഡ്",
      description: "നോർക്ക റൂട്ട്സ് നൽകുന്ന പ്രവാസി തിരിച്ചറിയൽ കാർഡിന് അപേക്ഷിക്കാം. ഇൻഷുറൻസ് പരിരക്ഷയും മറ്റ് ആനുകൂല്യങ്ങളും ഇതിലൂടെ ലഭിക്കുന്നു.",
      delay: 0.1
    },
    {
      icon: ShieldCheck,
      title: "ഇൻഷുറൻസ് സേവനങ്ങൾ",
      description: "പ്രവാസി സുരക്ഷാ ഇൻഷുറൻസ്, ന്യൂ ഇന്ത്യ അഷ്വറൻസ് തുടങ്ങിയവ എളുപ്പത്തിൽ എടുക്കാം.",
      delay: 0.2
    },
    {
      icon: HeartHandshake,
      title: "ക്ഷേമനിധി ബോർഡ്",
      description: "കേരള പ്രവാസി ക്ഷേമനിധി അംശാദായം അടയ്ക്കുന്നതിനും പെൻഷൻ അപേക്ഷകൾക്കും സഹായിക്കുന്നു.",
      delay: 0.3
    },
    {
      icon: Banknote,
      title: "ലോൺ സഹായങ്ങൾ",
      description: "സ്വയം തൊഴിൽ കണ്ടെത്തുന്നതിനും വീട് വയ്ക്കുന്നതിനുമുള്ള വിവിധ ലോൺ പദ്ധതികളെക്കുറിച്ചുള്ള വിവരങ്ങൾ.",
      delay: 0.4
    },
    {
      icon: FileCheck,
      title: "സർട്ടിഫിക്കറ്റ് അറ്റസ്റ്റേഷൻ",
      description: "വിദേശ യാത്രയ്ക്കും ജോലിയ്ക്കും ആവശ്യമായ സർട്ടിഫിക്കറ്റ് അറ്റസ്റ്റേഷൻ സേവനങ്ങൾ.",
      delay: 0.5
    },
    {
      icon: Plane,
      title: "ടിക്കറ്റിംഗ്",
      description: "മിതമായ നിരക്കിൽ വിമാന ടിക്കറ്റുകൾ ബുക്ക് ചെയ്തു നൽകുന്നു.",
      delay: 0.6
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#1E90FF] font-semibold tracking-wider text-sm font-['Noto_Sans_Malayalam'] uppercase"
          >
            ഞങ്ങളുടെ സേവനങ്ങൾ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-[#0A3D62] mt-2 font-['Noto_Sans_Malayalam']"
          >
            പ്രവാസികൾക്ക് ആവശ്യമുള്ളതെല്ലാം
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
