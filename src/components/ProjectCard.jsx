// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ project }) => (
  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm bg-white dark:bg-gray-800 transition-colors duration-300">
    <h3 className="text-lg font-semibold mb-2 text-accent">{project.name}</h3>
    
    {/* Optional Image Display */}
    {project.image && (
      <figure className="mb-4">
        {/* Assumes image is in the public folder */}
        
        <img 
          src={project.image} 
          alt={`Visual for ${project.name}`} 
          className="w-full h-auto rounded-md border border-gray-100 dark:border-gray-700" 
        />
        <figcaption className="text-xs text-gray-500 mt-1 italic">
            {project.caption}
        </figcaption>
      </figure>
    )}

    {/* Project Summary/Description */}
    <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">{project.summary}</p>
    
    {/* Link to Repository/Code */}
    {project.link && (
      <a 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block p-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
      >
        More info
      </a>
    )}
  </div>
);

export default ProjectCard;