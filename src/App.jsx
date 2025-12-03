import Profile from './components/Profile';
import ContentSection from './components/ContentSection';
import React, { useState,useContext } from 'react'; // Import useContext
import Sidebar from './components/Sidebar'; // We will create this
import PublicationCard from './components/PublicationCard';
import TalkCard from './components/TalkCard';
import ProjectCard from './components/ProjectCard';
import { publications } from './data/publications';
import { projects } from './data/projects';
import { talks } from './data/talks';
import { ThemeContext } from './context/ThemeContext'; // Import ThemeContext

const sections = ['about', 'publications', 'projects', 'talks', 'contact'];

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For mobile menu
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    // The main container needs to be min-h-screen
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900 text-primary-text dark:text-gray-100 transition-colors duration-300">

      {/* Sidebar Component (Fixed Left Column) */}
      <Sidebar 
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        toggleTheme={toggleTheme} // Pass toggle function
        theme={theme}
      />

      {/* Main Content Area (Scrollable Right Column) */}
      <main className="flex-grow p-4 md:p-8 ml-0 md:ml-64 transition-all duration-300">

        {/* Mobile Burger Menu Button */}
        <button 
            className="fixed top-4 left-4 md:hidden z-50 p-2 rounded-md bg-white dark:bg-gray-800 shadow-md"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
            {isSidebarOpen ? '✕' : '☰'}
        </button>

        <div className="max-w-4xl mx-auto">
          {/* Conditional Rendering: Only show the active section */}
          {activeSection === 'about' && <Profile />}
          {activeSection === 'publications' && (
            <ContentSection id="publications" title="Publications">
              <div className="space-y-6">
                  {publications.map((pub, index) => (
                      <PublicationCard key={index} pub={pub} />
                  ))}
              </div>
            </ContentSection>
          )}
          {activeSection === 'projects' && (
            <ContentSection id="projects" title="Research Projects">
              <div className="space-y-6">
                  {projects.map((project) => (
                      <ProjectCard key={project.id} project={project} /> // Use the new card here
                  ))}
              </div>
            </ContentSection>
          )}
          {activeSection === 'talks' && (
            <ContentSection id="talks" title="Talks and Posters">
              <div className="space-y-6">
                  {talks.map((talk, index) => (
                      <TalkCard key={index} talk={talk} />
                  ))}
              </div>
            </ContentSection>
          )}
        </div>

      </main>
    </div>
  );
}

export default App;