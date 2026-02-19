import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Mail, Lock, Phone, User, ArrowRight } from 'lucide-react';

export const LoginModal = ({ trigger }: { trigger: React.ReactNode }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white rounded-3xl overflow-hidden p-0 border-none shadow-2xl">
                <div className="bg-[#0A3D62] p-8 text-white relative">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold font-['Noto_Sans_Malayalam'] text-white">
                            സ്വാഗതം
                        </DialogTitle>
                        <DialogDescription className="text-white/70 font-['Noto_Sans_Malayalam']">
                            പ്രവാസി ക്ഷേമനിധി പോർട്ടലിലേക്ക് ലോഗിൻ ചെയ്യുക
                        </DialogDescription>
                    </DialogHeader>
                    <div className="absolute bottom-0 right-0 p-4 opacity-10">
                        <Lock size={100} />
                    </div>
                </div>

                <div className="p-8">
                    <Tabs defaultValue="login" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-100 p-1 rounded-xl">
                            <TabsTrigger
                                value="login"
                                className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-[#0A3D62] data-[state=active]:shadow-sm font-['Noto_Sans_Malayalam']"
                            >
                                ലോഗിൻ
                            </TabsTrigger>
                            <TabsTrigger
                                value="register"
                                className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-[#0A3D62] data-[state=active]:shadow-sm font-['Noto_Sans_Malayalam']"
                            >
                                രജിസ്റ്റർ
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="login" className="space-y-4 outline-none">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 font-['Noto_Sans_Malayalam']">മൊബൈൽ നമ്പർ / ഇമെയിൽ</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        type="text"
                                        placeholder="നമ്പർ അല്ലെങ്കിൽ ഇമെയിൽ"
                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A3D62]/20 focus:border-[#0A3D62] outline-none transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 font-['Noto_Sans_Malayalam']">പാസ്‌വേഡ്</label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A3D62]/20 focus:border-[#0A3D62] outline-none transition-all"
                                    />
                                </div>
                            </div>
                            <button className="w-full py-4 bg-[#0A3D62] text-white rounded-xl font-bold font-['Noto_Sans_Malayalam'] hover:bg-[#082a45] transition-all flex items-center justify-center gap-2 group">
                                ലോഗിൻ <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <div className="text-center">
                                <a href="#" className="text-sm text-[#1E90FF] hover:underline font-['Noto_Sans_Malayalam']">പാസ്‌വേഡ് മറന്നുപോയോ?</a>
                            </div>
                        </TabsContent>

                        <TabsContent value="register" className="space-y-4 outline-none">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 font-['Noto_Sans_Malayalam']">പൂർണ്ണരൂപം</label>
                                <input
                                    type="text"
                                    placeholder="നിങ്ങളുടെ പേര്"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A3D62]/20 focus:border-[#0A3D62] outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 font-['Noto_Sans_Malayalam']">മൊബൈൽ നമ്പർ</label>
                                <input
                                    type="tel"
                                    placeholder="+91"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A3D62]/20 focus:border-[#0A3D62] outline-none transition-all"
                                />
                            </div>
                            <button className="w-full py-4 bg-[#C9A227] text-[#0A3D62] rounded-xl font-bold font-['Noto_Sans_Malayalam'] hover:bg-[#b08d20] transition-all flex items-center justify-center gap-2 group">
                                തുടരുക <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </TabsContent>
                    </Tabs>
                </div>
            </DialogContent>
        </Dialog>
    );
};
