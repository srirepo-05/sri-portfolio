import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  const controls = useAnimation();
  const [typedText, setTypedText] = useState('');
  const fullText = 'Aspiring SDE | Full-Stack, Cloud & IoT Developer';
  
  // Typing animation effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  // Enhanced Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2, 
        delayChildren: 0.3,
        duration: 0.8,
        ease: "easeOut"
      }
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.8, 
        ease: [0.6, -0.05, 0.01, 0.99] // Apple's favorite easing
      } 
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  };

  const glowVariants = {
    animate: {
      boxShadow: [
        "0 0 20px rgba(0, 122, 255, 0.3)",
        "0 0 40px rgba(0, 122, 255, 0.6)",
        "0 0 20px rgba(0, 122, 255, 0.3)"
      ],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 bg-apple-blue rounded-2xl opacity-20"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute top-40 right-20 w-16 h-16 bg-apple-purple rounded-full opacity-15"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-32 left-1/4 w-12 h-12 bg-apple-teal rounded-xl opacity-25"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-center min-h-screen">
          
          {/* Main Content - Now centered and full width */}
          <motion.div 
            className="text-center space-y-8 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Greeting */}
            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-apple-blue font-sf-pro font-medium text-lg tracking-wide">
                Hello, I'm
              </p>
              <h1 className="text-5xl lg:text-7xl font-sf-pro font-bold leading-none">
                <span className="text-white">Sriram </span>
                <span className="text-gradient bg-gradient-to-r from-apple-blue via-apple-purple to-apple-teal bg-clip-text text-transparent">
                  M K
                </span>
              </h1>
            </motion.div>
            
            {/* Subtitle with typing effect */}
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-xl lg:text-2xl text-gray-300 font-sf-pro font-light leading-relaxed">
                {typedText}
                <span className="animate-pulse text-apple-blue">|</span>
              </p>
              <p className="text-gray-400 font-sf-pro text-lg leading-relaxed max-w-2xl mx-auto">
                Turning Ideas into Smart, Scalable Solutions
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a 
                href="https://drive.google.com/file/d/1MrPYqKYzk4UIJy4CHe4RGezAkEHk-QoE/view"
                target="_blank" 
                rel="noopener noreferrer"
                className="group btn-apple relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0, 122, 255, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                variants={glowVariants}
                animate="animate"
              >
                <span className="relative z-10 font-sf-pro font-semibold">View Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-apple-blue to-apple-indigo opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              
              <motion.a 
                href="https://github.com/srirepo-05" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-apple-secondary group flex items-center justify-center gap-3"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.15)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="text-xl group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-sf-pro font-semibold">GitHub</span>
              </motion.a>

              <motion.a 
                href="https://www.linkedin.com/in/srirammk05/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-apple-secondary group flex items-center justify-center gap-3"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.15)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin className="text-xl group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-sf-pro font-semibold">LinkedIn</span>
              </motion.a>
            </motion.div>
          </motion.div>

        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <motion.div
            className="w-1 h-3 bg-apple-blue rounded-full mt-2"
            animate={{
              y: [0, 16, 0],
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;