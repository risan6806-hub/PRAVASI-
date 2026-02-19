import React from 'react';
import { motion } from 'motion/react';
import { FileText, Image as ImageIcon, CreditCard } from 'lucide-react';

export const Documents = () => {
  const docs = [
    { icon: FileText, text: "പാസ്സ്പോർട്ടിന്റെ ആദ്യത്തെയും അവസാനത്തെയും പേജുകൾ" },
    { icon: FileText, text: "ഇഖാമ (അബ്ഷിർ പ്രിന്റ് ഉചിതം)" },
    { icon: ImageIcon, text: "അപേക്ഷകന്റെ ഫോട്ടോയും ഒപ്പും" }
  ];

  return (
    <section className="py-20 bg-[#0A3D62] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-['Noto_Sans_Malayalam'] mb-4">ആവശ്യമായ രേഖകൾ</h2>
          <p className="text-gray-300 font-['Noto_Sans_Malayalam']">അപേക്ഷ സമർപ്പിക്കുന്നതിന് താഴെ പറയുന്ന രേഖകൾ കരുതുക</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {docs.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center border border-white/10 hover:bg-white/20 transition-colors"
            >
              <doc.icon className="w-10 h-10 mx-auto mb-4 text-[#C9A227]" />
              <p className="text-sm font-['Noto_Sans_Malayalam'] leading-tight">{doc.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
