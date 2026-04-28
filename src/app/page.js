"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  BrainCircuit, 
  Activity, 
  Stethoscope, 
  ShieldCheck, 
  ChevronRight, 
  Phone, 
  Calendar, 
  CheckCircle2, 
  Star,
  Zap,
  Heart,
  Award
} from 'lucide-react';
import StatItem from '@/components/StatItem';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-blue-50 via-white to-emerald-50/30">
        {/* Animated background blobs */}
        <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-[-10%] w-[500px] h-[500px] bg-blue-300 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-20 right-[-10%] w-[400px] h-[400px] bg-emerald-200 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container-max relative z-10 px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md px-5 py-2 rounded-2xl border border-blue-100 shadow-sm mb-8">
                <span className="flex h-2 w-2 rounded-full bg-[#10b981]"></span>
                <span className="text-[#0f4c81] font-black uppercase tracking-widest text-[10px]">Trusted Neurological Excellence in Varanasi</span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-black text-slate-900 leading-[0.95] tracking-tighter mb-8">
                Expert <br />
                <span className="gradient-text">Neurology Care</span> <br />
                You Can Trust
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-500 mb-10 max-w-lg leading-relaxed font-medium">
                Comprehensive diagnostic and therapeutic solutions for Brain, Nerve, Spine, Headache, Epilepsy, and Stroke disorders.
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 md:gap-5">
                <Link href="/appointment" className="btn-primary px-8 md:px-10 py-4 md:py-5 text-xs uppercase tracking-widest">
                  <Calendar size={18} /> Book Appointment
                </Link>
                <a href="tel:+9199999999" className="btn-secondary px-8 md:px-10 py-4 md:py-5 text-xs uppercase tracking-widest">
                  <Phone size={18} /> Call Specialist
                </a>
              </motion.div>
              
              <motion.div variants={itemVariants} className="mt-16 grid grid-cols-3 gap-8">
                <StatItem value={20} label="Years Exp." suffix="+" />
                <StatItem value={15} label="Patients" suffix="k+" />
                <StatItem value={4.9} label="Rating" suffix="/5" decimals={1} />
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(15,76,129,0.2)] border-[16px] border-white z-10">
                <img 
                  src="https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1200" 
                  alt="Modern Neurology Equipment" 
                  className="w-full h-[700px] object-cover"
                />
              </div>
              
              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 glass p-10 rounded-[3rem] shadow-2xl z-20 border-white/50 max-w-[300px]"
              >
                <div className="w-14 h-14 bg-emerald-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-emerald-200">
                  <Zap size={30} />
                </div>
                <h4 className="text-2xl font-black mb-2 text-slate-900">Rapid Stroke Response</h4>
                <p className="text-slate-500 font-bold text-sm">Critical care for neurological emergencies.</p>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -right-10 bg-white p-8 rounded-[3rem] shadow-2xl z-20 border border-slate-50 flex items-center gap-5"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0f4c81]">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Certified</p>
                  <p className="text-lg font-black text-slate-900 leading-none mt-1">Specialized Care</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-10 mb-16 md:mb-20">
            <div className="max-w-2xl">
              <span className="text-[#10b981] font-black uppercase tracking-[0.3em] text-xs block mb-4">Specialized Treatments</span>
              <h2 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none mb-6">Advanced <br /><span className="gradient-text">Neurology Services</span></h2>
              <p className="text-slate-500 text-lg md:text-xl font-medium">Equipped with the latest diagnostic technology for comprehensive brain and nerve care.</p>
            </div>
            <Link href="/services" className="btn-secondary px-8 md:px-10 py-4 md:py-5 uppercase tracking-widest text-xs">View All Services <ChevronRight size={18} /></Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Headache & Migraine', icon: <Zap />, desc: 'Specialized management for chronic headaches and migraine disorders.' },
              { title: 'Stroke Care', icon: <Activity />, desc: 'Expert consultation and preventive care for stroke patients.' },
              { title: 'Epilepsy & Seizures', icon: <BrainCircuit />, desc: 'Comprehensive diagnosis and long-term seizure management plans.' },
              { title: 'Parkinson’s Disease', icon: <Stethoscope />, desc: 'Advanced therapy and lifestyle management for movement disorders.' },
            ].map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="card-premium group"
              >
                <div className="w-16 h-16 bg-blue-50 text-[#0f4c81] rounded-3xl flex items-center justify-center mb-8 group-hover:bg-[#0f4c81] group-hover:text-white transition-all duration-500 shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight">{service.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-8">{service.desc}</p>
                <Link href="/services" className="flex items-center gap-2 text-[#0f4c81] font-black uppercase tracking-widest text-xs hover:gap-4 transition-all">
                  Details <ChevronRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="rounded-[4rem] overflow-hidden shadow-3xl">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200" 
                  alt="Doctor with Patient" 
                  className="w-full h-[600px] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/20 backdrop-blur-xl rounded-full border border-white/40 flex items-center justify-center">
                <Heart size={60} className="text-white drop-shadow-lg" />
              </div>
            </div>
            
            <div>
              <span className="text-[#0f4c81] font-black uppercase tracking-[0.3em] text-xs block mb-4">Patient-First Approach</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none mb-10">Why Choose <br />Asha Neurology?</h2>
              
              <div className="space-y-10">
                {[
                  { title: "Expert Diagnosis", desc: "Dr. Avinash Singh brings 20+ years of clinical expertise in neurology.", icon: <Star /> },
                  { title: "Advanced Facility", desc: "Equipped with modern EEG, NCV, and diagnostic tools for precise care.", icon: <Zap /> },
                  { title: "Comprehensive Care", desc: "Full spectrum of brain, nerve, and spine disorder treatments.", icon: <Award /> },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 text-[#10b981] shadow-xl shadow-slate-200">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-2xl font-black mb-2 tracking-tight">{item.title}</h4>
                      <p className="text-slate-500 font-medium text-lg leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section / Doctor Info */}
      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <div className="max-w-4xl mx-auto">
            <span className="text-[#0f4c81] font-black uppercase tracking-[0.3em] text-xs block mb-4">The Specialist</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none mb-10">Trusted Expertise by <br /><span className="gradient-text">Dr. Avinash Singh</span></h2>
            <p className="text-slate-500 text-xl font-medium leading-relaxed mb-16">
              A renowned name in Neurology in Varanasi, Dr. Avinash Singh has dedicated his career to improving the lives of patients suffering from complex neurological conditions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              <div className="p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100 shadow-sm">
                <p className="text-4xl font-black text-[#0f4c81] mb-2">20+</p>
                <p className="text-xs font-black uppercase tracking-widest text-slate-400">Years Experience</p>
              </div>
              <div className="p-8 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 shadow-sm">
                <p className="text-4xl font-black text-[#10b981] mb-2">15k</p>
                <p className="text-xs font-black uppercase tracking-widest text-slate-400">Happy Patients</p>
              </div>
              <div className="p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100 shadow-sm">
                <p className="text-4xl font-black text-[#0f4c81] mb-2">50+</p>
                <p className="text-xs font-black uppercase tracking-widest text-slate-400">Publications</p>
              </div>
              <div className="p-8 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 shadow-sm">
                <p className="text-4xl font-black text-[#10b981] mb-2">100%</p>
                <p className="text-xs font-black uppercase tracking-widest text-slate-400">Dedication</p>
              </div>
            </div>
            <div className="mt-16">
              <Link href="/about" className="btn-primary px-12 py-6 text-sm uppercase tracking-widest">Learn More About Dr. Singh</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-[#0f172a] text-white">
        <div className="container-max">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-6">Patient <br /><span className="text-[#10b981]">Success Stories</span></h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto">Hear from those who have regained their health under our care.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Rahul Verma", text: "Dr. Avinash Singh is incredibly thorough. My migraines were chronic for 5 years, and within 3 months of his treatment, I feel like a new person." },
              { name: "Suman Devi", text: "Asha Neurology Center has the best facilities. The way they managed my father's stroke recovery was truly professional and compassionate." },
              { name: "Anil Pandey", text: "Highly recommended for epilepsy care. The doctor explains the condition so well and the diagnostic tests were very efficient." },
            ].map((t, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-xl p-12 rounded-[3rem] border border-white/10 relative group hover:bg-white/10 transition-all duration-500">
                <div className="flex text-emerald-400 mb-6 gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-slate-300 text-lg italic mb-10 leading-relaxed font-medium">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-tr from-[#0f4c81] to-[#10b981] rounded-full flex items-center justify-center font-black">
                    {t.name[0]}
                  </div>
                  <p className="font-black text-xl">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <span className="text-[#0f4c81] font-black uppercase tracking-[0.3em] text-xs block mb-4">Common Questions</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none mb-10">Frequently <br /><span className="gradient-text">Asked Questions</span></h2>
              <p className="text-slate-500 text-xl font-medium mb-12">Find quick answers to your concerns about neurology treatments and clinic visits.</p>
              <Link href="/appointment" className="btn-green px-12 py-5 text-sm uppercase tracking-widest">Ask a Question</Link>
            </div>
            
            <div className="space-y-6">
              {[
                { q: "What conditions do you treat?", a: "We treat a wide range of neurological disorders including headache, epilepsy, stroke, parkinsonism, and nerve pain." },
                { q: "Do I need a referral for consultation?", a: "No, you can book an appointment directly by calling our clinic or using the online form." },
                { q: "Are emergency consultations available?", a: "Yes, we provide priority consultations for neurological emergencies like sudden stroke or seizures." },
              ].map((faq, i) => (
                <div key={i} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:border-blue-200 transition-all">
                  <h4 className="text-xl font-black mb-4 tracking-tight flex items-center gap-4 text-slate-900">
                    <span className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-[#10b981] text-sm">Q</span>
                    {faq.q}
                  </h4>
                  <p className="text-slate-500 font-medium pl-12 leading-relaxed italic border-l-2 border-emerald-100">"{faq.a}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-gradient-to-br from-[#0f4c81] to-[#11314d] rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-24 text-center text-white relative overflow-hidden shadow-3xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <h2 className="text-3xl md:text-7xl font-black mb-8 md:mb-10 tracking-tighter leading-none">Ready to Prioritize <br />Your <span className="text-[#10b981]">Brain Health?</span></h2>
            <p className="text-lg md:text-xl text-blue-100 mb-10 md:mb-16 font-medium max-w-2xl mx-auto leading-relaxed">
              Don't wait for symptoms to worsen. Book your consultation with Dr. Avinash Singh today and take the first step towards recovery.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
              <Link href="/appointment" className="bg-white text-[#0f4c81] px-8 md:px-12 py-4 md:py-6 rounded-2xl md:rounded-[2rem] font-black text-lg md:text-xl hover:scale-105 transition-all shadow-2xl">Book My Slot</Link>
              <a href="tel:+9199999999" className="bg-emerald-500 text-white px-8 md:px-12 py-4 md:py-6 rounded-2xl md:rounded-[2rem] font-black text-lg md:text-xl hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-3">
                <Phone size={20} className="md:w-6 md:h-6" /> +91 99999999
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
