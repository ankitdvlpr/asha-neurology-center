"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, BrainCircuit } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg py-3' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#0f4c81] rounded-xl md:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-blue-900/20">
              <BrainCircuit className="h-6 w-6 md:h-7 md:w-7 text-white" />
            </div>
            <div className="flex flex-col">
              <span className={`text-lg md:text-xl font-black leading-none tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>Dr. Avinash Singh</span>
              <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-black text-[#10b981] mt-1">Asha Neurology Center</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm font-black uppercase tracking-widest transition-all hover:text-[#0f4c81] relative group ${
                  pathname === link.path ? 'text-[#0f4c81]' : 'text-slate-500'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 h-1 bg-[#0f4c81] rounded-full transition-all duration-300 ${pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
            <Link href="/appointment" className="btn-primary py-3 px-8 text-xs uppercase tracking-widest">
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 focus:outline-none p-2 rounded-xl bg-slate-100/50"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-4 rounded-2xl text-lg font-black tracking-tight ${
                    pathname === link.path ? 'bg-blue-50 text-[#0f4c81]' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Link
                  href="/appointment"
                  onClick={() => setIsOpen(false)}
                  className="w-full btn-primary py-5 text-lg"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
