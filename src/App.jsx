import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact'; // 1. Import Contact
import Footer from './components/Footer';   // 2. Import Footer

function App() {
  return (
    <div className="bg-black min-h-screen relative overflow-x-hidden">
      {/* Apple-style gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 -z-10"></div>
      
      {/* Animated background particles */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full opacity-10 blur-3xl animate-pulse-delayed"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-teal-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
      </div>
      
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Achievements />
        <Contact /> {/* 3. Replace the last placeholder */}
      </main>
      <Footer /> {/* 4. Add the Footer outside the main tag */}
    </div>
  );
}


// Keep the placeholder Section component
const Section = ({ id, title, bgColor }) => (
  <section id={id} className={`min-h-screen flex items-center justify-center ${bgColor}`}>
    <h1 className="text-5xl font-bold text-white">{title}</h1>
  </section>
);

export default App;