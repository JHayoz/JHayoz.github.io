// src/components/PublicationCard.jsx
import React from 'react';

const PublicationCard = ({ pub }) => (
  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm bg-white dark:bg-gray-800 transition-colors duration-300">
    <h3 className="text-lg font-semibold mb-1 text-accent">{pub.title}</h3>
    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{pub.authors}</p>
    <p className="italic text-sm mb-4">{pub.reference}</p>
    
    <a 
      href={pub.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-block px-3 py-1 text-sm bg-accent hover:bg-opacity-90 text-white rounded-full transition-colors duration-200"
    >
      View ADS Entry
    </a>
  </div>
);

export default PublicationCard;