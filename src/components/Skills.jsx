import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from './ScrollUtils';

// Skills data with Apple-inspired styling
const skillsData = [
  {
    category: "Programming Languages",
    icon: "💻",
    accentColor: "bg-apple-blue",
    skills: [
      { name: "Python" },
      { name: "JavaScript" },
      { name: "Java" },
      { name: "C++" },
      { name: "C" },
      { name: "SQL" },
      { name: "Embedded C" },
      { name: "HTML5" },
      { name: "CSS3" }
    ]
  },
  {
    category: "Frameworks & Libraries",
    icon: "🛠️",
    accentColor: "bg-apple-teal",
    skills: [
      { name: "React.js" },
      { name: "Node.js" },
      { name: "Tailwind CSS" },
      { name: "Flask" },
      { name: "OpenCV" },
      { name: "PyTorch" },
      { name: "TensorFlow" },
      { name: "Scikit-Learn" }
      
    ]
  },
  {
    category: "Tools & Platforms",
    icon: "⚙️",
    accentColor: "bg-apple-purple",
    skills: [
      { name: "Git" },
      { name: "Azure" },
      { name: "MongoDB" },
      { name: "Docker" },
      { name: "Power BI" },
      { name: "Tableau" },
      { name: "Postman" }
      
    ]
  }
];

const Skills = () => {
  const { ref, isInView } = useScrollAnimation(0.1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const skillBoxVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] // Apple's signature easing
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section 
      ref={ref}
      id="skills" 
      className="min-h-screen flex flex-col items-center justify-center py-32 px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Minimal Apple-style background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-apple-blue rounded-full opacity-[0.03] blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1], 
            x: [0, 30, 0], 
            y: [0, -20, 0]
          }}
          transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-apple-teal rounded-full opacity-[0.03] blur-3xl"
          animate={{ 
            scale: [1.1, 1, 1.1], 
            x: [0, -20, 0], 
            y: [0, 15, 0]
          }}
          transition={{ duration: 25, ease: "easeInOut", repeat: Infinity }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16 z-10"
      >
        <h2 className="text-5xl lg:text-6xl font-sf-pro font-bold text-white mb-6">
          My <span className="text-gradient">Tech Stack</span>
        </h2>
        <p className="text-xl text-gray-400 font-sf-pro max-w-2xl mx-auto leading-relaxed">
          A showcase of my technical capabilities and tools I use
        </p>
      </motion.div>

      <motion.div 
        className="container mx-auto max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {skillsData.map((category, categoryIndex) => (
          <motion.div 
            key={categoryIndex}
            className="mb-24"
            variants={categoryVariants}
          >
            {/* Apple-style category header */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="text-2xl opacity-70">{category.icon}</span>
                <h3 className="text-2xl lg:text-3xl font-sf-pro font-semibold text-white tracking-tight">
                  {category.category}
                </h3>
              </div>
              {/* Apple-style accent line */}
              <motion.div 
                className={`h-0.5 w-16 mx-auto rounded-full ${category.accentColor} opacity-80`}
                initial={{ width: 0 }}
                animate={isInView ? { width: 64 } : { width: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 + 0.3 }}
              ></motion.div>
            </motion.div>
            
            {/* Apple-style skills grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className="group relative"
                  variants={skillBoxVariants}
                  whileHover={{
                    y: -2,
                    transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }
                  }}
                  whileTap={{ 
                    scale: 0.98,
                    transition: { duration: 0.1 }
                  }}
                >
                  {/* Apple card design */}
                  <div className="relative backdrop-blur-xl bg-gray-200/[0.10] border border-white/[0.08] rounded-2xl p-6 h-20 flex items-center justify-center transition-all duration-300 ease-out group-hover:bg-gray-200/[0.20] group-hover:border-white/[0.12] group-hover:shadow-lg group-hover:shadow-black/[0.1]">
                    
                    {/* Subtle hover accent */}
                    <div className={`absolute inset-0 ${category.accentColor} opacity-0 group-hover:opacity-[0.02] rounded-2xl transition-opacity duration-300`}></div>
                    
                    {/* Skill name */}
                    <p className="relative z-10 text-white/90 font-sf-pro font-medium text-sm text-center tracking-wide group-hover:text-white transition-colors duration-200">
                      {skill.name}
                    </p>
                    
                    {/* Subtle corner highlight */}
                    <div className={`absolute top-3 right-3 w-1 h-1 ${category.accentColor} rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300`}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;