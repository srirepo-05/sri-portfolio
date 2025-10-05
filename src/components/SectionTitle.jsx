import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ children }) => {
  return (
    <motion.h2 
      className="text-3xl md:text-4xl font-bold text-center mb-12 text-white relative inline-block"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }} // Animation triggers only once
    >
      {children}
      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-cyan-400 rounded-full"></span>
    </motion.h2>
  );
};

export default SectionTitle;