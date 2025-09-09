import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

export default function SectionHeader({ 
  title, 
  subtitle, 
  className = '' 
}: SectionHeaderProps) {
  return (
    <div className={`text-center mb-8 ${className}`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        {title}
      </h2>
      <p className="text-gray-600">
        {subtitle}
      </p>
    </div>
  );
}
