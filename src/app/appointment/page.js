"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, Phone, MessageSquare, CheckCircle, HelpCircle, ChevronDown, ShieldCheck, Heart, UserPlus } from 'lucide-react';

const Appointment = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const faqs = [
    { question: "What should I bring for my first neurological consultation?", answer: "Please bring any previous MRI/CT scans, blood reports, list of current medications, and a history of your symptoms." },
    { question: "How long does a typical neurology visit take?", answer: "A new consultation usually takes 30-45 minutes as it involves a detailed neurological examination." },
    { question: "Do you provide emergency consultations?", answer: "Yes, we prioritize cases involving sudden stroke symptoms, severe headaches, or new-onset seizures." },
    { question: "Are diagnostic tests like EEG available at the center?", answer: "Yes, we have in-house facilities for EEG, NCV, and other essential neurological diagnostics." },
  ];

  return (
    <div className="overflow-x-hidden font-sans">
      {/* Header Section */}
      <section className="relative pt-40 pb-24 bg-[#0f172a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-blue-600 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/4"></div>
        </div>
        
        <div className="container-max px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-400 font-black tracking-[0.3em] uppercase text-xs block mb-6">Priority Care</span>
            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
              Secure Your <br />
              <span className="text-[#10b981]">Consultation</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
              Your neurological health is our priority. Book a detailed consultation with Dr. Avinash Singh today.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-[#f8fafc]">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Appointment Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-16 rounded-[4rem] shadow-3xl border border-slate-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[4rem] -z-0"></div>
              
              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20 relative z-10"
                  >
                    <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-xl shadow-emerald-100">
                      <CheckCircle size={48} />
                    </div>
                    <h2 className="text-4xl font-black mb-6 text-slate-900 tracking-tight">Booking Sent!</h2>
                    <p className="text-slate-500 mb-12 text-xl font-medium leading-relaxed">
                      Thank you. Our patient care executive will contact you within 30 minutes to confirm your neurology consultation.
                    </p>
                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="btn-primary"
                    >
                      New Appointment
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-8 relative z-10"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="group">
                        <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3 ml-1">Patient Name</label>
                        <div className="relative">
                          <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-500 transition-colors" size={20} />
                          <input 
                            type="text" 
                            required
                            className="w-full pl-14 pr-6 py-5 rounded-2xl bg-slate-50 border-none focus:bg-white focus:ring-4 focus:ring-blue-100 outline-none transition-all font-bold text-slate-900"
                            placeholder="Full Name"
                          />
                        </div>
                      </div>
                      <div className="group">
                        <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3 ml-1">Age</label>
                        <div className="relative">
                          <UserPlus className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-500 transition-colors" size={20} />
                          <input 
                            type="number" 
                            required
                            className="w-full pl-14 pr-6 py-5 rounded-2xl bg-slate-50 border-none focus:bg-white focus:ring-4 focus:ring-blue-100 outline-none transition-all font-bold text-slate-900"
                            placeholder="Patient Age"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="group">
                        <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3 ml-1">Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-500 transition-colors" size={20} />
                          <input 
                            type="tel" 
                            required
                            className="w-full pl-14 pr-6 py-5 rounded-2xl bg-slate-50 border-none focus:bg-white focus:ring-4 focus:ring-blue-100 outline-none transition-all font-bold text-slate-900"
                            placeholder="+91 XXXXX XXXXX"
                          />
                        </div>
                      </div>
                      <div className="group">
                        <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3 ml-1">Preferred Date</label>
                        <div className="relative">
                          <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-500 transition-colors" size={20} />
                          <input 
                            type="date" 
                            required
                            className="w-full pl-14 pr-6 py-5 rounded-2xl bg-slate-50 border-none focus:bg-white focus:ring-4 focus:ring-blue-100 outline-none transition-all font-bold text-slate-900"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3 ml-1">Medical Concern</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-5 top-6 text-slate-300 group-focus-within:text-blue-500 transition-colors" size={20} />
                        <textarea 
                          rows="4" 
                          className="w-full pl-14 pr-6 py-5 rounded-2xl bg-slate-50 border-none focus:bg-white focus:ring-4 focus:ring-blue-100 outline-none transition-all font-bold text-slate-900"
                          placeholder="Describe your neurological concerns..."
                        ></textarea>
                      </div>
                    </div>

                    <button type="submit" className="w-full btn-primary py-6 text-xl shadow-2xl">
                      Submit Appointment Request <ChevronDown className="ml-2 -rotate-90" size={20} />
                    </button>
                    
                    <p className="text-center text-slate-400 font-bold text-sm mt-6">
                      Urgent Case? Call us directly: <a href="tel:+919876543210" className="text-blue-600 hover:underline">+91 98765 43210</a>
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Sidebar Support */}
            <div className="lg:pt-10">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#0f4c81] to-[#11314d] text-white p-12 rounded-[3.5rem] mb-16 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <h3 className="text-3xl font-black mb-8 tracking-tighter leading-none">Why Book Online?</h3>
                <ul className="space-y-6">
                  {[
                    "Priority slot allocation for early bookings",
                    "Dedicated patient history evaluation",
                    "Instant digital confirmation call",
                    "Access to pre-consultation guidelines"
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-4 group">
                      <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#10b981] transition-colors">
                        <ShieldCheck size={18} />
                      </div>
                      <span className="font-bold text-blue-50">{text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-4 tracking-tighter">
                  <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-blue-600">
                    <HelpCircle size={24} />
                  </div>
                  Quick Answers
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="group bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden hover:border-blue-200 transition-all">
                      <button 
                        onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                        className="w-full p-8 text-left flex justify-between items-center transition-colors"
                      >
                        <span className="font-black text-slate-900 text-lg pr-4">{faq.question}</span>
                        <div className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all ${openFaq === index ? 'rotate-180' : ''}`}>
                          <ChevronDown size={20} />
                        </div>
                      </button>
                      <AnimatePresence>
                        {openFaq === index && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="px-8 pb-8 text-slate-500 font-bold leading-relaxed text-lg italic border-l-4 border-emerald-100 ml-8 mb-4">
                              "{faq.answer}"
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
