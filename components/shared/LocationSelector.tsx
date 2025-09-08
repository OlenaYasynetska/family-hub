'use client';

import React, { useState } from 'react';
import { MapPinIcon, ChevronDownIcon, CheckIcon } from '@heroicons/react/24/outline';
import Icon from '../ui/Icon';
import { useToggle } from '../../hooks/useToggle';
import locationsData from '../../data/locations.json';

interface LocationSelectorProps {
  currentLocation?: string;
  onLocationChange?: (location: string) => void;
  className?: string;
}

export default function LocationSelector({ 
  currentLocation = 'Chișinău',
  onLocationChange,
  className = '' 
}: LocationSelectorProps) {
  const { isOpen, toggle, close } = useToggle(false);
  const [selectedLocation, setSelectedLocation] = useState(currentLocation);

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
    close();
    onLocationChange?.(location);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={toggle}
        className="flex items-center space-x-2 px-4 py-3 border border-purple-200 rounded-lg bg-white hover:border-purple-500 transition-colors min-w-[120px]"
      >
        <Icon size="md" color="purple">
          <MapPinIcon />
        </Icon>
        <span className="font-medium text-gray-700">{selectedLocation}</span>
        <Icon size="md" color="gray" className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDownIcon />
        </Icon>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="py-1">
            {locationsData.map((location) => (
              <button
                key={location}
                onClick={() => handleLocationSelect(location)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors flex items-center justify-between ${
                  selectedLocation === location ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                }`}
              >
                <span>{location}</span>
                {selectedLocation === location && (
                  <Icon size="sm" color="blue">
                    <CheckIcon />
                  </Icon>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
