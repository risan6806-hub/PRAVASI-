import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import whatsappLogo from '@/assets/whatsapp-logo.png';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl overflow-hidden shadow-xl">

          <div className="w-full lg:w-5/12 bg-[#0A3D62] p-10 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold font-['Noto_Sans_Malayalam'] mb-6">ബന്ധപ്പെടുക</h2>
              <p className="text-gray-300 font-['Noto_Sans_Malayalam'] mb-8">
                നിങ്ങളുടെ സംശയങ്ങൾക്കും സേവനങ്ങൾക്കുമായി ഞങ്ങളെ സമീപിക്കൂ.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#25D366] p-1.5 rounded-lg mt-1">
                    <img src={whatsappLogo} alt="WhatsApp" className="w-5 h-5 object-contain" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-400 uppercase tracking-wider">വിളിക്കുക / വാട്സാപ്പ്</p>
                    <p className="text-gray-200 mt-1 font-['Noto_Sans_Malayalam']">ഫൈസൽ ബത്തേരി</p>
                    <p className="text-lg">+974 6006 2530</p>
                    <p className="text-lg">+91 85472 09513</p>
                    <p className="text-lg">+91 89210 94396</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-[#C9A227] mt-1" />
                  <div>
                    <p className="font-semibold text-sm text-gray-400 uppercase tracking-wider">ഇമെയിൽ</p>
                    <a href="mailto:pravasiaavas@gmail.com" className="text-lg hover:text-[#C9A227] transition-colors">pravasiaavas@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-[#C9A227] mt-1" />
                  <div>
                    <p className="font-semibold text-sm text-gray-400 uppercase tracking-wider">ഓഫീസ്</p>
                    <p className="text-lg font-['Noto_Sans_Malayalam']">
                      <a
                        href="https://maps.app.goo.gl/N483k8H9LYEvcYSWA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#C9A227] transition-colors"
                      >
                        പ്രവാസി ആവാസ് സി.എസ്.സി, <br />
                        M777+6PP Sultan Bathery, <br />
                        Wayanad, Kerala - 673592
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <div className="w-20 h-1 bg-[#C9A227] mb-4" />
              <p className="text-sm text-gray-400">തിങ്കൾ - ശനി: 9:00 AM - 6:00 PM</p>
            </div>
          </div>

          <div className="w-full lg:w-7/12 p-10">
            <h3 className="text-2xl font-bold text-[#0A3D62] mb-6 font-['Noto_Sans_Malayalam']">സന്ദേശം അയക്കൂ</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-['Noto_Sans_Malayalam']">പേര്</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#1E90FF] focus:ring-2 focus:ring-[#1E90FF]/20 outline-none transition-all" placeholder="നിങ്ങളുടെ പേര്" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-['Noto_Sans_Malayalam']">ഫോൺ</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#1E90FF] focus:ring-2 focus:ring-[#1E90FF]/20 outline-none transition-all" placeholder="മൊബൈൽ നമ്പർ" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-['Noto_Sans_Malayalam']">വിഷയം</label>
                <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#1E90FF] focus:ring-2 focus:ring-[#1E90FF]/20 outline-none transition-all font-['Noto_Sans_Malayalam']">
                  <option value="">സേവനം തിരഞ്ഞെടുക്കൂ</option>
                  <option value="norka">നോർക്ക ഐഡി കാർഡ്</option>
                  <option value="insurance">ഇൻഷുറൻസ്</option>
                  <option value="welfare">ക്ഷേമനിധി</option>
                  <option value="other">മറ്റുള്ളവ</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-['Noto_Sans_Malayalam']">സന്ദേശം</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#1E90FF] focus:ring-2 focus:ring-[#1E90FF]/20 outline-none transition-all" placeholder="വിശദവിവരങ്ങൾ..." />
              </div>

              <button type="button" className="w-full py-4 bg-[#1E90FF] text-white rounded-lg font-bold hover:bg-[#0A3D62] transition-colors flex items-center justify-center gap-2 font-['Noto_Sans_Malayalam']">
                അയക്കുക <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
