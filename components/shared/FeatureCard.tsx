import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
}

export default function FeatureCard({ 
  title, 
  description, 
  icon, 
  className = '' 
}: FeatureCardProps) {
  return (
    <div className={`bg-white rounded-lg p-6 shadow-sm border border-gray-200 ${className}`}>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
          <span className="text-2xl">{icon}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}