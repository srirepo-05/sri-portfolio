import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaPlay, FaCode } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import { useScrollAnimation } from './ScrollUtils';

const projectsData = [
  {
    title: "ExpenseWise",
    description: "A full-stack app that parses receipt images using Gemini Vision AI to automate expense tracking with intelligent categorization and analytics.",
    techStack: ["Gemini Vision AI", "Node.js", "React", "Tailwind CSS", "JWT"],
    githubLink: "https://github.com/srirepo-05/ExpenseWise",
    category: "AI/ML",
    status: "Completed",
    features: ["AI Receipt Parsing", "Expense Analytics", "JWT Authentication", "Real-time Dashboard"]
  },
  {
    title: "FloodCast",
    description: "An IoT and ML-based flood monitoring system using ESP8266, Random Forest algorithms, and a comprehensive MERN dashboard for real-time monitoring.",
    techStack: ["IoT", "ESP8266", "Machine Learning", "MQTT", "MERN"],
    githubLink: "https://github.com/srirepo-05/FloodNet",
    
    category: "IoT",
    status: "Completed",
    features: ["Real-time Monitoring", "ML Predictions", "IoT Integration", "Alert System"]
  },
  {
    title: "Sports Video Classification",
    description: "A motion-aware sports video data classification model using advanced computer vision techniques for accurate sport identification and analysis.",
    techStack: ["YOLOv5", "Mediapipe", "OpenCV", "Python"],
    githubLink: "https://github.com/srirepo-05/Sportsvidclassifier",
    category: "Computer Vision",
    status: "Completed",
    features: ["Motion Detection", "Video Classification", "Real-time Processing", "Multi-sport Support"]
  }
];

const Projects = () => {
  const { ref, isInView } = useScrollAnimation(0.1);
  const [hoveredCard, setHoveredCard] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 80, 
      opacity: 0,
      scale: 0.8,
      rotateX: 45
    },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: { 
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
        type: "spring",
        stiffness: 100
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section 
      ref={ref}
      id="projects" 
      className="min-h-screen flex flex-col items-center justify-center py-32 px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-apple-purple rounded-full opacity-5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-apple-blue rounded-full opacity-5 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl lg:text-6xl font-sf-pro font-bold text-white mb-6">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-xl text-gray-400 font-sf-pro max-w-2xl mx-auto leading-relaxed">
          Showcasing innovative solutions with practical applications
        </p>
      </motion.div>

      <motion.div 
        className="container mx-auto max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div 
              key={index}
              className="group relative"
              variants={cardVariants}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              <div className="glass rounded-3xl overflow-hidden border border-white/10 shadow-apple-xl backdrop-blur-xl relative">
                
                <div className="p-6 space-y-4">
                  {/* Category badge */}
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 bg-apple-blue/20 text-apple-blue text-xs font-sf-pro font-semibold rounded-full border border-apple-blue/30">
                      {project.category}
                    </span>
                    <motion.div
                      className="text-3xl"
                      animate={hoveredCard === index ? {
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0],
                      } : {}}
                      transition={{ duration: 0.6 }}
                    >
                      {project.imagePlaceholder}
                    </motion.div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl font-sf-pro font-bold text-white group-hover:text-apple-blue transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 font-sf-pro leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-sf-pro font-semibold text-apple-blue mb-2">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-1">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-apple-blue rounded-full"></div>
                          <span className="text-gray-300 text-xs font-sf-pro">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="mb-4">
                    <h4 className="text-sm font-sf-pro font-semibold text-apple-blue mb-2">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <motion.span 
                          key={i} 
                          className="px-2 py-1 bg-apple-blue/10 text-apple-blue text-xs font-sf-pro rounded-lg border border-apple-blue/20"
                          whileHover={{ 
                            backgroundColor: "rgba(0, 122, 255, 0.2)",
                            borderColor: "rgba(0, 122, 255, 0.4)"
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-6 py-3 bg-apple-blue text-white rounded-lg font-sf-pro font-medium text-sm hover:bg-apple-blue-dark transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaGithub className="text-sm" />
                    View Source Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;