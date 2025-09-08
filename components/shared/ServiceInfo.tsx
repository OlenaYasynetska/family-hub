import React from 'react';
import { Service } from '@/types';

interface ServiceInfoProps {
  service: Service;
  className?: string;
}

export default function ServiceInfo({ service, className = '' }: ServiceInfoProps) {
  return (
    <div className={`bg-white rounded-lg p-6 shadow-sm ${className}`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h2>
          <p className="text-gray-600 mb-4">{service.description}</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-purple-600">${service.price}</div>
          <div className="text-sm text-gray-500">per hour</div>
        </div>
      </div>
      
      <div className="flex items-center mb-4">
        <div className="flex items-center mr-4">
          <span className="text-yellow-400">★</span>
          <span className="ml-1 text-gray-700">{service.rating}</span>
        </div>
        <span className="text-gray-500">•</span>
        <span className="ml-2 text-gray-700">{service.location}</span>
      </div>
      
      <div className="mb-4">
        <h3 className="font-semibold text-gray-800 mb-2">Provider:</h3>
        <p className="text-gray-600">{service.provider}</p>
      </div>
      
      <div className="mb-6">
        <h3 className="font-semibold text-gray-800 mb-2">Features:</h3>
        <div className="flex flex-wrap gap-2">
          {service.features.map((feature, index) => (
            <span 
              key={index}
              className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
      
      <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
        Book Now
      </button>
    </div>
  );
}