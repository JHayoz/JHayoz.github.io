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
  </div>
);

export default TalkCard;