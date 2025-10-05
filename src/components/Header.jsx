import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'projects', label: 'Projects' },
  { to: 'skills', label: 'Skills' },
  { to: 'achievements', label: 'Achievements' },
  { to: 'contact', label: 'Contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsMobileMenuOpen(false);
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const logoVariants = {
    hover: { 
      scale: 1.05,
      transition: { type: "spring", stiffness: 300, damping: 10 }
    },
    tap: { scale: 0.95 }
  };

  const linkVariants = {
    hover: { 
      y: -2,
      transition: { type: "spring", stiffness: 300, damping: 10 }
    },
    tap: { y: 0 }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const mobileItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass-dark shadow-apple-xl border-b border-white/5' 
          : 'bg-transparent'
      }`}
      variants={headerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <motion.div
            variants={logoVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link 
              to="home" 
              smooth={true} 
              duration={800} 
              className="cursor-pointer flex items-center group"
            >
              <div className="relative">
                <h1 className="text-2xl lg:text-3xl font-sf-pro font-bold">
                  <span className="text-white group-hover:text-apple-blue transition-colors duration-300">
                    Sriram
                  </span>
                  <span className="text-apple-blue ml-2 group-hover:text-white transition-colors duration-300">
                    MK
                  </span>
                </h1>
                
                {/* Animated underline */}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-apple-blue to-apple-purple"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.to}
                variants={linkVariants}
                whileHover="hover"
                whileTap="tap"
                className="relative"
              >
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={800}
                  className={`cursor-pointer font-sf-pro font-medium text-base transition-all duration-300 relative px-4 py-2 rounded-lg ${
                    activeSection === link.to 
                      ? 'text-apple-blue bg-white/5' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                  activeClass="text-apple-blue"
                  onSetActive={() => setActiveSection(link.to)}
                >
                  {link.label}
                  
                  {/* Active indicator */}
                  {activeSection === link.to && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 w-1 h-1 bg-apple-blue rounded-full"
                      layoutId="activeIndicator"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{ transform: 'translateX(-50%)' }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            
            
          </div>
          
          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden relative z-50 p-2 rounded-lg glass-dark text-white"
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
        
        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden overflow-hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="glass-dark rounded-2xl mt-4 p-6 border border-white/10">
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.to}
                      custom={index}
                      variants={mobileItemVariants}
                      initial="closed"
                      animate="open"
                      className="relative"
                    >
                      <Link
                        to={link.to}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={800}
                        className={`cursor-pointer font-sf-pro font-medium text-lg transition-all duration-300 block px-4 py-3 rounded-xl ${
                          activeSection === link.to 
                            ? 'text-apple-blue bg-white/10' 
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                        activeClass="text-apple-blue"
                        onSetActive={() => setActiveSection(link.to)}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  
                  
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Header;