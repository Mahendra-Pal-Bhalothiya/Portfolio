import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import CanvasBackground from './components/CanvasBackground';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen relative font-sans transition-colors duration-300 ${
      darkMode ? 'bg-[#060913] text-slate-100' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Interactive Constellation / Particle Canvas */}
      <CanvasBackground darkMode={darkMode} />

      {/* Navigation */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onOpenResume={() => setResumeModalOpen(true)} 
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero 
          onOpenResume={() => setResumeModalOpen(true)} 
          darkMode={darkMode} 
        />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeModalOpen(true)} />

      {/* Interactive Resume Modal */}
      <ResumeModal 
        isOpen={resumeModalOpen} 
        onClose={() => setResumeModalOpen(false)} 
      />
    </div>
  );
}

export default App;
