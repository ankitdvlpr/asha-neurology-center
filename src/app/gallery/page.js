"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, Maximize2, ShieldCheck, Activity, BrainCircuit } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800', title: 'State-of-the-art EEG Lab', category: 'Diagnostics' },
    { url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800', title: 'Advanced Neurological Care', category: 'Consultation' },
    { url: 'https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?auto=format&fit=crop&q=80&w=800', title: 'Patient Consultation Room', category: 'Clinic' },
    { url: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800', title: 'Neuro-Rehabilitation Suite', category: 'Recovery' },
    { url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800', title: 'Expert Clinical Diagnostics', category: 'Diagnostics' },
    { url: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800', title: 'Modern Clinic Infrastructure', category: 'Clinic' },
  ];

  return (
    <div className="overflow-x-hidden font-sans">
      {/* Page Header */}
      <section className="relative pt-40 pb-24 bg-[#f8fafc] overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-emerald-100 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4"></div>
        </div>
        
        <div className="container-max px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-emerald-600 font-black tracking-[0.3em] uppercase text-xs block mb-6">Visual Tour</span>
            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
              Clinic <br />
              <span className="gradient-text">Showcase</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
              A glimpse into our world-class neurology facilities and advanced diagnostic environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-white px-4">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {images.map((img, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative cursor-pointer overflow-hidden rounded-[3rem] shadow-xl aspect-[4/3] border-4 border-white"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 grayscale-[20%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                  <span className="text-emerald-400 text-xs font-black uppercase tracking-widest mb-2">{img.category}</span>
                  <h3 className="text-white font-black text-2xl tracking-tight mb-4">{img.title}</h3>
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-3 rounded-2xl w-fit flex items-center gap-2">
                    <Maximize2 size={18} className="text-white" />
                    <span className="text-white text-xs font-bold uppercase tracking-widest">Enlarge</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-8 right-8 text-white hover:text-emerald-400 transition-colors bg-white/10 p-3 rounded-full border border-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </motion.button>
            
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="max-w-6xl w-full max-h-full flex flex-col items-center gap-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-[3rem] overflow-hidden shadow-3xl border-8 border-white/10">
                <img 
                  src={selectedImage.url} 
                  alt={selectedImage.title} 
                  className="max-w-full max-h-[75vh] object-contain"
                />
              </div>
              <div className="text-center">
                <span className="text-emerald-400 font-black uppercase tracking-widest text-xs mb-3 block">{selectedImage.category}</span>
                <h3 className="text-4xl font-black text-white tracking-tight">{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Infrastructure Section */}
      <section className="section-padding bg-[#f8fafc] px-4">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-20 rounded-[4rem] border-white/40 shadow-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter">Advanced <br /><span className="text-[#0f4c81]">Neuro Infrastructure</span></h2>
            <p className="text-slate-500 text-xl mb-16 font-medium leading-relaxed max-w-2xl mx-auto">
              We invest in premium diagnostic technologies to ensure absolute precision in neurological mapping and care.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { icon: <ShieldCheck />, title: "Precision EEG", desc: "Digital brain mapping" },
                { icon: <Activity />, title: "Advanced NCV", desc: "Nerve conduction studies" },
                { icon: <BrainCircuit />, title: "EMG Facilities", desc: "Muscle & nerve health" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-4">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center text-[#0f4c81] border border-blue-50">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 mb-1 tracking-tight">{item.title}</h4>
                    <p className="text-slate-400 text-sm font-bold">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
