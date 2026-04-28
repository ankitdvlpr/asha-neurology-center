"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Target, Heart, ShieldCheck, CheckCircle2, TrendingUp } from 'lucide-react';
import StatItem from '@/components/StatItem';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="overflow-x-hidden font-sans">
      {/* Header Section */}
      <section className="relative pt-40 pb-24 bg-[#f8fafc] overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-300 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container-max px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#0f4c81] font-black tracking-[0.3em] uppercase text-xs block mb-6">About the Clinic</span>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.9]">
              Decades of <br />
              <span className="gradient-text">Neurological</span> <br />
              Expertise
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
              Asha Neurology Center is committed to restoring quality of life through advanced brain, nerve, and spine care in the heart of Varanasi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[4rem] overflow-hidden shadow-3xl border-[12px] border-white relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1200" 
                  alt="Dr. Avinash Singh - Neurologist" 
                  className="w-full h-[700px] object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              {/* Floating Achievement Card */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-12 -right-12 glass p-10 rounded-[3rem] shadow-2xl z-20 border-white/50 max-w-[320px]"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#0f4c81] to-[#11314d] text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-blue-200">
                  <Award size={30} />
                </div>
                <h4 className="text-2xl font-black mb-2 text-slate-900">Dr. Avinash Singh</h4>
                <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-4">Senior Neurologist (DM Neurology)</p>
                <div className="flex items-center gap-2 text-[#10b981] font-bold text-sm">
                  <CheckCircle2 size={16} />
                  <span>20+ Years Clinical Mastery</span>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.span variants={itemVariants} className="text-[#0f4c81] font-black tracking-widest uppercase text-xs block mb-4">Leadership</motion.span>
              <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-black text-slate-900 mb-10 leading-tight tracking-tighter">The Visionary <br />Behind Asha Neurology</motion.h2>
              
              <motion.p variants={itemVariants} className="text-slate-500 text-lg mb-8 leading-relaxed font-medium">
                Dr. Avinash Singh established this center with a singular vision: to provide world-class neurological solutions to the residents of Varanasi. His expertise in epilepsy, stroke, and neuromuscular disorders is matched by his patient-centered approach.
              </motion.p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: 'Elite Education', desc: 'DM in Neurology from India\'s premier medical institutes.', icon: <GraduationCap /> },
                  { title: 'Clinical Precision', icon: <TrendingUp />, desc: 'Specialized in complex headache and seizure management.' },
                  { title: 'Global Standards', icon: <ShieldCheck />, desc: 'Adhering to international protocols for brain care.' },
                  { title: 'Patient Trust', icon: <Heart />, desc: 'Served over 15,000+ patients with a focus on recovery.' },
                ].map((item, index) => (
                  <motion.div key={index} variants={itemVariants} className="flex items-start gap-5 group">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0f4c81] group-hover:bg-[#0f4c81] group-hover:text-white transition-all shadow-sm border border-blue-100 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm font-medium">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-40 glass p-16 rounded-[4rem] grid grid-cols-2 md:grid-cols-4 gap-12 text-center border-white/40 shadow-2xl"
          >
            <StatItem value={20} label="Years Exp." suffix="+" />
            <StatItem value={15} label="Patients" suffix="k+" />
            <StatItem value={50} label="Research" suffix="+" />
            <StatItem value={4.9} label="Avg Rating" suffix="/5" decimals={1} />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-[#f8fafc] overflow-hidden relative">
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-16 rounded-[3.5rem] shadow-xl border border-slate-100 group transition-all duration-500"
            >
              <div className="w-20 h-20 bg-[#0f4c81] text-white rounded-3xl flex items-center justify-center mb-10 shadow-2xl shadow-blue-200 group-hover:scale-110 transition-transform">
                <Target size={36} />
              </div>
              <h3 className="text-3xl font-black mb-6 tracking-tight">Our Mission</h3>
              <p className="text-slate-500 text-xl leading-relaxed font-medium">
                To provide accessible, high-quality neurological care through advanced diagnostics, ethical clinical practices, and personalized treatment plans that prioritize patient well-being.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-16 rounded-[3.5rem] shadow-xl border border-slate-100 group transition-all duration-500"
            >
              <div className="w-20 h-20 bg-[#10b981] text-white rounded-3xl flex items-center justify-center mb-10 shadow-2xl shadow-emerald-200 group-hover:scale-110 transition-transform">
                <Heart size={36} />
              </div>
              <h3 className="text-3xl font-black mb-6 tracking-tight">Our Vision</h3>
              <p className="text-slate-500 text-xl leading-relaxed font-medium">
                To be the regional leader in Neurology, setting new benchmarks in clinical success and patient satisfaction while advancing the understanding of brain health through research and care.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars of Practice */}
      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-24 tracking-tighter"
          >
            Pillars of <span className="gradient-text">Our Practice</span>
          </motion.h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { emoji: "🤝", title: "Integrity", desc: "Ethical and transparent medical guidance." },
              { emoji: "🔬", title: "Advanced Tech", desc: "Latest diagnostics for brain mapping." },
              { emoji: "🏥", title: "Expertise", desc: "Decades of specialized neurology care." },
              { emoji: "❤️", title: "Empathy", desc: "Treating patients with warmth and care." },
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="text-7xl mb-8 group-hover:scale-125 group-hover:-rotate-6 transition-transform duration-500">{value.emoji}</div>
                <h4 className="text-2xl font-black mb-3 tracking-tight">{value.title}</h4>
                <p className="text-slate-400 font-bold px-4">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
