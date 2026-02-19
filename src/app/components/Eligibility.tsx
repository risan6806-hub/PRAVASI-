import React from 'react';
import { motion } from 'motion/react';
import { UserCheck, BookOpen, Briefcase } from 'lucide-react';

export const Eligibility = () => {
  return (
    <section id="eligibility" className="py-20 bg-[#0A3D62] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#C9A227] font-medium tracking-wider text-sm font-['Noto_Sans_Malayalam'] uppercase block mb-2">
            നിബന്ധനകൾ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-['Noto_Sans_Malayalam']">യോഗ്യത മാനദണ്ഡങ്ങൾ</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="px-4 py-8"
          >
            <UserCheck size={56} className="mx-auto mb-6 text-[#C9A227]" />
            <h4 className="text-[#C9A227] font-bold mb-2 font-['Noto_Sans_Malayalam']">പ്രായപരിധി</h4>
            <p className="text-sm md:text-base font-['Noto_Sans_Malayalam'] leading-relaxed">
              നോർക്ക ഐഡി: 18 - 70 വയസ്സ്<br />
              ക്ഷേമനിധി: 18 - 60 വയസ്സ്
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="px-4 py-8"
          >
            <BookOpen size={56} className="mx-auto mb-6 text-[#C9A227]" />
            <h4 className="text-[#C9A227] font-bold mb-2 font-['Noto_Sans_Malayalam']">പാസ്സ്പോർട്ട്</h4>
            <p className="text-sm md:text-base font-['Noto_Sans_Malayalam'] leading-relaxed text-center">
              കുറഞ്ഞത് 6 മാസമെങ്കിലും സാധുവായ ഒറിജിനൽ പാസ്സ്പോർട്ട് ഉണ്ടായിരിക്കണം
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="px-4 py-8"
          >
            <Briefcase size={56} className="mx-auto mb-6 text-[#C9A227]" />
            <h4 className="text-[#C9A227] font-bold mb-2 font-['Noto_Sans_Malayalam']">തൊഴിൽ പശ്ചാത്തലം</h4>
            <p className="text-sm md:text-base font-['Noto_Sans_Malayalam'] leading-relaxed">
              നിലവിൽ വിദേശത്തുള്ളവർക്കോ, 2 വർഷമെങ്കിലും വിദേശത്ത് ജോലി ചെയ്ത് വന്നവർക്കോ അപേക്ഷിക്കാം
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
