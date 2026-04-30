"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, Phone, MessageSquare, CheckCircle, HelpCircle, ChevronDown, ShieldCheck, Heart, UserPlus, AlertCircle } from 'lucide-react';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api/custom";

const Appointment = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Data from Backend
  const [doctors, setDoctors] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);
  
  // Selection State
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [formData, setFormData] = useState({
    patientName: "",
    patientAge: "",
    patientPhone: "",
    patientEmail: "",
    problem: ""
  });

  // Fetch Doctors on mount
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await fetch(`${API_BASE}/doctors`);
        const data = await res.json();
        setDoctors(data);
      } catch (err) {
        console.error("Failed to fetch doctors", err);
      }
    };
    fetchDoctors();
  }, []);

  const fetchSlots = async () => {
    if (!selectedDoctor) return;
    setLoading(true);
    try {
      const now = new Date();
      const res = await fetch(`${API_BASE}/available-slots?doctorId=${selectedDoctor}&month=${now.getMonth() + 1}&year=${now.getFullYear()}`);
      const data = await res.json();
      
      const uniqueSlots = data.reduce((acc, current) => {
        const key = `${new Date(current.date).toDateString()}-${current.startTime}`;
        if (!acc.find(item => `${new Date(item.date).toDateString()}-${item.startTime}` === key)) {
          acc.push(current);
        }
        return acc;
      }, []);

      setAvailableSlots(uniqueSlots);
    } catch (err) {
      console.error("Failed to fetch slots", err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch Slots when doctor is selected
  useEffect(() => {
    fetchSlots();
  }, [selectedDoctor]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedSlot) {
      setError("Please select a time slot");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${API_BASE}/book-appointment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          doctorId: selectedDoctor,
          slotId: selectedSlot.id
        })
      });

      const data = await res.json();

      if (res.ok) {
        setFormSubmitted(true);
        fetchSlots(); // Refresh slots immediately
      } else {
        setError(data.error || "Booking failed. Please try again.");
      }
    } catch (err) {
      setError("Server connection error. Please ensure the backend is running.");
    } finally {
      setLoading(false);
    }
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
        <div className="container-max px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Appointment Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-16 rounded-[3rem] md:rounded-[4rem] shadow-3xl border border-slate-100 relative overflow-hidden"
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
                    <h2 className="text-4xl font-black mb-6 text-slate-900 tracking-tight">Booking Confirmed!</h2>
                    <p className="text-slate-500 mb-12 text-xl font-medium leading-relaxed">
                      Thank you. Your appointment has been successfully booked. <strong>A confirmation has been sent to your email.</strong>
                    </p>
                    
                    <button 
                      onClick={() => {
                        setFormSubmitted(false);
                        setSelectedSlot(null);
                        setFormData({ patientName: "", patientAge: "", patientPhone: "", patientEmail: "", problem: "" });
                      }}
                      className="btn-primary"
                    >
                      Book Another Appointment
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-8 relative z-10"
                  >
                    {error && (
                      <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center gap-3 font-bold border border-red-100">
                        <AlertCircle size={20} />
                        {error}
                      </div>
                    )}

                    {/* Doctor Selection */}
                    <div className="group">
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3 ml-1">Select Doctor</label>
                      <div className="relative">
                        <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-500 transition-colors" size={20} />
                        <select 
                          required
                          className="w-full pl-14 pr-6 py-5 rounded-2xl bg-slate-50 border-none appearance-none focus:bg-white focus:ring-4 focus:ring-blue-100 outline-none transition-all font-bold text-slate-900"
                          value={selectedDoctor}
                          onChange={(e) => setSelectedDoctor(e.target.value)}
                        >
                          <option value="">Choose a Specialist</option>
                          {doctors.map(doc => (
                            <option key={doc.id} value={doc.id}>{doc.name} - {doc.specialization}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                      </div>
                    </div>

                    {/* Slot Selection */}
                    {selectedDoctor && (
                      <div className="space-y-4">
                        <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3 ml-1">Available Slots</label>
                        {loading ? (
                          <p className="text-slate-400 font-bold italic">Loading slots...</p>
                        ) : availableSlots.length > 0 ? (
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {availableSlots.map(slot => (
                              <button
                                type="button"
                                key={slot.id}
                                onClick={() => setSelectedSlot(slot)}
                                className={`p-4 rounded-xl font-bold text-sm transition-all border-2 ${
                                  selectedSlot?.id === slot.id 
                                  ? 'bg-blue-600 border-blue-600 text-white shadow-lg' 
                                  : 'bg-slate-50 border-slate-50 text-slate-600 hover:border-blue-200'
                                }`}
                              >
                                {new Date(slot.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
                                <br />
                                {slot.startTime}
                              </button>
                            ))}
                          </div>
                        ) : (
                          <p className="text-red-400 font-bold italic">No slots available for the current month.</p>
                        )}
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="group">
                        <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3 ml-1">Patient Name</label>
                        <div className="relative">
                          <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-500 transition-colors" size={20} />
                          <input 
                            type="text" 
                            name="patientName"
                            required
                            value={formData.patientName}
                            onChange={handleInputChange}
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
                            name="patientAge"
                            required
                            value={formData.patientAge}
                            onChange={handleInputChange}
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
                            name="patientPhone"
                            required
                            value={formData.patientPhone}
                            onChange={handleInputChange}
                            className="w-full pl-14 pr-6 py-5 rounded-2xl bg-slate-50 border-none focus:bg-white focus:ring-4 focus:ring-blue-100 outline-none transition-all font-bold text-slate-900"
                            placeholder="+91 XXXXX XXXXX"
                          />
                        </div>
                      </div>
                      <div className="group">
                        <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3 ml-1">Email (Optional)</label>
                        <div className="relative">
                          <HelpCircle className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-500 transition-colors" size={20} />
                          <input 
                            type="email" 
                            name="patientEmail"
                            value={formData.patientEmail}
                            onChange={handleInputChange}
                            className="w-full pl-14 pr-6 py-5 rounded-2xl bg-slate-50 border-none focus:bg-white focus:ring-4 focus:ring-blue-100 outline-none transition-all font-bold text-slate-900"
                            placeholder="your@email.com"
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
                          name="problem"
                          value={formData.problem}
                          onChange={handleInputChange}
                          className="w-full pl-14 pr-6 py-5 rounded-2xl bg-slate-50 border-none focus:bg-white focus:ring-4 focus:ring-blue-100 outline-none transition-all font-bold text-slate-900"
                          placeholder="Describe your neurological concerns..."
                        ></textarea>
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      disabled={loading}
                      className={`w-full btn-primary py-6 text-xl shadow-2xl flex items-center justify-center gap-3 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {loading ? 'Processing...' : 'Confirm Appointment'}
                      {!loading && <ChevronDown className="ml-2 -rotate-90" size={20} />}
                    </button>
                    
                    <p className="text-center text-slate-400 font-bold text-sm mt-6">
                      Urgent Case? Call us directly: <a href="tel:+9199999999" className="text-blue-600 hover:underline">+91 99999999</a>
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
