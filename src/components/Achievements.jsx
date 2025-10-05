import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { FaCertificate, FaTrophy, FaFlask, FaExternalLinkAlt } from 'react-icons/fa';

const achievementsData = [
  {
    icon: <FaCertificate />,
    text: "Certified in Microsoft Azure: Fundamentals",
    type: "certificate",
    certificateUrl: "https://drive.google.com/file/d/11dIKZnGt8R75pSTi4MqLRYUVxDnW_18a/view"
  },
  {
    icon: <FaCertificate />,
    text: "Certified in Full Stack Web Development (Udemy)",
    type: "certificate",
    certificateUrl: "https://drive.google.com/file/d/1DGZdnnDQLxBLwz2SElBrAd_SaJ_urR9m/view"
  },
  {
    icon: <FaTrophy />,
    text: "Top 15 Finalist in OxDay Hackathon",
    type: "achievement"
  },
  {
    icon: <FaFlask />,
    text: "Research in process of publication in Computer Vision and Robotics Proceedings of CVR 2025, Volume 5",
    type: "research"
  }
];

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: 'spring' } }
};

const Achievements = () => {
  return (
    <section id="achievements" className="min-h-screen flex flex-col items-center justify-center bg-gray-900 py-20 px-4">
      <SectionTitle>Achievements & Certifications</SectionTitle>
      
      <motion.ul 
        className="container max-w-2xl mx-auto space-y-4"
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {achievementsData.map((achievement, index) => (
          <motion.li 
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-lg flex items-center justify-between"
            variants={itemVariants}
          >
            <div className="flex items-center flex-1">
              <span className="text-cyan-400 text-2xl mr-4">{achievement.icon}</span>
              <span className="text-white font-medium">{achievement.text}</span>
            </div>
            
            {achievement.type === "certificate" && achievement.certificateUrl && (
              <motion.a
                href={achievement.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-medium rounded-lg flex items-center gap-2 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Certificate
                <FaExternalLinkAlt className="text-xs" />
              </motion.a>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Achievements;