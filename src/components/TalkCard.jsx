// src/components/TalkCard.jsx
import React from 'react';

const TalkCard = ({ talk }) => (
  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm bg-white dark:bg-gray-800 transition-colors duration-300">
    <h3 className="text-lg font-semibold mb-1 text-accent">{talk.title}</h3>
    
    <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
      <strong>Event:</strong> {talk.event} ({talk.type})
    </p>
    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
      <strong>Location:</strong> {talk.location} | <strong>Date:</strong> {talk.date}
    </p>
    
    {talk.link && (
      <a 
        href={talk.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block p-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 text-sm"
      >
        View Slides/Poster
      </a>
    )}
  </div>
);

export default TalkCard;