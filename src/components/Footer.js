import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, BrainCircuit, Share2, Send, Camera, ChevronRight, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-slate-400 pt-16 md:pt-24 pb-8 md:pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-16 mb-16 md:mb-24">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-8 text-white group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#0f4c81] rounded-xl md:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl shadow-blue-900/20">
                <BrainCircuit className="h-6 w-6 md:h-7 md:w-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-black leading-none tracking-tight">Dr. Avinash Singh</span>
                <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-black text-[#10b981] mt-1">Asha Neurology Center</span>
              </div>
            </Link>
            <p className="mb-8 text-base md:text-lg font-medium leading-relaxed">
              Providing expert neurological care in Varanasi. Dedicated to diagnosing and treating complex brain, nerve, and spine disorders with clinical excellence.
            </p>
            <div className="flex gap-4">
              {[Share2, Send, Camera].map((Icon, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="w-12 h-12 bg-slate-800 hover:bg-[#0f4c81] text-white rounded-2xl flex items-center justify-center transition-all shadow-lg"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-1 lg:col-span-2">
            <h3 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-6 md:mb-10">Navigation</h3>
            <ul className="space-y-3 md:space-y-4">
              {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="flex items-center group text-base md:text-lg font-bold hover:text-white transition-colors"
                  >
                    <ChevronRight size={16} className="mr-2 text-[#0f4c81] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1 lg:col-span-3">
            <h3 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-6 md:mb-10">Contact Details</h3>
            <ul className="space-y-4 md:space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0 text-[#0f4c81]">
                  <MapPin size={20} />
                </div>
                <span className="font-bold text-slate-300 text-sm md:text-base">Brij Enclave Colony, Sundarpur, Nagwa, Varanasi, Uttar Pradesh 221005</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0 text-[#10b981]">
                  <Phone size={20} />
                </div>
                <span className="font-bold text-slate-300 text-sm md:text-base">+91 99999999</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0 text-[#0f4c81]">
                  <Mail size={20} />
                </div>
                <span className="font-bold text-slate-300 text-sm md:text-base">contact@ashaneurology.com</span>
              </li>
            </ul>
          </div>

          {/* Timing */}
          <div className="md:col-span-2 lg:col-span-3">
            <h3 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-6 md:mb-10">Clinic Hours</h3>
            <div className="bg-slate-800/50 p-6 md:p-8 rounded-[2rem] border border-slate-700/50">
              <div className="flex items-start gap-4 mb-6 pb-6 border-b border-slate-700/50">
                <Clock size={24} className="text-[#0f4c81]" />
                <div>
                  <p className="font-black text-white text-lg">Mon - Sat</p>
                  <p className="text-sm font-bold text-slate-500">10:00 AM - 08:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Heart size={24} className="text-[#10b981]" />
                <div>
                  <p className="font-black text-white text-lg">Sunday</p>
                  <p className="text-sm font-bold text-slate-500">By Appointment Only</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-black uppercase tracking-[0.2em] text-slate-500">
          <p>© {new Date().getFullYear()} Asha Neurology Center. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
