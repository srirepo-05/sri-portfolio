import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useScrollAnimation } from './ScrollUtils';

const Contact = () => {
  const { ref, isInView } = useScrollAnimation(0.1);

  const contactMethods = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "srirammk05@gmail.com",
      href: "mailto:srirammk05@gmail.com",
      color: "from-red-400 to-pink-500"
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/srirepo-05",
      color: "hover:text-gray-300"
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/srirammk05",
      color: "hover:text-blue-400"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section 
      ref={ref}
      id="contact" 
      className="min-h-screen flex flex-col items-center justify-center py-32 px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-5 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full opacity-5 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16 z-10"
      >
        <h2 className="text-5xl lg:text-6xl font-sf-pro font-bold text-white mb-6">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        
      </motion.div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center space-y-12"
        >
          {/* Email Contact */}
          <motion.div variants={itemVariants} className="w-full max-w-md">
            <h3 className="text-2xl font-sf-pro font-bold text-white mb-8 text-center">
              Get in Touch
            </h3>
            
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                className="group glass rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-6 block w-full"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="text-white text-2xl" />
                </div>
                <div className="text-center flex-1">
                  <p className="text-gray-400 text-lg font-sf-pro mb-1">{method.label}</p>
                  <p className="text-white font-sf-pro font-medium text-xl group-hover:text-blue-400 transition-colors duration-300">
                    {method.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="glass rounded-2xl p-8 border border-white/10 w-full max-w-md">
            <h4 className="text-xl font-sf-pro font-bold text-white mb-6 text-center">
              Follow Me
            </h4>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-16 h-16 glass rounded-xl flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300`}
                  whileHover={{ 
                    scale: 1.1,
                    y: -3
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="text-2xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;