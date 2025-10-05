import { useEffect, useRef, useState } from 'react';
import { useInView, motion } from 'framer-motion';

// Custom hook for intersection observer animations
export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    threshold, 
    once: false,
    margin: "-10% 0px -10% 0px"
  });

  return { ref, isInView };
};

// Custom hook for parallax effect
export const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * speed;
        setOffset(rate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { ref, offset };
};

// Apple-style section wrapper component
export const AppleSection = ({ 
  children, 
  id, 
  className = "", 
  background = "transparent",
  enableParallax = false,
  parallaxSpeed = 0.3
}) => {
  const { ref: scrollRef, isInView } = useScrollAnimation(0.2);
  const { ref: parallaxRef, offset } = useParallax(parallaxSpeed);

  const sectionRef = useRef(null);

  // Combine refs
  const combinedRef = (node) => {
    scrollRef.current = node;
    if (enableParallax) parallaxRef.current = node;
    sectionRef.current = node;
  };

  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.section
      ref={combinedRef}
      id={id}
      className={`relative min-h-screen ${className}`}
      style={{
        background,
        transform: enableParallax ? `translateY(${offset}px)` : undefined
      }}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.section>
  );
};

// Smooth scroll utility
export const smoothScrollTo = (elementId, offset = 0, duration = 800) => {
  const element = document.getElementById(elementId);
  if (element) {
    const targetPosition = element.offsetTop - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuart(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const easeInOutQuart = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t * t * t + b;
      t -= 2;
      return -c / 2 * (t * t * t * t - 2) + b;
    };

    requestAnimationFrame(animation);
  }
};

// Apple-style loading animation
export const AppleSpinner = ({ size = 40, color = "#007AFF" }) => (
  <div 
    className="relative inline-block"
    style={{ width: size, height: size }}
  >
    <div
      className="absolute inset-0 rounded-full border-2 border-transparent"
      style={{
        borderTopColor: color,
        animation: 'spin 1s linear infinite'
      }}
    />
    <style jsx>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

export default {
  useScrollAnimation,
  useParallax,
  AppleSection,
  smoothScrollTo,
  AppleSpinner
};