"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Globe, ShieldCheck } from 'lucide-react';

const Contact = () => {
  return (
    <div className="overflow-x-hidden font-sans">
      {/* Premium Header */}
      <section className="relative pt-40 pb-24 bg-[#0f172a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-blue-600 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/4"></div>
        </div>
        
        <div className="container-max px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-400 font-black tracking-[0.3em] uppercase text-xs block mb-6">Connect With Us</span>
            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
              Get In <br />
              <span className="text-blue-400">Touch</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
              Ready to prioritize your neurological health? Our team at Brij Enclave Colony is standing by to assist you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Details & Map */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Info Cards */}
            <div className="lg:col-span-5 space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-4xl font-black text-slate-900 mb-10 tracking-tighter leading-none">Direct <br />Communication</h2>
                
                <div className="grid grid-cols-1 gap-6">
                  {[
                    { icon: <MapPin />, title: "Clinic Address", desc: "Brij Enclave Colony, Sundarpur, Nagwa, Varanasi, Uttar Pradesh 221005", color: "blue" },
                    { icon: <Phone />, title: "Support Lines", desc: "+91 99999999, +91 12345 67890", color: "emerald" },
                    { icon: <Mail />, title: "Email Support", desc: "contact@ashaneurology.com", color: "blue" },
                    { icon: <Clock />, title: "Clinic Timing", desc: "Mon - Sat: 10:00 AM - 08:00 PM", color: "emerald" },
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ x: 10 }}
                      className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-50 flex items-start gap-6 group transition-all"
                    >
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors ${item.color === 'blue' ? 'bg-blue-50 text-[#0f4c81] group-hover:bg-[#0f4c81]' : 'bg-emerald-50 text-[#10b981] group-hover:bg-[#10b981]'} group-hover:text-white shadow-sm`}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 mb-1 text-lg tracking-tight">{item.title}</h4>
                        <p className="text-slate-500 font-bold leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#0f172a] text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                    <ShieldCheck size={24} />
                  </div>
                  <h4 className="text-xl font-black tracking-tight">Verified Clinic</h4>
                </div>
                <p className="text-slate-400 font-medium mb-8 leading-relaxed">
                  Trusted neurological excellence with state-of-the-art diagnostic facilities in Varanasi.
                </p>
                <a 
                  href="tel:+9199999999" 
                  className="flex items-center justify-center gap-3 bg-[#0f4c81] hover:bg-[#0d3f6b] text-white py-5 rounded-2xl font-black transition-all shadow-xl shadow-blue-900/20 text-lg"
                >
                  <Phone size={22} />
                  Call: +91 99999999
                </a>
              </motion.div>
            </div>

            {/* Map & Form */}
            <div className="lg:col-span-7 space-y-10">
              {/* Google Map Placeholder */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-full h-[500px] bg-white rounded-[4rem] overflow-hidden relative shadow-3xl border-8 border-white p-2"
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.32187652391!2d82.98394477543152!3d25.297920477646548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e31f0c2e646f9%3A0x633519c2c62c2f4e!2sBrij%20Enclave%20Colony%2C%20Sundarpur%2C%20Varanasi%2C%20Uttar%20Pradesh%20221005!5e0!3m2!1sen!2sin!4v1714310000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, borderRadius: '3.5rem' }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  title="Asha Neurology Center Location"
                ></iframe>
              </motion.div>

              {/* Message Form */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-12 md:p-16 rounded-[4rem] shadow-3xl border border-slate-100 relative"
              >
                <h3 className="text-3xl font-black mb-10 text-slate-900 tracking-tighter">Send an Inquiry</h3>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-6 py-5 rounded-2xl bg-slate-50 border-none focus:bg-white focus:ring-4 focus:ring-blue-100 outline-none transition-all font-bold text-slate-900" 
                      placeholder="Patient Name" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-6 py-5 rounded-2xl bg-slate-50 border-none focus:bg-white focus:ring-4 focus:ring-blue-100 outline-none transition-all font-bold text-slate-900" 
                      placeholder="+91 XXXXX XXXXX" 
                    />
                  </div>
                  <div className="md:col-span-2 space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Message</label>
                    <textarea 
                      rows="4" 
                      className="w-full px-6 py-5 rounded-2xl bg-slate-50 border-none focus:bg-white focus:ring-4 focus:ring-blue-100 outline-none transition-all font-bold text-slate-900" 
                      placeholder="Briefly describe the symptoms or condition..."
                    ></textarea>
                  </div>
                  <button type="submit" className="md:col-span-2 btn-primary py-6 flex items-center justify-center gap-3 text-lg shadow-2xl">
                    <Send size={22} className="-rotate-12" />
                    <span>Send Message</span>
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-gradient-to-br from-[#10b981] to-[#059669] rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-3xl"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <Globe className="absolute top-[-20%] right-[-10%] w-[60%] h-[120%] rotate-12" />
            </div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-xl rounded-[2rem] flex items-center justify-center mx-auto mb-10 border border-white/20">
                <MessageCircle size={50} />
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">Instant Support <br />on WhatsApp</h2>
              <p className="text-xl text-emerald-50 font-medium mb-12 leading-relaxed">
                Connect with our coordination team for quick answers about clinic timings or reports.
              </p>
              <a 
                href="https://wa.me/9199999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-white text-[#10b981] px-12 py-6 rounded-[2rem] font-black text-xl hover:scale-105 transition-all shadow-2xl"
              >
                <MessageCircle size={28} />
                <span>Start Chat Now</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
