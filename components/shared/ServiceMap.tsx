import React from 'react';

interface ServiceMapProps {
  location: string;
  className?: string;
}

export default function ServiceMap({ location, className = '' }: ServiceMapProps) {
  return (
    <div className={`bg-gray-100 rounded-lg p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Location</h3>
      <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <div className="text-4xl mb-2">📍</div>
          <p className="text-sm">Map for {location}</p>
          <p className="text-xs mt-1">Interactive map will be displayed here</p>
        </div>
      </div>
    </div>
  );
}