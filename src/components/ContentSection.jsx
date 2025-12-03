// src/components/ContentSection.jsx
import React from 'react';

const ContentSection = ({ id, title, children }) => (
  <section id={id} className="mb-12 pt-8">
    <h2 className="text-3xl font-bold mb-6 border-b-2 border-accent inline-block pb-1">
      {title}
    </h2>
    <div className="space-y-4">
      {children}
    </div>
  </section>
);

export default ContentSection;