"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BrainCircuit, 
  Activity, 
  Stethoscope, 
  Zap, 
  ShieldCheck, 
  ChevronRight, 
  Phone, 
  CheckCircle2, 
  Dna,
  Heart
} from 'lucide-react';

const Services = () => {
  const servicesList = [
    {
      title: 'Headache & Migraine Treatment',
      icon: <Zap className="h-10 w-10" />,
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800',
      description: 'Specialized diagnostic and therapeutic approach for chronic headaches and migraine disorders using modern protocols.',
      symptoms: ['Pulsating pain', 'Light sensitivity', 'Chronic tension', 'Cluster headaches'],
      benefits: ['Reduced frequency', 'Faster relief', 'Identify triggers', 'Personalized plans'],
      id: 'headache'
    },
    {
      title: 'Epilepsy / Seizure Care',
      icon: <BrainCircuit className="h-10 w-10" />,
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
      description: 'Comprehensive evaluation and management of various seizure disorders with long-term monitoring and care.',
      symptoms: ['Loss of consciousness', 'Muscle spasms', 'Blank staring', 'Memory gaps'],
      benefits: ['Seizure control', 'Safe medication plans', 'Lifestyle counseling', 'EEG monitoring'],
      id: 'epilepsy'
    },
    {
      title: 'Stroke Consultation',
      icon: <Activity className="h-10 w-10" />,
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
      description: 'Expert consultation for stroke prevention and post-stroke rehabilitation to restore functionality and prevent recurrence.',
      symptoms: ['Sudden weakness', 'Speech difficulty', 'Vision loss', 'Coordination loss'],
      benefits: ['Rapid diagnosis', 'Secondary prevention', 'Neuro-rehabilitation', 'Risk management'],
      id: 'stroke'
    },
    {
      title: 'Nerve Pain Treatment',
      icon: <Dna className="h-10 w-10" />,
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
      description: 'Comprehensive care for neuropathic pain, sciatica, and peripheral nerve disorders using advanced diagnostic tools.',
      symptoms: ['Burning sensation', 'Numbness', 'Tingling', 'Muscle weakness'],
      benefits: ['Pain relief', 'Restored sensation', 'Improved mobility', 'Nerve strengthening'],
      id: 'nerve-pain'
    },
    {
      title: 'Parkinson’s Disease Care',
      icon: <Stethoscope className="h-10 w-10" />,
      image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800',
      description: 'Advanced therapy and lifestyle management for movement disorders, focusing on maintaining independence and quality of life.',
      symptoms: ['Tremors', 'Rigidity', 'Slow movement', 'Balance issues'],
      benefits: ['Improved coordination', 'Medication optimization', 'Physical therapy', 'Supportive care'],
      id: 'parkinsons'
    },
    {
      title: 'Memory Loss & Dementia',
      icon: <BrainCircuit className="h-10 w-10" />,
      image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=800',
      description: 'Cognitive assessments and specialized care for Alzheimer\'s and other age-related memory disorders.',
      symptoms: ['Forgetfulness', 'Confusion', 'Disorientation', 'Personality changes'],
      benefits: ['Early detection', 'Slowing progression', 'Family counseling', 'Cognitive training'],
      id: 'memory-loss'
    },
    {
      title: 'Spine & Neuromuscular Disorders',
      icon: <ShieldCheck className="h-10 w-10" />,
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800',
      description: 'Diagnosis and management of spinal cord issues, muscle dystrophy, and motor neuron diseases.',
      symptoms: ['Back pain', 'Limb weakness', 'Muscle wasting', 'Reflex changes'],
      benefits: ['Spine stability', 'Pain management', 'Muscular strengthening', 'Functional recovery'],
      id: 'spine-care'
    },
    {
      title: 'Brain & Nerve Consultation',
      icon: <Heart className="h-10 w-10" />,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800',
      description: 'Expert clinical evaluation for any general neurological concerns with a thorough diagnostic approach.',
      symptoms: ['Dizziness', 'Sleep issues', 'Anxiety', 'Neurological fatigue'],
      benefits: ['Comprehensive checkup', 'Accurate diagnosis', 'Preventive care', 'Peace of mind'],
      id: 'brain-consultation'
    }
  ];

  return (
    <div className="overflow-x-hidden font-sans">
      {/* Page Header */}
      <section className="relative pt-40 pb-24 bg-[#0f172a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-blue-600 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3"></div>
        </div>
        
        <div className="container-max px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-400 font-black tracking-[0.3em] uppercase text-xs block mb-6">Expertise</span>
            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
              Specialized <br />
              <span className="text-[#10b981]">Neurology Treatments</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
              Asha Neurology Center provides comprehensive solutions for complex brain and nerve disorders with clinical precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-white px-4">
        <div className="container-max">
          <div className="space-y-40">
            {servicesList.map((service, index) => (
              <motion.div 
                key={service.id} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col lg:flex-row items-center gap-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500 to-emerald-500 rounded-[4rem] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-700"></div>
                    <div className="relative rounded-[4rem] overflow-hidden shadow-3xl border-[12px] border-white">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-[550px] object-cover transform group-hover:scale-110 transition-transform duration-1000 grayscale-[20%] group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12">
                        <p className="text-white font-black text-2xl tracking-tight">Specialized Care for {service.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2">
                  <div className="w-20 h-20 rounded-3xl bg-blue-50 text-[#0f4c81] flex items-center justify-center mb-10 shadow-sm border border-blue-100 group-hover:bg-[#0f4c81] group-hover:text-white transition-all">
                    {service.icon}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">{service.title}</h2>
                  <p className="text-slate-500 text-xl mb-10 leading-relaxed font-medium">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                    <div>
                      <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center">
                        <span className="w-6 h-px bg-blue-600 mr-3"></span> Symptoms
                      </h4>
                      <ul className="space-y-3">
                        {service.symptoms.map((s, i) => (
                          <li key={i} className="flex items-center gap-3 text-slate-700 font-bold">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center">
                        <span className="w-6 h-px bg-[#10b981] mr-3"></span> Benefits
                      </h4>
                      <ul className="space-y-3">
                        {service.benefits.map((b, i) => (
                          <li key={i} className="flex items-center gap-3 text-slate-700 font-bold">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></div>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <Link href="/appointment" className="btn-primary">
                    Book Treatment <ChevronRight size={22} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#f8fafc] px-4">
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="container-max text-center glass p-20 rounded-[4rem] shadow-2xl border-white/40"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-slate-900 tracking-tighter leading-none">Consult Our <br /><span className="gradient-text">Neurology Specialists</span></h2>
          <p className="text-slate-500 text-xl mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
            Unsure about your symptoms? Our expert team will provide a detailed evaluation and diagnostic mapping.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/appointment" className="btn-primary px-12">Book Consultation Now</Link>
            <a href="tel:+9199999999" className="flex items-center justify-center px-12 py-5 rounded-2xl font-black bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 transition-all shadow-sm">
              <Phone size={20} className="mr-3 text-blue-600" /> +91 99999999
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
