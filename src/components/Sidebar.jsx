// src/components/Sidebar.jsx
import React from 'react';

const Sidebar = ({ sections, activeSection, setActiveSection, isSidebarOpen, setIsSidebarOpen, toggleTheme, theme }) => {
  const baseClasses = "fixed top-0 left-0 h-full w-64 p-6 shadow-xl z-40 bg-white dark:bg-gray-800 transition-transform duration-300";
  const mobileClasses = isSidebarOpen ? "translate-x-0" : "-translate-x-full";
  
  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsSidebarOpen(false); // Close menu on mobile after click
  };

  return (
    <div className={`${baseClasses} ${mobileClasses} md:translate-x-0`}>
      <h2 className="text-2xl font-bold mb-8 text-accent">Jean Hayoz</h2>
      
      <nav>
        <ul>
          {sections.map((section) => (
            <li key={section} className="mb-2">
              <button
                onClick={() => handleNavClick(section)}
                className={`w-full text-left py-2 px-3 rounded-md transition-all duration-200 
                  ${activeSection === section 
                    ? 'bg-gray-200 text-accent font-semibold dark:bg-accent dark:text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`
                }
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="absolute bottom-6 left-6">
         {/* Theme Toggle Button */}
         <button 
           onClick={toggleTheme}
           className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-md"
           title="Toggle Theme"
         >
           {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
         </button>
      </div>
      
    </div>
  );
};

export default Sidebar;