import  { useState, useEffect } from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection'; 
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
export default function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = () => {
      setTheme(mediaQuery.matches ? 'dark' : 'light');
    };

    // Set the initial theme
    handleChange();

    // Listen for changes
    mediaQuery.addEventListener('change', handleChange);

    // Cleanup listener on unmount
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  }, [theme]);

  const GlobalStyles = () => (
    <style>{`
      @keyframes fade-in-down { 0% { opacity: 0; transform: translateY(-20px); } 100% { opacity: 1; transform: translateY(0); } }
      @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
      
      .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
      .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }

      .custom-grid-bg {
        background-image:
          linear-gradient(to right, rgba(203, 213, 225, 0.6) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(203, 213, 225, 0.6) 1px, transparent 1px);
        background-size: 40px 40px;
      }
      .dark .custom-grid-bg {
        background-image:
          linear-gradient(to right, rgba(51, 65, 85, 0.2) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(51, 65, 85, 0.2) 1px, transparent 1px);
      }

      /* Email animation styles */
      @keyframes fly-across {
        from {
          transform: translateX(-50vw) translateY(20vh) rotate(-25deg);
          opacity: 0;
        }
        20%, 80% {
          opacity: 1;
        }
        to {
          transform: translateX(50vw) translateY(-20vh) rotate(15deg);
          opacity: 0;
        }
      }

      .email-animation {
        animation: fly-across 1.8s cubic-bezier(0.42, 0, 0.58, 1) forwards;
      }
    `}</style>
  );

  if (!theme) return null; // Prevents flash of unstyled content

  return (
    <div className="antialiased transition-colors duration-300 bg-white dark:bg-slate-900">
      <GlobalStyles />
      <Header theme={theme} />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
