import { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { AIVersion } from './components/AIVersion';
import { ProjectsPage } from './pages/ProjectsPage';
import { CaseStudyPage } from './pages/CaseStudyPage';

function HomePage() {
  const [selectedVersion, setSelectedVersion] = useState<'human' | 'ai'>('human');
  const aiVersionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedVersion === 'ai' && aiVersionRef.current) {
      // Scroll to AI version with smooth animation
      aiVersionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedVersion]);

  return (
    <div className="min-h-screen bg-neutral-50">
      <Hero 
        selectedVersion={selectedVersion} 
        onVersionChange={setSelectedVersion}
      />
      {selectedVersion === 'human' ? (
        <>
          <Projects />
          <Experience />
          <About />
          <Contact />
        </>
      ) : (
        <div ref={aiVersionRef}>
          <AIVersion />
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/mobile-banking" element={<CaseStudyPage />} />
      </Routes>
    </Router>
  );
}