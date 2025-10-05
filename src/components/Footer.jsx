import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaArrowUp, FaCode } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 1000,
      smooth: true
    });
  };

  return (
    <footer className="relative bg-black/50 backdrop-blur-xl border-t border-white/10 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 rounded-full opacity-5 blur-2xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/3 w-24 h-24 bg-purple-500 rounded-full opacity-5 blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex items-center gap-4 text-sm text-gray-400 font-sf-pro">
            <span>&copy; {new Date().getFullYear()} Sriram M K.</span>
            <motion.div
              className="flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
            >
              <FaCode className="text-xs" />
              <span className="text-xs">with passion</span>
            </motion.div>
          </div>
          
          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="group flex items-center gap-2 glass rounded-full px-4 py-2 text-gray-400 hover:text-white transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(255, 255, 255, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm font-sf-pro">Back to top</span>
            <motion.div
              className="group-hover:-translate-y-1 transition-transform duration-300"
            >
              <FaArrowUp className="text-xs" />
            </motion.div>
          </motion.button>
        </motion.div>

        
      </div>
    </footer>
  );
};

export default Footer;