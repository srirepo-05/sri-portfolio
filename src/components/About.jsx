import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCode, FaRocket, FaBrain, FaHeart } from 'react-icons/fa';
import { useScrollAnimation } from './ScrollUtils';

const About = () => {
  const { ref, isInView } = useScrollAnimation(0.1);

  const cardVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.6, -0.05, 0.01, 0.99],
        type: 'spring', 
        stiffness: 100 
      }
    }
  };

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

  const values = [
    {
      icon: FaCode,
      title: "Clean Code",
      description: "Writing maintainable, scalable solutions",
      color: "from-apple-blue to-apple-indigo"
    },
    {
      icon: FaRocket,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge tech",
      color: "from-apple-purple to-apple-pink"
    },
    {
      icon: FaBrain,
      title: "Problem Solving",
      description: "Turning complex challenges into simple solutions",
      color: "from-apple-teal to-apple-blue"
    },
    {
      icon: FaHeart,
      title: "User Impact",
      description: "Creating technology that makes a difference",
      color: "from-apple-red to-apple-orange"
    }
  ];

  return (
    <section 
      ref={ref}
      id="about" 
      className="min-h-screen flex flex-col items-center justify-center py-32 px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 right-1/3 w-80 h-80 bg-apple-blue rounded-full opacity-5 blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 12,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-apple-purple rounded-full opacity-5 blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [90, 0, 90],
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
          About <span className="text-gradient">Me</span>
        </h2>
        
      </motion.div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Personal Story */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8 h-full flex flex-col"
          >
            <motion.div
              variants={cardVariants}
              className="glass rounded-3xl p-8 border border-white/10 flex-1"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-apple-blue to-apple-purple rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">👨‍💻</span>
                  </div>
                  <h3 className="text-2xl font-sf-pro font-bold text-white">Why hire me?</h3>
                </div>
                
                <p className="text-lg text-gray-300 font-sf-pro leading-relaxed">
                  I’m a results-driven developer with a strong foundation in full-stack, cloud, ML, and IoT systems. 
                  Along with my technical expertise I bring strong problem-solving, 
                  collaboration, and communication skills. I’m proactive, adaptable, and committed to continuous learning always 
                  focused on building efficient, scalable, and impactful solutions that make a difference.
                </p>
                
                
              </div>
            </motion.div>

            {/* Core Values */}
            <motion.div variants={cardVariants} className="glass rounded-3xl p-8 border border-white/10 flex-1">
              <h3 className="text-2xl font-sf-pro font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-2xl">⭐</span>
                Core Values
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    className="group p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.05,
                      y: -5
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className={`w-10 h-10 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-3`}>
                      <value.icon className="text-white text-lg" />
                    </div>
                    <h4 className="font-sf-pro font-semibold text-white text-sm mb-1 group-hover:text-apple-blue transition-colors">
                      {value.title}
                    </h4>
                    <p className="text-gray-400 text-xs font-sf-pro leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Column: Education & Experience */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8 h-full flex flex-col"
          >
            {/* Education Card */}
            <motion.div 
              variants={cardVariants}
              className="glass rounded-3xl p-8 border border-white/10 group hover:border-apple-blue/30 transition-all duration-300 flex-1"
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 40px rgba(0, 122, 255, 0.1)"
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-apple-blue to-apple-indigo rounded-2xl flex items-center justify-center">
                  <FaGraduationCap className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-sf-pro font-bold text-white group-hover:text-apple-blue transition-colors">
                  Education
                </h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-sf-pro font-semibold text-white text-xl">
                    B.Tech, Computer Science and Engineering
                  </h4>
                  <p className="text-apple-blue font-sf-pro font-medium">
                    Shiv Nadar University, Chennai
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-gray-400 text-sm">
                    <span>CGPA: 7.8 / 10.0</span>
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    <span>2022 - 2026</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-white/10">
                  <h5 className="font-sf-pro font-medium text-apple-blue mb-3">Key Coursework</h5>
                  <div className="flex flex-wrap gap-2">
                    {["Data Structures", "Computer Networks", "Operating Systems", "DevOps", "Machine Learning", "Cybersecurity"].map((course, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-white/5 text-gray-300 text-xs font-sf-pro rounded-lg border border-white/10"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Experience Card */}
            <motion.div 
              variants={cardVariants}
              className="glass rounded-3xl p-8 border border-white/10 group hover:border-apple-purple/30 transition-all duration-300 flex-1"
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 40px rgba(175, 82, 222, 0.1)"
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-apple-purple to-apple-pink rounded-2xl flex items-center justify-center">
                  <FaBriefcase className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-sf-pro font-bold text-white group-hover:text-apple-purple transition-colors">
                  Experience
                </h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-sf-pro font-semibold text-white text-xl">
                    Autonomous Systems Intern
                  </h4>
                  <p className="text-apple-purple font-sf-pro font-medium">
                    National Institute of Technology (NIT), Trichy
                  </p>
                  <p className="text-gray-400 font-sf-pro text-sm mt-1">
                    May 2025 – June 2025
                  </p>
                </div>
                
                <div className="pt-4 border-t border-white/10">
                  <p className="text-gray-300 font-sf-pro leading-relaxed">
                    Developed and tested algorithms for autonomous navigation systems, contributing to a significant 
                    research project in the field of robotics and advancing the understanding of intelligent 
                    autonomous behavior.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Robotics", "Algorithm Design", "Navigation Systems", "Research"].map((skill, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-apple-purple/10 text-apple-purple text-xs font-sf-pro rounded-lg border border-apple-purple/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

  
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;