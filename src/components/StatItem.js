"use client";

import React, { useEffect, useState, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

const StatItem = ({ value, label, suffix = "", decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          setCount(value.toFixed(decimals));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, decimals]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="text-4xl md:text-5xl font-black text-slate-900 mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-xs font-black uppercase tracking-[0.2em] text-[#10b981]">
        {label}
      </div>
    </div>
  );
};

export default StatItem;
